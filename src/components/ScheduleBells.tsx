import { Box, Card, CardContent, Divider, Typography } from '@mui/material';
import { getArrFromObj } from '../helpers';
import { TIME } from '../constants/date';

const ScheduleBells = () => (
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
        variant='h6'
        component='h3'
        sx={{ textAlign: 'center' }}
      >
        Розклад дзвінків
      </Typography>
      <Divider sx={{ my: 2, opacity: 0.8, borderColor: 'divider' }} />
      <Box component='ol'>
        {getArrFromObj(TIME).map((item, index) => (
          <Box
            key={index}
            component='li'
          >
            {item}
          </Box>
        ))}
      </Box>
    </CardContent>
  </Card>
);

export default ScheduleBells;
