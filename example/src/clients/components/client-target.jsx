import React  from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

const ClientTarget = ({ client }) => (
  <div className="col-md-12">
    <div className="card tarjeta">
      <div className="card-header">
        {client.nombre}
      </div>
      <div className="card-body">
        <p className="card-text">
          <FormattedMessage id="clients.field.phone" />: {client.phone}
        </p>
      </div>
    </div>
  </div>
);

ClientTarget.propTypes = {
  client: PropTypes.object,
};

export default ClientTarget;
