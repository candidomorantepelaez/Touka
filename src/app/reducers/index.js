import { combineReducers } from 'redux'
import alerts from 'app/reducers/alert-reducer'
import auth from 'app/reducers/login-reducer'


export default combineReducers({
  alerts,
  auth,
})
