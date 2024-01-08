import React, { useState } from 'react';
import Sidebar from './Sidebar';
import '../../styles/main.scss';

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <header>
      <img src='./img/logo.png' alt="Logo" className='logo'/>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </header>
  );
};

export default Header;
