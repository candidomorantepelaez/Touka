import { PROMISE_CALL } from 'fredux'
import api from 'api/login-api'


export const ON_LOGIN = 'core/login'
export const ON_LOGOUT = 'core/logout'
export const ON_SAVE_USER_FROM_COOKIE = 'core/saveCurrentUser'

export const login = value => ({
  type: ON_LOGIN,
  [PROMISE_CALL]: () => api.login(value),
})

export const logout = () => ({
  type: ON_LOGOUT,
  [PROMISE_CALL]: () => api.logout(),
})

export const saveCurrentUser = value => ({
  type: ON_SAVE_USER_FROM_COOKIE,
  payload: value,
})

export default {
  ON_LOGIN,
  ON_LOGOUT,
  ON_SAVE_USER_FROM_COOKIE,
  login,
  logout,
  saveCurrentUser,
}
