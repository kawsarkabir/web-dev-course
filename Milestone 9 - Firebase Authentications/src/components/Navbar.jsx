import { useAuth } from '@/context/AuthContext';
import { Link, NavLink } from 'react-router';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-100 shadow">
      <h1 className="text-xl font-bold">My App</h1>

      <nav>
        <ul className='flex items-center justify-center gap-4'>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/order">Orders</NavLink></li>
          <li><NavLink to="/profile">Profile</NavLink></li>
        </ul>
        
      </nav>
      {user ? (
        <div className="flex items-center gap-4">
          <img
            src={user.photoURL || 'https://i.pravatar.cc/40'}
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <span>{user.displayName || 'User'}</span>
          <button onClick={logout} className="text-sm text-red-600 underline">
            Logout
          </button>
        </div>
      ) : (
        <div className="space-x-4">
          <Link to="/signin" className="text-blue-600 hover:underline">
            Sign In
          </Link>
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}
