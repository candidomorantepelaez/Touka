import React, {Component} from "react";
import Input from "core/components/forms/input";
import Select from "core/components/forms/select";
import { reduce, isNil, isEmpty, omit, merge, objOf, filter } from "ramda";

class Form extends Component {

  constructor(props) {
    super(props);
    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.manageErrors = this.manageErrors.bind(this);
    this.validateRequiredOnSubmit = this.validateRequiredOnSubmit.bind(this);
    this.validate = this.validate.bind(this);
    this.getField = this.getField.bind(this);
    this.state = {
      formData: this.props.initialValue || {},
      errors: {}
    };
  }

  handlerSubmit(evt) {
    evt.preventDefault();
    const submitErrors = reduce(this.validateRequiredOnSubmit, {}, this.props.fields);
    if (isEmpty(submitErrors) === false) {
      this.setState({ errors: merge(this.state.errors, submitErrors)});
      return;
    }
    if (this.isValidForm(this.state.errors)){
      this.props.onSubmit(this.state.formData);
      this.setState({ formData: this.props.initialValue || {} });
    }
  }

  validateRequiredOnSubmit(value, field) {
    if (field.required === true) {
      if (isNil(this.state.formData[field.name]) || this.state.formData[field.name] === "") {
        return merge(value, merge(this.state.errors[field.name], objOf(field.name)({ required: { message: "core.field.required" } })));
      }
    }
    return value;
  }

  isValidForm(errors) {
    return isEmpty(filter(error => !isEmpty(error), this.state.errors));
  }

  handleOnBlur(field, event) {
    if (field.onBlur) {
      field.onBlur(event.target.value);
    }

    if (field.required === true) {
      if (event.target.value === "") {
        this.insertErrorOnForm(field.name, "required", { message: "core.field.required" });
      } else {
        this.removeErrorOnForm(field.name, "required");
      }
    }

    if (field.validateOnBlur) {
      this.validate(field.name, "onBlur", field.validateOnBlur, event.target.value);
    }
  }

  handleChange(field, event) {
    this.setState({ formData: merge(this.state.formData, objOf(event.target.name)(event.target.value)) });

    if (field.onChange){
      field.onChange(event.target.value);
    }

    if (field.required === true) {
      if (event.target.value === "") {
        this.insertErrorOnForm(field.name, "required", { message: "core.field.required" });
      } else {
        this.removeErrorOnForm(field.name, "required");
      }
    }

    if(field.validateOnChange){
      this.validate(field.name, "onChange", field.validateOnChange, event.target.value);
    }
  }

  manageErrors(key, type, error) {
    if (isNil(error)) {
      if (isNil(this.state.errors[key]) === false && isNil(this.state.errors[key][type]) === false) {
        this.removeErrorOnForm(key, type);
        return;
      }
      return;
    }
    this.insertErrorOnForm(key, type, error);
  }

  insertErrorOnForm(key, type, error) {
    this.setState({ errors: merge(this.state.errors, objOf(key)(merge(this.state.errors[key], objOf(type)(error)))) });
  }

  removeErrorOnForm(key, type) {
    this.setState({ errors: merge(this.state.errors, objOf(key)(omit([type], this.state.errors[key]))) });
  }

  validate(key, type, validateFn, value) {
    if(validateFn){
      this.manageErrors(key, type, validateFn(value));
    }
  }

  getField(field, key){
    switch(field.type) {
      case "select":
        return (
          <Select
            key={key}
            name={field.name}
            label={field.label}
            options={this.props.options[field.name] || []}
            helpText={field.helpText}
            className={field.className}
            value={this.state.formData[field.name] || ""}
            required={field.required}
            readOnly={field.readOnly}
            disabled={field.disabled}
            error={this.state.errors[field.name]}
            onChange={evt => this.handleChange(field, evt)}
            onBlur={evt => this.handleOnBlur(field, evt)}
          />
        );
      default:
        return (
          <Input
            key={key}
            name={field.name}
            label={field.label}
            helpText={field.helpText}
            type={field.type}
            className={field.className}
            value={this.state.formData[field.name] || ""}
            required={field.required}
            readOnly={field.readOnly}
            disabled={field.disabled}
            error={this.state.errors[field.name]}
            onChange={evt => this.handleChange(field, evt)}
            onBlur={evt => this.handleOnBlur(field, evt)}
          />
        );
    }
  }

  render() {
    return (
      <form
        className="form-container needs-validation"
        onSubmit={evt => this.handlerSubmit(evt)}
        autoComplete="false"
        noValidate
      >
        <div className="row">
          {
            this.props.fields.map((field, key) => this.getField(field, key))
          }
        </div>
        {this.props.actions.map((obj, key) => React.cloneElement(obj, { key: key}))}
      </form>
    );
  }
}

export default Form;
