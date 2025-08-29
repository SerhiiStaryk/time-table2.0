import { useContext } from 'react';
import { ContextData } from '../context/ContextData';

export const useGroupData = () => {
  const context = useContext(ContextData);
  if (!context) {
    throw new Error('useGroupData must be used within a GroupController');
  }
  return context;
};
