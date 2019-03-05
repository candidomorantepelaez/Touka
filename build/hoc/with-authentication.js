"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCookies = _interopRequireDefault(require("react-cookies"));

var _ramda = require("ramda");

var _functions = require("../functions");

var _getGlobalData = _interopRequireDefault(require("../config/get-global-data"));

var _loginAction = require("../actions/login-action");

var _loginReducer = require("../app/reducers/login-reducer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function withAuthentication(WrappedComponent) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var storeConnect = (0, _reactRedux.connect)(function (state) {
    return {
      currentUser: (0, _loginReducer.getCurrentUser)(state)
    };
  }, function (dispatch) {
    return {
      saveCookieUser: function saveCookieUser(user) {
        return dispatch((0, _loginAction.saveCurrentUser)(user));
      }
    };
  });

  var ReturnComponent = function ReturnComponent(_ref) {
    var currentUser = _ref.currentUser,
        saveCookieUser = _ref.saveCookieUser;

    var getCookieUser = function getCookieUser() {
      var configData = (0, _getGlobalData.default)();

      var userTemp = _reactCookies.default.load('user_app', {
        path: configData.appBasePath
      });

      if (!(0, _ramda.isNil)(userTemp)) {
        var _user = JSON.parse(userTemp);

        saveCookieUser(_user);
        return _user;
      }

      return {};
    };

    var user = (0, _ramda.isNil)(currentUser.role) ? getCookieUser() : currentUser;

    if ((0, _functions.isAuthorizated)(user, options.roles)) {
      return _react.default.createElement(WrappedComponent, {
        currentUser: currentUser
      });
    }

    return options.onAuthenticationFailed();
  };

  ReturnComponent.propTypes = {
    currentUser: _propTypes.default.shape({}).isRequired
  };
  return storeConnect(ReturnComponent);
}

var _default = withAuthentication;
exports.default = _default;