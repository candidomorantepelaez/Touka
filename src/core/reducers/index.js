import { combineReducers } from 'redux';
import alerts from "./alert-reducer";
import onLogin from "./login-reducer";

export default combineReducers({
  alerts,
  onLogin,
});