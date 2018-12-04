import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import CreateClient from "./../components/create-client";
import { saveClient } from "./../actions";

class CreateClientPage extends Component {
  static propTypes = {
    createClient: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(value) {
    this.props.createClient(value);
  }

  render() {
    return (
      <div>
        <h1><FormattedMessage id="clients.create.page.title" /></h1>
        <CreateClient onSave={this.handleSave} />
      </div>
    );
  }
}

const storeConnect = connect(
  () => ({}),
  dispatch => ({
    createClient: value => dispatch(saveClient(value)),
  }),
);

export default storeConnect(CreateClientPage);
