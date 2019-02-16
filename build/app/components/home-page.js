"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomePage = function HomePage() {
  return _react.default.createElement("div", null, _react.default.createElement("h1", null, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "core.app.title"
  })), _react.default.createElement("h1", null, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "core.app.wellcome"
  })), _react.default.createElement("h2", null, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "core.app.description"
  })));
};

var _default = HomePage;
exports.default = _default;