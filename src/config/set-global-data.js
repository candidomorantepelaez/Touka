/* global window */

const setGlobalData = (config) => {
  window.appBasePath = config.appBasePath
  window.apiPath = config.apiPath
  window.loginPath = config.loginPath
  window.logoutPath = config.logoutPath
}

export default setGlobalData
