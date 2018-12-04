"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPageRewiew = exports.getReactions = exports.getReducers = exports.getRoutes = exports.getMessages = exports.mergeLang = exports.getMenu = void 0;

var _ramda = require("ramda");

var _redux = require("redux");

// the menus
var getMenu = function getMenu(modules) {
  return (0, _ramda.chain)(function (obj) {
    return obj.menu;
  }, (0, _ramda.filter)(function (obj) {
    return (0, _ramda.isNil)(obj.menu) === false;
  }, modules));
}; // the messages


exports.getMenu = getMenu;

var mergeLang = function mergeLang(lang, modules) {
  return (0, _ramda.mergeAll)((0, _ramda.map)(function (obj) {
    return obj.messages[lang];
  }, (0, _ramda.filter)(function (obj) {
    return (0, _ramda.isNil)(obj.messages) === false;
  }, modules)));
}; // the languages


exports.mergeLang = mergeLang;

var getMessages = function getMessages(languages, modules) {
  return (0, _ramda.mergeAll)((0, _ramda.map)(function (lang) {
    return (0, _ramda.objOf)(lang)(mergeLang(lang, modules));
  }, languages));
}; // the routes


exports.getMessages = getMessages;

var getRoutes = function getRoutes(modules) {
  var onlyWithRoutes = (0, _ramda.filter)(function (obj) {
    return (0, _ramda.isNil)(obj.routes) === false;
  }, modules);
  console.log(onlyWithRoutes);
  var result = (0, _ramda.chain)(function (obj) {
    return obj.routes;
  }, onlyWithRoutes);
  console.log(result);
  return result;
}; // the new reducers


exports.getRoutes = getRoutes;

var getReducers = function getReducers(modules) {
  return (0, _redux.combineReducers)((0, _ramda.mergeAll)((0, _ramda.map)(function (obj) {
    return (0, _ramda.objOf)(obj.key)(obj.reducer);
  }, (0, _ramda.filter)(function (obj) {
    return (0, _ramda.isNil)(obj.reducer) === false;
  }, modules))));
}; // the reactions


exports.getReducers = getReducers;

var getReactions = function getReactions(modules) {
  return (0, _ramda.chain)(function (obj) {
    return obj.reactions;
  }, (0, _ramda.filter)(function (obj) {
    return (0, _ramda.isNil)(obj.reactions) === false;
  }, modules));
}; // the menus


exports.getReactions = getReactions;

var getPageRewiew = function getPageRewiew(modules) {
  return (0, _ramda.chain)(function (obj) {
    return obj.pageReview;
  }, (0, _ramda.filter)(function (obj) {
    return (0, _ramda.isNil)(obj.pageReview) === false;
  }, modules));
};

exports.getPageRewiew = getPageRewiew;