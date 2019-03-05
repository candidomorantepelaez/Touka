/* global window */

const getGlobalData = () => ({
  appBasePath: window.appBasePath,
  apiBasePath: window.apiBasePath,
  apiLoginPath: window.apiLoginPath,
  apiLogoutPath: window.apiLogoutPath,
})

export default getGlobalData
