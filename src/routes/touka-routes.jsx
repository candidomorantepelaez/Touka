import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { addIndex, map } from 'ramda'
import { Route, Switch } from 'react-router-dom'
import { ConfigContext } from 'contexts'


class ToukaRoutes extends Component {
  static propTypes = {
    routes: PropTypes.arrayOf(PropTypes.object),
  }

  static defaultProps = {
    routes: [],
  }

  static contextType = ConfigContext

  render() {
    const { routes } = this.props
    const {
      appLoginPath, appLogoutPath, appBasePath, loginComponent, logoutComponent, homeComponent, noMatchComponent,
    } = this.context
    return (
      <Switch>
        {addIndex(map)((ruta, idx) => (
          <Route path={ruta.path} component={ruta.component} exact={ruta.exact} key={idx} />
        ), routes)}
        <Route path={appLoginPath} component={loginComponent} exact />
        <Route path={appLogoutPath} component={logoutComponent} exact />
        <Route path={appBasePath} component={homeComponent} exact />
        <Route component={noMatchComponent} />
      </Switch>
    )
  }
}

export default ToukaRoutes
