import {useCallback, useState} from "react";

import {ITodo} from "../utils/interfaces";
import {useApi} from "../utils/hooks";
import {TODOS} from "./TodoList/constants/mock-data";

export const useTodo = () => {
  const [todos, setTodos] = useState<ITodo[]>([])
  const {getAllTodos, createTodo, deleteTodo, editTodo, errors} = useApi()
  const [todo, setTodo] = useState<ITodo | null>()
  const [todosLoading, setTodosLoading] = useState(false)

  const loadTodos = useCallback((): void => {
    setTodosLoading(true)
    setTimeout(() => {
      getAllTodos().then((response: ITodo[]) => {
        if (errors.length) {
          console.log(errors)
          setTodosLoading(false)
        } else {
          setTodos(response)
          setTodosLoading(false)
        }
      })

    }, 500)
  }, [])

  const removeTodo = (todoId: number) => {
    deleteTodo(todoId).then((response: any) => {
      setTodos(response)
    })
  }

  const addTodo = (todo: { title: string, description: string }) => {
    createTodo(todo.title, todo.description).then((response: ITodo) => {
      setTodos(todos.concat(response))
    })
  }

  const getTodo = (todo: ITodo) => {
    setTodo(todo)
  }

  const updateTodo = (todo: ITodo) => {
    editTodo(todo).then((response: ITodo) => {
      setTodos(todos.map((td: ITodo) => {
        if (td.id === response.id) {
          return todo;
        }
        return td;
      }))
    })
  }

  const updateStatus = (todoId: number, newStatus: string) => {
    editTodo({id: todoId, status: newStatus}).then((response: ITodo) => {
      setTodos(todos.map((td: ITodo) => {
        if (td.id === response.id) {
          return response;
        }
        return td;
      }))
    })
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
    updateStatus,
    todosLoading,
    setTodosLoading,
    errors
  }
}