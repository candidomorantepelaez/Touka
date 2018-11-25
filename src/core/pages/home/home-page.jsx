import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import withAuthentication from "core/hoc/withAuthentication";

class HomePage extends Component {
  static propTypes = {
    data: PropTypes.any,
    currentUser: PropTypes.object,
    pageReviews: PropTypes.array,
  }

  constructor(props) {
    super(props);
    console.log("hola");
  }

  render() {
    return (
      <div>
        <h1>Bienvenido a Ari Distribuciones</h1>
        {this.props.pageReviews.map((obj, key) => React.createElement(obj, { key }))}
      </div>
    );
  }
}

const storeConnect = connect(
  state => ({

  }),
  dispatch => ({

  })
);

export default withAuthentication(storeConnect(HomePage), { onFalse: "login" });
