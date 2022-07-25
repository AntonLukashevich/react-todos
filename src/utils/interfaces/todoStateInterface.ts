import { ITodo } from './todoInterface'

export interface TodoState {
  todos: ITodo[]
  loading: boolean
  error: null | string
}
