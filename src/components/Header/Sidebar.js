import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalRef]);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="menu-icon" onClick={toggleModal}>
        <i className="fa-solid fa-bars"></i>
      </div>
      {isModalOpen && (
        <div className="modal" ref={modalRef}>
          <ul>
            <li><a href="#home" onClick={toggleSidebar}><img src='./img/logo.png' alt="Logo" className='logo'/></a></li>
            <li><a href="#about" onClick={toggleSidebar}><i className="fa-solid fa-address-card fa-xl"></i><span>About</span></a></li>
            <li><a href="#services" onClick={toggleSidebar}><i className="fa-solid fa-layer-group fa-xl"></i><span>Services</span></a></li>
            <li><a href="#projects" onClick={toggleSidebar}><i className="fa-solid fa-list-check fa-xl"></i><span>Projects</span></a></li>
            <li><a href="#skills" onClick={toggleSidebar}><i className="fa-solid fa-microchip fa-xl"></i><span>Skills</span></a></li>
            <li><a href="#contact" onClick={toggleSidebar}><i className="fa-solid fa-address-book fa-xl"></i><span>Contact</span></a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
