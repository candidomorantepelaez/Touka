import React from "react";
import { FormattedMessage } from "react-intl";
import history from "routes/history";

const BackButton = () => (
  <button
    className="btn btn-secondary boton-tarjeta"
    onClick={() => history.goBack()}
  >
    <FormattedMessage id="core.back" />
  </button>
);

export default BackButton;
