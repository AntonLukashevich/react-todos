import React from "react";
import {AppBar, Box, Toolbar, Typography} from "@mui/material";

import {STYLES} from "./constants";

export const NavBar = () => {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static" sx={STYLES.appBar}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={STYLES.titleApp}>
            Todo list
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}