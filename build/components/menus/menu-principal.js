"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function Menu() {
  return _react.default.createElement("h1", null, "menu");
};

var _default = Menu;
/*
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cookie from 'react-cookies'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import {
  isNil, is, contains, map, addIndex,
} from 'ramda'
import history from 'routes/history'
import { logout, saveCurrentUser } from 'actions/login-action'
import { getCurrentUser } from 'reducers/login-reducer'


const crearEstilo = (ruta) => {
  const { location } = history
  const segmentos = location.pathname.split('/')
  if (ruta === segmentos[1]) {
    return 'nav-item active activado'
  }
  return 'nav-item active'
}

class Menu extends Component {
  static propTypes = {
    currentUser: PropTypes.shape(PropTypes.object),
    onLogout: PropTypes.func.isRequired,
    saveUser: PropTypes.func.isRequired,
    menu: PropTypes.arrayOf(PropTypes.object),
  }

  static defaultProps = {
    currentUser: {},
    menu: PropTypes.array,
  }

  constructor(props) {
    super(props)
    this.initUser = this.initUser.bind(this)
    this.isAuthorizated = this.isAuthorizated.bind(this)
    this.initUser()
  }

  initUser() {
    const { currentUser, saveUser } = this.props
    if (isNil(currentUser.nif) === false) {
      return
    }
    const currentUserCookie = cookie.load('user_app')
    if (isNil(currentUserCookie) === false) {
      saveUser(currentUserCookie)
    }
  }

  isAuthorizated(obj) {
    const { currentUser } = this.props
    if (isNil(currentUser.role)) {
      return false
    }
    if (isNil(obj.role)) {
      return true
    }
    if (is(Array, obj.role)) {
      return contains(currentUser.role, obj.role)
    }
    if (is(String, obj.role)) {
      return (obj.role === currentUser.role)
    }
    return false
  }

  render() {
    const { currentUser, menu, onLogout } = this.props
    if (isNil(currentUser.nif)) {
      return null
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
          <span className="navbar-toggler-icon icono" />
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            {addIndex(map)((obj, idx) => {
              if (this.isAuthorizated(obj)) {
                return (
                  <li key={idx} className={crearEstilo(obj.to)}>
                    <Link className="nav-link" to={obj.to}>{obj.label}</Link>
                  </li>
                )
              }
              return null
            }, menu)}
            <li className="nav-item active menu-session-button">
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={() => onLogout()}
                type="button"
              >
                <FormattedMessage id="core.logout" />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

const storeConnect = connect(
  state => ({
    currentUser: getCurrentUser(state),
  }),
  dispatch => ({
    saveUser: value => dispatch(saveCurrentUser(value)),
    onLogout: () => dispatch(logout()),
  })
)

export default storeConnect(Menu)
*/

exports.default = _default;