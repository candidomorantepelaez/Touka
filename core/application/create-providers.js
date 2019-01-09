"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactRedux = require("react-redux");

var _reactIntl = require("react-intl");

var _routes = require("../routes");

var _contexts = require("../contexts");

var _alertProvider = _interopRequireDefault(require("../components/alerts/alert-provider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createProviders = function createProviders(config) {
  return _react.default.createElement(_contexts.ConfigContext.Provider, {
    value: config
  }, _react.default.createElement(_reactRedux.Provider, {
    store: config.store
  }, _react.default.createElement(_reactIntl.IntlProvider, {
    locale: config.defaultLanguage,
    messages: config.messages
  }, _react.default.createElement(_reactRouterDom.Router, {
    history: _routes.history
  }, _react.default.createElement("div", null, _react.default.createElement(_alertProvider.default, null), _react.default.createElement(config.menuComponent, {
    menu: config.menu
  }), _react.default.createElement(_routes.ToukaRoutes, {
    routes: config.routes,
    pageReviews: config.pageReviews
  }))))));
};

var _default = createProviders;
exports.default = _default;