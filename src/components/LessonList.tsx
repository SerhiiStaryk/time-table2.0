import { Grid2 } from '@mui/material';
import { TIME_TABLE } from '../constants/schedule';
import { getCurrentDay } from '../helpers';
import ScheduleLessons from './ScheduleLessons';
import { useGroupData } from '../controller/GroupController';

const LessonsList = () => {
  const { group } = useGroupData();

  return (
    <Grid2
      container
      spacing={2}
      sx={{ mb: 4 }}
    >
      {TIME_TABLE[group].map(day => (
        <Grid2 size={{ xs: 12, md: 6 }}>
          <ScheduleLessons
            item={day}
            today={getCurrentDay()}
          />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default LessonsList;
