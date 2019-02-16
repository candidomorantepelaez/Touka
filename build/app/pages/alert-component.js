"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntl = require("react-intl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AlertComponent = function AlertComponent(_ref) {
  var type = _ref.type,
      message = _ref.message;
  return _react.default.createElement("div", {
    className: "alert-".concat(type)
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: message
  }), _react.default.createElement("button", {
    type: "button"
  }, _react.default.createElement("span", null, "\xD7")));
};

AlertComponent.propTypes = {
  type: _propTypes.default.string.isRequired,
  message: _propTypes.default.string.isRequired
};
var _default = AlertComponent;
exports.default = _default;