"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _ramda = require("ramda");

var _alertReducer = require("../app/reducers/alert-reducer");

var _contexts = require("../contexts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AlertProvider = function AlertProvider(_ref) {
  var alerts = _ref.alerts;

  if (alerts.length > 0) {
    return _react.default.createElement(_contexts.ConfigContext.Consumer, null, function (_ref2) {
      var AlertComponent = _ref2.AlertComponent;
      return _react.default.createElement("div", null, (0, _ramda.addIndex)(_ramda.map)(function (alert, key) {
        return _react.default.createElement(AlertComponent, {
          type: alert.type,
          id: key,
          message: alert.message,
          key: key
        });
      }));
    });
  }

  return null;
};

AlertProvider.propTypes = {
  alerts: _propTypes.default.arrayOf(_propTypes.default.object)
};
AlertProvider.defaultProps = {
  alerts: []
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