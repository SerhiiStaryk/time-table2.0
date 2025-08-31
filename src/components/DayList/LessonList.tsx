import { Grid } from '@mui/material';
import { TIME_TABLE } from '@/constants/schedule';
import { getCurrentDay } from '@/helpers';
import { useGroupData } from '@/controller/GroupController/hooks/useGroupData';
import { useChildData } from '@/controller/ChildController/hooks/useChildData';
import { DayCard } from '@/components/DayCard';

const DayList = () => {
  const { group } = useGroupData();
  const { child } = useChildData();

  return (
    <Grid
      mb={4}
      container
      spacing={2}
    >
      {TIME_TABLE[child][group].map((day, index) => (
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
