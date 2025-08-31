import { getActiveLessonCurrent } from '../../helpers';
import { Box } from '@mui/material';
import { Text } from '@/components/Text';
import { Lesson } from '@/types';

export type LessonItemProps = {
  lesson: Lesson;
  active: boolean;
  idx: number;
};

export const LessonItem = ({ lesson, active, idx }: LessonItemProps) => {
  const isLessonCurrent = getActiveLessonCurrent(lesson.time.start, lesson.time.end);
  const isActive = active && isLessonCurrent;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box>
        <Text mr={1}>{`${idx + 1}`}.</Text>
        <Text>{lesson.name}</Text>
      </Box>
      <Text>
        {lesson.time.start} - {lesson.time.end}
        {isActive && '🟢'}
      </Text>
    </Box>
  );
};
