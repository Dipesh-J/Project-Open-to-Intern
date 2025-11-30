import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * Main Layout component that wraps all pages.
 * Includes Navbar and Footer.
 */
const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-bg-default">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
