import React, { Fragment } from "react";
import { Toolbar, Tabs } from "@material-ui/core";

/**
 * Offset the header with components so the drawer is clipped by the appbar -- source: https://material-ui.com/components/drawers/
 */
export const DrawerMargin = () => (
  <Fragment>
    <Toolbar />
    <Tabs value={null} />
  </Fragment>
);
