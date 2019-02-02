"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ramda = require("ramda");

var _reactRouterDom = require("react-router-dom");

var _contexts = require("../contexts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ToukaRoutes =
/*#__PURE__*/
function (_Component) {
  _inherits(ToukaRoutes, _Component);

  function ToukaRoutes() {
    _classCallCheck(this, ToukaRoutes);

    return _possibleConstructorReturn(this, _getPrototypeOf(ToukaRoutes).apply(this, arguments));
  }

  _createClass(ToukaRoutes, [{
    key: "render",
    value: function render() {
      var routes = this.props.routes;
      var _this$context = this.context,
          appLoginPath = _this$context.appLoginPath,
          appLogoutPath = _this$context.appLogoutPath,
          appBasePath = _this$context.appBasePath,
          loginComponent = _this$context.loginComponent,
          logoutComponent = _this$context.logoutComponent,
          homeComponent = _this$context.homeComponent,
          noMatchComponent = _this$context.noMatchComponent;
      return _react.default.createElement(_reactRouterDom.Switch, null, (0, _ramda.addIndex)(_ramda.map)(function (ruta, idx) {
        return _react.default.createElement(_reactRouterDom.Route, {
          path: ruta.path,
          component: ruta.component,
          exact: ruta.exact,
          key: idx
        });
      }, routes), _react.default.createElement(_reactRouterDom.Route, {
        path: appLoginPath,
        component: loginComponent,
        exact: true
      }), _react.default.createElement(_reactRouterDom.Route, {
        path: appLogoutPath,
        component: logoutComponent,
        exact: true
      }), _react.default.createElement(_reactRouterDom.Route, {
        path: appBasePath,
        component: homeComponent,
        exact: true
      }), _react.default.createElement(_reactRouterDom.Route, {
        component: noMatchComponent
      }));
    }
  }]);

  return ToukaRoutes;
}(_react.Component);

_defineProperty(ToukaRoutes, "propTypes", {
  routes: _propTypes.default.arrayOf(_propTypes.default.object)
});

_defineProperty(ToukaRoutes, "defaultProps", {
  routes: []
});

_defineProperty(ToukaRoutes, "contextType", _contexts.ConfigContext);

var _default = ToukaRoutes;
exports.default = _default;