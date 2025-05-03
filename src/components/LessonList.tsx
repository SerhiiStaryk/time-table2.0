import { Grid } from '@mui/material';
import { TIME_TABLE } from '../constants/schedule';
import { getCurrentDay } from '../helpers';
import ScheduleLessons from './ScheduleLessons/';
import { useGroupData } from '../controller/GroupController';

const LessonsList = () => {
  const { group } = useGroupData();

  return (
    <Grid
      container
      spacing={2}
      sx={{ mb: 4 }}
    >
      {TIME_TABLE[group].map((day, index) => (
        <Grid
          size={{ xs: 12, md: 6 }}
          key={index}
        >
          <ScheduleLessons
            item={day}
            today={getCurrentDay()}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default LessonsList;
