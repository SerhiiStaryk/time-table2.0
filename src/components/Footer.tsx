import { Typography } from '@mui/material';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Typography
      color='textPrimary'
      sx={{ textAlign: 'center', marginBottom: 2 }}
    >
      &#169;{currentYear} Serhii Staryk
    </Typography>
  );
};
