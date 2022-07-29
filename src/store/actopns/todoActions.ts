import { todoTypes } from '../../utils/enums'
import {
  DeleteTodoFailure,
  DeleteTodoSuccess,
  FetchTodosFailure,
  FetchTodosFailurePayload,
  FetchTodosRequest,
  FetchTodosSuccess,
  FetchTodosSuccessPayload
} from '../../utils/types/todoSagaTypes'


export const fetchTodosRequest = (): FetchTodosRequest => ({
  type: todoTypes.FETCH_TODO_REQUEST
});

export const fetchTodosSuccess = (
  payload: FetchTodosSuccessPayload
): FetchTodosSuccess => ({
  type: todoTypes.FETCH_TODO_SUCCESS,
  payload
});

export const fetchTodosFailure = (
  payload: FetchTodosFailurePayload
): FetchTodosFailure => ({
  type: todoTypes.FETCH_TODO_FAILURE,
  payload
});

export const deleteTodoRequest = (todoId: number) => ({
  type: todoTypes.DELETE_TODO_REQUEST
})
export const deleteTodoSuccess = (
  payload: FetchTodosSuccessPayload
): DeleteTodoSuccess => ({
  type: todoTypes.DELETE_TODO_SUCCESS,
  payload
});

export const deleteTodoFailure = (
  payload: FetchTodosFailurePayload
): DeleteTodoFailure => ({
  type: todoTypes.DELETE_TODO_FAILURE,
  payload
});