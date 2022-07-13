import {useCallback, useState} from "react";

import {useApi} from "../utils/hooks";
import {ITodo} from "../utils/interfaces";

export const useTodo = () => {
  const [todos, setTodos] = useState<ITodo[]>([])
  const {getAllTodos} = useApi()

  const loadTodos = useCallback((): void => {
    getAllTodos().then((response: ITodo[]) => {
      setTodos(response)
    })
  }, [])

  const toggleTodo = (todoId: number) => {
    setTodos(todos.map(todo => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  const removeTodo = (todoId: number) => {
    setTodos(todos.filter(todo => todo.id !== todoId))
  }

  const addTodo = (title: string) => {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }

  return {
    todos,
    loadTodos,
    setTodos,
    toggleTodo,
    removeTodo,
    addTodo
  }
}