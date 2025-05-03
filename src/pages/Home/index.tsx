import { Grid } from '@mui/material';
import Holidays from '../../components/Holidays';
import LessonsList from '../../components/LessonList';
import ScheduleBells from '../../components/ScheduleBells';

const HomePage = () => {
  return (
    <>
      <LessonsList />
      <Grid
        container
        spacing={2}
        sx={{ width: '100%' }}
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <ScheduleBells />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Holidays />
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
