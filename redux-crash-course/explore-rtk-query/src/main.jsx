import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from './context/AuthContext';
import { Toaster } from 'sonner';
import { RouterProvider } from 'react-router';
import { router } from './routes/routes';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <Toaster richColors position="top-right" />
        <RouterProvider router={router} />
      </AuthProvider>
    </Provider>
  </StrictMode>,
);
