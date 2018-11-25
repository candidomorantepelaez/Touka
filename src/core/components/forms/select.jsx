import React from 'react';
import { injectIntl, intlShape, FormattedMessage } from "react-intl";
import { FaInfo } from "react-icons/fa";
import PropTypes from "prop-types";
import { map, addIndex, values } from "ramda";

const Select = (props) => (
  <div
    className={`form-group ${props.className}`}
  >
    <label
      className="col-form-label"
      htmlFor={props.name}
    >
      <FormattedMessage id={props.label} />
      {(props.helpText) ?
        <span
          trigger="click"
          data-toggle="tooltip"
          data-placement="top"
          title={props.intl.formatMessage({ id: props.helpText })}
        >
          <FaInfo className="icono"/>
        </span>
        :
        null
      }
    </label>
    <select
      className={`form-control Form-input-control ${(props.error && props.error.message) ? "invalid-input" : ""}`}
      id={props.name}
      value={props.value}
      name={props.name}
      onChange={value => props.onChange(value)}
      onBlur={value => props.onBlur(value)}
      required={props.required}
      readOnly={props.readOnly}
      disabled={props.disabled}
    >
      {props.options.map((option, key) => (<option key={key} value={option.value}>{option.label}</option>))}
    </select>
    {
      (props.error) ?
      <div className="invalid-input">
        <ul>
          {addIndex(map)((obj, key) => (<li key={key}><FormattedMessage id={obj.message} /></li>),values(props.error))}
        </ul>
      </div>
      :
      null
    }
  </div>
);

Select.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  helpText: PropTypes.string,
  className: PropTypes.string,
  options: PropTypes.array,
  value: PropTypes.any,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
}

export default injectIntl(Select);
