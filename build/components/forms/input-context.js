"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ramda = require("ramda");

var _Input = _interopRequireDefault(require("@material-ui/core/Input"));

var _formContext = _interopRequireDefault(require("../../contexts/form-context"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MyInput = function MyInput(_ref) {
  var className = _ref.className,
      name = _ref.name,
      autoFocus = _ref.autoFocus,
      disabled = _ref.disabled,
      error = _ref.error,
      type = _ref.type,
      placeholder = _ref.placeholder,
      required = _ref.required,
      readOnly = _ref.readOnly,
      autoComplete = _ref.autoComplete;
  return _react.default.createElement(_formContext.default.Consumer, null, function (_ref2) {
    var formData = _ref2.formData,
        _onChange = _ref2.onChange;
    return _react.default.createElement(_Input.default, {
      id: name,
      name: name,
      className: className,
      autoFocus: autoFocus,
      error: error,
      value: (0, _ramda.defaultTo)('')(formData[name]),
      type: type,
      placeholder: placeholder,
      onChange: function onChange(event) {
        return _onChange((0, _ramda.objOf)(name)(event.target.value));
      },
      readOnly: readOnly,
      required: required,
      autoComplete: autoComplete,
      disabled: disabled
    });
  });
};

MyInput.propTypes = {
  name: _propTypes.default.string,
  type: _propTypes.default.string,
  className: _propTypes.default.string,
  required: _propTypes.default.bool,
  readOnly: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  error: _propTypes.default.bool,
  placeholder: _propTypes.default.string,
  autoFocus: _propTypes.default.bool,
  autoComplete: _propTypes.default.string
};
MyInput.defaultProps = {
  name: '',
  type: 'text',
  className: '',
  required: false,
  readOnly: false,
  disabled: false,
  error: false,
  placeholder: '',
  autoFocus: false,
  autoComplete: 'false'
};
var _default = MyInput;
exports.default = _default;