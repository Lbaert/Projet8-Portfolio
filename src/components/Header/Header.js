import React, { useState } from 'react';
import Sidebar from './Sidebar';
import '../../styles/main.scss';

// Composant Header contenant le logo et la barre de navigation latérale
const Header = () => {
  // État pour déterminer si la barre latérale est ouverte ou fermée
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Fonction pour basculer l'état de la barre latérale
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <header>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <img src='./img/logo.png' alt="Logo" className='logo'/>
    </header>
  );
};

export default Header;
