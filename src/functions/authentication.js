import {
  isNil, is, contains,
} from 'ramda'


export const getReturn = (option) => {
  if (option === 'login') {
    return (<LoginPage />)
  }
  if (option === 'text') {
    return (<p><FormattedMessage id="core.authentication.unauthorized" /></p>)
  }
  return null
}

export const isAuthorizated = (currentUser, roles) => {
  if (isNil(currentUser.role)) {
    return false
  }
  if (isNil(roles)) {
    return true
  }
  if (is(Array, roles)) {
    return contains(currentUser.role, roles)
  }
  if (is(String, roles)) {
    return (roles === currentUser.role)
  }
  return false
}
