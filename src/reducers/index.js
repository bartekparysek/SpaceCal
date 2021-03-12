import { combineReducers } from 'redux';
import flightReducer from './flightReducer';
import authReducer from './authReducer';

export default combineReducers({
   flights: flightReducer,
   auth: authReducer
});