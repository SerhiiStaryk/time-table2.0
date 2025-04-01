import { ReactNode } from 'react';
import { Box, CardContent, Divider, Typography } from '@mui/material';
import { DayNames, DAYS } from '../../constants/date';
import { Card, CardGlobalStyles } from './styles';

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
      sx={[{ color: 'text.primary' }]}
    >
      {children}
    </Typography>
  );

  return (
    <>
      <CardGlobalStyles />
      <Card
        active={active}
        key={item.day}
        className='card'
      >
        <CardContent>
          <Typography
            component='h3'
            variant='h6'
            sx={[{ color: 'text.primary' }, { textAlign: 'center' }]}
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
    </>
  );
};

export default ScheduleLessons;
