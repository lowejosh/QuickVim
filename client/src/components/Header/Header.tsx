import React, { useState, ChangeEvent } from "react";
import { Toolbar, Tabs, Tab } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { StyledIconButton, Title, StyledAppBar } from "./Header.styles";
import { Link } from "react-router-dom";
import { HeaderProps } from "./Header.types";

export const Header: React.FC<HeaderProps> = ({ handleMenuClick }) => {
  const [contentType, setContentType] = useState<number>(0);

  const handleChange = (_: ChangeEvent<{}>, newValue: number) => {
    setContentType(newValue);
  };

  return (
    <StyledAppBar position="fixed" color="inherit">
      <Toolbar>
        <StyledIconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuClick}
        >
          <MenuIcon />
        </StyledIconButton>
        <Title>QuickVim</Title>
      </Toolbar>
      <Tabs
        value={contentType}
        onChange={handleChange}
        aria-label="simple tabs example"
      >
        <Tab label="Create" component={Link} to="/" />
        <Tab label="Browse" component={Link} to="/browse" />
      </Tabs>
    </StyledAppBar>
  );
};
