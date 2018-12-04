import { combineReducers } from "redux";
import alerts from "reducers/alert-reducer";
import onLogin from "reducers/login-reducer";

export default combineReducers({
  alerts,
  onLogin,
});