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
    var configData = (0, _getGlobalData.default)();
    (0, _index.post)("".concat(configData.apiBasePath).concat(configData.apiLoginPath), {
      body: value,
      mode: 'cors'
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
    var configData = (0, _getGlobalData.default)();
    (0, _index.get)("".concat(configData.apiBasePath).concat(configData.apiLogoutPath), {
      mode: 'cors',
      credentials: 'include'
    }).then(function (res) {
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