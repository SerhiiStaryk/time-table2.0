import { Outlet } from 'react-router-dom';
import Header from './Header';
import { Box, Container } from '@mui/material';

const Layout = () => {
  return (
    <>
      <Header />
      <Box
        component='main'
        sx={theme => ({
          width: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
          ...theme.applyStyles('dark', {
            backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
          }),
        })}
      >
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 24, sm: 18 },
            pb: { xs: 8, sm: 6 },
          }}
        >
          <Outlet />
        </Container>
      </Box>
    </>
  );
};

export default Layout;
