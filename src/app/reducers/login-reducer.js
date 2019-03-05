import { requestType, successType, failureType } from 'fredux'
import { combineReducers } from 'redux'
import { ON_LOGIN, ON_SAVE_USER_FROM_COOKIE, ON_LOGOUT } from 'actions/login-action'


const initialState = {
  auth: {
    logginIn: false,
    currentUser: {},
  },
}

export function logginIn(state = initialState.auth.logginIn, { type }) {
  switch (type) {
    case requestType(ON_LOGIN):
      return true
    case successType(ON_LOGIN):
      return false
    case failureType(ON_LOGIN):
      return false
    default:
      return state
  }
}

export function currentUser(state = initialState.auth.currentUser, { type, payload }) {
  switch (type) {
    case requestType(ON_LOGIN):
      return {}
    case successType(ON_LOGIN):
      return payload.response.user
    case failureType(ON_LOGIN):
      return {}
    case ON_SAVE_USER_FROM_COOKIE:
      return payload
    case successType(ON_LOGOUT):
      return {}
    default:
      return state
  }
}

const getAuthState = state => state.core.auth

export const getlogginIn = state => getAuthState(state).logginIn
export const getCurrentUser = state => getAuthState(state).currentUser

export default combineReducers({
  logginIn,
  currentUser,
})
