import React, { Fragment } from "react";
import { Header } from "../Header/Header";
import { Switch, Route } from "react-router-dom";

export const App = () => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/">
          root
        </Route>
        <Route exact path="/browse">
          create
        </Route>
      </Switch>
    </Fragment>
  );
};
