import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

const Alert = (props) => (
  <div className={`alert alert-${props.type} alert-dismissible fade show`} role="alert">
    <FormattedMessage id={props.message} />
    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
);

Alert.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
  id: PropTypes.number,
};

export default Alert;
