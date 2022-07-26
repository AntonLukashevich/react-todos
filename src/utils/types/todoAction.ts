import { TodoActionTypes } from '../enums/todoActionTypes'
import { ITodo } from '../interfaces'

interface FetchTodoAction {
  type: TodoActionTypes.FETCH_TODOS
}

interface FetchTodoSuccessAction {
  type: TodoActionTypes.FETCH_TODOS_SUCCESS
  payload: ITodo[]
}

interface FetchTodoErrorAction {
  type: TodoActionTypes.FETCH_TODOS_ERROR
  payload: string
}

interface DeleteTodoAction {
  type: TodoActionTypes.DELETE_TODO
}

interface DeleteTodoSuccessAction {
  type: TodoActionTypes.DELETE_TODO_SUCCESS
  payload: ITodo[]
}

interface DeleteTodoErrorAction {
  type: TodoActionTypes.DELETE_TODO_ERROR
  payload: string
}

interface CreateTodoAction {
  type: TodoActionTypes.CREATE_TODO
}

interface CreateTodoSuccessAction {
  type: TodoActionTypes.CREATE_TODO_SUCCESS
  payload: ITodo[]
}

interface CreateTodoErrorAction {
  type: TodoActionTypes.CREATE_TODO_ERROR
  payload: string
}

interface EditTodoAction {
  type: TodoActionTypes.EDIT_TODO
}

interface EditTodoSuccessAction {
  type: TodoActionTypes.EDIT_TODO_SUCCESS
  payload: ITodo
}

interface EditTodoErrorAction {
  type: TodoActionTypes.EDIT_TODO_ERROR
  payload: string
}

export type TodoAction =
  | FetchTodoAction
  | FetchTodoErrorAction
  | FetchTodoSuccessAction
  | DeleteTodoAction
  | DeleteTodoErrorAction
  | DeleteTodoSuccessAction
  | CreateTodoAction
  | CreateTodoErrorAction
  | CreateTodoSuccessAction
  | EditTodoAction
  | EditTodoErrorAction
  | EditTodoSuccessAction
