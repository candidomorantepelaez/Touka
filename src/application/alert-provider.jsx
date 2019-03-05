import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addIndex, map } from 'ramda'
import { getAlerts } from 'app/reducers/alert-reducer'
import { closeMessage } from 'actions/alert-actions'
import { ConfigContext } from 'contexts'


const AlertProvider = ({ alerts, closeAlert }) => {
  if (alerts.length > 0) {
    return (
      <ConfigContext.Consumer>
        {({ alertComponent }) => (
          <div>
            {addIndex(map)((alert, key) => React.createElement(alertComponent, {
              type: alert.type,
              id: key,
              message: alert.message,
              key,
              onClose: () => closeAlert(alert),
            }), alerts)}
          </div>
        )}
      </ConfigContext.Consumer>
    )
  }
  return null
}

AlertProvider.propTypes = {
  alerts: PropTypes.arrayOf(PropTypes.object),
  closeAlert: PropTypes.func.isRequired,
}

AlertProvider.defaultProps = {
  alerts: [],
}

const storeConnect = connect(
  state => ({
    alerts: getAlerts(state),
  }),
  dispatch => ({
    closeAlert: alert => dispatch(closeMessage(alert)),
  }),
)

export default storeConnect(AlertProvider)
