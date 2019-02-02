"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.del = exports.put = exports.post = exports.get = void 0;

var _freduxApiUtils = require("fredux-api-utils");

var _routes = require("../routes");

var handlerResponse = function handlerResponse(res) {
  return new Promise(function (resolve, reject) {
    res.then(function (result) {
      if (result.status >= 200 && result.status < 300) {
        resolve(res);
      }

      if (result.status === 401) {
        reject(res);

        _routes.history.push('/touka-no-auth-redirect');
      }

      reject(res);
    });
  });
};

var get = function get(ruta, options) {
  return handlerResponse((0, _freduxApiUtils.get)(ruta, options));
};

exports.get = get;

var post = function post(ruta, options) {
  return handlerResponse((0, _freduxApiUtils.post)(ruta, options));
};

exports.post = post;

var put = function put(ruta, options) {
  return handlerResponse((0, _freduxApiUtils.put)(ruta, options));
};

exports.put = put;

var del = function del(ruta, options) {
  return handlerResponse((0, _freduxApiUtils.del)(ruta, options));
};

exports.del = del;