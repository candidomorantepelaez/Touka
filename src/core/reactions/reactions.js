/*
* hoc function for including param in the action
*/
const withMetaReaction = action => ({
  ...action,
  meta: {
    ...action.meta,
    __AMIGA_REACTION__: true,
  },
});

/*
 * function for check if the action match with the math in the object.
 * this matchs can be string, regExp or functions.
 */
export const matches = (matcher, action) => {
  if (typeof matcher === "function") {
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
const reactions = mappings => {
  const reactionMatcher = action =>
    mappings.filter(({ match }) => matches(match, action)).map(({ reaction }) => reaction);

  return store => next => action => {
    next(action);

    // Dont infinite reactions
    if (action.meta && action.meta.reaction) {
      return;
    }

    const reactionFns = reactionMatcher(action);

    if (reactionFns.length) {
      reactionFns.forEach(reactionFn => {
        const reactions = [reactionFn(action)];
        reactions.forEach(reaction => {
          if (reaction) {
            store.dispatch(withMetaReaction(reaction));
          }
        });
      });
    }
  };
};

export default reactions;