export interface IProps {
  createTodo: (todo: {title: string, description: string}) => void;
  visible: boolean;
  setVisible: (value: boolean) => void;
}