import { successType, failureType } from 'fredux'
import cookie from 'react-cookies'
import { ON_LOGIN, ON_LOGOUT } from 'actions/login-action'
import history from 'routes/history'
import { openAlert } from 'actions/alert-actions'
import globalData from 'config/get-global-data'


const reactions = [
  {
    match: successType(ON_LOGIN),
    reaction: (value) => {
      cookie.save('user_app', value.payload.response.user, { path: globalData.appBasePath })
      cookie.save('session-id', value.payload.response.sessionId, { path: globalData.appBasePath })
      history.push('/touka-go-home-redirect')
      return openAlert({ type: 'success', message: 'core.alerts.success.login' })
    },
  }, {
    match: failureType(ON_LOGIN),
    reaction: () => openAlert({ type: 'danger', message: 'core.alerts.error.login' }),
  }, {
    match: successType(ON_LOGOUT),
    reaction: () => {
      cookie.remove('user_app', { path: globalData.appBasePath })
      cookie.remove('session-id', { path: globalData.appBasePath })
      history.push('/touka-go-home-redirect')
      return openAlert({ type: 'success', message: 'core.alerts.success.logout' })
    },
  },
]

export default reactions
