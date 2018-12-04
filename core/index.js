"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("babel-polyfill");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _bluebird = _interopRequireDefault(require("bluebird"));

var _ramda = require("ramda");

var _application = _interopRequireDefault(require("./application/application"));

var _moduleApp = _interopRequireDefault(require("./module/module-app"));

var _module = require("./module");

var _store = _interopRequireDefault(require("./store"));

var _history = _interopRequireDefault(require("./routes/history"));

var _i = require("./i18");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var render = function render(component) {
  var node = document.getElementById("root");

  _reactDom.default.render(component, node);
};

var prevConfig = function prevConfig() {
  window.Promise = _bluebird.default;

  _bluebird.default.config({
    warnings: false
  });

  window.addEventListener("unhandlerrejection", function (error) {
    error.preventDefault();

    if (process.env.NODE_ENV !== "production") {
      console.warn("Unhandler promise rejection warning.", error.detail);
    }
  });
};

var createAppModules = function createAppModules(config) {
  if ((0, _ramda.isNil)(config) || (0, _ramda.isNil)(config.modules) || !(0, _ramda.is)(Array, config.modules)) {
    return _moduleApp.default;
  }

  return (0, _ramda.insert)(0, _moduleApp.default, config.modules);
};

var renderApplication = function renderApplication(config) {
  prevConfig();
  (0, _i.addLocale)();
  var modules = createAppModules(config);
  render(_react.default.createElement(_application.default, {
    store: (0, _store.default)(modules),
    language: config.defaultLanguage,
    messages: (0, _i.messages)(config.languages, modules)[config.defaultLanguage],
    history: _history.default,
    menu: (0, _module.getMenu)(modules),
    routes: (0, _module.getRoutes)(modules),
    pageReviews: (0, _module.getPageRewiew)(modules)
  }));
};

var _default = renderApplication;
exports.default = _default;