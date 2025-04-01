import { Box, Card, CardContent, Divider, Typography, useTheme } from '@mui/material';
import { getArrFromObj } from '../helpers';
import { TIME } from '../constants/date';

const ScheduleBells = () => {
  const theme = useTheme();
  return (
    <Card
      sx={[
        {
          p: 2,
          display: 'flex',
          flexDirection: 'column',
        },
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
};

export default ScheduleBells;
