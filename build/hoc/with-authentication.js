"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _functions = require("../functions");

var _loginReducer = require("../app/reducers/login-reducer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function withAuthentication(WrappedComponent) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var storeConnect = (0, _reactRedux.connect)(function (state) {
    return {
      currentUser: (0, _loginReducer.getCurrentUser)(state)
    };
  }, function () {
    return {};
  });

  var ReturnComponent = function ReturnComponent(_ref) {
    var currentUser = _ref.currentUser;

    if ((0, _functions.isAuthorizated)(currentUser, options.role)) {
      return _react.default.createElement(WrappedComponent, {
        currentUser: currentUser
      });
    }

    return _react.default.createElement("p", null, "Hola");
  };

  ReturnComponent.propTypes = {
    currentUser: _propTypes.default.shape({}).isRequired
  };
  return storeConnect(ReturnComponent);
}

var _default = withAuthentication;
exports.default = _default;