"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveCurrentUser = exports.logout = exports.credentials = exports.ON_SAVE_USER_FROM_COOKIE = exports.ON_LOGOUT = exports.ON_LOGIN = void 0;

var _fredux = require("fredux");

var _loginApi = _interopRequireDefault(require("../api/login-api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ON_LOGIN = "core/credentials";
exports.ON_LOGIN = ON_LOGIN;
var ON_LOGOUT = "core/logout";
exports.ON_LOGOUT = ON_LOGOUT;
var ON_SAVE_USER_FROM_COOKIE = "core/saveCurrentUser";
exports.ON_SAVE_USER_FROM_COOKIE = ON_SAVE_USER_FROM_COOKIE;

var credentials = function credentials(value) {
  return _defineProperty({
    type: ON_LOGIN
  }, _fredux.PROMISE_CALL, function () {
    return _loginApi.default.credentials(value);
  });
};

exports.credentials = credentials;

var logout = function logout(value) {
  return _defineProperty({
    type: ON_LOGOUT
  }, _fredux.PROMISE_CALL, function () {
    return _loginApi.default.logout();
  });
};

exports.logout = logout;

var saveCurrentUser = function saveCurrentUser(value) {
  return {
    type: ON_SAVE_USER_FROM_COOKIE,
    payload: value
  };
};

exports.saveCurrentUser = saveCurrentUser;