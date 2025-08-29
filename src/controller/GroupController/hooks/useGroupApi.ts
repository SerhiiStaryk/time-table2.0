import { useContext } from 'react';
import { ContextApi } from '../context/ContextApi';

export const useGroupApi = () => {
  const context = useContext(ContextApi);
  if (!context) {
    throw new Error('useGroupApi must be used within a GroupController');
  }
  return context;
};
