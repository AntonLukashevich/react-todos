import React, { useState } from 'react'
import { Grid, IconButton, ListItem, SelectChangeEvent } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import EditIcon from '@mui/icons-material/Edit'

import { RollableBlock } from '../../components/RollableBlock'
import { BaseRoutePaths } from '../../utils/enums'
import { IProps } from './propsInterface'
import { STYLES } from './constants'
import { Link } from 'react-router-dom'
import { TodoStatus } from '../TodoStatus/TodoStatus'

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

  return (
    <ListItem sx={STYLES.todoItem}>
      <Grid container>
        <Grid container>
          <Grid item xs={9} sx={STYLES.todoTitle}>
            <Link to={`${BaseRoutePaths.todo}/${todo.id}`}>{todo.title}</Link>
          </Grid>
          <Grid item xs={2} sx={STYLES.todoStatus}>
            {todo && <TodoStatus todo={todo} updateStatus={updateStatus} />}
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
