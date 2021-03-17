
const INITIAL_STATE = {
   isSignedIn: null,
   userEmail: null,
   error: null
}

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case 'SIGN_IN':
         return { ...state, isSignedIn: true, userEmail: action.payload }
      case 'SIGN_OUT':
         return { ...state, isSignedIn: false, userEmail: null }
      default:
         return state;
   }
};
