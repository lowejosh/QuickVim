import { styled, Drawer } from "@material-ui/core";

const drawerWidth = 200;

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
}));
