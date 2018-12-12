import { successType, failureType } from 'fredux'
import cookie from 'react-cookies'
import { ON_LOGIN, ON_LOGOUT } from 'actions/login-action'
import history from 'routes/history'
import { openAlert } from 'actions/alert-actions'


const reactions = [
  {
    match: successType(ON_LOGIN),
    reaction: (value) => {
      cookie.save('user_app', value.payload.response.user, { path: '/' })
      cookie.save('session-id', value.payload.response.user.sessionId, { path: '/' })
      history.push('/home')
      return openAlert({ type: 'success', message: 'core.alerts.success.login' })
    },
  }, {
    match: failureType(ON_LOGIN),
    reaction: () => openAlert({ type: 'danger', message: 'core.alerts.error.login' }),
  }, {
    match: successType(ON_LOGOUT),
    reaction: () => {
      cookie.remove('user_app', { path: '/' })
      cookie.remove('session-id', { path: '/' })
      history.push('/login')
      return openAlert({ type: 'success', message: 'core.alerts.success.logout' })
    },
  },
]

export default reactions
