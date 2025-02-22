import { Card, CardContent, Divider, Typography } from '@mui/material';

const Holidays = () => (
  <Card
    sx={[
      {
        p: 2,
        display: 'flex',
        flexDirection: 'column',
      },
    ]}
  >
    <CardContent>
      <Typography
        component='h3'
        variant='h6'
        sx={{ textAlign: 'center' }}
      >
        Канікули
      </Typography>
      <Divider sx={{ my: 2, opacity: 0.8, borderColor: 'divider' }} />
      <Typography component='p'>
        <b>Канікули осінні: </b> 21.10.2024 - 25.10.2024
      </Typography>
      <Typography component='p'>
        <b>Канікули зимові: </b> 23.12.2024 - 07.01.2025
      </Typography>
      <Typography component='p'>
        <b>Канікули весняні: </b> 10.03.2025 - 21.04.2025
      </Typography>
      <Typography component='p'>
        <b>Великодні святкування: </b> 14.04.2025 - 21.04.2025
      </Typography>
    </CardContent>
  </Card>
);

export default Holidays;
