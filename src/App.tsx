import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import React from 'react'
import './App.css'

import { NavBar } from './components/NavBar'
import { TodoList } from './Todo/TodoList'
import { BaseRoutePaths } from './utils/enums'
import { TodoPage } from './Todo/TodoPage'

function App() {
  const styles = {
    width: '100%',
    maxWidth: '700px',
    margin: '0 auto',
  }
  return (
    <Box>
      <BrowserRouter>
        <NavBar />
        <Box sx={styles}>
          <Routes>
            <Route path={BaseRoutePaths.todos} element={<TodoList />} />
            <Route path={`${BaseRoutePaths.todo}/:id`} element={<TodoPage />} />
            <Route path="/" element={<Navigate to={BaseRoutePaths.todos} />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </Box>
  )
}

export default App
