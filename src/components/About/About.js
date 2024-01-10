import React from 'react';
import '../../styles/main.scss';
import './About.scss';

const About = () => {
  return (
    <section id="about">
      <div className="contentAbout">
        <h2><i class="fa-solid fa-address-card"></i>À propos de moi</h2>
        <p>
        Je suis <b>Louis Baert</b>, <b>passionné</b> d'informatique et <b>autodidacte</b>. Ma <b>curiosité</b> me pousse à résoudre des problèmes avec une pensée critique, à <b>optimiser</b> et à <b>explorer</b> divers domaines.
        </p>
        <p>
        Mon parcours chez <b>OpenClassrooms</b> en <b>développement web</b> m'a doté de compétences <b>variées</b>.
        </p>
        <p>
        Explorez mon site pour découvrir mes <b>services</b>, <b>projets</b> et <b>compétences</b>, et <b>contactez-moi</b> pour discuter de vos besoins informatiques.
        </p>
      </div>
    </section>
  );
};

export default About;
