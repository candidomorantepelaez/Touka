/* global document */
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {
  isNil, is, append, merge, find,
} from 'ramda'
import Application from 'application/application'
import moduleApp from 'app/module'
import { getMenu, getRoutes, getPageRewiew } from 'module'
import getStore from 'store'
import history from 'routes/history'
import { initDefaultLocales, messages } from 'i18'
import ConfigContext from 'contexts/config-context'


const render = (component) => {
  const node = document.getElementById('root')
  ReactDOM.render(component, node)
}

const insertAppModule = (config) => {
  if (isNil(config) || isNil(config.modules) || !is(Array, config.modules)) {
    return merge(config, { modules: moduleApp })
  }
  const coreModule = find(module => module.key === 'core', config.module)
  if (isNil(coreModule)) {
    return merge(config, append(moduleApp, config.modules))
  }
  return config
}

const createAppTouka = (config) => {
  initDefaultLocales()

  const configWithAppModule = insertAppModule(config)

  render(
    <ConfigContext.Provider value={configWithAppModule}>
      <Application
        store={getStore(configWithAppModule.modules)}
        language={config.defaultLanguage}
        messages={messages(config.languages, configWithAppModule.modules)[config.defaultLanguage]}
        history={history}
        menu={getMenu(configWithAppModule.modules)}
        routes={getRoutes(configWithAppModule.modules)}
        pageReviews={getPageRewiew(configWithAppModule.modules)}
      />
    </ConfigContext.Provider>
  )
}

export default createAppTouka
