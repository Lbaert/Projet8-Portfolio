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
      <i class="fa-solid fa-bars"></i>
      </div>
      {isModalOpen && (
        <div className="modal" ref={modalRef}>
          <ul>
            <li><a href="#home" onClick={toggleSidebar}>Home</a></li>
            <li><a href="#about" onClick={toggleSidebar}>About</a></li>
            <li><a href="#services" onClick={toggleSidebar}>Services</a></li>
            <li><a href="#projects" onClick={toggleSidebar}>Projects</a></li>
            <li><a href="#skills" onClick={toggleSidebar}>Skills</a></li>
            <li><a href="#contact" onClick={toggleSidebar}>Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
