import { useContext, useMemo, useReducer, ReactNode, createContext } from 'react';

export type Group = 'first' | 'second';

interface State {
  group: Group;
}

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

const ContextData = createContext<State | null>(null);
const ContextApi = createContext<{ changeGroup: (group: Group) => void } | null>(null);

export const useGroupData = () => {
  const context = useContext(ContextData);
  if (!context) {
    throw new Error('useGroupData must be used within a GroupController');
  }
  return context;
};

export const useGroupApi = () => {
  const context = useContext(ContextApi);
  if (!context) {
    throw new Error('useGroupApi must be used within a GroupController');
  }
  return context;
};

const GroupController = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const data = useMemo(() => {
    return { group: state.group };
  }, [state.group]);

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
