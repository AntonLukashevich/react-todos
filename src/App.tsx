import React from 'react';
import {Box, Typography} from "@mui/material";

import {TodoList} from "./Todo/TodoList";

function App() {
  return (
    <Box sx={{textAlign: 'center', width: '80vw', margin: '0 auto'}}>
      <Typography variant="h4">Todos</Typography>
      <TodoList/>
    </Box>
  );
}

export default App;
