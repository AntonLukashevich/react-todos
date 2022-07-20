import React from 'react'
import { Box } from '@mui/material'
import './App.css'

import { TodoList } from './Todo/TodoList'
import { NavBar } from './components/NavBar'

function App() {
  const styles = {
    width: '100%',
    maxWidth: '700px',
    margin: '0 auto',
  }
  return (
    <Box>
      <NavBar />
      <Box sx={styles}>
        <TodoList />
      </Box>
    </Box>
  )
}

export default App
