import { combineReducers } from 'redux'

import { todoReducer } from './todoReducer'

export const reducer = combineReducers({
  todo: todoReducer,
})

export type RootState = ReturnType<typeof reducer>
