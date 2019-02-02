"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

var _history = _interopRequireDefault(require("../../../routes/history"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BackButton = function BackButton() {
  return _react.default.createElement("button", {
    type: "button",
    className: "btn btn-secondary boton-tarjeta",
    onClick: function onClick() {
      return _history.default.goBack();
    }
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "core.back"
  }));
};

var _default = BackButton;
exports.default = _default;