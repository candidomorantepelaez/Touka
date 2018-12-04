"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alerts = alerts;
exports.default = exports.getAlerts = void 0;

var _redux = require("redux");

var _ramda = require("ramda");

var _alertActions = require("../actions/alert-actions");

var initialState = {
  alerts: {
    alerts: []
  }
};

function alerts() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.alerts.alerts;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _alertActions.OPEN_ALERT:
      return (0, _ramda.insert)(state.length, payload, state);

    case _alertActions.CLOSE_ALERT:
      return payload;

    default:
      return state;
  }
}

var getAlertsState = function getAlertsState(state) {
  return state.core.alerts;
};

var getAlerts = function getAlerts(state) {
  return getAlertsState(state).alerts;
};

exports.getAlerts = getAlerts;

var _default = (0, _redux.combineReducers)({
  alerts: alerts
});

exports.default = _default;