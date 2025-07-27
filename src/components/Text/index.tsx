import { Typography } from '@mui/material';
import { ReactNode } from 'react';

export type TextProps = {
  mr?: number | string;
  children: ReactNode;
};

export const Text = ({ mr = 0, children }: TextProps) => (
  <Typography
    mr={mr}
    variant='subtitle2'
    component={'span'}
    sx={[{ color: 'text.primary' }]}
  >
    {children}
  </Typography>
);
