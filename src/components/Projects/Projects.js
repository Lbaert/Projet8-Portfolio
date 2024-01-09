import React, { useState, useEffect } from 'react';
import './Projects.scss';

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
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: 'Booki',
      description: 'Une brève description du projet.',
      imageUrl: './img/projects/booki.webp',
      technologies: ['HTML', 'CSS'],
      text: ['lorem ispum'],
      link: 'https://github.com/Lbaert/Projet2-Booki'
    },
    {
      id: 2,
      title: 'Kasa',
      description: 'Une brève description du projet.',
      imageUrl: './img/projects/kasa.webp',
      technologies: ['React', 'Sass', 'JavaScript'],
      text: ['lorem ispum'],
      link: 'https://github.com/Lbaert/Projet2-Booki'
    },
    {
      id: 3,
      title: 'Mon Vieux Grimoire',
      description: 'Une brève description du projet.',
      imageUrl: './img/projects/mvg.webp',
      technologies: ['JavaScript', 'MongoDB', 'Mongoose', 'Nodejs', 'Express'],
      text: ['lorem ispum'],
      link: 'https://github.com/Lbaert/Projet7-MonVieuxGrimoire'
    },
    {
      id: 4,
      title: 'Nina Carducci',
      description: 'Une brève description du projet.',
      imageUrl: './img/projects/nina.webp',
      technologies: ['SEO', 'Notion'],
      text: ['lorem ispum'],
      link: 'https://github.com/Lbaert/Projet5-NinaCarducci'
    },
    {
      id: 5,
      title: 'Sophie Bluel',
      description: 'Une brève description du projet.',
      imageUrl: './img/projects/sophie.webp',
      technologies: ['HTML', 'CSS'],
      text: ['lorem ispum'],
      link: 'https://github.com/Lbaert/Projet3-SophieBluel'
    },
  ];

  const projectsListClassName = selectedProject !== null ? 'projects-list-open' : '';

  const toggleProjectDetails = (projectId) => {
    if (selectedProject === projectId) {
      // Si le projet actuel est déjà sélectionné, fermez le collapse
      setSelectedProject(null);
    } else {
      // Sinon, ouvrez le collapse pour le projet sélectionné
      setSelectedProject(projectId);

      // Ajoutez le défilement vers l'ancre #projects
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const closeProjectDetails = (event) => {
      // Fermer le collapse si le clic est en dehors du composant du projet
      if (selectedProject && !event.target.closest('.project-item')) {
        setSelectedProject(null);
      }
    };

    // Ajouter un écouteur d'événements au document.body pour détecter les clics en dehors du composant du projet
    document.body.addEventListener('click', closeProjectDetails);

    // Nettoyer l'écouteur d'événements lors du démontage du composant
    return () => {
      document.body.removeEventListener('click', closeProjectDetails);
    };
  }, [selectedProject]);


  const navigateToProject = (direction) => {
    const currentIndex = projectsData.findIndex((project) => project.id === selectedProject);
    let newIndex;

    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : projectsData.length - 1;
    } else {
      newIndex = currentIndex < projectsData.length - 1 ? currentIndex + 1 : 0;
    }

    setSelectedProject(projectsData[newIndex].id);
  };

  return (
    <section id="projects" className="projects">
      <h2><i class="fa-solid fa-list-check"></i> Mes Projets</h2>
      <div className={`projects-list ${projectsListClassName}`}>
      {projectsData.map((project) => (
        <div key={project.id} className={`project-item project-${project.id} ${selectedProject !== null && selectedProject !== project.id ? 'hidden' : ''}`} onClick={() => toggleProjectDetails(project.id)}>          
            {selectedProject === project.id && (
              <div className="back-arrow" onClick={() => toggleProjectDetails(null)}>
                <i class="fa-solid fa-reply"></i>
              </div>
            )}
          <img src={project.imageUrl} alt={project.title} />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, index) => (
                  <img key={index} src={`./img/icons/${tech}.png`} alt={tech} />
                ))}
              </div>
              {selectedProject === project.id && (
                <div className="additional-details">
                  <p>{project.text}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Voir sur GitHub
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;