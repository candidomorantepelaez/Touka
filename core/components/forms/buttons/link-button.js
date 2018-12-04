"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _reactIntl = require("react-intl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LinkButtonBlock = function LinkButtonBlock(_ref) {
  var path = _ref.path,
      text = _ref.text;
  return _react.default.createElement(_reactRouterDom.Link, {
    className: "btn btn-primary btn-lg btn-block",
    to: path
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: text
  }));
};

LinkButtonBlock.propTypes = {
  path: _propTypes.default.string,
  text: _propTypes.default.string
};
var _default = LinkButtonBlock;
exports.default = _default;