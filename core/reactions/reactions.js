"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.matches = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
* hoc function for including param in the action
*/
var withMetaReaction = function withMetaReaction(action) {
  return _objectSpread({}, action, {
    meta: _objectSpread({}, action.meta, {
      __AMIGA_REACTION__: true
    })
  });
};
/*
 * function for check if the action match with the math in the object.
 * this matchs can be string, regExp or functions.
 */


var matches = function matches(matcher, action) {
  if (typeof matcher === 'function') {
    return matcher(action);
  }

  if (matcher.test) {
    return matcher.test(action.type);
  }

  return matcher === action.type;
};
/*
 *middleware for reactions.
 */


exports.matches = matches;

var reactions = function reactions(mappings) {
  var reactionMatcher = function reactionMatcher(action) {
    return mappings.filter(function (_ref) {
      var match = _ref.match;
      return matches(match, action);
    }).map(function (_ref2) {
      var reaction = _ref2.reaction;
      return reaction;
    });
  };

  return function (store) {
    return function (next) {
      return function (action) {
        next(action); // Dont infinite reactions

        if (action.meta && action.meta.reaction) {
          return;
        }

        var reactionFns = reactionMatcher(action);

        if (reactionFns.length) {
          reactionFns.forEach(function (reactionFn) {
            var reactionsForDispatch = [reactionFn(action)];
            reactionsForDispatch.forEach(function (reaction) {
              if (reaction) {
                store.dispatch(withMetaReaction(reaction));
              }
            });
          });
        }
      };
    };
  };
};

var _default = reactions;
exports.default = _default;