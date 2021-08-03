import axios from 'axios';
import {Dispatch} from 'redux';
import {TodoActionType} from '../action-types';
import {TodoAction} from '../actions';

interface Todo {
  id?: string;
  title: string;
  description: string;
  state?: string;
}

export const addTodo = (todo: Todo) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    dispatch({
      type: TodoActionType.ADD_TODO,
      payload: {title: todo.title, description: todo.description},
    });

    try {
      const {data} = await axios({
        method: 'POST',
        url: 'http://127.0.0.1:8181/create',
        data: {
          title: todo.title,
          description: todo.description,
        },
      });

      dispatch({
        type: TodoActionType.ADD_TODO_SUCCESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({
        type: TodoActionType.TODO_ERROR,
        payload: error.message,
      });
    }
  };
};
