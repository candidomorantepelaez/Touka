import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { isAuthorizated } from 'functions'
import { getCurrentUser } from 'app/reducers/login-reducer'


function withAuthentication(WrappedComponent, options = {}) {
  const storeConnect = connect(
    state => ({
      currentUser: getCurrentUser(state),
    }),
    () => ({})
  )

  const ReturnComponent = ({ currentUser }) => {
    if (isAuthorizated(currentUser, options.role)) {
      return <WrappedComponent currentUser={currentUser} />
    }
    return <p>Hola</p>
  }

  ReturnComponent.propTypes = {
    currentUser: PropTypes.shape({}).isRequired,
  }

  return storeConnect(ReturnComponent)
}

export default withAuthentication
