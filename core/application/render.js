"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global document */
var render = function render(component) {
  var node = document.getElementById('root');

  _reactDom.default.render(component, node);
};

var _default = render;
exports.default = _default;