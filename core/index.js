"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("babel-polyfill");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _ramda = require("ramda");

var _application = _interopRequireDefault(require("./application/application"));

var _module = _interopRequireDefault(require("./app/module"));

var _module2 = require("./module");

var _store = _interopRequireDefault(require("./store"));

var _history = _interopRequireDefault(require("./routes/history"));

var _i = require("./i18");

var _configContext = _interopRequireDefault(require("./contexts/config-context"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global document */
var render = function render(component) {
  var node = document.getElementById('root');

  _reactDom.default.render(component, node);
};

var insertAppModule = function insertAppModule(config) {
  if ((0, _ramda.isNil)(config) || (0, _ramda.isNil)(config.modules) || !(0, _ramda.is)(Array, config.modules)) {
    return (0, _ramda.merge)(config, {
      modules: _module.default
    });
  }

  return (0, _ramda.merge)(config, (0, _ramda.append)(_module.default, config.modules));
};

var renderApplication = function renderApplication(config) {
  (0, _i.initDefaultLocales)();
  var configWithAppModule = insertAppModule(config);
  render(_react.default.createElement(_configContext.default.Provider, {
    value: configWithAppModule
  }, _react.default.createElement(_application.default, {
    store: (0, _store.default)(configWithAppModule.modules),
    language: config.defaultLanguage,
    messages: (0, _i.messages)(config.languages, configWithAppModule.modules)[config.defaultLanguage],
    history: _history.default,
    menu: (0, _module2.getMenu)(configWithAppModule.modules),
    routes: (0, _module2.getRoutes)(configWithAppModule.modules),
    pageReviews: (0, _module2.getPageRewiew)(configWithAppModule.modules)
  })));
};

var _default = renderApplication;
exports.default = _default;