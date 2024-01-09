// Contact.js
import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <section id="contact" className="contactSection">
      <h2><i class="fa-solid fa-address-book"></i> Contactez-moi</h2>
      <div className='contact'>
        <div className="social-buttons">
          <a href="https://www.linkedin.com/in/votreprofil" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <div className="contact-form">
          <form>
            <label htmlFor="email"></label>
            <input type="email" placeholder="email" id="email" name="email" required />
            <label htmlFor="message"></label>
            <textarea id="message" placeholder="message" name="message" rows="4" required></textarea>
            <button type="submit">Envoyer</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
