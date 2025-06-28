import { NavLink } from 'react-router';

export default function Navbar() {
  return (
    <nav className="container mx-auto p-4 mt-4">
      <ul className="flex items-center justify-center gap-5">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
    </nav>
  );
}
