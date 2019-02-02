"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntl = require("react-intl");

var _reactRouterDom = require("react-router-dom");

var _md = require("react-icons/md");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DetailActionIcon = function DetailActionIcon(_ref) {
  var path = _ref.path,
      intl = _ref.intl;
  return _react.default.createElement(_reactRouterDom.Link, {
    to: path,
    "data-toggle": "tooltip",
    "data-placement": "top",
    title: intl.formatMessage({
      id: "core.detail"
    })
  }, _react.default.createElement(_md.MdAccountBox, {
    className: "icono"
  }));
};

DetailActionIcon.propTypes = {
  path: _propTypes.default.string,
  intl: _reactIntl.intlShape.isRequired
};

var _default = (0, _reactIntl.injectIntl)(DetailActionIcon);

exports.default = _default;