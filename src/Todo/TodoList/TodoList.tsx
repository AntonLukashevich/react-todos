import React, {useEffect, useState} from "react";
import {Box, Button, List} from "@mui/material";

import {useTodo} from "../useTodo";
import {ITodo} from "../../utils/interfaces";
import {TodoItem} from "../TodoItem";
import {STYLES} from "./constants";
import {TodoForm} from "../TodoForm/TodoForm";

export const TodoList = () => {
  const {loadTodos, todos, removeTodo, addTodo} = useTodo()
  const [modal, setModal] = useState(false)

  useEffect(() => {
    loadTodos()
  }, [loadTodos])

  const openAddModal = () => {
    setModal(true)
  }

  return (
    <Box sx={STYLES.wrapper}>
      <Box sx={{width: '100%'}}>
        {modal &&
          <TodoForm createTodo={addTodo}
                    visible={modal}
                    setVisible={setModal}
          />}
        {todos.length ? (
          <List>
            {
              todos.slice(-5).map((todo: ITodo, index: number) =>
                <TodoItem todo={todo}
                          removeTodo={removeTodo}
                          key={todo.id}/>
              )
            }
          </List>
        ) : (<Box sx={STYLES.noTodos}> There are nothing here....<br/>
          Please create one</Box>)}
      </Box>
      <Box sx={STYLES.btnGroup}>
        <Button variant="contained" color="success" type="button"
                onClick={openAddModal}>Create new</Button>
      </Box>
    </Box>
  )
}