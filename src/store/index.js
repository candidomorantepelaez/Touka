import { promiseActionMiddleware } from "fredux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "reactions/logger-reaction";
import reactions from "reactions/reactions";
import { getReducers, getReactions } from "module";
import crashReporter from "reactions/crash-reporter-reaction";

const getStore = modules => {
  return createStore(getReducers(modules), composeWithDevTools(
    applyMiddleware(promiseActionMiddleware,
      logger,
      crashReporter,
      reactions(getReactions(modules)),
    )
  ))
}


export default getStore;