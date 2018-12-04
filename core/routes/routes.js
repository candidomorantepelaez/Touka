"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ramda = require("ramda");

var _reactRouterDom = require("react-router-dom");

var _loginPage = _interopRequireDefault(require("../pages/login/login-page"));

var _homePage = _interopRequireDefault(require("../pages/home/home-page"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createRoutes = function createRoutes(routes) {
  if ((0, _ramda.isNil)(routes)) {
    return null;
  }

  return routes.map(function (ruta, key) {
    return _react.default.createElement(_reactRouterDom.Route, {
      path: ruta.path,
      component: ruta.component,
      exact: ruta.exact,
      key: key
    });
  });
};

var AppRoutes = function AppRoutes(props) {
  return _react.default.createElement(_reactRouterDom.Switch, null, createRoutes(props.routes), _react.default.createElement(_reactRouterDom.Route, {
    path: "/home",
    render: function render() {
      return _react.default.createElement(_homePage.default, {
        pageReviews: props.pageReviews
      });
    },
    exact: true
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "/login",
    component: _loginPage.default,
    exact: true
  }), _react.default.createElement(_reactRouterDom.Route, {
    render: function render() {
      return _react.default.createElement(_homePage.default, {
        pageReviews: props.pageReviews
      });
    }
  }));
};

AppRoutes.propTypes = {
  routes: _propTypes.default.array,
  pageReviews: _propTypes.default.array
};
var _default = AppRoutes;
exports.default = _default;