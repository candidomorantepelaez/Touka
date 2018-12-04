"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntl = require("react-intl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Alert = function Alert(props) {
  return _react.default.createElement("div", {
    className: "alert alert-".concat(props.type, " alert-dismissible fade show"),
    role: "alert"
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: props.message
  }), _react.default.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "alert",
    "aria-label": "Close"
  }, _react.default.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7")));
};

Alert.propTypes = {
  type: _propTypes.default.string,
  message: _propTypes.default.string,
  id: _propTypes.default.number
};
var _default = Alert;
exports.default = _default;