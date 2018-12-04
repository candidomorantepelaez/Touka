import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import LoadingIcon from "touka/core/components/iconos/loading-icon";
import DetailClient from "./../components/detail-client";

class DetailClientPage extends Component {
  static propTypes = {
    getSearchClient: PropTypes.func,
    loading: PropTypes.bool,
    client: PropTypes.object,
    match: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.props.getSearchClient(this.props.match.params.id);
  }

  render() {
    if (this.props.loading === true) {
      return <LoadingIcon />
    }

    return (
      <div>
        <h1><FormattedMessage id="clients.detail.page.title" /></h1>
        <DetailClient
          client={this.props.client}
          onRemove={id => this.props.removeClient(id)}
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

export default storeConnect(DetailClientPage);
