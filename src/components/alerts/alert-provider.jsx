import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addIndex, map } from 'ramda'
import { getAlerts } from 'app/reducers/alert-reducer'
import Alert from 'components/alerts/alert'


const AlertProvider = ({ alerts }) => {
  if (alerts.length > 0) {
    return (
      <div>
        {addIndex(map)((alert, key) => <Alert type={alert.type} id={key} message={alert.message} key={key} />, alerts)}
      </div>
    )
  }
  return null
}

AlertProvider.propTypes = {
  alerts: PropTypes.arrayOf(PropTypes.object),
}

AlertProvider.defaultProps = {
  alerts: [],
}

const storeConnect = connect(
  state => ({
    alerts: getAlerts(state),
  }),
  () => ({}),
)

export default storeConnect(AlertProvider)
