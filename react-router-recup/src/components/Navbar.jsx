import navigationData from '@/utils/navigationData';
import { NavLink } from 'react-router';

export default function Navbar() {
  return (
    <nav>
      <ul className="flex justify-center gap-5 pt-4 items-center">
        {navigationData.map((navLinks) => (
          <li key={navLinks.id}>
            <NavLink
              to={navLinks.path}
              className={({ isActive }) => (isActive ? 'text-shadow-sky-400' : '')}
            >
              {navLinks.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
