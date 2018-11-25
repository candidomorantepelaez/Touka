import { OPEN_ALERT, CLOSE_ALERT } from "./../actions/alert-actions";
import { combineReducers } from 'redux';
import { insert } from "ramda";

const initialState = {
  alerts: {
    alerts: [],
  },
};

export function alerts(state=initialState.alerts.alerts, { type, payload }) {
  switch(type){
    case OPEN_ALERT:
      return insert(state.length, payload, state);
    case CLOSE_ALERT:
      return payload;
    default:
      return state;
  }
}

const getAlertsState = (state) => state.core.alerts;

export const getAlerts = state => getAlertsState(state).alerts;

export default combineReducers({
  alerts,
});