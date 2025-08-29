import { useMemo, useReducer, ReactNode } from 'react';
import { ContextData } from './context/ContextData';
import { ContextApi } from './context/ContextApi';

export type Group = 'first' | 'second';

export type State = {
  group: Group;
};

const defaultState: State = { group: 'second' };

type Action = { type: 'changeGroup'; payload: Group };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'changeGroup':
      return { ...state, group: action.payload };
    default:
      return state;
  }
};

const GroupController = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const data = useMemo(() => ({ group: state.group }), [state.group]);

  const api = useMemo(
    () => ({
      changeGroup: (group: Group) => {
        dispatch({ type: 'changeGroup', payload: group });
      },
    }),
    []
  );

  return (
    <ContextData.Provider value={data}>
      <ContextApi.Provider value={api}>{children}</ContextApi.Provider>
    </ContextData.Provider>
  );
};

export default GroupController;
