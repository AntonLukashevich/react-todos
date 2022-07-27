import { useCallback, useState } from 'react'

import { ITodo } from '../../utils/interfaces'
import { useTypedSelector } from '../../utils/hooks/useTypedSelector'

export const useTodoPage = () => {
  const [todo, setTodo] = useState<ITodo>()
  const { todos } = useTypedSelector((state) => state.todo)

  const getTodo = useCallback(
    (todoId: number): void => {
      setTodo(todos.find((todo) => todo.id === todoId))
    },
    [todo]
  )

  return {
    todo,
    getTodo,
    todos,
    setTodo,
  }
}
