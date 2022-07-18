import React, {useEffect, useState} from "react";
import {Box, Button, List} from "@mui/material";


import {FilterTool} from "../../components/FilterTool";
import {TodoForm} from "../TodoForm/TodoForm";
import {ITodo} from "../../utils/interfaces";
import {TodoItem} from "../TodoItem";
import {useTodo} from "../useTodo";
import {STYLES} from "./constants";


export const TodoList = () => {
  const {loadTodos, todos, removeTodo, addTodo, getTodo, updateTodo, setTodo, todo, updateStatus} = useTodo()
  const [modal, setModal] = useState(false)
  const [filterTodo, setFilterTodo] = useState('')

  useEffect(() => {
    //loadTodos()
  }, [loadTodos])

  const openAddModal = () => {
    setTodo(null)
    setModal(true)
  }

  const openEditModal = () => {
    setModal(true)
  }

  return (
    <Box sx={STYLES.wrapper}>
      <Box sx={STYLES.container}>
        <FilterTool setFilter={setFilterTodo}/>
        {modal &&
          <TodoForm createTodo={addTodo}
                    visible={modal}
                    setVisible={setModal}
                    todo={todo}
                    updateTodo={updateTodo}
          />}
        {todos.length ? (
          <List>
            {
              todos.filter(todo => filterTodo ? (todo.status === filterTodo) : (todo))
                .slice(-5).reverse().map((todo: ITodo, index: number) =>
                <TodoItem todo={todo}
                          removeTodo={removeTodo}
                          key={todo.id}
                          getTodo={getTodo}
                          openEdit={openEditModal}
                          updateStatus={updateStatus}
                />
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