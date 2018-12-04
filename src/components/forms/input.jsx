import React from "react";
import { injectIntl, intlShape, FormattedMessage } from "react-intl";
import { FaInfo } from "react-icons/fa";
import PropTypes from "prop-types";
import { map, addIndex, values } from "ramda";

const Input = (props) => (
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
    <input
      autoComplete="false"
      className={`form-control Form-input-control ${(props.error && props.error.message) ? "invalid-input" : ""}`}
      id={props.name}
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      name={props.name}
      onChange={value => props.onChange(value)}
      onBlur={value => props.onBlur(value)}
      required={props.required}
      readOnly={props.readOnly}
      disabled={props.disabled}
    />
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

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  helpText: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
}

export default injectIntl(Input);
