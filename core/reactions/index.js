"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var match = function match(matcher, action) {
  if ((0, _ramda.is)(Function, matcher)) {
    return matcher(action);
  }

  if ((0, _ramda.is)(Function, matcher.test)) {
    return matcher.test(action.type);
  }

  return matcher === action.type;
};

var markActionToReaction = function markActionToReaction(action) {
  return (0, _ramda.merge)(action, {
    meta: (0, _ramda.merge)(action.meta, {
      isReaction: true
    })
  });
};

var getOnlyReactions = function getOnlyReactions(reactions) {
  return (0, _ramda.map)(function (reaction) {
    return reaction.reaction;
  }, reactions);
};

var filterReactionsForThisAction = function filterReactionsForThisAction(action, objReactions) {
  return (0, _ramda.filter)(function (reaction) {
    return match(reaction.match, action);
  }, objReactions);
};

var isReaction = function isReaction(action) {
  return action.meta && action.meta.isReaction === true;
};

var dispatchAction = function dispatchAction(store) {
  return function (action) {
    return store.dispatch(markActionToReaction(action));
  };
};

var handleArrayOfReactionsToDispatch = function handleArrayOfReactionsToDispatch(reactions, store) {
  return (0, _ramda.forEach)(function (reaction) {
    return dispatchAction(store)(reaction);
  }, reactions);
};

var handleReactionForDispatch = function handleReactionForDispatch(reactions, store) {
  if ((0, _ramda.is)(Array, reactions)) {
    handleArrayOfReactionsToDispatch(reactions, store);
  }

  if ((0, _ramda.is)(Object, reactions) && !(0, _ramda.isEmpty)(reactions)) {
    dispatchAction(store)(reactions);
  }
};

var reactions = function reactions(objReactions) {
  return function (store) {
    return function (next) {
      return function (action) {
        next(action);

        if (isReaction(action)) {
          return;
        }

        var reactionsToDispatch = getOnlyReactions(filterReactionsForThisAction(action, objReactions));

        if ((0, _ramda.isEmpty)(reactionsToDispatch)) {
          return;
        }

        (0, _ramda.forEach)(function (reaction) {
          return handleReactionForDispatch(reaction(action), store);
        }, reactionsToDispatch);
      };
    };
  };
};

var _default = reactions;
exports.default = _default;