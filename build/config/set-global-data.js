"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* global window */
var setGlobalData = function setGlobalData(config) {
  window.appBasePath = config.appBasePath;
  window.apiPath = config.apiPath;
  window.loginPath = config.loginPath;
  window.logoutPath = config.logoutPath;
};

var _default = setGlobalData;
exports.default = _default;