import Bookdetails from '@/pages/bookdetails/Bookdetails';
import Error from '@/pages/Error';
import Home from '@/pages/home/Home';
import ListedBook from '@/pages/listedBook/ListedBook';
import Login from '@/pages/login/Login';
import ReadBookList from '@/pages/readBookList/ReadBookList';
import Root from '@/root/Root';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/bookdetails/:id',
        loader: async ({ params }) => {
          const res = await fetch('/data.json');
          const books = await res.json();
          const book = books.find((b) => b.bookId === Number(params.id));
          return book;
        },
        element: <Bookdetails />,
      },
      {
        path: '/listed-book',
        element: <ListedBook />,
      },
      {
        path: '/read-book-list',
        loader: () => fetch('data.json'),
        element: <ReadBookList />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);
