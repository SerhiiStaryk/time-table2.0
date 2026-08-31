import { Typography } from '@mui/material';
import { PropsWithChildren } from 'react';

export type TextProps = PropsWithChildren<{
  mr?: number | string;
  ml?: number | string;
  color?: string;
}>;

export const Text = ({
  mr = 0,
  ml = 0,
  color = 'text.primary',
  children,
}: TextProps) => (
  <Typography
    mr={mr}
    ml={ml}
    variant="subtitle2"
    component={'span'}
    sx={[{ color }]}
  >
    {children}
  </Typography>
);
