"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _reactRedux = require("react-redux");

var _reactIntl = require("react-intl");

var _menuPrincipal = _interopRequireDefault(require("../components/menus/menu-principal"));

var _routes = _interopRequireDefault(require("../routes/routes"));

var _alertProvider = _interopRequireDefault(require("../components/alerts/alert-provider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Application = function Application(_ref) {
  var store = _ref.store,
      language = _ref.language,
      messages = _ref.messages,
      history = _ref.history,
      menu = _ref.menu,
      routes = _ref.routes,
      pageReviews = _ref.pageReviews;
  return _react.default.createElement(_reactRedux.Provider, {
    store: store
  }, _react.default.createElement(_reactIntl.IntlProvider, {
    locale: language,
    messages: messages
  }, _react.default.createElement(_reactRouterDom.Router, {
    history: history
  }, _react.default.createElement("div", null, _react.default.createElement(_alertProvider.default, null), _react.default.createElement(_menuPrincipal.default, {
    menu: menu
  }), _react.default.createElement(_routes.default, {
    routes: routes,
    pageReviews: pageReviews
  })))));
};

Application.defaultProps = {
  store: {},
  language: '',
  messages: {},
  history: {},
  menu: [],
  routes: [],
  pageReviews: []
};
Application.propTypes = {
  store: _propTypes.default.shape({}),
  language: _propTypes.default.string,
  messages: _propTypes.default.shape({}),
  history: _propTypes.default.shape({}),
  menu: _propTypes.default.arrayOf(_propTypes.default.object),
  routes: _propTypes.default.arrayOf(_propTypes.default.object),
  pageReviews: _propTypes.default.arrayOf(_propTypes.default.object)
};
var _default = Application;
exports.default = _default;