"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeMessage = exports.openMessage = exports.CLOSE_MESSAGE = exports.OPEN_MESSAGE = void 0;
var OPEN_MESSAGE = 'core/openMessage';
exports.OPEN_MESSAGE = OPEN_MESSAGE;
var CLOSE_MESSAGE = 'core/closeMessage';
exports.CLOSE_MESSAGE = CLOSE_MESSAGE;

var openMessage = function openMessage(data) {
  return {
    type: OPEN_MESSAGE,
    payload: data
  };
};

exports.openMessage = openMessage;

var closeMessage = function closeMessage(data) {
  return {
    type: CLOSE_MESSAGE,
    payload: data
  };
};

exports.closeMessage = closeMessage;