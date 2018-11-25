import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAlerts } from "core/reducers/alert-reducer";
import Alert from "core/components/alerts/alert";

const AlertPage = props => (
  (props.alerts.length > 0) ?
    <div>
      {props.alerts.map((alert, key) =>
        <Alert type={alert.type} id={key} message={alert.message} key={key} />
      )}
    </div>
    :
    null
);

AlertPage.propTypes = {
  alerts: PropTypes.array,
};

const storeConnect = connect(
  (state) => ({
    alerts: getAlerts(state),
  }),
  () => ({}),
);

export default storeConnect(AlertPage);
