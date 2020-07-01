import { styled, Drawer } from "@material-ui/core";

const drawerWidthMd = 350;
const drawerWidthSm = "100%";

/** Styled drawer with variable width depending on media query */
export const StyledDrawer = styled(Drawer)(({ xs }: { xs: number }) => ({
  "& > div": {
    width: xs ? drawerWidthSm : drawerWidthMd,
    flexShrink: 0,
  },
}));
