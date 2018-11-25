import { promiseActionMiddleware } from "fredux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "core/reactions/logger-reaction";
import reactions from "core/reactions/reactions";
import { getReducers, getReactions } from "core/module";
import crashReporter from "core/reactions/crash-reporter-reaction";

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