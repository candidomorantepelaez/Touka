"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _loginPage = _interopRequireDefault(require("pages/login-page"));

var _homePage = _interopRequireDefault(require("pages/home-page"));

var _logoutPage = _interopRequireDefault(require("pages/logout-page"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = [{
  path: '/',
  exact: true,
  component: _homePage.default
}, {
  path: '/login',
  exact: true,
  component: _loginPage.default
}, {
  path: '/logout',
  exact: true,
  component: _logoutPage.default
}];
exports.default = _default;