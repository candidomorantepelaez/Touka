"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _select = _interopRequireDefault(require("./select"));

var _Input = _interopRequireDefault(require("components/forms/Input"));

var _ramda = require("ramda");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var isValidForm = function isValidForm(errors) {
  return (0, _ramda.isEmpty)((0, _ramda.filter)(function (error) {
    return !(0, _ramda.isEmpty)(error);
  }, errors));
};

var Form =
/*#__PURE__*/
function (_Component) {
  _inherits(Form, _Component);

  function Form(props) {
    var _this;

    _classCallCheck(this, Form);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Form).call(this, props));
    _this.handlerSubmit = _this.handlerSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleOnBlur = _this.handleOnBlur.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.manageErrors = _this.manageErrors.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.validateRequiredOnSubmit = _this.validateRequiredOnSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.validate = _this.validate.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.getField = _this.getField.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      formData: _this.getInitialValue(),
      errors: {}
    };
    return _this;
  }

  _createClass(Form, [{
    key: "getInitialValue",
    value: function getInitialValue() {
      var initialValue = this.props.initialValue;
      return initialValue;
    }
  }, {
    key: "getField",
    value: function getField(field, key) {
      var _this2 = this;

      var options = this.props.options;
      var _this$state = this.state,
          formData = _this$state.formData,
          errors = _this$state.errors;

      switch (field.type) {
        case 'select':
          return _react.default.createElement(_select.default, {
            key: key,
            name: field.name,
            label: field.label,
            options: options[field.name] || [],
            helpText: field.helpText,
            className: field.className,
            value: formData[field.name] || '',
            required: field.required,
            readOnly: field.readOnly,
            disabled: field.disabled,
            error: errors[field.name],
            onChange: function onChange(evt) {
              return _this2.handleChange(field, evt);
            },
            onBlur: function onBlur(evt) {
              return _this2.handleOnBlur(field, evt);
            }
          });

        default:
          return _react.default.createElement(_Input.default, {
            type: field.type,
            value: formData[field.name] || '',
            id: field.name,
            name: field.name,
            required: field.required,
            readOnly: field.readOnly,
            disabled: field.disabled,
            error: errors[field.name],
            onChange: function onChange(evt) {
              return _this2.handleChange(field, evt);
            },
            onBlur: function onBlur(evt) {
              return _this2.handleOnBlur(field, evt);
            }
          });
      }
    }
  }, {
    key: "handlerSubmit",
    value: function handlerSubmit(evt) {
      var _this$props = this.props,
          fields = _this$props.fields,
          onSubmit = _this$props.onSubmit,
          initialValue = _this$props.initialValue;
      var _this$state2 = this.state,
          errors = _this$state2.errors,
          formData = _this$state2.formData;
      evt.preventDefault();
      var submitErrors = (0, _ramda.reduce)(this.validateRequiredOnSubmit, {}, fields);

      if ((0, _ramda.isEmpty)(submitErrors) === false) {
        this.setState({
          errors: (0, _ramda.merge)(errors, submitErrors)
        });
        return;
      }

      if (isValidForm(errors)) {
        onSubmit(formData);
        this.setState({
          formData: initialValue || {}
        });
      }
    }
  }, {
    key: "validateRequiredOnSubmit",
    value: function validateRequiredOnSubmit(value, field) {
      var _this$state3 = this.state,
          formData = _this$state3.formData,
          errors = _this$state3.errors;

      if (field.required === true) {
        if ((0, _ramda.isNil)(formData[field.name]) || formData[field.name] === '') {
          return (0, _ramda.merge)(value, (0, _ramda.merge)(errors[field.name], (0, _ramda.objOf)(field.name)({
            required: {
              message: 'core.field.required'
            }
          })));
        }
      }

      return value;
    }
  }, {
    key: "handleOnBlur",
    value: function handleOnBlur(field, event) {
      if (field.onBlur) {
        field.onBlur(event.target.value);
      }

      if (field.required === true) {
        if (event.target.value === '') {
          this.insertErrorOnForm(field.name, 'required', {
            message: 'core.field.required'
          });
        } else {
          this.removeErrorOnForm(field.name, 'required');
        }
      }

      if (field.validateOnBlur) {
        this.validate(field.name, 'onBlur', field.validateOnBlur, event.target.value);
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(field, event) {
      var formData = this.state.formData;
      this.setState({
        formData: (0, _ramda.merge)(formData, (0, _ramda.objOf)(event.target.name)(event.target.value))
      });

      if (field.onChange) {
        field.onChange(event.target.value);
      }

      if (field.required === true) {
        if (event.target.value === '') {
          this.insertErrorOnForm(field.name, 'required', {
            message: 'core.field.required'
          });
        } else {
          this.removeErrorOnForm(field.name, 'required');
        }
      }

      if (field.validateOnChange) {
        this.validate(field.name, 'onChange', field.validateOnChange, event.target.value);
      }
    }
  }, {
    key: "manageErrors",
    value: function manageErrors(key, type, error) {
      var errors = this.state.errors;

      if ((0, _ramda.isNil)(error)) {
        if ((0, _ramda.isNil)(errors[key]) === false && (0, _ramda.isNil)(errors[key][type]) === false) {
          this.removeErrorOnForm(key, type);
          return;
        }

        return;
      }

      this.insertErrorOnForm(key, type, error);
    }
  }, {
    key: "insertErrorOnForm",
    value: function insertErrorOnForm(key, type, error) {
      var errors = this.state.errors;
      this.setState({
        errors: (0, _ramda.merge)(errors, (0, _ramda.objOf)(key)((0, _ramda.merge)(errors[key], (0, _ramda.objOf)(type)(error))))
      });
    }
  }, {
    key: "removeErrorOnForm",
    value: function removeErrorOnForm(key, type) {
      var errors = this.state.errors;
      this.setState({
        errors: (0, _ramda.merge)(errors, (0, _ramda.objOf)(key)((0, _ramda.omit)([type], errors[key])))
      });
    }
  }, {
    key: "validate",
    value: function validate(key, type, validateFn, value) {
      if (validateFn) {
        this.manageErrors(key, type, validateFn(value));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          fields = _this$props2.fields,
          actions = _this$props2.actions;
      return _react.default.createElement("form", {
        className: "form-container needs-validation",
        onSubmit: function onSubmit(evt) {
          return _this3.handlerSubmit(evt);
        },
        autoComplete: "false",
        noValidate: true
      }, _react.default.createElement("div", {
        className: "row"
      }, (0, _ramda.addIndex)(_ramda.map)(function (field, idx) {
        return _this3.getField(field, idx);
      }, fields)), (0, _ramda.addIndex)(_ramda.map)(function (obj, idx) {
        return _react.default.cloneElement(obj, {
          key: idx
        });
      }, actions));
    }
  }]);

  return Form;
}(_react.Component);

_defineProperty(Form, "propTypes", {
  initialValue: _propTypes.default.shape({}),
  options: _propTypes.default.shape({}),
  fields: _propTypes.default.shape({}).isRequired,
  onSubmit: _propTypes.default.func.isRequired,
  actions: _propTypes.default.arrayOf(_propTypes.default.object)
});

_defineProperty(Form, "defaultProps", {
  initialValue: {},
  options: {},
  actions: []
});

var _default = Form;
exports.default = _default;