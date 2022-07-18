import React from 'react';
import {Box} from "@mui/material";

import {TodoList} from "./Todo/TodoList";
import {NavBar} from "./components/NavBar";

function App() {
  return (
    <Box>
      <NavBar/>
      <Box sx={{textAlign: 'center', width: '100%', maxWidth: '700px', margin: '0 auto'}}>
        <TodoList/>
      </Box>
    </Box>
  );
}

export default App;
