import {useCallback, useState} from "react";

import {TODOS} from "./TodoList/constants/mock-data";
import {ITodo} from "../utils/interfaces";
import {StatusTodo} from "../utils/enums";
import {useApi} from "../utils/hooks";


export const useTodo = () => {
  const [todos, setTodos] = useState<ITodo[]>(TODOS)
  const {getAllTodos} = useApi()
  const [todo, setTodo] = useState<ITodo | null>()

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
      status: StatusTodo.todo,
      createdAt: new Date(),
      modifiedAt: new Date(),
    }]))
  }

  const getTodo = (todo: ITodo) => {
    setTodo(todo)
  }

  const updateTodo = (todo: ITodo) => {
    setTodos(todos.map((td: ITodo) => {
      if (td.id === todo.id) {
        return todo;
      }
      return td;
    }))
  }

  const updateStatus = (todoId: number, newStatus: string) => {
    setTodos(todos.map((td: ITodo) => {
      if (td.id === todoId) {
        return {...td, status: newStatus};
      }
      return td;
    }))
  }

  return {
    todos,
    loadTodos,
    setTodos,
    removeTodo,
    addTodo,
    updateTodo,
    getTodo,
    setTodo,
    todo,
    updateStatus
  }
}