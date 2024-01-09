import React from 'react';
import '../../styles/main.scss';
import './About.scss';

const About = () => {
  return (
    <section id="about">
      <div className="contentAbout">
        <h2><i class="fa-solid fa-address-card"></i>À propos de moi</h2>
        <p>
        Je suis Louis Baert, passionné d'informatique et autodidacte. Ma curiosité me pousse à résoudre des problèmes avec une pensée critique, à optimiser et à explorer divers domaines. Mon parcours chez OpenClassrooms en développement web m'a doté de compétences variées. Explorez mon site pour découvrir mes services, projets et compétences, et contactez-moi pour discuter de vos besoins informatiques.
        </p>
      </div>
    </section>
  );
};

export default About;
