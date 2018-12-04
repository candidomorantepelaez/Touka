import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import LoadingIcon from "touka/core/components/iconos/loading-icon";
import EditClient from "./../components/edit-client";

class EditClientPage extends Component {
  static propTypes = {
    getSearchClient: PropTypes.func,
    loadingClient: PropTypes.bool,
    client: PropTypes.object,
    match: PropTypes.object,
    getSearchRoutes: PropTypes.func,
    loadingRoutes: PropTypes.bool,
    routes: PropTypes.array,
    getEditClient: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.props.getSearchClient(this.props.match.params.id);
    this.props.getSearchRoutes();
  }

  render() {
    if (this.props.loadingClient === true || this.props.loadingRoutes === true) {
      return (<LoadingIcon />);
    }

    return (
      <div>
        <h1><FormattedMessage id="clients.detail.page.title" /></h1>
        <EditClient
          client={this.props.client}
          onEdit={value => this.props.getEditClient(value)}
          routes={this.props.routes}
        />
      </div>
    );
  }
}

const storeConnect = connect(
  state => ({

  }),
  dispatch => ({

  }),
);

export default storeConnect(EditClientPage);
