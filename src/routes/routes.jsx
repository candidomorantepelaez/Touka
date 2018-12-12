import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { isNil, addIndex, map } from 'ramda'
import { Route, Switch } from 'react-router-dom'
import ConfigContext from 'contexts/config-context'
import { NoMatchComponent } from 'pages/home/home-page'


const createRoutes = (routes) => {
  if (isNil(routes)) {
    return null
  }
  return addIndex(map)((ruta, idx) => (<Route path={ruta.path} component={ruta.component} exact={ruta.exact} key={idx} />), routes)
}

class AppRoutes extends Component {
  static propTypes = {
    routes: PropTypes.arrayOf(PropTypes.object),
  }

  static defaultProps = {
    routes: [],
  }

  static contextType = ConfigContext;

  constructor(props) {
    super(props)
    this.getNoMatchComponent = this.getNoMatchComponent.bind(this)
  }

  getNoMatchComponent() {
    const { config } = this.context
    if (isNil(config.noMatchComponent)) {
      return NoMatchComponent
    }
    return config.noMatchComponent
  }

  render() {
    const { routes } = this.props
    return (
      <Switch>
        {createRoutes(routes)}
        <Route component={this.getNoMatchComponent()} />
      </Switch>
    )
  }
}

export default AppRoutes
