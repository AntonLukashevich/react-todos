import {ITodo} from "../../utils/interfaces";

export interface IProps {
  todo: ITodo;
  removeTodo: (id: number) => void;
  getTodo: (todo: ITodo) => void;
  openEdit: () => void;
  updateStatus: (id: number, status: string) => void;
}