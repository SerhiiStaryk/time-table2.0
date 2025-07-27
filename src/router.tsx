import { createBrowserRouter } from 'react-router-dom';
import { AboutPage } from './pages/About';
import { Layout } from './components/Layout';
import { HomePage } from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/time-table2.0/',
    element: <Layout />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
    ],
  },
]);

export default router;
