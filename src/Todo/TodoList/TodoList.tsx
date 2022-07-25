import React, { useEffect, useState } from 'react'
import { Alert, AlertTitle, Box, Button, List } from '@mui/material'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { useTypedSelector } from '../../utils/hooks/useTypedSelector'
import { FilterTool } from '../../components/FilterTool'
import { useActions } from '../../utils/hooks/useAction'
import { Loader } from '../../components/Loader'
import { TodoForm } from '../TodoForm/TodoForm'
import { ITodo } from '../../utils/interfaces'
import { TodoItem } from '../TodoItem'
import { useTodo } from '../useTodo'
import { STYLES } from './constants'

export const TodoList = () => {
  const { error, loading, todos } = useTypedSelector((state) => state.todo)
  const { fetchTodos } = useActions()
  const {
    loadTodos,
    //todos,
    removeTodo,
    addTodo,
    getTodo,
    updateTodo,
    setTodo,
    todo,
    updateStatus,
    //todosLoading,
    //errors,
  } = useTodo()

  const [modal, setModal] = useState(false)
  const [filterTodo, setFilterTodo] = useState('')

  useEffect(() => {
    //loadTodos()
    fetchTodos()
  }, [loadTodos])

  const openAddModal = () => {
    setTodo(null)
    setModal(true)
  }

  const openEditModal = () => {
    setModal(true)
  }

  const displayedTodos = todos
    .filter((todo) => (filterTodo ? todo.status === filterTodo : todo))
    .slice(-5)
    .reverse()

  return (
    <Box sx={STYLES.wrapper}>
      <Box sx={STYLES.container}>
        <FilterTool setFilter={setFilterTodo} />
        {modal && <TodoForm createTodo={addTodo} setVisible={setModal} todo={todo} updateTodo={updateTodo} />}
        {loading ? (
          <Loader />
        ) : error ? (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {error}
          </Alert>
        ) : todos.length ? (
          <List>
            <TransitionGroup>
              {displayedTodos.map((todo: ITodo) => (
                <CSSTransition key={todo.id} timeout={700} classNames="item">
                  <TodoItem
                    todo={todo}
                    removeTodo={removeTodo}
                    key={todo.id}
                    getTodo={getTodo}
                    openEdit={openEditModal}
                    updateStatus={updateStatus}
                  />
                </CSSTransition>
              ))}
            </TransitionGroup>
          </List>
        ) : (
          <Box sx={STYLES.noTodos}>
            {' '}
            There are nothing here....
            <br />
            Please create one
          </Box>
        )}
      </Box>
      <Box sx={STYLES.btnGroup}>
        <Button variant="contained" color="success" type="button" onClick={openAddModal}>
          Create new
        </Button>
      </Box>
    </Box>
  )
}
