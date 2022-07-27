import React from 'react'
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { StatusTodo } from '../../utils/enums'
import { IProps } from './propsInterface'
import { STYLES } from './constants'

export const TodoStatus = ({ todo, updateStatus }: IProps) => {
  const changeStatus = (event: SelectChangeEvent) => {
    todo.status = event.target.value
    updateStatus(todo.id, event.target.value)
  }

  return (
    <FormControl>
      <InputLabel id="demo-simple-select-label"></InputLabel>
      <Select sx={STYLES[todo.status]} size="small" value={todo?.status} onChange={changeStatus}>
        <MenuItem value={StatusTodo.todo}>{StatusTodo.todo}</MenuItem>
        <MenuItem value={StatusTodo.in_progress}>{StatusTodo.in_progress}</MenuItem>
        <MenuItem value={StatusTodo.done}>{StatusTodo.done}</MenuItem>
      </Select>
    </FormControl>
  )
}
