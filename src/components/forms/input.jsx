import React from 'react'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'
import { FaInfo } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { map, addIndex, values } from 'ramda'


const Input = ({
  className, name, label, helpText, intl, error, type, value, placeholder, onChange, onBlur, required, readOnly, disabled,
}) => (
  <div
    className={`form-group ${className}`}
  >
    <label htmlFor={name} className="col-form-label">
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
      <input
        autoComplete="false"
        className={`form-control Form-input-control ${(error && error.message) ? 'invalid-input' : ''}`}
        id={name}
        type={type}
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={newValue => onChange(newValue)}
        onBlur={newValue => onBlur(newValue)}
        required={required}
        readOnly={readOnly}
        disabled={disabled}
      />
      {
        (error)
          ? (
            <div className="invalid-input">
              <ul>
                {addIndex(map)((obj, key) => (<li key={key}><FormattedMessage id={obj.message} /></li>), values(error))}
              </ul>
            </div>)
          : null
      }
    </label>
  </div>
)

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
  error: PropTypes.shape({}),
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
}

Input.defaultProps = {
  name: '',
  label: '',
  helpText: '',
  type: 'text',
  className: '',
  value: '',
  required: false,
  readOnly: false,
  disabled: false,
  error: {},
  placeholder: '',
}

export default injectIntl(Input)
