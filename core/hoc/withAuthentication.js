"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntl = require("react-intl");

var _ramda = require("ramda");

var _loginReducer = require("../reducers/login-reducer");

var _loginPage = _interopRequireDefault(require("../pages/login/login-page"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function withAuthentication(WrappedComponent) {
  var _class, _temp;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var storeConnect = (0, _reactRedux.connect)(function (state) {
    return {
      currentUser: (0, _loginReducer.getCurrentUser)(state)
    };
  }, function () {
    return {};
  });
  return storeConnect((_temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inherits(_class, _Component);

    function _class(props) {
      var _this;

      _classCallCheck(this, _class);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, props));
      _this.getReturn = _this.getReturn.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.isAuthorizated = _this.isAuthorizated.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      return _this;
    }

    _createClass(_class, [{
      key: "getReturn",
      value: function getReturn() {
        if (options.onFalse === "login") {
          return _react.default.createElement(_loginPage.default, null);
        }

        if (options.onFalse === "text") {
          return _react.default.createElement("p", null, _react.default.createElement(_reactIntl.FormattedMessage, {
            id: "core.authentication.unauthorized"
          }));
        }

        return null;
      }
    }, {
      key: "isAuthorizated",
      value: function isAuthorizated() {
        if ((0, _ramda.isNil)(this.props.currentUser.role)) {
          return false;
        }

        if ((0, _ramda.isNil)(options.role)) {
          return true;
        }

        if ((0, _ramda.is)(Array, options.role)) {
          return (0, _ramda.contains)(this.props.currentUser.role, options.role);
        }

        if ((0, _ramda.is)(String, options.role)) {
          return options.role === this.props.currentUser.role;
        }

        return false;
      }
    }, {
      key: "render",
      value: function render() {
        if (this.isAuthorizated()) {
          return _react.default.createElement(WrappedComponent, _extends({
            currentUser: this.props.currentUser
          }, this.props));
        }

        return this.getReturn();
      }
    }]);

    return _class;
  }(_react.Component), _defineProperty(_class, "propsTypes", {
    currentUser: _propTypes.default.object
  }), _temp));
}

var _default = withAuthentication;
exports.default = _default;