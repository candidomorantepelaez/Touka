"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var crashReporter = function crashReporter(store) {
  return function (next) {
    return function (action) {
      try {
        return next(action);
      } catch (err) {
        console.error('Caught an exception!', err);
        throw err;
      }
    };
  };
};

var _default = crashReporter;
exports.default = _default;