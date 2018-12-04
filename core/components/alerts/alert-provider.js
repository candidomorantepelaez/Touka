"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _alertReducer = require("../../reducers/alert-reducer");

var _alert = _interopRequireDefault(require("./alert"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AlertProvider = function AlertProvider(props) {
  return props.alerts.length > 0 ? _react.default.createElement("div", null, props.alerts.map(function (alert, key) {
    return _react.default.createElement(_alert.default, {
      type: alert.type,
      id: key,
      message: alert.message,
      key: key
    });
  })) : null;
};

AlertProvider.propTypes = {
  alerts: _propTypes.default.array
};
var storeConnect = (0, _reactRedux.connect)(function (state) {
  return {
    alerts: (0, _alertReducer.getAlerts)(state)
  };
}, function () {
  return {};
});

var _default = storeConnect(AlertProvider);

exports.default = _default;