import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  
  return (
    <div>
      <Header />
      <Outlet />
      {location.pathname === '/' && <Footer />}
    </div>
  );
}

export default Layout;
