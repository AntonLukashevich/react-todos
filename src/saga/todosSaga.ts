import { all, call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import { ITodo } from '../utils/interfaces'
import { environment } from '../enviroments/environment.prod'
import { fetchTodosFailure, fetchTodosSuccess } from '../store/actopns/todoActions'
import { todoTypes } from '../utils/enums'

const getTodos = () => axios.get<ITodo[]>(<string>environment.backEndUrl)

function* fetchTodosSaga() {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const response = yield call(getTodos)
    yield put(
      fetchTodosSuccess({
        todos: response.data,
      })
    )
  } catch (e: any) {
    yield put(
      fetchTodosFailure({
        error: e.message,
      })
    )
  }
}

const deleteTodo = (todoId: number) => axios.delete(`${environment.backEndUrl}/`, { data: { id: todoId } })

function* deleteTodoSaga() {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const response = yield call(deleteTodo)
    yield put(
      fetchTodosSuccess({
        todos: response.data,
      })
    )
  } catch (e: any) {
    yield put(
      fetchTodosFailure({
        error: e.message,
      })
    )
  }
}

export function* todosSaga() {
  yield all([
    takeLatest(todoTypes.FETCH_TODO_REQUEST, fetchTodosSaga),
    takeLatest(todoTypes.DELETE_TODO_REQUEST, deleteTodoSaga),
  ])
}
