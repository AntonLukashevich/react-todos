import { Dispatch } from 'redux'
import axios, { AxiosError } from 'axios'

import { ITodo } from '../../utils/interfaces'
import { TodoAction } from '../../utils/types/todoAction'
import { environment } from '../../enviroments/environment.pros'
import { TodoActionTypes } from '../../utils/enums/todoActionTypes'

export const fetchTodos = () => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODOS })
      const response = await axios.get<ITodo[]>(<string>environment.backEndUrl)
      setTimeout(() => {
        dispatch({ type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data })
      }, 500)
    } catch (error: AxiosError | any) {
      dispatch({ type: TodoActionTypes.FETCH_TODOS_ERROR, payload: `error: ${error.message}; code: ${error.code}` })
    }
  }
}

export const deleteTodo = (todoId: number) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.DELETE_TODO })
      const response = await axios.delete(`${environment.backEndUrl}/`, { data: { id: todoId } })
      setTimeout(() => {
        dispatch({ type: TodoActionTypes.DELETE_TODO_SUCCESS, payload: response.data })
      }, 500)
    } catch (error: AxiosError | any) {
      dispatch({ type: TodoActionTypes.DELETE_TODO_ERROR, payload: `error: ${error.message}; code: ${error.code}` })
    }
  }
}

export const createTodo = (newTitle: string, newDescription: string) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.CREATE_TODO })
      const response = await axios.post(`${environment.backEndUrl}/`, {
        title: newTitle,
        description: newDescription,
      })
      dispatch({ type: TodoActionTypes.CREATE_TODO_SUCCESS, payload: response.data })
    } catch (error: AxiosError | any) {
      dispatch({ type: TodoActionTypes.CREATE_TODO_ERROR, payload: `error: ${error.message}; code: ${error.code}` })
    }
  }
}

export const editTodo = (changes: Record<string, any>) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.EDIT_TODO })
      const response = await axios.patch(`${environment.backEndUrl}/`, {
        ...changes,
      })
      dispatch({ type: TodoActionTypes.EDIT_TODO_SUCCESS, payload: response.data })
    } catch (error: AxiosError | any) {
      dispatch({ type: TodoActionTypes.EDIT_TODO_ERROR, payload: `error: ${error.message}; code: ${error.code}` })
    }
  }
}
