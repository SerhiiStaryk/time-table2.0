import { Card, CardContent, Divider, Typography, useTheme } from '@mui/material';
import { HOLIDAYS } from '../constants/schedule';

const Holidays = () => {
  const theme = useTheme();
  return (
    <Card
      sx={[
        { p: 2, display: 'flex', flexDirection: 'column' },
        theme.applyStyles('dark', {
          background: 'radial-gradient(circle at 50% 0%, hsl(220, 20%, 20%), hsl(220, 30%, 16%))',
        }),
      ]}
    >
      <CardContent>
        <Typography
          variant='h6'
          component='h3'
          sx={{ textAlign: 'center' }}
        >
          Канікули
        </Typography>
        <Divider sx={{ my: 2, opacity: 0.8, borderColor: 'divider' }} />
        {HOLIDAYS.map(({ name, start, end }) => (
          <Typography
            key={name}
            component='p'
            sx={{ mb: 1 }}
          >
            <b>{name}: </b> {start} - {end}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default Holidays;
