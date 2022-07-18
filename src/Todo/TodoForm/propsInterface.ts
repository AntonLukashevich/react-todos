import {ITodo} from "../../utils/interfaces";

export interface IProps {
  todo?: ITodo | null
  visible: boolean;
  setVisible: (value: boolean) => void;
  createTodo: (todo: { title: string, description: string }) => void;
  updateTodo: (todo: ITodo) => void;
}