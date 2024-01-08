// Contact.js
import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <section id="contact" className="contactSection">
      <h2>📩 Contactez-moi</h2>
      <div className='contact'>
        <div className="social-buttons">
          <a href="https://www.linkedin.com/in/votreprofil" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
        <div className="contact-form">
          <form>
            <label htmlFor="email">Email :</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message :</label>
            <textarea id="message" name="message" rows="4" required></textarea>
            <button type="submit">Envoyer</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
