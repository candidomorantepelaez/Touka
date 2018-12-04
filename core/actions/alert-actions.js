"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeAlert = exports.openAlert = exports.CLOSE_ALERT = exports.OPEN_ALERT = void 0;
var OPEN_ALERT = "core/openAlert";
exports.OPEN_ALERT = OPEN_ALERT;
var CLOSE_ALERT = "core/closeAlert";
exports.CLOSE_ALERT = CLOSE_ALERT;

var openAlert = function openAlert(data) {
  return {
    type: OPEN_ALERT,
    payload: data
  };
};

exports.openAlert = openAlert;

var closeAlert = function closeAlert(data) {
  return {
    type: CLOSE_ALERT,
    payload: data
  };
};

exports.closeAlert = closeAlert;