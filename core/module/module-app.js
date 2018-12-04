"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reducers = _interopRequireDefault(require("../reducers"));

var _messages = _interopRequireDefault(require("../messages"));

var _coreReactions = _interopRequireDefault(require("../reactions/core-reactions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  key: "core",
  reducer: _reducers.default,
  messages: _messages.default,
  reactions: _coreReactions.default
};
exports.default = _default;