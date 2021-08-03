import {TodoActionType} from '../action-types';

interface AddTodoAction {
  type: TodoActionType.ADD_TODO;
  payload: {title: string; description: string};
}

interface AddTodoActionSuccess {
  type: TodoActionType.ADD_TODO_SUCCESS;
  payload: {id: string; title: string; description: string; state: string};
}

interface TodoActionError {
  type: TodoActionType.TODO_ERROR;
  payload: string;
}

interface GetTodosAction {
  type: TodoActionType.GET_TODO;
  payload: {id: string; title: string; description: string; state: string}[];
}

export type TodoAction =
  | AddTodoAction
  | AddTodoActionSuccess
  | TodoActionError
  | GetTodosAction;
