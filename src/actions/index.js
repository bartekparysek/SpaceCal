import spaceX from '../apis/spaceX';

export const fetchUpcomingLaunches = () => async dispatch => {
   const response = await spaceX.get('/launches/upcoming');

   dispatch({ type: 'FETCH_NEXT', payload: response.data });
};

export const goToFlightDetails = (id) => dispatch => {

   dispatch({ type: 'GO_DETAILS', payload: id });
};