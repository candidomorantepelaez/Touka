"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.del = exports.put = exports.post = exports.get = void 0;

var _customFreduxApiUtils = require("./custom-fredux-api-utils");

var _history = _interopRequireDefault(require("../routes/history"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handlerResponse = function handlerResponse(res) {
  return new Promise(function (resolve, reject) {
    res.then(function (res) {
      if (res.status === 200) {
        resolve(res);
      }

      if (res.status === 401) {
        reject(res);

        _history.default.push("/login");
      }

      reject(res);
    });
  });
};

var get = function get(ruta, options) {
  return handlerResponse((0, _customFreduxApiUtils.customGet)(ruta, options));
};

exports.get = get;

var post = function post(ruta, options) {
  return handlerResponse((0, _customFreduxApiUtils.customPost)(ruta, options));
};

exports.post = post;

var put = function put(ruta, options) {
  return handlerResponse((0, _customFreduxApiUtils.customPut)(ruta, options));
};

exports.put = put;

var del = function del(ruta, options) {
  return handlerResponse((0, _customFreduxApiUtils.customDel)(ruta, options));
};

exports.del = del;