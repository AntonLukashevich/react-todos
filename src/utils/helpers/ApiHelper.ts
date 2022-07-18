import axios, {AxiosResponse} from "axios";

import {ITodo} from "../interfaces";

export const ApiHelper = () => {

  const getAllTodos = (): Promise<ITodo[]> => {
    return axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=20')
      .then((response: AxiosResponse) => response.data)
  }

  return {
    getAllTodos
  }
}