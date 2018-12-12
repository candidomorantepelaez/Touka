"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fredux = require("fredux");

var _reactCookies = _interopRequireDefault(require("react-cookies"));

var _loginAction = require("../actions/login-action");

var _history = _interopRequireDefault(require("../routes/history"));

var _alertActions = require("../actions/alert-actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reactions = [{
  match: (0, _fredux.successType)(_loginAction.ON_LOGIN),
  reaction: function reaction(value) {
    _reactCookies.default.save('user_app', value.payload.response.user, {
      path: '/'
    });

    _reactCookies.default.save('session-id', value.payload.response.user.sessionId, {
      path: '/'
    });

    _history.default.push('/home');

    return (0, _alertActions.openAlert)({
      type: 'success',
      message: 'core.alerts.success.login'
    });
  }
}, {
  match: (0, _fredux.failureType)(_loginAction.ON_LOGIN),
  reaction: function reaction() {
    return (0, _alertActions.openAlert)({
      type: 'danger',
      message: 'core.alerts.error.login'
    });
  }
}, {
  match: (0, _fredux.successType)(_loginAction.ON_LOGOUT),
  reaction: function reaction() {
    _reactCookies.default.remove('user_app', {
      path: '/'
    });

    _reactCookies.default.remove('session-id', {
      path: '/'
    });

    _history.default.push('/login');

    return (0, _alertActions.openAlert)({
      type: 'success',
      message: 'core.alerts.success.logout'
    });
  }
}];
var _default = reactions;
exports.default = _default;