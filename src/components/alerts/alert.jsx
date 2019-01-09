import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'


const Alert = ({ type, message }) => (
  <div className={`alert alert-${type} alert-dismissible fade show`} role="alert">
    <FormattedMessage id={message} />
    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
)

Alert.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
}

export default Alert
