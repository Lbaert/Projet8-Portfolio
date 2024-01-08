// Skills.js
import React from 'react';
import './Skills.scss'; // Assurez-vous de créer le fichier Skills.scss

// Fonction pour mapper les technologies aux icônes correspondantes
const mapTechnologiesToIcons = (technologies) => {
  const iconMap = {
    HTML5: 'html.png',
    CSS3: 'css.png',
    JavaScript: 'javascript.png',
    React: 'react.png',
    Nodejs: 'nodejs.png',
    Express: 'express.png',
    MongoDB: 'mongodb.png',
    Mongoose: 'mongoose.png',
    Git: 'git.png',
    'Responsive': 'responsive-design.png',
    'UI/UX Design': 'ui.png',
    SEO: 'seo.png',
    'SASS/SCSS': 'sass.png',
    Bootstrap: 'bootstrap.png',
    'RESTful APIs': 'api.png',
    'Agile/Scrum': 'scrum.png',
    Notion: 'notion.png',
  };

  return technologies.map((tech, index) => (
    <div key={index} className="skill-item">
      <img src={`./img/icons/${iconMap[tech]}`} alt={tech} />
      {tech}
    </div>
  ));
};

const Skills = () => {
  const skillsList = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React',
    'Nodejs',
    'Express',
    'MongoDB',
    'Mongoose',
    'Git',
    'Responsive',
    'UI/UX Design',
    'SEO',
    'SASS/SCSS',
    'Bootstrap',
    'RESTful APIs',
    'Agile/Scrum',
    'Notion',
  ];

  return (
    <section id="skills" className="skills">
      <h2>💻 Mes Compétences</h2>
      <div className="skills-list">
        {mapTechnologiesToIcons(skillsList)}
      </div>
    </section>
  );
};

export default Skills;
