import axios, {AxiosError, AxiosResponse} from "axios";

import {ITodo} from "../interfaces";
import {useState} from "react";

export const useApi = () => {
  const [errors, setErrors] = useState<string[]>([])

  const getAllTodos = (): Promise<ITodo[]> => {
    return axios.get<ITodo[]>('http://localhost:4000/api')
      .then((response: AxiosResponse) => response.data)
      .catch((error: AxiosError) => {
        setErrors([...errors, error.message])
      })
  }

  const deleteTodo = (todoId: number): Promise<ITodo[]> => {
    return axios.delete('http://localhost:4000/api/', {data: {id: todoId}})
      .then((response: AxiosResponse) => response.data)
      .catch((error: AxiosError) => {
        setErrors([...errors, error.message])
      })
  }

  const createTodo = (newTitle: string, newDescription: string): Promise<ITodo> => {
    return axios.post('http://localhost:4000/api/', {title: newTitle, description: newDescription})
      .then((response: AxiosResponse) => response.data)
      .catch((error: AxiosError) => {
        setErrors([...errors, error.message])
      })
  }

  const editTodo = (changes: Record<string, any>): Promise<ITodo> => {
    return axios.patch<ITodo>('http://localhost:4000/api/', {
      ...changes
    })
      .then((response: AxiosResponse) => response.data)
      .catch((error: AxiosError) => {
        setErrors([...errors, error.message])
      })
  }

  return {
    getAllTodos,
    createTodo,
    deleteTodo,
    editTodo,
    errors
  }
}