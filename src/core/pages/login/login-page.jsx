import React from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import Form from "core/components/forms/form";
import SubmitButton from "core/components/forms/buttons/submit-button";
import { credentials } from "core/actions/login-action";
import "assets/css/login-page.css";

const loginForm = {
  actions: [<SubmitButton className="col-xl-12 col-lg-12 col-md-12 col-sm-12" label="core.send" />],
  fields: [
    {
      name: "nif",
      label: "core.nif",
      type: "text",
      className: "col-xl-12 col-lg-12 col-md-12 col-sm-12",
      required: true,
    }, {
      name: "password",
      label: "core.pass",
      type: "password",
      className: "col-xl-12 col-lg-12 col-md-12 col-sm-12",
      required: true,
    },
  ],
}

const LoginPage = (props) => (
  <div className="login-page offset-xl-4 offset-lg-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
    <h1><FormattedMessage id="core.app.wellcome" /></h1>
    <h2><FormattedMessage id="core.app.description" /></h2>
    <Form
      actions={loginForm.actions}
      onSubmit={value => props.onLogin(value)}
      fields={loginForm.fields}
    />
  </div>
);
 
LoginPage.propTypes = {
  onLogin: PropTypes.func,
};

const storeConnect = connect(
	() => ({}),
	dispatch => ({
		onLogin: (value) => dispatch(credentials(value)),
	})
);

export default storeConnect(LoginPage);
