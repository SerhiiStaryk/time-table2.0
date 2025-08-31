import { PropsWithChildren } from 'react';
import { Typography } from '@mui/material';

export type TextProps = PropsWithChildren<{
  mr?: number | string;
}>;

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
