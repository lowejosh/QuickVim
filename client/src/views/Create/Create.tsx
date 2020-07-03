import React from "react";
import { useMediaQuery, Theme } from "@material-ui/core";
import { StyledDrawer, DrawerMargin } from "./Create.styles";

const Create = ({ sideOpen }: { sideOpen: boolean }) => {
  const xs = useMediaQuery((theme: Theme) => theme.breakpoints.down("xs"));

  return (
    <StyledDrawer
      variant="persistent"
      anchor="left"
      open={sideOpen}
      xs={xs ? 1 : 0} // s-c workaround
    >
      <DrawerMargin />
      placeholder
    </StyledDrawer>
  );
};

export default Create;
