import React from 'react'
import PropTypes from 'prop-types'
import { objOf, defaultTo } from 'ramda'
import Input from '@material-ui/core/Input'
import FormContext from 'contexts/form-context'


const MyInput = ({
  className, name, autoFocus, disabled, error, type, placeholder,
  required, readOnly, autoComplete,
}) => (
  <FormContext.Consumer>
    {({ formData, onChange }) => (
      <Input
        id={name}
        name={name}
        className={className}
        autoFocus={autoFocus}
        error={error}
        value={defaultTo('')(formData[name])}
        type={type}
        placeholder={placeholder}
        onChange={event => onChange(objOf(name)(event.target.value))}
        readOnly={readOnly}
        required={required}
        autoComplete={autoComplete}
        disabled={disabled}
      />
    )}
  </FormContext.Consumer>
)

MyInput.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  placeholder: PropTypes.string,
  autoFocus: PropTypes.bool,
  autoComplete: PropTypes.string,
}

MyInput.defaultProps = {
  name: '',
  type: 'text',
  className: '',
  required: false,
  readOnly: false,
  disabled: false,
  error: false,
  placeholder: '',
  autoFocus: false,
  autoComplete: 'false',
}

export default MyInput
