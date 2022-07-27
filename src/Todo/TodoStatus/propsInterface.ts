import { ITodo } from '../../utils/interfaces'

export interface IProps {
  todo: ITodo
  updateStatus: (id: number, status: string) => void
}
