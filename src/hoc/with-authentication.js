import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cookie from 'react-cookies'
import { isNil } from 'ramda'
import { isAuthorizated } from 'functions'
import globalData from 'config/get-global-data'
import { saveCurrentUser } from 'actions/login-action'
import { getCurrentUser } from 'app/reducers/login-reducer'


function withAuthentication(WrappedComponent, options = {}) {
  const storeConnect = connect(
    state => ({
      currentUser: getCurrentUser(state),
    }),
    dispatch => ({
      saveCookieUser: user => dispatch(saveCurrentUser(user)),
    })
  )

  const ReturnComponent = ({ currentUser, saveCookieUser }) => {
    const getCookieUser = () => {
      const configData = globalData()
      const userTemp = cookie.load('user_app', { path: configData.appBasePath })
      if (!isNil(userTemp)) {
        const user = JSON.parse(userTemp)
        saveCookieUser(user)
        return user
      }
      return {}
    }

    const user = isNil(currentUser.role) ? getCookieUser() : currentUser

    if (isAuthorizated(user, options.roles)) {
      return <WrappedComponent currentUser={currentUser} />
    }
    return options.onAuthenticationFailed()
  }

  ReturnComponent.propTypes = {
    currentUser: PropTypes.shape({}).isRequired,
  }

  return storeConnect(ReturnComponent)
}

export default withAuthentication
