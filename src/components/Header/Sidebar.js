import React, { useState, useEffect, useRef } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './Header.scss';

// Composant Sidebar pour la navigation
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

  // Fonction pour basculer l'état modal ouvert/fermé
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
            <li>
              {/* Lien vers la section "Home" avec un défilement doux */}
              <Link to="home" smooth={true} duration={500} onClick={toggleSidebar}>
                <img src='./img/logo.png' alt="Logo" className='logo'/>
              </Link>
            </li>
            <li>
              {/* Lien vers la section "About" avec un défilement doux */}
              <Link to="about" smooth={true} duration={500} onClick={toggleSidebar}>
                <i className="fa-solid fa-address-card fa-xl"></i><span>À propos de moi</span>
              </Link>
            </li>
            <li>
              {/* Lien vers la section "Services" avec un défilement doux */}
              <Link to="services" smooth={true} duration={500} onClick={toggleSidebar}>
                <i className="fa-solid fa-layer-group fa-xl"></i><span>Mes Services</span>
              </Link>
            </li>
            <li>
              {/* Lien vers la section "Projects" avec un défilement doux */}
              <Link to="projects" smooth={true} duration={500} onClick={toggleSidebar}>
                <i className="fa-solid fa-list-check fa-xl"></i><span>Mes Projets</span>
              </Link>
            </li>
            <li>
              {/* Lien vers la section "Skills" avec un défilement doux */}
              <Link to="skills" smooth={true} duration={500} onClick={toggleSidebar}>
                <i className="fa-solid fa-microchip fa-xl"></i><span>Mes Compétences</span>
              </Link>
            </li>
            <li>
              {/* Lien vers la section "Contact" avec un défilement doux */}
              <Link to="contact" smooth={true} duration={500} onClick={toggleSidebar}>
                <i className="fa-solid fa-address-book fa-xl"></i><span>Contactez-moi</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
