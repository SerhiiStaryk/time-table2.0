import { Box, Card, CardContent, Typography, useTheme } from '@mui/material';
import { getActiveLessonCurrent, getArrFromObj } from '@/helpers';
import { TIME } from '@/constants/time';
import { Divider } from '@/components/Divider';

export const BellCard = () => {
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
          align='center'
        >
          Розклад дзвінків
        </Typography>
        <Divider />
        <Box component='ol'>
          {getArrFromObj(TIME).map((item, index) => {
            const isLessonCurrent = getActiveLessonCurrent(item.start, item.end);
            return (
              <Box
                key={index}
                component='li'
              >
                {item.start} - {item.end} {isLessonCurrent && '🟢'}
              </Box>
            );
          })}
        </Box>
      </CardContent>
    </Card>
  );
};
