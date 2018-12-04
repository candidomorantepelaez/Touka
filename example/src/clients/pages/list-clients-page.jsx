import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import ClientList from "./../components/client-list";
import { connect } from "react-redux";
import LoadingIcon from "touka/core/components/iconos/loading-icon";

class ListClientsPage extends Component {
  static propTypes = {
    searching: PropTypes.bool,
    clientsWithRoutes: PropTypes.array,
    getClients: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.props.getClients();
  }

  render() {
    if (this.props.searching === true) {
      return <LoadingIcon />
    }

    return (
      <div>
        <h3><FormattedMessage id="clients.list.page.title" /></h3>
        <ClientList
          list={this.props.clientsWithRoutes}
          onRemove={value => this.props.onRemove(value)}
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

export default storeConnect(ListClientsPage);
