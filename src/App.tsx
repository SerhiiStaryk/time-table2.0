import { RouterProvider } from 'react-router-dom';
import router from './router';
import AppTheme from './theme/AppTheme';
import { CssBaseline } from '@mui/material';
import GroupController from './controller/GroupController';
import ChildController from './controller/ChildController';

const App = (props: { disableCustomTheme?: boolean }) => (
  <AppTheme {...props}>
    <CssBaseline enableColorScheme />
    <ChildController>
      <GroupController>
        <RouterProvider router={router} />
      </GroupController>
    </ChildController>
  </AppTheme>
);

export default App;
