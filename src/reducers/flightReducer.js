export default (state = [], action) => {
   switch (action.type) {
      case 'FETCH_NEXT':
         return [...state, action.payload];
      case 'GO_DETAILS':
         return [...state];
      default:
         return state;
   }
};
