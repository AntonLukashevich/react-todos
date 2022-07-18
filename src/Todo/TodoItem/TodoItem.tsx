import React from "react";
import {Box, IconButton, ListItem} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import {IProps} from "./propsInterface";
import {STYLES} from "./constants";

export const TodoItem = ({todo, removeTodo}: IProps) => {

  const remove = () => {
    removeTodo(todo.id)
  }

  return (
    <ListItem sx={STYLES.todoItem}>
      <Box sx={STYLES.todoItemBody}>
        <Box sx={STYLES.todoTitle}>{todo.title}</Box>
        <Box>{todo?.description}</Box>
      </Box>
      <Box sx={STYLES.todoActionBtn}>
        <IconButton color="error" onClick={remove} size="large">
          <CloseIcon/>
        </IconButton>
      </Box>
    </ListItem>
  )
}