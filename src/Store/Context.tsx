import * as React from 'react';

interface ITodo {
  id: number;
  title: string;
  description: string;
  status: string;
}

type ContextType = {
  todos: [];
  fetch: (todo: ITodo) => void;
};

enum ActionTypes {
  FETCH = 'FETCH',
}

interface Action {
  type: ActionTypes;
  payload: {id: number; title: string; description: string; state: string};
}

type State = {id: number; title: string; description: string; state: string}[];

const TodoContext = React.createContext([]);

const reducer = (
  state: {id: number; title: string; description: string; state: string}[],
  action: Action,
): {id: number; title: string; description: string; state: string}[] => {
  const {type, payload} = action;
  switch (type) {
    case ActionTypes.FETCH:
      return [...state];

    default:
      return state;
  }
};

const Context: React.FC = ({children}) => {
  const [todos, dispatch] = React.useReducer(reducer, []);
  return (
    <TodoContext.Provider value={{todos, dispatch}}>
      {children}
    </TodoContext.Provider>
  );
};

export default Context;
