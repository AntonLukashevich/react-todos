import React from "react";
import {AppBar, Box, Toolbar, Typography} from "@mui/material";

export const NavBar = () => {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static" sx={{background: '#fab005'}}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{flexGrow: 1, textAlign: 'center', fontFamily: ''}}>
            Todo list
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}