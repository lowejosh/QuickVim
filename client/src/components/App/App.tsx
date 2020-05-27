import React, { Fragment, useState } from "react";
import { Header } from "../Header/Header";
import { Switch, Route } from "react-router-dom";
import { Toolbar, Tabs } from "@material-ui/core";
import { StyledDrawer } from "./App.styles";

export const App = () => {
  const [sideOpen, setSideOpen] = useState(true);

  const handleMenuClick = () => {
    setSideOpen((sideOpen) => !sideOpen);
  };

  return (
    <Fragment>
      <Header handleMenuClick={handleMenuClick} />
      <Switch>
        <Route exact path="/">
          <StyledDrawer variant="persistent" anchor="left" open={sideOpen}>
            {/* Offset the header with components so the drawer is clipped by the appbar -- source: https://material-ui.com/components/drawers/ */}{" "}
            <Toolbar />
            <Tabs value={null} />
            REOTOeajdiawodwaiddaw dadawdwa d
          </StyledDrawer>
        </Route>
        <Route exact path="/browse">
          create
        </Route>
      </Switch>
    </Fragment>
  );
};
