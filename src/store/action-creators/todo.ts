import { Dispatch } from 'redux'
import axios from 'axios'

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
    } catch (e) {
      dispatch({ type: TodoActionTypes.FETCH_TODOS_ERROR, payload: 'error' })
    }
  }
}
