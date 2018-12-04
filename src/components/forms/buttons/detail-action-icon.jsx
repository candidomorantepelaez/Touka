import React from "react";
import PropTypes from "prop-types"
import { injectIntl, intlShape } from "react-intl";
import { Link } from "react-router-dom";
import { MdAccountBox } from "react-icons/md";

const DetailActionIcon = ({path, intl}) => (
  <Link
    to={path}
    data-toggle="tooltip"
    data-placement="top"
    title={intl.formatMessage({ id: "core.detail" })}
  >
    <MdAccountBox className="icono" />
  </Link>
);

DetailActionIcon.propTypes = {
  path: PropTypes.string,
  intl: intlShape.isRequired,
}

export default injectIntl(DetailActionIcon);