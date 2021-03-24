import spaceX from '../apis/spaceX';

export const fetchUpcomingLaunches = () => async dispatch => {
   const response = await spaceX.get('/launches/upcoming');

   dispatch({ type: 'FETCH_NEXT', payload: response.data });
};

export const fetchLaunch = (id) => async dispatch => {
   const response = await spaceX.get(`/launches/${id}`);

   dispatch({ type: 'FETCH_LAUNCH', payload: response.data });
};

export const fetchLaunchPad = (id) => async dispatch => {
   const response = await spaceX.get(`/launchpads/${id}`);

   dispatch({ type: 'FETCH_LAUNCHPAD', payload: response.data });
};

export const fetchLaunchPads = () => async dispatch => {
   const response = await spaceX.get(`/launchpads`);

   dispatch({ type: 'FETCH_LAUNCHPADS', payload: response.data });
};

export const signIn = (userEmail) => dispatch => {
   dispatch({ type: 'SIGN_IN', payload: userEmail });
}

export const signOut = () => dispatch => {
   dispatch({ type: 'SIGN_OUT' });
};