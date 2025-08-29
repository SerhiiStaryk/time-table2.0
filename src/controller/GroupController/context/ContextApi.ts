import { createContext } from 'react';
import { Group } from '..';

export const ContextApi = createContext<{ changeGroup: (group: Group) => void } | null>(null);
