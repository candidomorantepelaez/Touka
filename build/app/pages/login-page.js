"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Avatar = _interopRequireDefault(require("@material-ui/core/Avatar"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _inputContext = _interopRequireDefault(require("../../components/forms/input-context"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _LockOutlined = _interopRequireDefault(require("@material-ui/icons/LockOutlined"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _formContext = _interopRequireDefault(require("../../components/forms/form-context"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    main: _defineProperty({
      width: 'auto',
      display: 'block',
      // Fix IE 11 issue.
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3
    }, theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2), {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }),
    paper: {
      marginTop: theme.spacing.unit * 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: "".concat(theme.spacing.unit * 2, "px ").concat(theme.spacing.unit * 3, "px ").concat(theme.spacing.unit * 3, "px")
    },
    avatar: {
      margin: theme.spacing.unit,
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: '100%',
      // Fix IE 11 issue.
      marginTop: theme.spacing.unit
    },
    submit: {
      marginTop: theme.spacing.unit * 3
    }
  };
};

function SignIn(props) {
  var classes = props.classes;
  return _react.default.createElement("main", {
    className: classes.main
  }, _react.default.createElement(_Paper.default, {
    className: classes.paper
  }, _react.default.createElement(_Avatar.default, {
    className: classes.avatar
  }, _react.default.createElement(_LockOutlined.default, null)), _react.default.createElement(_Typography.default, {
    component: "h1",
    variant: "h5"
  }, "Sign in"), _react.default.createElement(_formContext.default, {
    className: classes.form,
    onSubmit: function onSubmit(value) {
      return console.log(value);
    }
  }, _react.default.createElement(_FormControl.default, {
    margin: "normal",
    required: true,
    fullWidth: true
  }, _react.default.createElement(_InputLabel.default, {
    htmlFor: "email"
  }, "Email Address"), _react.default.createElement(_inputContext.default, {
    id: "email",
    name: "email",
    autoFocus: true,
    required: true
  })), _react.default.createElement(_FormControl.default, {
    margin: "normal",
    required: true,
    fullWidth: true
  }, _react.default.createElement(_InputLabel.default, {
    htmlFor: "password"
  }, "Password"), _react.default.createElement(_inputContext.default, {
    name: "password",
    type: "password",
    id: "password",
    required: true
  })), _react.default.createElement(_FormControl.default, {
    margin: "normal",
    required: true,
    fullWidth: true
  }, _react.default.createElement(_InputLabel.default, {
    htmlFor: "username"
  }, "Username"), _react.default.createElement(_inputContext.default, {
    name: "username",
    id: "username"
  })), _react.default.createElement(_FormControlLabel.default, {
    control: _react.default.createElement(_Checkbox.default, {
      value: "remember",
      color: "primary"
    }),
    label: "Remember me"
  }), _react.default.createElement(_Button.default, {
    type: "submit",
    fullWidth: true,
    variant: "contained",
    color: "primary",
    className: classes.submit
  }, "Sign in"))));
}

SignIn.propTypes = {
  classes: _propTypes.default.shape({}).isRequired
};

var _default = (0, _withStyles.default)(styles)(SignIn);

exports.default = _default;