import {ITodo} from "../../utils/interfaces";

export interface IProps {
  todo: ITodo;
  index: number;
  onChange: (id: number) => void;
  removeTodo: (id: number) => void;
}