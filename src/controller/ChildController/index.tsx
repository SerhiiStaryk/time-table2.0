import { PropsWithChildren, useMemo, useReducer } from 'react';
import { ContextData } from './context/ContextData';
import { ContextApi } from './context/ContextApi';
import { getLocalStorageItem, setLocalStorageItem } from '@/helpers';

export type Child = 'Maksym' | 'Veronika';

export type State = {
  child: Child;
};

const defaultChild: Child = (getLocalStorageItem('child') as Child) ?? ('Maksym' as Child);

const defaultState: State = { child: defaultChild };

type Action = { type: 'changeChild'; payload: Child };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'changeChild':
      setLocalStorageItem('child', action.payload);
      return { ...state, child: action.payload };
    default:
      return state;
  }
};

const ChildController = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const data = useMemo(() => ({ child: state.child }), [state.child]);

  const api = useMemo(
    () => ({
      changeChild: (child: Child) => {
        dispatch({ type: 'changeChild', payload: child });
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

export default ChildController;
