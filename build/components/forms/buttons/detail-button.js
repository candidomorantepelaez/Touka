"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntl = require("react-intl");

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DetailButton = function DetailButton(_ref) {
  var path = _ref.path,
      intl = _ref.intl;
  return _react.default.createElement(_reactRouterDom.Link, {
    className: "btn btn-secondary boton-tarjeta",
    to: path
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "core.detail"
  }));
};

DetailButton.propTypes = {
  path: _propTypes.default.string
};
var _default = DetailButton;
exports.default = _default;