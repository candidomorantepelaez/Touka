import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'


const AlertComponent = ({ type, message }) => (
  <div className={`alert-${type}`}>
    <FormattedMessage id={message} />
    <button type="button">
      <span>&times;</span>
    </button>
  </div>
)

AlertComponent.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
}

export default AlertComponent
