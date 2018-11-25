import React from "react";
import { Router } from "react-router";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import Menu from "core/components/menus/menu-principal";
import AppRoutes from "core/routes/routes";
import AlertPage from "core/components/alerts/alert-page";

const application = ({
  store,
  language,
  messages,
  history,
  menu,
  routes,
  pageReviews,
}) => (
  <Provider store={store}>
    <IntlProvider locale={language} messages={messages}>
      <Router history={history} >
        <div className="App container-fluid">
          <AlertPage />
          <Menu menu={menu} />
          <AppRoutes routes={routes} pageReviews={pageReviews} />
        </div>
      </Router>
    </IntlProvider>
  </Provider>
);

export default application;