"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactRedux = require("react-redux");

var _reactIntl = require("react-intl");

var _routes = require("../routes");

var _contexts = require("../contexts");

var _CssBaseline = _interopRequireDefault(require("@material-ui/core/CssBaseline"));

var _alertProvider = _interopRequireDefault(require("../components/alerts/alert-provider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var createProviders = function createProviders(config) {
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_CssBaseline.default, null), _react.default.createElement(_contexts.ConfigContext.Provider, {
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
  })))))));
};

var _default = createProviders;
exports.default = _default;