"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _loginPage = _interopRequireDefault(require("../pages/login/login-page"));

var _homePage = _interopRequireDefault(require("../pages/home/home-page"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = [{
  path: '/home',
  exact: true,
  component: _homePage.default
}, {
  path: '/login',
  exact: true,
  component: _loginPage.default
}];
exports.default = _default;