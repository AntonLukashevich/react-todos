import { useCallback, useState } from 'react'

import { useTypedSelector } from '../utils/hooks/useTypedSelector'
import { useActions } from '../utils/hooks/useAction'
import { ITodo } from '../utils/interfaces'

export const useTodo = () => {
  const [todo, setTodo] = useState<ITodo | null>()

  const { error, loading, todos } = useTypedSelector((state) => state.todo)
  const { fetchTodos, deleteTodo, createTodo, editTodo } = useActions()

  const loadTodos = useCallback((): void => {
    fetchTodos()
  }, [error])

  const removeTodo = (todoId: number) => {
    deleteTodo(todoId)
  }

  const addTodo = (todo: { title: string; description: string }) => {
    createTodo(todo.title, todo.description)
  }

  const getTodo = (todo: ITodo) => {
    setTodo(todo)
  }

  const updateTodo = (todo: ITodo) => {
    editTodo(todo)
  }

  const updateStatus = (todoId: number, newStatus: string) => {
    editTodo({ id: todoId, status: newStatus })
  }

  return {
    todos,
    loadTodos,
    removeTodo,
    addTodo,
    updateTodo,
    getTodo,
    setTodo,
    todo,
    updateStatus,
    loading,
    error,
  }
}
