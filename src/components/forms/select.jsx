/* eslint-disable */
import React from 'react'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'
import { FaInfo } from 'react-icons/fa'
import PropTypes from 'prop-types'
import {
  map, addIndex, values,
} from 'ramda'


const Select = ({
  className, name, label, helpText, intl, error, value, onChange, onBlur, required, disabled, readOnly, options,
}) => (
  <div
    className={`form-group ${className}`}
  >
    <label
      className="col-form-label"
      htmlFor={name}
    >
      <FormattedMessage id={label} />
      {(helpText)
        ? (
          <span
            trigger="click"
            data-toggle="tooltip"
            data-placement="top"
            title={intl.formatMessage({ id: helpText })}
          >
            <FaInfo className="icono" />
          </span>)
        : null
      }
      <select
        className={`form-control Form-input-control ${(error && error.message) ? 'invalid-input' : ''}`}
        id={name}
        value={value}
        name={name}
        onChange={newValue => onChange(newValue)}
        onBlur={newValue => onBlur(newValue)}
        required={required}
        readOnly={readOnly}
        disabled={disabled}
      >
        {addIndex(map)((option, idx) => (<option key={idx} value={option.value}>{option.label}</option>), options)}
      </select>
      {
        (error)
          ? (
            <div className="invalid-input">
              <ul>
                {addIndex(map)((obj, idx) => (<li key={idx}><FormattedMessage id={obj.message} /></li>), values(error))}
              </ul>
            </div>)
          : null
      }
    </label>
  </div>
)

Select.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  helpText: PropTypes.string,
  className: PropTypes.string,
  options: PropTypes.arrayOf({}),
  value: PropTypes.arrayOf({}),
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.shape({}),
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
}

Select.defaultProps = {
  name: '',
  label: '',
  helpText: '',
  className: '',
  options: [],
  value: '',
  required: false,
  readOnly: false,
  disabled: false,
  error: false,
}

export default injectIntl(Select)
