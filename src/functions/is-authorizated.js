import {
  isNil, is, contains,
} from 'ramda'


const isAuthorizated = (currentUser, roles) => {
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

export default isAuthorizated
