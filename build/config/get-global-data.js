"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* global window */
var getGlobalData = function getGlobalData() {
  return {
    appBasePath: window.appBasePath,
    apiBasePath: window.apiBasePath,
    apiLoginPath: window.apiLoginPath,
    apiLogoutPath: window.apiLogoutPath
  };
};

var _default = getGlobalData;
exports.default = _default;