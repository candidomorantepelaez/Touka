"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _input = _interopRequireDefault(require("./input"));

var _select = _interopRequireDefault(require("./select"));

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
      formData: _this.props.initialValue || {},
      errors: {}
    };
    return _this;
  }

  _createClass(Form, [{
    key: "handlerSubmit",
    value: function handlerSubmit(evt) {
      evt.preventDefault();
      var submitErrors = (0, _ramda.reduce)(this.validateRequiredOnSubmit, {}, this.props.fields);

      if ((0, _ramda.isEmpty)(submitErrors) === false) {
        this.setState({
          errors: (0, _ramda.merge)(this.state.errors, submitErrors)
        });
        return;
      }

      if (this.isValidForm(this.state.errors)) {
        this.props.onSubmit(this.state.formData);
        this.setState({
          formData: this.props.initialValue || {}
        });
      }
    }
  }, {
    key: "validateRequiredOnSubmit",
    value: function validateRequiredOnSubmit(value, field) {
      if (field.required === true) {
        if ((0, _ramda.isNil)(this.state.formData[field.name]) || this.state.formData[field.name] === "") {
          return (0, _ramda.merge)(value, (0, _ramda.merge)(this.state.errors[field.name], (0, _ramda.objOf)(field.name)({
            required: {
              message: "core.field.required"
            }
          })));
        }
      }

      return value;
    }
  }, {
    key: "isValidForm",
    value: function isValidForm(errors) {
      return (0, _ramda.isEmpty)((0, _ramda.filter)(function (error) {
        return !(0, _ramda.isEmpty)(error);
      }, this.state.errors));
    }
  }, {
    key: "handleOnBlur",
    value: function handleOnBlur(field, event) {
      if (field.onBlur) {
        field.onBlur(event.target.value);
      }

      if (field.required === true) {
        if (event.target.value === "") {
          this.insertErrorOnForm(field.name, "required", {
            message: "core.field.required"
          });
        } else {
          this.removeErrorOnForm(field.name, "required");
        }
      }

      if (field.validateOnBlur) {
        this.validate(field.name, "onBlur", field.validateOnBlur, event.target.value);
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(field, event) {
      this.setState({
        formData: (0, _ramda.merge)(this.state.formData, (0, _ramda.objOf)(event.target.name)(event.target.value))
      });

      if (field.onChange) {
        field.onChange(event.target.value);
      }

      if (field.required === true) {
        if (event.target.value === "") {
          this.insertErrorOnForm(field.name, "required", {
            message: "core.field.required"
          });
        } else {
          this.removeErrorOnForm(field.name, "required");
        }
      }

      if (field.validateOnChange) {
        this.validate(field.name, "onChange", field.validateOnChange, event.target.value);
      }
    }
  }, {
    key: "manageErrors",
    value: function manageErrors(key, type, error) {
      if ((0, _ramda.isNil)(error)) {
        if ((0, _ramda.isNil)(this.state.errors[key]) === false && (0, _ramda.isNil)(this.state.errors[key][type]) === false) {
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
      this.setState({
        errors: (0, _ramda.merge)(this.state.errors, (0, _ramda.objOf)(key)((0, _ramda.merge)(this.state.errors[key], (0, _ramda.objOf)(type)(error))))
      });
    }
  }, {
    key: "removeErrorOnForm",
    value: function removeErrorOnForm(key, type) {
      this.setState({
        errors: (0, _ramda.merge)(this.state.errors, (0, _ramda.objOf)(key)((0, _ramda.omit)([type], this.state.errors[key])))
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
    key: "getField",
    value: function getField(field, key) {
      var _this2 = this;

      switch (field.type) {
        case "select":
          return _react.default.createElement(_select.default, {
            key: key,
            name: field.name,
            label: field.label,
            options: this.props.options[field.name] || [],
            helpText: field.helpText,
            className: field.className,
            value: this.state.formData[field.name] || "",
            required: field.required,
            readOnly: field.readOnly,
            disabled: field.disabled,
            error: this.state.errors[field.name],
            onChange: function onChange(evt) {
              return _this2.handleChange(field, evt);
            },
            onBlur: function onBlur(evt) {
              return _this2.handleOnBlur(field, evt);
            }
          });

        default:
          return _react.default.createElement(_input.default, {
            key: key,
            name: field.name,
            label: field.label,
            helpText: field.helpText,
            type: field.type,
            className: field.className,
            value: this.state.formData[field.name] || "",
            required: field.required,
            readOnly: field.readOnly,
            disabled: field.disabled,
            error: this.state.errors[field.name],
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
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react.default.createElement("form", {
        className: "form-container needs-validation",
        onSubmit: function onSubmit(evt) {
          return _this3.handlerSubmit(evt);
        },
        autoComplete: "false",
        noValidate: true
      }, _react.default.createElement("div", {
        className: "row"
      }, this.props.fields.map(function (field, key) {
        return _this3.getField(field, key);
      })), this.props.actions.map(function (obj, key) {
        return _react.default.cloneElement(obj, {
          key: key
        });
      }));
    }
  }]);

  return Form;
}(_react.Component);

var _default = Form;
exports.default = _default;