"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _module = _interopRequireDefault(require("../app/module"));

var _noMatchPage = _interopRequireDefault(require("../app/pages/no-match-page"));

var _menuPrincipal = _interopRequireDefault(require("../components/menus/menu-principal"));

var _loginPage = _interopRequireDefault(require("../app/pages/login-page"));

var _logoutPage = _interopRequireDefault(require("../app/pages/logout-page"));

var _homePage = _interopRequireDefault(require("../app/pages/home-page"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialConfig = {
  config: {
    apibasePath: 'http://localhost:8080',
    apiLoginPath: '/login',
    apiLogoutPath: '/logout',
    appBasePath: '/',
    appLoginPath: '/login',
    appLogoutPath: '/logout',
    defaultLanguage: 'en',
    languages: ['es', 'en'],
    homeComponent: _homePage.default,
    loginComponent: _loginPage.default,
    logoutComponent: _logoutPage.default,
    noMatchComponent: _noMatchPage.default,
    menuComponent: _menuPrincipal.default
  },
  modules: [_module.default]
};
var _default = initialConfig;
exports.default = _default;