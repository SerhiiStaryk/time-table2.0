import { RouterProvider } from 'react-router-dom';
import router from './router';
import AppTheme from './theme/AppTheme';
import { CssBaseline } from '@mui/material';
import GroupController from './controller/GroupController';

const App = (props: { disableCustomTheme?: boolean }) => (
  <AppTheme {...props}>
    <CssBaseline enableColorScheme />
    <GroupController>
      <RouterProvider router={router} />
    </GroupController>
  </AppTheme>
);

export default App;
