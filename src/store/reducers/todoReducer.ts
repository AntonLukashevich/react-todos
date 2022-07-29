import { TodosActions, TodosState } from '../../utils/types/todoSagaTypes'
import { todoTypes } from '../../utils/enums'

const initialState: TodosState = {
  todos: [],
  loading: false,
  error: null,
}

export const todoReducer = (state = initialState, action: TodosActions) => {
  switch (action.type) {
    case todoTypes.FETCH_TODO_REQUEST:
      return {
        ...state,
        loading: true
      };
    case todoTypes.FETCH_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload.todos,
        error: null
      };
    case todoTypes.FETCH_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        todos: [],
        error: action.payload.error
      };
    case todoTypes.DELETE_TODO_REQUEST:
      return {
        ...state,
        loading: true
      };
    case todoTypes.DELETE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload.todos,
        error: null
      };
    case todoTypes.DELETE_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        todos: [],
        error: action.payload.error
      };
    default:
      return {
        ...state
      };
  }
}