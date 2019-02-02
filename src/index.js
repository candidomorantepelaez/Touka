import 'babel-polyfill'
import { merge, defaultTo } from 'ramda'
import initialConfig from 'config'
import { mergeModules } from 'functions'
import { render, createProviders } from 'application'
import { getMenu, getRoutes, getPageRewiew } from 'modules'
import getStore from 'store'
import { messages, initDefaultLocales } from 'i18n'
import setGlobalData from 'config/set-global-data'
import 'typeface-roboto'


const createAppTouka = (userConfig = {}) => {
  const config = merge(defaultTo({})(userConfig.config), initialConfig.config)

  const modules = mergeModules(userConfig.modules, initialConfig.modules)

  const moduleConfig = {
    store: getStore(modules),
    messages: messages(config.languages, modules)[config.defaultLanguage],
    menu: getMenu(modules),
    routes: getRoutes(modules),
    pageReviews: getPageRewiew(modules),
  }

  initDefaultLocales(config.languages)

  setGlobalData(config)

  render(createProviders(merge(config, moduleConfig)))
}

export default createAppTouka
