import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { isAuthorizated, getReturn } from 'functions/authen'
import { getCurrentUser } from 'reducers/login-reducer'
import LoginPage from 'pages/login/login-page'


function withAuthentication(WrappedComponent, options = {}) {
  const storeConnect = connect(
    state => ({
      currentUser: getCurrentUser(state),
    }),
    () => ({})
  )

  return storeConnect(class extends Component {
    static propTypes = {
      currentUser: PropTypes.shape({}).isRequired,
    }

    render() {
      const { currentUser } = this.props
      if (isAuthorizated(currentUser, options.role)) {
        return <WrappedComponent currentUser={currentUser} {...this.props} />
      }
      return getReturn(options.onFalse)
    }
  })
}

export default withAuthentication
