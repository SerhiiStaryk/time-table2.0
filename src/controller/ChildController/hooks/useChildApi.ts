import { useContext } from 'react';
import { ContextApi } from '../context/ContextApi';

export const useChildApi = () => {
  const context = useContext(ContextApi);
  if (!context) {
    throw new Error('useChildApi must be used within a ChildController');
  }
  return context;
};
