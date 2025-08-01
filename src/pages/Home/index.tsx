import { Grid } from '@mui/material';
import { HolidayCard } from '../../components/HolidayCard';
import LessonsList from '../../DayList/LessonList';
import { BellCard } from '../../components/BellCard';

export const HomePage = () => (
  <>
    <LessonsList />
    <Grid
      container
      spacing={2}
      width={'100%'}
    >
      <Grid size={{ xs: 12, md: 6 }}>
        <BellCard />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <HolidayCard />
      </Grid>
    </Grid>
  </>
);
