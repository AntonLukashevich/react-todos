import React from "react";
import {Box, Button, Checkbox, ListItem} from "@mui/material";

import {IProps} from "./propsInterface";
import {STYLES} from "./constants";

export const TodoItem = ({todo, index, onChange, removeTodo}: IProps) => {
  return (
    <ListItem sx={STYLES.todoItem}>
      <Box sx={STYLES.todoCheck}>
        <Checkbox checked={todo.completed}
                  onChange={() => onChange(todo.id)}
                  color="success"
        />
      </Box>
      <Box sx={STYLES.todoItemBody}>
        <strong>{index + 1}.</strong>
        {todo.title}
      </Box>
      <Box sx={STYLES.todoRemoveBtn}>
        <Button variant="outlined" color="error" onClick={removeTodo.bind(null, todo.id)}>delete</Button>
      </Box>
    </ListItem>
  )
}