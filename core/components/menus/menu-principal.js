"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCookies = _interopRequireDefault(require("react-cookies"));

var _reactRouterDom = require("react-router-dom");

var _reactRedux = require("react-redux");

var _reactIntl = require("react-intl");

var _ramda = require("ramda");

var _fa = require("react-icons/fa");

var _history = _interopRequireDefault(require("../../routes/history"));

var _loginAction = require("../../actions/login-action");

var _loginReducer = require("../../reducers/login-reducer");

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

var Menu =
/*#__PURE__*/
function (_Component) {
  _inherits(Menu, _Component);

  function Menu(props) {
    var _this;

    _classCallCheck(this, Menu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Menu).call(this, props));
    _this.crearEstilo = _this.crearEstilo.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.initUser = _this.initUser.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.isAuthorizated = _this.isAuthorizated.bind(_assertThisInitialized(_assertThisInitialized(_this)));

    _this.initUser();

    return _this;
  }

  _createClass(Menu, [{
    key: "initUser",
    value: function initUser() {
      if ((0, _ramda.isNil)(this.props.currentUser.nif) === false) {
        return;
      }

      var currentUserCookie = _reactCookies.default.load("user_app");

      if ((0, _ramda.isNil)(currentUserCookie) === false) {
        this.props.saveUser(currentUserCookie);
        return;
      }
    }
  }, {
    key: "crearEstilo",
    value: function crearEstilo(ruta) {
      var location = _history.default.location;
      var segmentos = location.pathname.split("/");

      if (ruta === segmentos[1]) {
        return "nav-item active activado";
      } else {
        return "nav-item active";
      }
    }
  }, {
    key: "isAuthorizated",
    value: function isAuthorizated(obj) {
      if ((0, _ramda.isNil)(this.props.currentUser.role)) {
        return false;
      }

      if ((0, _ramda.isNil)(obj.role)) {
        return true;
      }

      if ((0, _ramda.is)(Array, obj.role)) {
        return (0, _ramda.contains)(this.props.currentUser.role, obj.role);
      }

      if ((0, _ramda.is)(String, obj.role)) {
        return obj.role === this.props.currentUser.role;
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if ((0, _ramda.isNil)(this.props.currentUser.nif)) {
        return null;
      }

      return _react.default.createElement("nav", {
        className: "navbar navbar-expand-lg estilo-nav"
      }, _react.default.createElement(_reactRouterDom.Link, {
        className: "navbar-brand",
        to: "/"
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "core.app.title"
      })), _react.default.createElement("button", {
        className: "navbar-toggler",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarSupportedContent",
        "aria-controls": "navbarSupportedContent",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      }, _react.default.createElement(_fa.FaBars, {
        className: "navbar-toggler-icon icono"
      })), _react.default.createElement("div", {
        className: "collapse navbar-collapse",
        id: "navbarSupportedContent"
      }, _react.default.createElement("ul", {
        className: "navbar-nav ml-auto"
      }, this.props.menu.map(function (obj, key) {
        if (_this2.isAuthorizated(obj)) {
          return _react.default.createElement("li", {
            key: key,
            className: _this2.crearEstilo(obj.to)
          }, _react.default.createElement(_reactRouterDom.Link, {
            key: key,
            className: "nav-link",
            to: obj.to
          }, obj.label));
        }

        return null;
      }), _react.default.createElement("li", {
        className: "nav-item active menu-session-button"
      }, _react.default.createElement("button", {
        className: "btn btn-outline-secondary btn-sm",
        onClick: function onClick() {
          return _this2.props.onLogout();
        },
        type: "button"
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "core.logout"
      }))))));
    }
  }]);

  return Menu;
}(_react.Component);

_defineProperty(Menu, "propTypes", {
  currentUser: _propTypes.default.object,
  onLogout: _propTypes.default.func,
  menu: _propTypes.default.array
});

var storeConnect = (0, _reactRedux.connect)(function (state) {
  return {
    currentUser: (0, _loginReducer.getCurrentUser)(state)
  };
}, function (dispatch) {
  return {
    saveUser: function saveUser(value) {
      return dispatch((0, _loginAction.saveCurrentUser)(value));
    },
    onLogout: function onLogout() {
      return dispatch((0, _loginAction.logout)());
    }
  };
});

var _default = storeConnect(Menu);

exports.default = _default;