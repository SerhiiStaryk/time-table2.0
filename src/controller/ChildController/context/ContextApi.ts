import { createContext } from 'react';
import { Child } from '..';

export const ContextApi = createContext<{ changeChild: (group: Child) => void } | null>(null);
