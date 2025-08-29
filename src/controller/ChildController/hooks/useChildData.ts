import { useContext } from 'react';
import { ContextData } from '../context/ContextData';

export const useChildData = () => {
  const context = useContext(ContextData);
  if (!context) {
    throw new Error('useChildData must be used within a ChildController');
  }
  return context;
};
