import { combineReducers } from 'redux'
import { insert, filter } from 'ramda'
import { OPEN_MESSAGE, CLOSE_MESSAGE } from 'actions/alert-actions'


const initialState = {
  alerts: {
    alerts: [],
  },
}

export function alerts(state = initialState.alerts.alerts, { type, payload }) {
  switch (type) {
    case OPEN_MESSAGE:
      return insert(state.length, payload, state)
    case CLOSE_MESSAGE:
      return filter(alert => payload.message !== alert.message, state)
    default:
      return state
  }
}

const getAlertsState = state => state.core.alerts

export const getAlerts = state => getAlertsState(state).alerts

export default combineReducers({
  alerts,
})
