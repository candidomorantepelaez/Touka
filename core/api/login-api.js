"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("./index");

var _constans = require("../constans");

var credentials = function credentials(value) {
  return new Promise(function (resolve, reject) {
    (0, _index.post)("".concat(_constans.apiPath, "/credentials"), {
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
    (0, _index.get)("".concat(_constans.apiPath, "/logout")).then(function (res) {
      return res.json().then(function (data) {
        return resolve(data);
      });
    }).catch(function (res) {
      return reject(res);
    });
  });
};

var _default = {
  credentials: credentials,
  logout: logout
};
exports.default = _default;