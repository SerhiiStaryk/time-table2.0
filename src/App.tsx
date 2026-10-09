import { useEffect, useRef, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import AppTheme from './theme/AppTheme';
import { CssBaseline } from '@mui/material';
import GroupController from './controller/GroupController';
import ChildController from './controller/ChildController';
import { InstallPrompt } from './components/InstallPrompt';
import { PwaUpdater } from './components/PwaUpdater';

const App = (props: { disableCustomTheme?: boolean }) => {
  const visitedRoutePaths = useRef(new Set([router.state.location.pathname]));
  const [routeVisitCount, setRouteVisitCount] = useState(1);

  useEffect(
    () =>
      router.subscribe(({ location }) => {
        if (visitedRoutePaths.current.has(location.pathname)) return;

        visitedRoutePaths.current.add(location.pathname);
        setRouteVisitCount(visitedRoutePaths.current.size);
      }),
    [],
  );

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <ChildController>
        <GroupController>
          <>
            <RouterProvider router={router} />
            <PwaUpdater />
            <InstallPrompt routeVisitCount={routeVisitCount} />
          </>
        </GroupController>
      </ChildController>
    </AppTheme>
  );
};

export default App;
