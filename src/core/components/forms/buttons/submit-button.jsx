import React from 'react';
import { FormattedMessage } from 'react-intl';
import { defaultTo } from "ramda";

const defaultLabel = defaultTo("core.save")

const SubmitButton = (props) => (
  <button
    className={"btn btn-primary "+props.className}
    type="submit"
  >
    <FormattedMessage id={defaultLabel(props.label)} />
  </button>
);

export default SubmitButton;
