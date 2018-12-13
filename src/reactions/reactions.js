import {
  merge, filter, map, isEmpty, forEach, is,
} from 'ramda'


const match = (matcher, action) => {
  if (is(Function, matcher)) {
    return matcher(action)
  }

  if (is(Function, matcher.test)) {
    return matcher.test(action.type)
  }

  return matcher === action.type
}

const markActionToReaction = action => merge(action, { meta: merge(action.meta, { isReaction: true }) })

const getOnlyReactions = reactions => map(reaction => reaction.reaction, reactions)

const filterReactionsForThisAction = (action, objReactions) => filter(reaction => match(reaction.match, action), objReactions)

const isReaction = action => (action.meta && action.meta.isReaction === true)

const dispatchAction = store => action => store.dispatch(markActionToReaction(action))

const handleArrayOfReactionsToDispatch = (reactions, store) => forEach(reaction => dispatchAction(store)(reaction), reactions)

const handleReactionForDispatch = (reactions, store) => {
  if (is(Array, reactions)) {
    handleArrayOfReactionsToDispatch(reactions, store)
  }
  if (is(Object, reactions) && !isEmpty(reactions)) {
    dispatchAction(store)(reactions)
  }
}

const reactions = objReactions => store => next => (action) => {
  next(action)

  if (isReaction(action)) {
    return
  }

  const reactionsToDispatch = getOnlyReactions(filterReactionsForThisAction(action, objReactions))

  if (isEmpty(reactionsToDispatch)) {
    return
  }

  forEach(reaction => handleReactionForDispatch(reaction(action), store), reactionsToDispatch)
}

export default reactions
