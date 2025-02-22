import { Box, Card, CardContent, Divider, Typography } from '@mui/material';
import { getArrFromObj } from '../helpers';
import { TIME } from '../constants/date';

const ScheduleBells = () => {
  const times = getArrFromObj(TIME);

  return (
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
          Розклад дзвінків
        </Typography>
        <Divider sx={{ my: 2, opacity: 0.8, borderColor: 'divider' }} />
        <Box component='ol'>
          {times.map((item, index) => (
            <Box
              component='li'
              key={index}
            >
              {item}
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ScheduleBells;
