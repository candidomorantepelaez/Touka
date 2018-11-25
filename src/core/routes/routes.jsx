import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import LoginPage from "core/pages/login/login-page";
import HomePage from "core/pages/home/home-page";

const createRoutes = routes => routes.map((ruta, key) => (<Route path={ruta.path} component={ruta.component} exact={ruta.exact} key={key} />));

const AppRoutes = props => (
    <Switch>
      {createRoutes(props.routes)}
      <Route path="/home" render={() => (<HomePage pageReviews={props.pageReviews} />)} exact={ true } />
      <Route path="/login" component={ LoginPage } exact={ true } />
      <Route render={() => (<HomePage pageReviews={props.pageReviews} />)} />
    </Switch>
);

AppRoutes.propTypes = {
  routes: PropTypes.array,
  pageReviews: PropTypes.array,
}

export default AppRoutes;
