import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/Home';
// import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter(
  [
    {
      path: '/time-table2.0/',
      element: <Layout />,
      children: [
        { path: '', element: <HomePage /> },
        // { path: 'about', element: <AboutPage /> },
      ],
    },
    // { path: '*', element: <NotFoundPage /> },
  ],
);

export default router;
