import React from "react";
import PropTypes from "prop-types"
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

const EditButton = ({path}) => (
  <Link
    className="btn btn-primary boton-tarjeta"
    to={path}
  >
    <FormattedMessage id="core.edit" />
  </Link>
);

EditButton.propTypes = {
  path: PropTypes.string,
}

export default EditButton;