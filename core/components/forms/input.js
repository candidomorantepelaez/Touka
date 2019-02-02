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

var Input = function Input(_ref) {
  var className = _ref.className,
      name = _ref.name,
      label = _ref.label,
      helpText = _ref.helpText,
      intl = _ref.intl,
      error = _ref.error,
      type = _ref.type,
      value = _ref.value,
      placeholder = _ref.placeholder,
      _onChange = _ref.onChange,
      _onBlur = _ref.onBlur,
      required = _ref.required,
      readOnly = _ref.readOnly,
      disabled = _ref.disabled;
  return _react.default.createElement("div", {
    className: "form-group ".concat(className)
  }, _react.default.createElement("label", {
    htmlFor: name,
    className: "col-form-label"
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: label
  }), helpText ? _react.default.createElement("span", {
    trigger: "click",
    "data-toggle": "tooltip",
    "data-placement": "top",
    title: intl.formatMessage({
      id: helpText
    })
  }, _react.default.createElement(_fa.FaInfo, {
    className: "icono"
  })) : null, _react.default.createElement("input", {
    autoComplete: "false",
    className: "form-control Form-input-control ".concat(error && error.message ? 'invalid-input' : ''),
    id: name,
    type: type,
    value: value,
    placeholder: placeholder,
    name: name,
    onChange: function onChange(newValue) {
      return _onChange(newValue);
    },
    onBlur: function onBlur(newValue) {
      return _onBlur(newValue);
    },
    required: required,
    readOnly: readOnly,
    disabled: disabled
  }), error ? _react.default.createElement("div", {
    className: "invalid-input"
  }, _react.default.createElement("ul", null, (0, _ramda.addIndex)(_ramda.map)(function (obj, key) {
    return _react.default.createElement("li", {
      key: key
    }, _react.default.createElement(_reactIntl.FormattedMessage, {
      id: obj.message
    }));
  }, (0, _ramda.values)(error)))) : null));
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
  error: _propTypes.default.shape({}),
  placeholder: _propTypes.default.string,
  onChange: _propTypes.default.func.isRequired,
  onBlur: _propTypes.default.func.isRequired,
  intl: _reactIntl.intlShape.isRequired
};
Input.defaultProps = {
  name: '',
  label: '',
  helpText: '',
  type: 'text',
  className: '',
  value: '',
  required: false,
  readOnly: false,
  disabled: false,
  error: {},
  placeholder: ''
};

var _default = (0, _reactIntl.injectIntl)(Input);

exports.default = _default;