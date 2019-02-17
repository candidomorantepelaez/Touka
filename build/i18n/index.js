"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.intlText = exports.messages = exports.initDefaultLocales = void 0;

var _reactIntl = require("react-intl");

var _en = _interopRequireDefault(require("react-intl/locale-data/en"));

var _es = _interopRequireDefault(require("react-intl/locale-data/es"));

var _modules = require("../modules");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var initDefaultLocales = function initDefaultLocales() {
  return (0, _reactIntl.addLocaleData)(_toConsumableArray(_en.default).concat(_toConsumableArray(_es.default)));
};

exports.initDefaultLocales = initDefaultLocales;

var messages = function messages(languages, modules) {
  return (0, _modules.getMessages)(languages, modules);
};

exports.messages = messages;
var intlText = _reactIntl.FormattedMessage;
exports.intlText = intlText;