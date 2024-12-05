import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Dynamically render route-specific content */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
