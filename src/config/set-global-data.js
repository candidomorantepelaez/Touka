/* global window */

const setGlobalData = (config) => {
  window.appBasePath = config.appBasePath
  window.apiBasePath = config.apiBasePath
  window.apiLoginPath = config.apiLoginPath
  window.apiLogoutPath = config.apiLogoutPath
}

export default setGlobalData
