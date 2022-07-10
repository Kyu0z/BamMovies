import React from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/detail/Detail";
import Logout from "../connect/Logout";
import Login from "../connect/Login";
import Register from "../connect/Register";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux";

function RedirectToLogin() {
  const location = useLocation();
  const url = new URL("/auth/login", window.location.origin);
  url.searchParams.set("next", location.pathname + location.search);
  return <Redirect to={url.pathname + url.search} />;
}

function Routes() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return (
      <Switch>
        <Route path="/auth/logout" component={Logout} />
        <Route path="/search/:category/:keyword" component={Catalog} />
        <Route path="/:category/:id" component={Detail} />
        <Route path="/:category" component={Catalog} />
        <Route path="/" component={Home} exact />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/auth/login" component={Login} />
      <Route path="/auth/register" component={Register} />
      <Route path="*">
        <RedirectToLogin />
      </Route>
    </Switch>
  );
}

export default Routes;
