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

export type TodoAction = FetchTodoAction | FetchTodoErrorAction | FetchTodoSuccessAction
