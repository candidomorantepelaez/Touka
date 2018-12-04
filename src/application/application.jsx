import React from "react";
import PropTypes from "prop-types";
import { Router } from "react-router";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import Menu from "components/menus/menu-principal";
import AppRoutes from "routes/routes";
import AlertProvider from "components/alerts/alert-provider";

const Application = props => (
  <Provider store={props.store}>
    <IntlProvider locale={props.language} messages={props.messages}>
      <Router history={props.history} >
        <div>
          <AlertProvider />
          <Menu menu={props.menu} />
          <AppRoutes routes={props.routes} pageReviews={props.pageReviews} />
        </div>
      </Router>
    </IntlProvider>
  </Provider>
);

Application.propTypes = {
  store: PropTypes.object,
  language: PropTypes.string,
  messages: PropTypes.object,
  history: PropTypes.object,
  menu: PropTypes.array,
  routes: PropTypes.array,
  pageReviews: PropTypes.array,
};

export default Application;