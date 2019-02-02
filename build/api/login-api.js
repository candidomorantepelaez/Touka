"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("./index");

var _getGlobalData = _interopRequireDefault(require("../config/get-global-data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var login = function login(value) {
  return new Promise(function (resolve, reject) {
    (0, _index.post)("".concat(_getGlobalData.default.apiPath).concat(_getGlobalData.default.loginPath), {
      body: value
    }).then(function (res) {
      return res.json().then(function (data) {
        return resolve(data);
      });
    }).catch(function (res) {
      return reject(res);
    });
  });
};

var logout = function logout() {
  return new Promise(function (resolve, reject) {
    (0, _index.get)("".concat(_getGlobalData.default.apiPath).concat(_getGlobalData.default.logoutPath)).then(function (res) {
      return res.json().then(function (data) {
        return resolve(data);
      });
    }).catch(function (res) {
      return reject(res);
    });
  });
};

var _default = {
  login: login,
  logout: logout
};
exports.default = _default;