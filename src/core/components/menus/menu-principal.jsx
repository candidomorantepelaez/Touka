import React, { Component } from 'react';
import PropTypes from "prop-types";
import cookie from "react-cookies";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { isNil, is, contains } from "ramda"
import { FaBars } from "react-icons/fa";
import history from "core/routes/history";
import { logout, saveCurrentUser } from "core/actions/login-action";
import { getCurrentUser } from "core/reducers/login-reducer";

class Menu extends Component {
  static propTypes = {
    currentUser: PropTypes.object,
    onLogout: PropTypes.func,
    menu: PropTypes.array,
  }

  constructor(props){
    super(props);
    this.crearEstilo = this.crearEstilo.bind(this);
    this.initUser = this.initUser.bind(this);
    this.isAuthorizated = this.isAuthorizated.bind(this);
    this.initUser();
  }

  initUser() {
    if (isNil(this.props.currentUser.nif) === false){
      return;
    }
    const currentUserCookie = cookie.load("user_app");
    if (isNil(currentUserCookie) === false) {
      this.props.saveUser(currentUserCookie);
      return;
    }
  }

  crearEstilo(ruta){
    const location = history.location;
    const segmentos = location.pathname.split("/");
    if(ruta === segmentos[1]){
      return "nav-item active activado";
    }else{
      return "nav-item active";
    }
  }

  isAuthorizated(obj) {
    if (isNil(this.props.currentUser.role)) {
      return false;
    }
    if (isNil(obj.role)) {
      return true;
    }
    if (is(Array, obj.role)) {
      return contains(this.props.currentUser.role, obj.role);
    }
    if (is(String, obj.role)) {
      return (obj.role === this.props.currentUser.role);
    }
    return false;
  }

  render() {
    if (isNil(this.props.currentUser.nif)) {
      return null;
    }
    return (
      <nav className="navbar navbar-expand-lg estilo-nav">
        <Link className="navbar-brand" to="/">
          <FormattedMessage id="core.app.title" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaBars className="navbar-toggler-icon icono" />
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            {this.props.menu.map((obj, key) => {
              if (this.isAuthorizated(obj)) {
                return (
                  <li key={key} className={this.crearEstilo(obj.to)} >
                    <Link key={key} className="nav-link" to={obj.to}>{obj.label}</Link>
                  </li>
                );
              }
              return null;
            })}
            <li className="nav-item active menu-session-button">
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={() => this.props.onLogout()}
                type="button"
              >
                <FormattedMessage id="core.logout" />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const storeConnect = connect(
	state => ({
    currentUser: getCurrentUser(state),
  }),
	dispatch => ({
    saveUser: (value) => dispatch(saveCurrentUser(value)),
    onLogout: () => dispatch(logout()),
  })
);

export default storeConnect(Menu);
