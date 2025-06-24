import Navbar from '@/components/Navbar';
import Footer from '@/pages/Footer';
import { Outlet } from 'react-router';

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}
