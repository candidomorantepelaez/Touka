import React from 'react';
import history from "core/routes/history";
import { FormattedMessage } from 'react-intl';

const BackButton = () => (
  <button
    className="btn btn-secondary boton-tarjeta"
    onClick={() => history.goBack()}
  >
    <FormattedMessage id="core.back" />
  </button>
);

export default BackButton;
