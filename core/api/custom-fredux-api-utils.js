"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.customDel = exports.customPut = exports.customPost = exports.customGet = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var array = function array(a) {
  return a instanceof Array ? a : [a];
};

var isFormDataObj = function isFormDataObj(e) {
  return typeof FormData !== "undefined" && e instanceof FormData;
};

var urlParameter = function urlParameter(key, value) {
  return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(value));
};

var toUrlParams = function toUrlParams(obj) {
  return Object.keys(obj).reduce(function (parts, key) {
    var values = array(obj[key]);
    values.forEach(function (value) {
      return parts.push(urlParameter(key, value));
    });
    return parts;
  }, []).join("&");
};

var caseInsensitiveHasKey = function caseInsensitiveHasKey(obj, key) {
  return Object.keys(obj).some(function (k) {
    return k.toLowerCase() === key.toLowerCase();
  });
};

function buildFetchRequest(_ref) {
  var endpoint = _ref.endpoint,
      _ref$options = _ref.options,
      body = _ref$options.body,
      _ref$options$cache = _ref$options.cache,
      cache = _ref$options$cache === void 0 ? "default" : _ref$options$cache,
      _ref$options$credenti = _ref$options.credentials,
      credentials = _ref$options$credenti === void 0 ? "include" : _ref$options$credenti,
      _ref$options$headers = _ref$options.headers,
      headers = _ref$options$headers === void 0 ? {} : _ref$options$headers,
      formData = _ref$options.formData,
      _ref$options$method = _ref$options.method,
      method = _ref$options$method === void 0 ? "GET" : _ref$options$method,
      _ref$options$mode = _ref$options.mode,
      mode = _ref$options$mode === void 0 ? "cors" : _ref$options$mode,
      _ref$options$redirect = _ref$options.redirect,
      redirect = _ref$options$redirect === void 0 ? "follow" : _ref$options$redirect,
      _ref$options$referrer = _ref$options.referrer,
      referrer = _ref$options$referrer === void 0 ? "client" : _ref$options$referrer,
      _ref$options$timeout = _ref$options.timeout,
      timeout = _ref$options$timeout === void 0 ? 0 : _ref$options$timeout;
  var options = {
    cache: cache,
    credentials: credentials,
    headers: headers,
    method: method,
    mode: mode,
    redirect: redirect,
    referrer: referrer,
    timeout: timeout
  };

  if (body && formData) {
    throw new Error("Cannot set multiple body types. Use either body or formData params");
  }

  if (body) {
    options.body = JSON.stringify(body);

    if (!caseInsensitiveHasKey(headers, "Content-Type")) {
      options.headers["Content-Type"] = "application/json";
    }
  }

  if (formData) {
    options.body = formData;

    if (!isFormDataObj(formData)) {
      options.body = toUrlParams(options.body);

      if (!caseInsensitiveHasKey(headers, "Content-Type")) {
        options.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
    }
  }

  return new Request(endpoint, options);
}

var addQuery = function addQuery(endpoint, params) {
  return !params || Object.keys(params).length === 0 ? endpoint : "".concat(endpoint, "?").concat(toUrlParams(params));
};

var makeRequest = function makeRequest(method) {
  return function (endpoint) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var params = options.params,
        rest = _objectWithoutProperties(options, ["params"]);

    var fetchReq = buildFetchRequest({
      endpoint: addQuery(endpoint, params),
      options: _objectSpread({
        method: method
      }, rest)
    });
    return fetch(fetchReq);
  };
};

var customGet = makeRequest("GET");
exports.customGet = customGet;
var customPost = makeRequest("POST");
exports.customPost = customPost;
var customPut = makeRequest("PUT");
exports.customPut = customPut;
var customDel = makeRequest("DELETE");
exports.customDel = customDel;