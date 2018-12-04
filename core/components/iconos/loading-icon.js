"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _fa = require("react-icons/fa");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoadingIcon = function LoadingIcon() {
  return _react.default.createElement(_fa.FaSpinner, {
    className: "icono"
  });
};

var _default = LoadingIcon;
exports.default = _default;