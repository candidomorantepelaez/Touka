"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var mergeModules = function mergeModules(userModules, appModules) {
  if ((0, _ramda.isNil)(userModules) || !(0, _ramda.is)(Array, userModules)) {
    return appModules;
  }

  var coreModule = (0, _ramda.find)(function (module) {
    return module.key === 'core';
  }, userModules);

  if ((0, _ramda.isNil)(coreModule)) {
    return (0, _ramda.append)(userModules, appModules);
  }

  return userModules;
};

var _default = mergeModules;
exports.default = _default;