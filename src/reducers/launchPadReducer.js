import _ from 'lodash';
export default (state = {}, action) => {
   switch (action.type) {
      case 'FETCH_LAUNCHPAD':
         return { ...state, [action.payload.id]: action.payload };
      case 'FETCH_LAUNCHPADS':
         return { ...state, ..._.mapKeys(action.payload, 'id') }
      default:
         return state;
   }
}