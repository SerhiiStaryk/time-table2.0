import { useMemo, useReducer, ReactNode, PropsWithChildren } from 'react';
import { ContextData } from './context/ContextData';
import { ContextApi } from './context/ContextApi';
import { getLocalStorageItem, setLocalStorageItem } from '@/helpers';

export type Group = 'first' | 'second';

export type State = {
  group: Group;
};

const defaultGroup: Group = (getLocalStorageItem('group') as Group) ?? ('first' as Group);

const defaultState: State = { group: defaultGroup };

type Action = { type: 'changeGroup'; payload: Group };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'changeGroup':
      setLocalStorageItem('group', action.payload);
      return { ...state, group: action.payload };
    default:
      return state;
  }
};

const GroupController = ({ children }: PropsWithChildren) => {
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
