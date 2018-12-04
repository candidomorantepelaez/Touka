"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntl = require("react-intl");

var _form = _interopRequireDefault(require("../../components/forms/form"));

var _submitButton = _interopRequireDefault(require("../../components/forms/buttons/submit-button"));

var _loginAction = require("../../actions/login-action");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loginForm = {
  actions: [_react.default.createElement(_submitButton.default, {
    className: "col-xl-12 col-lg-12 col-md-12 col-sm-12",
    label: "core.send"
  })],
  fields: [{
    name: "nif",
    label: "core.nif",
    type: "text",
    className: "col-xl-12 col-lg-12 col-md-12 col-sm-12",
    required: true
  }, {
    name: "password",
    label: "core.pass",
    type: "password",
    className: "col-xl-12 col-lg-12 col-md-12 col-sm-12",
    required: true
  }]
};

var LoginPage = function LoginPage(props) {
  return _react.default.createElement("div", {
    className: "login-page offset-xl-4 offset-lg-4 col-xl-4 col-lg-4 col-md-12 col-sm-12"
  }, _react.default.createElement("h1", null, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "core.app.wellcome"
  })), _react.default.createElement("h2", null, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "core.app.description"
  })), _react.default.createElement(_form.default, {
    actions: loginForm.actions,
    onSubmit: function onSubmit(value) {
      return props.onLogin(value);
    },
    fields: loginForm.fields
  }));
};

LoginPage.propTypes = {
  onLogin: _propTypes.default.func
};
var storeConnect = (0, _reactRedux.connect)(function () {
  return {};
}, function (dispatch) {
  return {
    onLogin: function onLogin(value) {
      return dispatch((0, _loginAction.credentials)(value));
    }
  };
});

var _default = storeConnect(LoginPage);

exports.default = _default;