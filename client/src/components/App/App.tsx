import React, { Fragment, useState, useCallback } from "react";
import { Header } from "../Header/Header";
import { Switch, Route } from "react-router-dom";
import { StyledDrawer } from "./App.styles";
import { DrawerMargin } from "./DrawerMargin";
import { useMediaQuery, Theme } from "@material-ui/core";

const Create = ({ sideOpen }: { sideOpen: boolean }) => {
  const xs = useMediaQuery((theme: Theme) => theme.breakpoints.down("xs"));
  console.log(xs);

  return (
    <StyledDrawer
      variant="persistent"
      anchor="left"
      open={sideOpen}
      xs={xs ? 1 : 0} // s-c workaround
    >
      <DrawerMargin />
      REOTOeajdiawodwaiddaw dadawdwa d
    </StyledDrawer>
  );
};

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
          create
        </Route>
      </Switch>
    </Fragment>
  );
};
