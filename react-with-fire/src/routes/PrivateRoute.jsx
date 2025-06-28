import { useAuth } from '@/context/AuthContext';
import { Navigate } from 'react-router';

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/signin" replace />;
  }
  return children;
}
