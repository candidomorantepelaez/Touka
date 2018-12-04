import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import Bluebird from "bluebird";
import { isNil, is, insert } from "ramda";
import Application from "application/application";
import moduleApp from "module/module-app";
import { getMenu, getRoutes, getPageRewiew } from "module";
import getStore from "store";
import history from "routes/history";
import { addLocale, messages } from "i18"

const render = (component) => {
  const node = document.getElementById("root");
  ReactDOM.render(component, node);
}

const prevConfig = () => {
  window.Promise = Bluebird;
  Bluebird.config({ warnings: false });
  window.addEventListener("unhandlerrejection", error => {
    error.preventDefault();
    if (process.env.NODE_ENV !== "production") {
      console.warn("Unhandler promise rejection warning.", error.detail);
    }
  });
}

const createAppModules = config => {
  if (isNil(config) 
    || isNil(config.modules) 
    || !is(Array, config.modules)) {
    return moduleApp;
  }
  return insert(0, moduleApp, config.modules);
}

const renderApplication = (config) => {
  prevConfig();
  addLocale();

  const modules = createAppModules(config);

  render(
    <Application 
      store={getStore(modules)}
      language={config.defaultLanguage}
      messages={messages(config.languages, modules)[config.defaultLanguage]}
      history={history}
      menu={getMenu(modules)} 
      routes={getRoutes(modules)}
      pageReviews={getPageRewiew(modules)}
    />
  );
}

export default renderApplication;