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

/* eslint-disable */
var Select = function Select(_ref) {
  var className = _ref.className,
      name = _ref.name,
      label = _ref.label,
      helpText = _ref.helpText,
      intl = _ref.intl,
      error = _ref.error,
      value = _ref.value,
      _onChange = _ref.onChange,
      _onBlur = _ref.onBlur,
      required = _ref.required,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      options = _ref.options;
  return _react.default.createElement("div", {
    className: "form-group ".concat(className)
  }, _react.default.createElement("label", {
    className: "col-form-label",
    htmlFor: name
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
  })) : null, _react.default.createElement("select", {
    className: "form-control Form-input-control ".concat(error && error.message ? 'invalid-input' : ''),
    id: name,
    value: value,
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
  }, (0, _ramda.addIndex)(_ramda.map)(function (option, idx) {
    return _react.default.createElement("option", {
      key: idx,
      value: option.value
    }, option.label);
  }, options)), error ? _react.default.createElement("div", {
    className: "invalid-input"
  }, _react.default.createElement("ul", null, (0, _ramda.addIndex)(_ramda.map)(function (obj, idx) {
    return _react.default.createElement("li", {
      key: idx
    }, _react.default.createElement(_reactIntl.FormattedMessage, {
      id: obj.message
    }));
  }, (0, _ramda.values)(error)))) : null));
};

Select.propTypes = {
  name: _propTypes.default.string,
  label: _propTypes.default.string,
  helpText: _propTypes.default.string,
  className: _propTypes.default.string,
  options: _propTypes.default.arrayOf({}),
  value: _propTypes.default.arrayOf({}),
  required: _propTypes.default.bool,
  readOnly: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  error: _propTypes.default.shape({}),
  onChange: _propTypes.default.func.isRequired,
  onBlur: _propTypes.default.func.isRequired,
  intl: _reactIntl.intlShape.isRequired
};
Select.defaultProps = {
  name: '',
  label: '',
  helpText: '',
  className: '',
  options: [],
  value: '',
  required: false,
  readOnly: false,
  disabled: false,
  error: false
};

var _default = (0, _reactIntl.injectIntl)(Select);

exports.default = _default;