import React, { Fragment } from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'
import { history, ToukaRoutes } from 'routes'
import { ConfigContext } from 'contexts'
import CssBaseline from '@material-ui/core/CssBaseline'
import AlertProvider from 'components/alerts/alert-provider'


const createProviders = config => (
  <Fragment>
    <CssBaseline />
    <ConfigContext.Provider value={config}>
      <Provider store={config.store}>
        <IntlProvider locale={config.defaultLanguage} messages={config.messages}>
          <Router history={history}>
            <div>
              <AlertProvider />
              { React.createElement(config.menuComponent, { menu: config.menu }) }
              <ToukaRoutes routes={config.routes} pageReviews={config.pageReviews} />
            </div>
          </Router>
        </IntlProvider>
      </Provider>
    </ConfigContext.Provider>
  </Fragment>
)

export default createProviders
