"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* global window */
var setGlobalData = function setGlobalData(config) {
  window.appBasePath = config.appBasePath;
  window.apiBasePath = config.apiBasePath;
  window.apiLoginPath = config.apiLoginPath;
  window.apiLogoutPath = config.apiLogoutPath;
};

var _default = setGlobalData;
exports.default = _default;