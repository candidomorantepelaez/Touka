"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactResponsiveModal = _interopRequireDefault(require("react-responsive-modal"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntl = require("react-intl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Confirm = function Confirm(props) {
  return _react.default.createElement(_reactResponsiveModal.default, {
    open: props.showModal,
    onClose: function onClose() {
      return props.onClose();
    },
    center: true,
    styles: {
      modal: {
        padding: "70px"
      }
    }
  }, _react.default.createElement("h3", null, props.title), _react.default.createElement("p", null, props.text), _react.default.createElement("button", {
    type: "button",
    className: "btn btn-secondary boton-tarjeta",
    onClick: function onClick() {
      return props.onClose();
    }
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "core.cancel"
  })), _react.default.createElement("button", {
    type: "button",
    className: "btn btn-primary boton-tarjeta",
    onClick: function onClick() {
      return props.onConfirm();
    }
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "core.confirm"
  })));
};

Confirm.propTypes = {
  showModal: _propTypes.default.bool,
  title: _propTypes.default.string,
  text: _propTypes.default.string,
  onClose: _propTypes.default.func,
  onConfirm: _propTypes.default.func
};
var _default = Confirm;
exports.default = _default;