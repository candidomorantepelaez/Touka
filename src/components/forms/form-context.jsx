import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FormContext from 'contexts/form-context'
import { merge } from 'ramda'


class MyForm extends Component {
  static propTypes = {
    initialValue: PropTypes.shape({}),
    onSubmit: PropTypes.func.isRequired,
    children: PropTypes.arrayOf(PropTypes.shape({})),
  }

  static defaultProps = {
    initialValue: {},
    children: [],
  }

  constructor(props) {
    super(props)
    this.getInitialValue = this.getInitialValue.bind(this)
    this.handlerSubmit = this.handlerSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.state = {
      initialValue: this.getInitialValue(),
      formData: this.getInitialValue(),
      errors: {},
      fields: {},
      onChange: value => this.onChange(value),
    }
  }

  onChange(value) {
    const { formData } = this.state
    this.setState({ formData: merge(formData, value) })
  }

  getInitialValue() {
    const { initialValue } = this.props
    return initialValue
  }

  handlerSubmit(evt) {
    const { formData } = this.state
    const { onSubmit } = this.props
    evt.preventDefault()
    onSubmit(formData)
  }

  render() {
    const { children } = this.props
    const {
      initialValue, errors, formData, fields, onChange,
    } = this.state
    return (
      <FormContext.Provider
        value={{
          initialValue,
          errors,
          formData,
          fields,
          onChange,
        }}
      >
        <form
          onSubmit={evt => this.handlerSubmit(evt)}
          autoComplete="false"
          noValidate
        >
          {children}
        </form>
      </FormContext.Provider>
    )
  }
}

export default MyForm
