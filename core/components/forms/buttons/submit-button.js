"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

var _ramda = require("ramda");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultLabel = (0, _ramda.defaultTo)("core.save");

var SubmitButton = function SubmitButton(props) {
  return _react.default.createElement("button", {
    className: "btn btn-primary " + props.className,
    type: "submit"
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: defaultLabel(props.label)
  }));
};

var _default = SubmitButton;
exports.default = _default;