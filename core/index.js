"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("babel-polyfill");

var _ramda = require("ramda");

var _config = _interopRequireDefault(require("./config"));

var _functions = require("./functions");

var _application = require("./application");

var _modules = require("./modules");

var _store = _interopRequireDefault(require("./store"));

var _i18n = require("./i18n");

var _setGlobalData = _interopRequireDefault(require("./config/set-global-data"));

require("typeface-roboto");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createAppTouka = function createAppTouka() {
  var userConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var config = (0, _ramda.merge)((0, _ramda.defaultTo)({})(userConfig.config), _config.default.config);
  var modules = (0, _functions.mergeModules)(userConfig.modules, _config.default.modules);
  var moduleConfig = {
    store: (0, _store.default)(modules),
    messages: (0, _i18n.messages)(config.languages, modules)[config.defaultLanguage],
    menu: (0, _modules.getMenu)(modules),
    routes: (0, _modules.getRoutes)(modules),
    pageReviews: (0, _modules.getPageRewiew)(modules)
  };
  (0, _i18n.initDefaultLocales)(config.languages);
  (0, _setGlobalData.default)(config);
  (0, _application.render)((0, _application.createProviders)((0, _ramda.merge)(config, moduleConfig)));
};

var _default = createAppTouka;
exports.default = _default;