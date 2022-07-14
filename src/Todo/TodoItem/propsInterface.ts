import {ITodo} from "../../utils/interfaces";

export interface IProps {
  todo: ITodo;
  removeTodo: (id: number) => void;
}