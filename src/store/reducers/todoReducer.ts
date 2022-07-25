import { TodoState } from '../../utils/interfaces'
import { TodoAction } from '../../utils/types/todoAction'
import { TodoActionTypes } from '../../utils/enums/todoActionTypes'

const initState: TodoState = {
  todos: [],
  loading: false,
  error: null,
}

export const todoReducer = (state = initState, action: TodoAction): TodoState => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODOS:
      return { ...state, loading: true }
    case TodoActionTypes.FETCH_TODOS_SUCCESS:
      return { ...state, loading: false, todos: action.payload }
    case TodoActionTypes.FETCH_TODOS_ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}
