import { NavLink } from 'react-router';

export default function Navbar() {
  return (
    <nav className='mt-5'>
      <ul className='flex items-center justify-center gap-5'>
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/listed-book'}>Listed Book</NavLink>
        </li>
        <li>
          <NavLink to={'/read-book-list'}>Read Book</NavLink>
        </li>
        <li>
          <NavLink to={'/login'}>Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}
