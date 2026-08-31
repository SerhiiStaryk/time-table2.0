import { Text } from '@/components/Text';
import { Lesson } from '@/types';
import { Box } from '@mui/material';
import { getActiveLessonCurrent } from '../../helpers';

export type LessonItemProps = {
  lesson: Lesson;
  active: boolean;
  idx: number;
};

export const LessonItem = ({ lesson, active, idx }: LessonItemProps) => {
  const isLessonCurrent = getActiveLessonCurrent(
    lesson.time.start,
    lesson.time.end,
  );
  const isActive = active && isLessonCurrent;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box>
        <Text mr={1}>{`${idx + 1}`}.</Text>
        <Text>{lesson.name}</Text>
        {lesson?.cab && (
          <Text ml={1} color="success.main">
            ({lesson.cab})
          </Text>
        )}
      </Box>
      <Text>
        {lesson.time.start} - {lesson.time.end}
        {isActive && '🟢'}
      </Text>
    </Box>
  );
};
