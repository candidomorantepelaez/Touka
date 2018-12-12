"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fredux = require("fredux");

var _redux = require("redux");

var _reduxDevtoolsExtension = require("redux-devtools-extension");

var _reactions = _interopRequireDefault(require("../reactions/reactions"));

var _module = require("../module");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getStore = function getStore(modules) {
  return (0, _redux.createStore)((0, _module.getReducers)(modules), (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_fredux.promiseActionMiddleware, (0, _reactions.default)((0, _module.getReactions)(modules)))));
};

var _default = getStore;
exports.default = _default;