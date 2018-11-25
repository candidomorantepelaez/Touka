import "babel-polyfill";
import ReactDOM from "react-dom";
import Bluebird from "bluebird";
import { isNil, is, insert } from "ramda";
import registerServiceWorker from "registerServiceWorker";
import application from "core/application/application";
import moduleApp from "core/module/module-app";
import { getMenu, getRoutes, getPageRewiew } from "core/module";
import getStore from "core/store";
import history from "core/routes/history";
import { addLocale, messages } from "core/i18"
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/esm/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "assets/css/index.css";

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
  
  const Application = application(
    {
      store: getStore(modules),
      language: config.defaultLanguage,
      messages: messages(config.languages, modules)[config.defaultLanguage],
      history: history,
      menu: getMenu(modules), 
      routes: getRoutes(modules),
      pageReviews: getPageRewiew(modules),
    }
  ); 

  registerServiceWorker();
  render(Application);
}

export default renderApplication;