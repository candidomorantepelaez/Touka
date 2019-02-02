"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var isAuthorizated = function isAuthorizated(currentUser, roles) {
  if ((0, _ramda.isNil)(currentUser.role)) {
    return false;
  }

  if ((0, _ramda.isNil)(roles)) {
    return true;
  }

  if ((0, _ramda.is)(Array, roles)) {
    return (0, _ramda.contains)(currentUser.role, roles);
  }

  if ((0, _ramda.is)(String, roles)) {
    return roles === currentUser.role;
  }

  return false;
};

var _default = isAuthorizated;
exports.default = _default;