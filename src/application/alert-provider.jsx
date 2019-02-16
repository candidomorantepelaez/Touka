import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addIndex, map } from 'ramda'
import { getAlerts } from 'app/reducers/alert-reducer'
import { ConfigContext } from 'contexts'


const AlertProvider = ({ alerts }) => {
  if (alerts.length > 0) {
    return (
      <ConfigContext.Consumer>
        {({ AlertComponent }) => (
          <div>
            {addIndex(map)((alert, key) => React.createElement(AlertComponent, {
              type: alert.type,
              id: key,
              message: alert.message,
              key,
            }))}
          </div>
        )}
      </ConfigContext.Consumer>
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
