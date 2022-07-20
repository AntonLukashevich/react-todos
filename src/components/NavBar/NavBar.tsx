import React from "react";
import {AppBar, Toolbar, Typography} from "@mui/material";

import {STYLES} from "./constants";

export const NavBar = () => {
  return (
    <AppBar position="static" sx={STYLES.appBar}>
      <Toolbar>
        <Typography variant="h4" sx={STYLES.titleApp}>
          Todo list
        </Typography>
      </Toolbar>
    </AppBar>
  )
}