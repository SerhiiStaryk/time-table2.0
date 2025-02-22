import { Grid2 } from '@mui/material';
import { DAYS, SHORT_NAME_DAYS } from '../constants/date';
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
      {TIME_TABLE[group].map((day, idx) => (
        <Grid2 size={{ xs: 12, md: 6 }}>
          <ScheduleLessons
            key={idx}
            item={day}
            today={DAYS[SHORT_NAME_DAYS[getCurrentDay()]]}
          />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default LessonsList;
