import React, { useState, ChangeEvent } from "react";
import { AppBar, Toolbar, Tabs, Tab } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { StyledIconButton, Title } from "./Header.styles";
import { Link } from "react-router-dom";

export const Header = () => {
  const [contentType, setContentType] = useState<number>(0);

  const handleChange = (_: ChangeEvent<{}>, newValue: number) => {
    setContentType(newValue);
  };

  console.log(contentType);
  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <StyledIconButton edge="start" color="inherit" aria-label="menu">
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
    </AppBar>
  );
};
