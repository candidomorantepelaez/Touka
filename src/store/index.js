import { promiseActionMiddleware } from 'fredux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reactions from 'reactions'
import { getReducers, getReactions } from 'modules'


const getStore = modules => createStore(
  getReducers(modules),
  composeWithDevTools(
    applyMiddleware(promiseActionMiddleware,
      reactions(getReactions(modules)))
  )
)

export default getStore
