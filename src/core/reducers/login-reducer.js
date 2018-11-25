import { requestType, successType, failureType } from "fredux";
import { combineReducers } from 'redux';
import { ON_LOGIN, ON_SAVE_USER_FROM_COOKIE, ON_LOGOUT } from "core/actions/login-action";

const initialState = {
  onLogin: {
    logging: false,
    currentUser: {},
  },
};

export function logging(state = initialState.onLogin.logging, { type }) {
  switch(type){
    case requestType(ON_LOGIN):
      return true;
    case successType(ON_LOGIN):
      return false;
    case failureType(ON_LOGIN):
      return false;
    default:
      return state;
  }
}

export function currentUser(state=initialState.onLogin.currentUser, { type, payload }) {
  switch(type){
    case requestType(ON_LOGIN):
      return {};
    case successType(ON_LOGIN):
      return payload.response.user;
    case failureType(ON_LOGIN):
      return {};
    case ON_SAVE_USER_FROM_COOKIE:
      return payload;
    case successType(ON_LOGOUT):
      return {};
    default:
      return state;
  }
}

const getOnLoginState = (state) => state.core.onLogin;

export const getLogging = state => getOnLoginState(state).logging;
export const getCurrentUser = state => getOnLoginState(state).currentUser;

export default combineReducers({
  logging,
  currentUser,
});