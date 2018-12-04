"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

var _fa = require("react-icons/fa");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ramda = require("ramda");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = function Input(props) {
  return _react.default.createElement("div", {
    className: "form-group ".concat(props.className)
  }, _react.default.createElement("label", {
    className: "col-form-label",
    htmlFor: props.name
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: props.label
  }), props.helpText ? _react.default.createElement("span", {
    trigger: "click",
    "data-toggle": "tooltip",
    "data-placement": "top",
    title: props.intl.formatMessage({
      id: props.helpText
    })
  }, _react.default.createElement(_fa.FaInfo, {
    className: "icono"
  })) : null), _react.default.createElement("input", {
    autoComplete: "false",
    className: "form-control Form-input-control ".concat(props.error && props.error.message ? "invalid-input" : ""),
    id: props.name,
    type: props.type,
    value: props.value,
    placeholder: props.placeholder,
    name: props.name,
    onChange: function onChange(value) {
      return props.onChange(value);
    },
    onBlur: function onBlur(value) {
      return props.onBlur(value);
    },
    required: props.required,
    readOnly: props.readOnly,
    disabled: props.disabled
  }), props.error ? _react.default.createElement("div", {
    className: "invalid-input"
  }, _react.default.createElement("ul", null, (0, _ramda.addIndex)(_ramda.map)(function (obj, key) {
    return _react.default.createElement("li", {
      key: key
    }, _react.default.createElement(_reactIntl.FormattedMessage, {
      id: obj.message
    }));
  }, (0, _ramda.values)(props.error)))) : null);
};

Input.propTypes = {
  name: _propTypes.default.string,
  label: _propTypes.default.string,
  helpText: _propTypes.default.string,
  type: _propTypes.default.string,
  className: _propTypes.default.string,
  value: _propTypes.default.string,
  required: _propTypes.default.bool,
  readOnly: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  error: _propTypes.default.object,
  onChange: _propTypes.default.func.isRequired,
  onBlur: _propTypes.default.func.isRequired,
  intl: _reactIntl.intlShape.isRequired
};

var _default = (0, _reactIntl.injectIntl)(Input);

exports.default = _default;