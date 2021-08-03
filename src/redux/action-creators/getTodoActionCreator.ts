import axios from 'axios';
import {Dispatch} from 'redux';
import {TodoActionType} from '../action-types';
import {TodoAction} from '../actions';

export const getTodo = () => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      console.log('something here1');
      const {data} = await axios({
        method: 'GET',
        url: 'http://127.0.0.1:8181/fetchAll',
      });
      dispatch({
        type: TodoActionType.GET_TODO,
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
