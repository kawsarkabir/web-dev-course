import Layout from '@/layout/Layout';
import About from '@/pages/About';
import Blog from '@/pages/Blog';
import DetailsBlog from '@/pages/DetailsBlog';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import { createBrowserRouter } from 'react-router';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <div>404 not found</div>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/blog',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Blog />,
      },
      {
        path: '/blog/:id',
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
        element: <DetailsBlog />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);
export default router;
