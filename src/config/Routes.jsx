import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/detail/Detail";

function Routes() {
  return (
    <Switch>
      <Route path="/search/:category/:keyword" component={Catalog} />
      <Route path="/:category/:id" component={Detail} />
      <Route path="/:category" component={Catalog} />
      <Route path="/" component={Home} exact />
    </Switch>
  );
}

export default Routes;
