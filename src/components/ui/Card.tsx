import { Box, styled } from '@mui/material';

export const Card = styled(Box, {
  shouldForwardProp: prop => prop !== 'active', // Prevents `active` from being passed to DOM
})<{ active?: boolean }>(({ theme, active }) => ({
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  margin: '0 auto',
  position: 'relative',
  border: active ? 'none' : `1px solid ${theme.palette.grey[200]}`,
  background: '#f5f6fa',
  ...theme.applyStyles('dark', {
    border: active ? 'none' : `1px solid ${theme.palette.grey[700]}`,
    background: 'radial-gradient(circle at 50% 0%, hsl(220, 20%, 20%), hsl(220, 30%, 16%))',
  }),

  '&::after, &::before': {
    content: '""',
    boxSizing: 'content-box',
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundImage: active && 'conic-gradient(from var(--angle), #ff4545, #00ff99, #006aff, #ff0095, #ff4545)',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: -1,
    padding: theme.spacing(0.2),
    borderRadius: '10px',
    animation: '3s spin linear infinite',
  },
  '&::before': {
    filter: 'blur(1.5rem)',
    opacity: 0.5,
  },
  '@keyframes spin': {
    from: { '--angle': '0deg' },
    to: { '--angle': '360deg' },
  },
}));
