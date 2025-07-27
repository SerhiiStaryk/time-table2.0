import { CardContent, Typography } from '@mui/material';
import { DayNames, DAYS } from '../../constants/date';
import { LessonItem } from '../LessonItem';
import { Card } from '../ui/Card';
import { Item } from './types';
import { Divider } from '../Divider';

type DayCardProps = {
  item: Item;
  today: DayNames;
};

export const DayCard = ({ item, today }: DayCardProps) => {
  const { day, lessons } = item;

  const active = DAYS[today] === day;

  return (
    <Card
      key={day}
      active={active}
      className='card'
    >
      <CardContent>
        <Typography
          variant='h6'
          component='h3'
          align='center'
          color='text.primary'
        >
          {day}
        </Typography>
        <Divider />
        <>
          {lessons.map((lesson, idx) => (
            <LessonItem
              idx={idx}
              key={idx}
              lesson={lesson}
              active={active}
            />
          ))}
        </>
      </CardContent>
    </Card>
  );
};
