import React from 'react';
import './Home.scss';

const Home = () => {
  return (
    <section id="home">
      <div className="contentHome">
        <div className="cta-block">
          <h1>Louis Baert</h1>
          <p>Développeur Web</p>
          <a href="#contact" className="cta-button">
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
