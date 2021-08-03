import {TodoAction} from '../actions';
import {TodoActionType} from '../action-types';

export interface ITodo {
  id?: string;
  title: string;
  description: string;
  state?: string;
}

export interface TodosState {
  loading: boolean;
  error: null | string;
  data: ITodo[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (state: TodosState = initialState, action: TodoAction) => {
  switch (action.type) {
    case TodoActionType.ADD_TODO_SUCCESS:
      return {
        loading: false,
        error: null,
        data: [...state.data, {...action.payload}],
      };
    case TodoActionType.GET_TODO:
      console.log('something here');
      return {
        loading: false,
        error: null,
        data: [...state.data, ...action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
