import spaceX from '../apis/spaceX';

export const fetchUpcomingLaunches = () => async dispatch => {
   const response = await spaceX.get('/launches/upcoming');

   dispatch({ type: 'FETCH_NEXT', payload: response.data });
};

export const fetchLaunch = (id) => async dispatch => {
   const response = await spaceX.get(`/launches/${id}`)

   dispatch({ type: 'FETCH_LAUNCH', payload: response.data });
};

export const goToFlightDetails = (id) => dispatch => {

   dispatch({ type: 'GO_DETAILS', payload: id });
};

export const trySignIn = () => dispatch => {
   window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
         client_id: '1088925987137-p6rup8skhqjag9n248i32sd3374b00dh.apps.googleusercontent.com',
         scope: 'https://www.googleapis.com/auth/calendar.events'
      });
      dispatch({ type: 'AUTH_START' });
      try {
         window.gapi.auth2.getAuthInstance().signIn();
         dispatch({ type: 'AUTH_SUCCES' });
      } catch (err) {
         dispatch({ type: 'AUTH_FAIL', payload: err.message });
      }
      dispatch({ type: 'AUTH_END', });
   });
}

export const trySignOut = () => dispatch => {
   try {
      window.gapi.auth2.getAuthInstance().signOut();
      dispatch({ type: 'LOG_OUT' });
   } catch (err) {
      dispatch({ type: 'LOG_OUT_FAIL', payload: err.message });
   }
   dispatch({ type: 'LOG_OUT_END' })
};
