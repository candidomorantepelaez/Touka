import { combineReducers } from 'redux'
import alerts from 'app/reducers/alert-reducer'
import onLogin from 'app/reducers/login-reducer'


export default combineReducers({
  alerts,
  onLogin,
})
