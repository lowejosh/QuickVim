import { useMediaQuery, Theme } from "@material-ui/core";
import { StyledDrawer, DrawerMargin } from "./Create.styles";

export const Create = ({ sideOpen }: { sideOpen: boolean }) => {
  const xs = useMediaQuery((theme: Theme) => theme.breakpoints.down("xs"));

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
