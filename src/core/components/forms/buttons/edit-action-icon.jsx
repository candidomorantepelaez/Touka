import React from "react";
import PropTypes from "prop-types"
import { injectIntl, intlShape } from "react-intl";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

const EditActionIcon = ({path, intl}) => (
  <Link
    to={path}
    data-toggle="tooltip"
    data-placement="top"
    title={intl.formatMessage({ id: "core.edit" })}
  >
    <FaEdit className="icono" />
  </Link>
);

EditActionIcon.propTypes = {
  path: PropTypes.string,
  intl: intlShape.isRequired,
}

export default injectIntl(EditActionIcon);
