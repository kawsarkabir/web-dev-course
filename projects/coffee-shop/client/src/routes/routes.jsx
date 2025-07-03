import Root from '@/layout/Root';
import Home from '@/pages/home/Home';
import SignIn from '@/pages/signIn/SignIn';
import SignUp from '@/pages/signUp/SignUp';
import { createBrowserRouter } from 'react-router';
import PrivateRoute from './PrivateRoutes';
import Dashboard from '@/pages/dashboard/Dashboard';
import AddCoffee from '@/pages/addCofee/AddCoffee';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/dashboard',
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/addCoffee',
        element: <AddCoffee />,
      },
    ],
  },
]);
