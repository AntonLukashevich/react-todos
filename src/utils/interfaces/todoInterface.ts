export interface ITodo {
  id: number;
  title: string;
  description: string;
  status: string;
  createdAt?: Date;
  modifiedAt?: Date;
}