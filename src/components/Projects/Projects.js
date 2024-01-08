import React from 'react';
import './Projects.scss';

// Fonction pour mapper les technologies aux icônes correspondantes
const mapTechnologiesToIcons = (technologies) => {
  const iconMap = {
    HTML: 'html.png',
    CSS: 'css.png',
    React: 'react.png',
    Sass: 'sass.png',
    JavaScript: 'javascript.png',
    MongoDB: 'mongodb.png',
    Mongoose: 'mongoose.png',
    Nodejs: 'nodejs.png',
    Express: 'express.png',
    SEO: 'seo.png',
    Notion: 'notion.png',
  };

  return technologies.map((tech, index) => (
    <img key={index} src={`./img/icons/${iconMap[tech]}`} alt={tech} />
  ));
};


const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'Booki',
      description: 'Une brève description du projet.',
      imageUrl: './img/projects/booki.webp',
      technologies: ['HTML', 'CSS'],
    },
    {
      id: 2,
      title: 'Kasa',
      description: 'Une brève description du projet.',
      imageUrl: './img/projects/kasa.webp',
      technologies: ['React', 'Sass', 'JavaScript'],
    },
    {
      id: 3,
      title: 'Mon Vieux Grimoire',
      description: 'Une brève description du projet.',
      imageUrl: './img/projects/mvg.webp',
      technologies: ['JavaScript', 'MongoDB', 'Mongoose', 'Nodejs', 'Express'],
    },
    {
      id: 4,
      title: 'Nina Carducci',
      description: 'Une brève description du projet.',
      imageUrl: './img/projects/nina.webp',
      technologies: ['SEO', 'Notion'],
    },
    {
      id: 5,
      title: 'Sophie Bluel',
      description: 'Une brève description du projet.',
      imageUrl: './img/projects/sophie.webp',
      technologies: ['HTML', 'CSS'],
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>📒 Mes Projets</h2>
      <div className="projects-list">
        {projectsData.map((project) => (
          <div key={project.id} className={`project-item project-${project.id}`}>
            <img src={project.imageUrl} alt={project.title} />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, index) => (
                  <img key={index} src={`./img/icons/${tech}.png`} alt={tech} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
