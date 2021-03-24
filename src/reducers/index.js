import { combineReducers } from 'redux';
import flightReducer from './flightReducer';
import authReducer from './authReducer';
import launchPadReducer from './launchPadReducer';

export default combineReducers({
   flights: flightReducer,
   launchpads: launchPadReducer,
   auth: authReducer
});