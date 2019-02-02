"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _formContext = _interopRequireDefault(require("../../contexts/form-context"));

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

var MyForm =
/*#__PURE__*/
function (_Component) {
  _inherits(MyForm, _Component);

  function MyForm(props) {
    var _this;

    _classCallCheck(this, MyForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MyForm).call(this, props));
    _this.getInitialValue = _this.getInitialValue.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handlerSubmit = _this.handlerSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      initialValue: _this.getInitialValue(),
      formData: _this.getInitialValue(),
      errors: {},
      fields: {},
      onChange: function onChange(value) {
        return _this.onChange(value);
      }
    };
    return _this;
  }

  _createClass(MyForm, [{
    key: "onChange",
    value: function onChange(value) {
      var formData = this.state.formData;
      this.setState({
        formData: (0, _ramda.merge)(formData, value)
      });
    }
  }, {
    key: "getInitialValue",
    value: function getInitialValue() {
      var initialValue = this.props.initialValue;
      return initialValue;
    }
  }, {
    key: "handlerSubmit",
    value: function handlerSubmit(evt) {
      var formData = this.state.formData;
      var onSubmit = this.props.onSubmit;
      evt.preventDefault();
      onSubmit(formData);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;
      var _this$state = this.state,
          initialValue = _this$state.initialValue,
          errors = _this$state.errors,
          formData = _this$state.formData,
          fields = _this$state.fields,
          onChange = _this$state.onChange;
      return _react.default.createElement(_formContext.default.Provider, {
        value: {
          initialValue: initialValue,
          errors: errors,
          formData: formData,
          fields: fields,
          onChange: onChange
        }
      }, _react.default.createElement("form", {
        onSubmit: function onSubmit(evt) {
          return _this2.handlerSubmit(evt);
        },
        autoComplete: "false",
        noValidate: true
      }, children));
    }
  }]);

  return MyForm;
}(_react.Component);

_defineProperty(MyForm, "propTypes", {
  initialValue: _propTypes.default.shape({}),
  onSubmit: _propTypes.default.func.isRequired,
  children: _propTypes.default.arrayOf(_propTypes.default.shape({}))
});

_defineProperty(MyForm, "defaultProps", {
  initialValue: {},
  children: []
});

var _default = MyForm;
exports.default = _default;