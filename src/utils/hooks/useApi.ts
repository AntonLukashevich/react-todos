import axios, { AxiosError, AxiosResponse } from 'axios'

import { environment } from '../../enviroments/environment.pros'
import { ITodo } from '../interfaces'
import { useState } from 'react'

export const useApi = () => {
  const [errors, setErrors] = useState<string[]>([])

  const getAllTodos = async (): Promise<ITodo[]> => {
    return await axios
      .get<ITodo[]>(<string>environment.backEndUrl)
      .then((response: AxiosResponse) => response.data)
      .catch((error: AxiosError) => {
        setErrors([...errors, error.message])
      })
  }

  const deleteTodo = async (todoId: number): Promise<ITodo[]> => {
    return await axios
      .delete(<string>environment.backEndUrl + '/', { data: { id: todoId } })
      .then((response: AxiosResponse) => response.data)
      .catch((error: AxiosError) => {
        setErrors([...errors, error.message])
      })
  }

  const createTodo = async (newTitle: string, newDescription: string): Promise<ITodo> => {
    return await axios
      .post(<string>environment.backEndUrl + '/', { title: newTitle, description: newDescription })
      .then((response: AxiosResponse) => response.data)
      .catch((error: AxiosError) => {
        setErrors([...errors, error.message])
      })
  }

  const editTodo = async (changes: Record<string, any>): Promise<ITodo> => {
    return await axios
      .patch<ITodo>(<string>environment.backEndUrl + '/', {
        ...changes,
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
    errors,
  }
}
