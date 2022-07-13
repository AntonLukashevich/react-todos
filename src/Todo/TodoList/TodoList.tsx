import React, {useEffect} from "react";
import {Box, List} from "@mui/material";

import {useTodo} from "../useTodo";
import {ITodo} from "../../utils/interfaces";
import {TodoItem} from "../TodoItem";
import {STYLES} from "./constants";
import {AddTodoForm} from "../AddTodoForm/AddTodoForm";

export const TodoList = () => {
  const {loadTodos, todos, toggleTodo, removeTodo, addTodo} = useTodo()

  useEffect(() => {
    loadTodos()
  }, [loadTodos])

  return (
    <Box sx={STYLES.wrapper}>
      <AddTodoForm createTodo={addTodo}/>
      <List>
        {
          todos.map((todo: ITodo, index: number) => {
            return (
              <TodoItem todo={todo}
                        index={index}
                        onChange={toggleTodo}
                        removeTodo={removeTodo}
                        key={todo.id}></TodoItem>
            )
          })
        }
      </List>
    </Box>
  )
}