import React from 'react';
import './Footer.scss'; 

const Footer = () => {
  return (
    <footer className="footer">
      <img src='./img/logo.png' alt="Logo" className='logo'/>
      <div className="footer-bottom">
        <p>&copy; 2024 Louis BAERT. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
