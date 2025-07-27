import { Toolbar as MuiToolbar, styled } from '@mui/material';

export const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  flexShrink: 0,
  display: 'flex',
  border: '1px solid',
  padding: '8px 12px',
  alignItems: 'center',
  boxShadow: theme.shadows[1],
  backdropFilter: 'blur(24px)',
  justifyContent: 'space-between',
  borderColor: theme.palette.divider,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backgroundColor: `rgba(${theme.palette.background.default}, 0.4)`,
}));
