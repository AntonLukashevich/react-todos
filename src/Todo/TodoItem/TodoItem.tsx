import React, { useState } from 'react'
import { FormControl, Grid, IconButton, InputLabel, ListItem, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import EditIcon from '@mui/icons-material/Edit'

import { RollableBlock } from '../../components/RollableBlock'
import { StatusTodo } from '../../utils/enums'
import { IProps } from './propsInterface'
import { STYLES } from './constants'

export const TodoItem = ({ todo, removeTodo, getTodo, openEdit, updateStatus }: IProps) => {
  const [showMore, setShowMore] = useState(false)

  const remove = () => {
    removeTodo(todo.id)
  }

  const getTodoEdit = () => {
    getTodo(todo)
  }

  const openEditModal = () => {
    getTodoEdit()
    openEdit()
  }

  const changeStatus = (event: SelectChangeEvent) => {
    updateStatus(todo.id, event.target.value)
  }

  return (
    <ListItem sx={STYLES.todoItem}>
      <Grid container>
        <Grid container>
          <Grid item xs={9} sx={STYLES.todoTitle}>
            {' '}
            {todo.title}
          </Grid>
          <Grid item xs={2} sx={STYLES.todoStatus}>
            <FormControl>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                sx={STYLES[todo.status]}
                size="small"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={todo?.status}
                label="Status"
                onChange={changeStatus}
              >
                <MenuItem value={StatusTodo.todo}>{StatusTodo.todo}</MenuItem>
                <MenuItem value={StatusTodo.in_progress}>{StatusTodo.in_progress}</MenuItem>
                <MenuItem value={StatusTodo.done}>{StatusTodo.done}</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={1} sx={STYLES.todoActionBtn}>
            <IconButton color="info" size="small" onClick={openEditModal}>
              <EditIcon />
            </IconButton>
            <IconButton color="error" size="small" onClick={remove}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container sx={STYLES.todoDescriptionContainer}>
          <RollableBlock description={todo.description} maxLength={60} show={showMore} setShow={setShowMore} />
        </Grid>
      </Grid>
    </ListItem>
  )
}
