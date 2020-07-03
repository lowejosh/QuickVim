import React, { Fragment } from "react";
import { styled, Drawer, Toolbar, Tabs } from "@material-ui/core";

const drawerWidthMd = 350;
const drawerWidthSm = "100%";

/** Styled drawer with variable width depending on media query */
export const StyledDrawer = styled(Drawer)(({ xs }: { xs: number }) => ({
  "& > div": {
    width: xs ? drawerWidthSm : drawerWidthMd,
    flexShrink: 0,
  },
}));

/**
 * Offset the header with components so the drawer is clipped by the appbar -- source: https://material-ui.com/components/drawers/
 */
export const DrawerMargin = () => (
  <Fragment>
    <Toolbar />
    <Tabs value={null} />
  </Fragment>
);
