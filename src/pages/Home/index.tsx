import { Grid } from '@mui/material';
import { BellCard } from '../../components/BellCard';
import LessonsList from '../../components/DayList/LessonList';
import { HolidayCard } from '../../components/HolidayCard';
import { Switcher } from '../../components/Switcher';

export const HomePage = () => {
  return (
    <>
      <Switcher />
      <LessonsList />
      <Grid container spacing={2} width={'100%'}>
        <Grid size={{ xs: 12, md: 6 }}>
          <BellCard />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <HolidayCard />
        </Grid>
      </Grid>
    </>
  );
};
