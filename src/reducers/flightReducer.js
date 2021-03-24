export default (state = [], action) => {
   switch (action.type) {
      case 'FETCH_NEXT':
         return [...state, action.payload];
      case 'FETCH_LAUNCH':
         return [...state, action.payload];
      case 'FETCH_LAUNCHPAD':
         return [...state, action.payload];
      default:
         return state;
   }
};
