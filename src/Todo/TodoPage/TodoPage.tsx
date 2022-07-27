import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import { Box, Button, Grid, List, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { ITodo, ITodoPageParams } from '../../utils/interfaces'
import { BaseRoutePaths } from '../../utils/enums'
import { TodoStatus } from '../TodoStatus/TodoStatus'
import { TodoForm } from '../TodoForm/TodoForm'
import { useTodoPage } from './useTodoPage'
import { useTodo } from '../useTodo'
import { STYLES } from './constants'

export const TodoPage = () => {
  const params = useParams()
  const { todo, getTodo, todos, setTodo } = useTodoPage()
  const { updateStatus, updateTodo, addTodo } = useTodo()
  const [modal, setModal] = useState(false)

  useEffect(() => {
    const todoId = (params as unknown as ITodoPageParams).id
    getTodo(todoId)
  }, [params])

  const handleSave = (changes: ITodo) => {
    updateTodo(changes)
    setTodo({ ...todo, ...changes })
  }
  return (
    <Grid container>
      <Grid item xs={3} sx={{ background: '#ced4da' }}>
        <Box sx={STYLES.item}>
          <Link to={BaseRoutePaths.todos}>
            <KeyboardBackspaceIcon></KeyboardBackspaceIcon>
          </Link>
        </Box>
        <Box>
          <List>
            {todos.map((todo: ITodo) => (
              <Link to={`${BaseRoutePaths.todo}/${todo.id}`} key={todo.id}>
                <Box sx={STYLES.item}>{todo.title}</Box>
              </Link>
            ))}
          </List>
        </Box>
      </Grid>
      <Grid item xs={9} sx={STYLES.wrapperTodo}>
        <Box sx={STYLES.container}>
          <TextField sx={STYLES.field} label="Title" variant="outlined" value={todo?.title} />
        </Box>
        <Box sx={STYLES.container}>
          <TextField sx={STYLES.field} label="Description" multiline rows={10} value={todo?.description} />
        </Box>
        <Box sx={STYLES.actions}>
          {todo && <TodoStatus todo={todo} updateStatus={updateStatus} />}
          <Button variant="contained" size="medium" color="primary" sx={STYLES.btn} onClick={() => setModal(true)}>
            EDIT
          </Button>
          {modal && <TodoForm createTodo={addTodo} setVisible={setModal} todo={todo} updateTodo={handleSave} />}
        </Box>
      </Grid>
    </Grid>
  )
}
