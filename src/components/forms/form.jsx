import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Select from 'components/forms/select'
import Input from 'components/forms/Input'
import {
  reduce, isNil, isEmpty, omit, merge, objOf, filter, addIndex, map,
} from 'ramda'


const isValidForm = errors => isEmpty(filter(error => !isEmpty(error), errors))

class Form extends Component {
  static propTypes = {
    initialValue: PropTypes.shape({}),
    options: PropTypes.shape({}),
    fields: PropTypes.shape({}).isRequired,
    onSubmit: PropTypes.func.isRequired,
    actions: PropTypes.arrayOf(PropTypes.object),
  }

  static defaultProps = {
    initialValue: {},
    options: {},
    actions: [],
  }

  constructor(props) {
    super(props)
    this.handlerSubmit = this.handlerSubmit.bind(this)
    this.handleOnBlur = this.handleOnBlur.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.manageErrors = this.manageErrors.bind(this)
    this.validateRequiredOnSubmit = this.validateRequiredOnSubmit.bind(this)
    this.validate = this.validate.bind(this)
    this.getField = this.getField.bind(this)
    this.state = {
      formData: this.getInitialValue(),
      errors: {},
    }
  }

  getInitialValue() {
    const { initialValue } = this.props
    return initialValue
  }

  getField(field, key) {
    const { options } = this.props
    const { formData, errors } = this.state

    switch (field.type) {
      case 'select':
        return (
          <Select
            key={key}
            name={field.name}
            label={field.label}
            options={options[field.name] || []}
            helpText={field.helpText}
            className={field.className}
            value={formData[field.name] || ''}
            required={field.required}
            readOnly={field.readOnly}
            disabled={field.disabled}
            error={errors[field.name]}
            onChange={evt => this.handleChange(field, evt)}
            onBlur={evt => this.handleOnBlur(field, evt)}
          />
        )
      default:
        return (
          <Input
            type={field.type}
            value={formData[field.name] || ''}
            id={field.name}
            name={field.name}
            required={field.required}
            readOnly={field.readOnly}
            disabled={field.disabled}
            error={errors[field.name]}
            onChange={evt => this.handleChange(field, evt)}
            onBlur={evt => this.handleOnBlur(field, evt)}
          />
        )
    }
  }

  handlerSubmit(evt) {
    const { fields, onSubmit, initialValue } = this.props
    const { errors, formData } = this.state
    evt.preventDefault()
    const submitErrors = reduce(this.validateRequiredOnSubmit, {}, fields)
    if (isEmpty(submitErrors) === false) {
      this.setState({ errors: merge(errors, submitErrors) })
      return
    }
    if (isValidForm(errors)) {
      onSubmit(formData)
      this.setState({ formData: initialValue || {} })
    }
  }

  validateRequiredOnSubmit(value, field) {
    const { formData, errors } = this.state
    if (field.required === true) {
      if (isNil(formData[field.name]) || formData[field.name] === '') {
        return merge(value, merge(errors[field.name], objOf(field.name)({ required: { message: 'core.field.required' } })))
      }
    }
    return value
  }

  handleOnBlur(field, event) {
    if (field.onBlur) {
      field.onBlur(event.target.value)
    }

    if (field.required === true) {
      if (event.target.value === '') {
        this.insertErrorOnForm(field.name, 'required', { message: 'core.field.required' })
      } else {
        this.removeErrorOnForm(field.name, 'required')
      }
    }

    if (field.validateOnBlur) {
      this.validate(field.name, 'onBlur', field.validateOnBlur, event.target.value)
    }
  }

  handleChange(field, event) {
    const { formData } = this.state
    this.setState({ formData: merge(formData, objOf(event.target.name)(event.target.value)) })

    if (field.onChange) {
      field.onChange(event.target.value)
    }

    if (field.required === true) {
      if (event.target.value === '') {
        this.insertErrorOnForm(field.name, 'required', { message: 'core.field.required' })
      } else {
        this.removeErrorOnForm(field.name, 'required')
      }
    }

    if (field.validateOnChange) {
      this.validate(field.name, 'onChange', field.validateOnChange, event.target.value)
    }
  }

  manageErrors(key, type, error) {
    const { errors } = this.state
    if (isNil(error)) {
      if (isNil(errors[key]) === false && isNil(errors[key][type]) === false) {
        this.removeErrorOnForm(key, type)
        return
      }
      return
    }
    this.insertErrorOnForm(key, type, error)
  }

  insertErrorOnForm(key, type, error) {
    const { errors } = this.state
    this.setState({ errors: merge(errors, objOf(key)(merge(errors[key], objOf(type)(error)))) })
  }

  removeErrorOnForm(key, type) {
    const { errors } = this.state
    this.setState({ errors: merge(errors, objOf(key)(omit([type], errors[key]))) })
  }

  validate(key, type, validateFn, value) {
    if (validateFn) {
      this.manageErrors(key, type, validateFn(value))
    }
  }

  render() {
    const { fields, actions } = this.props
    return (
      <form
        className="form-container needs-validation"
        onSubmit={evt => this.handlerSubmit(evt)}
        autoComplete="false"
        noValidate
      >
        <div className="row">
          {
            addIndex(map)((field, idx) => this.getField(field, idx), fields)
          }
        </div>
        {
          addIndex(map)((obj, idx) => React.cloneElement(obj, { key: idx }), actions)
        }
      </form>
    )
  }
}

export default Form
