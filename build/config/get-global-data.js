"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* global window */
var getGlobalData = {
  appBasePath: window.appBasePath,
  apiPath: window.apiPath,
  loginPath: window.loginPath,
  logoutPath: window.logoutPath
};
var _default = getGlobalData;
exports.default = _default;