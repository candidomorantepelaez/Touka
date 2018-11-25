import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCurrentUser } from "core/reducers/login-reducer";
import { isNil, contains, is } from "ramda";
import LoginPage from "core/pages/login/login-page";
import { FormattedMessage } from "react-intl";

function withAuthentication(WrappedComponent, options = {}) {
  const storeConnect = connect(
    state => ({
      currentUser: getCurrentUser(state),
    }),
    () => ({})
  );

  return storeConnect(class extends Component {
    static propsTypes = {
      currentUser: PropTypes.object,
    }

    constructor(props) {
      super(props);
      this.getReturn = this.getReturn.bind(this);
      this.isAuthorizated = this.isAuthorizated.bind(this);
    }

    getReturn() {
      if (options.onFalse === "login") {
        return (<LoginPage />);
      }
      if (options.onFalse === "text") {
        return (<p><FormattedMessage id="core.authentication.unauthorized" /></p>);
      }
      return null;
    }

    isAuthorizated() {
      if (isNil(this.props.currentUser.role)) {
        return false;
      }
      if (isNil(options.role)) {
        return true;
      }
      if (is(Array, options.role)) {
        return contains(this.props.currentUser.role, options.role);
      }
      if (is(String, options.role)) {
        return (options.role === this.props.currentUser.role);
      }
      return false;
    }

    render() {
      if (this.isAuthorizated()) {
        return <WrappedComponent currentUser={this.props.currentUser} {...this.props} />;
      }
      return this.getReturn();
    }
  });
}

export default withAuthentication;