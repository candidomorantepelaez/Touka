import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const LinkButtonBlock = ({path, text}) => (
  <Link
    className="btn btn-primary btn-lg btn-block"
    to={path}
  >
    <FormattedMessage id={text} />
  </Link>
);

LinkButtonBlock.propTypes = {
  path: PropTypes.string,
  text: PropTypes.string,
};

export default LinkButtonBlock;