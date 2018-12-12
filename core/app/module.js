"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reducers = _interopRequireDefault(require("./reducers"));

var _messages = _interopRequireDefault(require("./messages"));

var _reactions = _interopRequireDefault(require("./reactions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  key: 'core',
  reducer: _reducers.default,
  messages: _messages.default,
  reactions: _reactions.default
};
exports.default = _default;