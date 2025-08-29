import { createContext } from 'react';
import { State } from '..';

export const ContextData = createContext<State | null>(null);
