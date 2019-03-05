import { successType, failureType } from 'fredux'
import cookie from 'react-cookies'
import { ON_LOGIN, ON_LOGOUT } from 'actions/login-action'
import history from 'routes/history'
import { openMessage } from 'actions/alert-actions'
import globalData from 'config/get-global-data'


const reactions = [
  {
    match: successType(ON_LOGIN),
    reaction: (value) => {
      const configData = globalData()
      cookie.save('user_app', value.payload.response.user, { path: configData.appBasePath })
      cookie.save('session-id', value.payload.response.sessionId, { path: configData.appBasePath })
      history.push(configData.appBasePath)
      return openMessage({ type: 'success', message: 'core.alerts.success.login' })
    },
  }, {
    match: failureType(ON_LOGIN),
    reaction: () => openMessage({ type: 'danger', message: 'core.alerts.error.login' }),
  }, {
    match: successType(ON_LOGOUT),
    reaction: () => {
      const configData = globalData()
      cookie.remove('user_app', { path: configData.appBasePath })
      cookie.remove('session-id', { path: configData.appBasePath })
      history.push(configData.appBasePath)
      return openMessage({ type: 'success', message: 'core.alerts.success.logout' })
    },
  },
]

export default reactions
