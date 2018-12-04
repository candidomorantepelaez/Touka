"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logging = logging;
exports.currentUser = currentUser;
exports.default = exports.getCurrentUser = exports.getLogging = void 0;

var _fredux = require("fredux");

var _redux = require("redux");

var _loginAction = require("../actions/login-action");

var initialState = {
  onLogin: {
    logging: false,
    currentUser: {}
  }
};

function logging() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.onLogin.logging;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type;

  switch (type) {
    case (0, _fredux.requestType)(_loginAction.ON_LOGIN):
      return true;

    case (0, _fredux.successType)(_loginAction.ON_LOGIN):
      return false;

    case (0, _fredux.failureType)(_loginAction.ON_LOGIN):
      return false;

    default:
      return state;
  }
}

function currentUser() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.onLogin.currentUser;

  var _ref2 = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref2.type,
      payload = _ref2.payload;

  switch (type) {
    case (0, _fredux.requestType)(_loginAction.ON_LOGIN):
      return {};

    case (0, _fredux.successType)(_loginAction.ON_LOGIN):
      return payload.response.user;

    case (0, _fredux.failureType)(_loginAction.ON_LOGIN):
      return {};

    case _loginAction.ON_SAVE_USER_FROM_COOKIE:
      return payload;

    case (0, _fredux.successType)(_loginAction.ON_LOGOUT):
      return {};

    default:
      return state;
  }
}

var getOnLoginState = function getOnLoginState(state) {
  return state.core.onLogin;
};

var getLogging = function getLogging(state) {
  return getOnLoginState(state).logging;
};

exports.getLogging = getLogging;

var getCurrentUser = function getCurrentUser(state) {
  return getOnLoginState(state).currentUser;
};

exports.getCurrentUser = getCurrentUser;

var _default = (0, _redux.combineReducers)({
  logging: logging,
  currentUser: currentUser
});

exports.default = _default;