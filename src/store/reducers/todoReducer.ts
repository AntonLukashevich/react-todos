import { ITodo, TodoState } from '../../utils/interfaces'
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
    case TodoActionTypes.DELETE_TODO:
      return { ...state, loading: false }
    case TodoActionTypes.DELETE_TODO_SUCCESS:
      return { ...state, loading: false, todos: action.payload }
    case TodoActionTypes.DELETE_TODO_ERROR:
      return { ...state, loading: false, error: action.payload }
    case TodoActionTypes.CREATE_TODO:
      return { ...state, loading: false }
    case TodoActionTypes.CREATE_TODO_SUCCESS:
      return { ...state, loading: false, todos: state.todos.concat(action.payload) }
    case TodoActionTypes.CREATE_TODO_ERROR:
      return { ...state, loading: false, error: action.payload }
    case TodoActionTypes.EDIT_TODO:
      return { ...state, loading: false }
    case TodoActionTypes.EDIT_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: state.todos.map((td: ITodo) => {
          if (td.id === action.payload.id) {
            return action.payload
          }
          return td
        }),
      }
    case TodoActionTypes.EDIT_TODO_ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}
