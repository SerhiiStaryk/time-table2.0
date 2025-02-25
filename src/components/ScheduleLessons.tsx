import { ReactNode } from 'react';
import { Box, Card, CardContent, Divider, Typography } from '@mui/material';
import { DayNames, DAYS } from '../constants/date';

export type Lesson = {
  name: string;
  time: string;
};

export type Item = {
  day: string;
  lessons: Lesson[];
};

const ScheduleLessons = ({ item, today }: { item: Item; today: DayNames }) => {
  const active = DAYS[today] === item.day;

  const Text = ({ children }: { children: ReactNode }) => (
    <Typography
      variant='subtitle2'
      component={'span'}
      sx={[active ? { color: 'grey.50' } : { color: null }]}
    >
      {children}
    </Typography>
  );

  return (
    <Card
      key={item.day}
      sx={[
        {
          p: 2,
          display: 'flex',
          flexDirection: 'column',
        },
        active &&
          (theme => ({
            border: 'none',
            background: 'radial-gradient(circle at 50% 0%, hsl(220, 20%, 35%), hsl(220, 30%, 6%))',
            boxShadow: `0 8px 12px hsla(220, 20%, 42%, 0.2)`,
            ...theme.applyStyles('dark', {
              background: 'radial-gradient(circle at 50% 0%, hsl(220, 20%, 20%), hsl(220, 30%, 16%))',
              boxShadow: `0 8px 12px hsla(0, 0%, 0%, 0.8)`,
            }),
          })),
      ]}
    >
      <CardContent>
        <Typography
          component='h3'
          variant='h6'
          sx={[active ? { color: 'grey.50' } : { color: null }, { textAlign: 'center' }]}
        >
          {item.day}
        </Typography>
        <Divider sx={{ my: 2, opacity: 0.8, borderColor: 'divider' }} />
        <>
          {item.lessons.map((lesson: Lesson, idx: number) => (
            <Box
              key={idx}
              sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Box>
                <Text>{`${idx + 1}`}.&nbsp;&nbsp;</Text>
                <Text>{lesson.name}</Text>
              </Box>
              <Text>{lesson.time}</Text>
            </Box>
          ))}
        </>
      </CardContent>
    </Card>
  );
};

export default ScheduleLessons;
