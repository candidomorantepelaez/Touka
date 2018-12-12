import React from 'react'
import PropTypes from 'prop-types'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'
import Menu from 'components/menus/menu-principal'
import AppRoutes from 'routes/routes'
import AlertProvider from 'components/alerts/alert-provider'


const Application = ({
  store, language, messages, history, menu, routes, pageReviews,
}) => (
  <Provider store={store}>
    <IntlProvider locale={language} messages={messages}>
      <Router history={history}>
        <div>
          <AlertProvider />
          <Menu menu={menu} />
          <AppRoutes routes={routes} pageReviews={pageReviews} />
        </div>
      </Router>
    </IntlProvider>
  </Provider>
)

Application.defaultProps = {
  store: {},
  language: '',
  messages: {},
  history: {},
  menu: [],
  routes: [],
  pageReviews: [],
}

Application.propTypes = {
  store: PropTypes.shape({}),
  language: PropTypes.string,
  messages: PropTypes.shape({}),
  history: PropTypes.shape({}),
  menu: PropTypes.arrayOf(PropTypes.object),
  routes: PropTypes.arrayOf(PropTypes.object),
  pageReviews: PropTypes.arrayOf(PropTypes.object),
}

export default Application
