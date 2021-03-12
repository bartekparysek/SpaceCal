const INITIAL_STATE = {
   isSignedIn: null,
   error: null,
}

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case 'AUTH_START':
         return { ...state }
      case 'AUTH_SUCCES':
         return { ...state, isSignedIn: true }
      case 'AUTH_FAIL':
         return { ...state, error: action.payload }
      case 'AUTH_END':
         return { ...state }
      case 'LOG_OUT':
         return { ...state, isSignedIn: false }
      case 'LOG_OUT_FAIL':
         return { ...state, error: action.payload }
      case 'LOG_OUT_END':
         return { ...state }
      default:
         return state;
   }
};
