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

  const removeTodo = (todoId: number) => {
    setTodos(todos.filter(todo => todo.id !== todoId))
  }

  const addTodo = (todo: { title: string, description: string }) => {
    setTodos(todos.concat([{
      title: todo.title,
      description: todo.description,
      id: Date.now(),
      completed: false
    }]))
  }

  return {
    todos,
    loadTodos,
    setTodos,
    removeTodo,
    addTodo,
  }
}