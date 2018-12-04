import React from "react";
import PropTypes from "prop-types"
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

const DetailButton = ({path, intl}) => (
  <Link
    className="btn btn-secondary boton-tarjeta"
    to={path}
  >
    <FormattedMessage id="core.detail" />
  </Link>
);

DetailButton.propTypes = {
  path: PropTypes.string,
}

export default DetailButton;