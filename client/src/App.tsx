import React, { Fragment, useState, useCallback } from "react";
import { Header } from "./components/Header/Header";
import { Switch, Route } from "react-router-dom";
import { Create } from "./views/Create/Create";

export const App = () => {
  const [sideOpen, setSideOpen] = useState(true);

  const handleMenuClick = useCallback(() => {
    setSideOpen((sideOpen) => !sideOpen);
  }, []);

  return (
    <Fragment>
      <Header handleMenuClick={handleMenuClick} />
      <Switch>
        <Route exact path="/">
          <Create sideOpen={sideOpen} />
        </Route>
        <Route exact path="/browse">
          browse
        </Route>
      </Switch>
    </Fragment>
  );
};
