import { Typography } from '@mui/material';
import { getCurrentYear } from '../../helpers';

export const Footer = () => (
  <Typography
    mb={2}
    align='center'
    color='textPrimary'
  >
    &#169;{getCurrentYear()} Serhii Staryk
  </Typography>
);
