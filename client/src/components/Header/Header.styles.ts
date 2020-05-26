import { styled, IconButton, Typography, AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "inherit",
}));

export const Title = styled(Typography)({
  flexGrow: 1,
});

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));
