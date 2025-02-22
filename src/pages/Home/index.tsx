import { Grid2 } from '@mui/material';
import Holidays from '../../components/Holidays';
import LessonsList from '../../components/LessonList';
import ScheduleBells from '../../components/ScheduleBells';

const HomePage = () => {
  return (
    <>
      <LessonsList />
      <Grid2
        container
        spacing={2}
        sx={{ width: '100%' }}
      >
        <Grid2 size={{ xs: 12, md: 6 }}>
          <ScheduleBells />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Holidays />
        </Grid2>
      </Grid2>
    </>
  );
};

export default HomePage;
