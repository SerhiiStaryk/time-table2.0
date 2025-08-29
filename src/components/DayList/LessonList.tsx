import { Grid } from '@mui/material';
import { TIME_TABLE } from '../../constants/schedule';
import { getCurrentDay } from '../../helpers';
import { DayCard } from '../DayCard';
import { useGroupData } from '../../controller/GroupController';

const DayList = () => {
  const { group } = useGroupData();

  return (
    <Grid
      mb={4}
      container
      spacing={2}
    >
      {TIME_TABLE[group].map((day, index) => (
        <Grid
          key={index}
          size={{ xs: 12, md: 6 }}
        >
          <DayCard
            item={day}
            today={getCurrentDay()}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default DayList;
