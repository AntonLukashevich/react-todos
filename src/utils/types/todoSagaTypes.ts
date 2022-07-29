import { ITodo } from '../interfaces'
import { todoTypes } from '../enums'

export interface TodosState {
  todos: ITodo[]
  loading: boolean
  error: null | string
}

export interface FetchTodosSuccessPayload {
  todos: ITodo[]
}

export interface FetchTodosFailurePayload {
  error: string
}

export interface DeleteTodoSuccessPayload {
  todos: ITodo[]
}

export interface DeleteTodoFailurePayload {
  error: string
}

export interface FetchTodosRequest {
  type: typeof todoTypes.FETCH_TODO_REQUEST
}

export type FetchTodosSuccess = {
  type: typeof todoTypes.FETCH_TODO_SUCCESS
  payload: FetchTodosSuccessPayload
}

export type FetchTodosFailure = {
  type: typeof todoTypes.FETCH_TODO_FAILURE
  payload: FetchTodosFailurePayload
}

export interface DeleteTodoRequest {
  type: typeof todoTypes.DELETE_TODO_REQUEST
}

export type DeleteTodoSuccess = {
  type: typeof todoTypes.DELETE_TODO_SUCCESS
  payload: DeleteTodoSuccessPayload
}

export type DeleteTodoFailure = {
  type: typeof todoTypes.DELETE_TODO_FAILURE
  payload: DeleteTodoFailurePayload
}

export type TodosActions =
  | FetchTodosRequest
  | FetchTodosSuccess
  | FetchTodosFailure
  | DeleteTodoRequest
  | DeleteTodoSuccess
  | DeleteTodoFailure
