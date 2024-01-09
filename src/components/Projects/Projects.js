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
      description: 'Créez la page d\'accueil d\'une agence de voyage',
      imageUrl: './img/projects/booki.webp',
      technologies: ['HTML', 'CSS'],
      text: (
        <div className='text-collapse'>
          <p>J'ai reçu le code de base ainsi que la maquette du site. Voici les étapes que j'ai suivies :</p>
          <div className='step'>
            <p>1 - Établissement de l'environnement de développement.</p>
            <p>2 - Découpage de la maquette.</p>
            <p>3 - Intégration du header du projet.</p>
            <p>4 - Ajout du formulaire de recherche.</p>
            <p>5 - Intégration de la section "Filtres".</p>
            <p>6 - Création de la "card" présente dans la section "Hébergements à Marseille".</p>
            <p>7 - Gestion de l'affichage des "cards" dans le conteneur "Hébergements à Marseille".</p>
            <p>8 - Intégration du conteneur "Activités à Marseille".</p>
            <p>9 - Implémentation du footer.</p>
            <p>10 - Mise en place du design responsive.</p>
            <p>11 - Vérification de la qualité du code.</p>
          </div>
        </div>
      ),
      links: [
        { label: 'GitHub', url: 'https://github.com/Lbaert/Projet2-Booki' },
        { label: 'Website', url: 'https://lbaert.github.io/Projet2-Booki/' }
      ]
    },
    {
      id: 2,
      title: 'Kasa',
      description: 'Créez une application web de location immobilière avec React',  
      imageUrl: './img/projects/kasa.webp',
      technologies: ['React', 'Sass', 'JavaScript'],
      text: (
        <div className='text-collapse'>
          <p>J'ai reçu le code de base ainsi que la maquette du site. Voici les étapes que j'ai suivies :</p>
          <div className='step'>
            <p>1 - Initialisez le projet.</p>
            <p>2 - Ajoutez React Router.</p>
            <p>3 - Créez le routeur et les différentes pages de l’application.</p>
            <p>4 - Créez la page d’accueil.</p>
            <p>5 - Créez la page À propos.</p>
            <p>6 - Créez la page d’erreur.</p>
            <p>7 - Créez le carrousel de la page de logement.</p>
            <p>8 - Finalisez la page de logement.</p>
            <p>9 - Gérez l’erreur sur l’id d’une propriété.</p>
            <p>10 - Vérifiez l’ensemble de votre site.</p>
          </div>
        </div>
      ),
      links: [
        { label: 'GitHub', url: 'https://github.com/Lbaert/Projet6-Kasa' },
        { label: 'Website', url: 'https://lbaert.github.io/Projet6-Kasa/' }
      ]
    },
    {
      id: 3,
      title: 'Mon Vieux Grimoire',
      description: 'Développez le back-end d\'un site de notation de livres',
      imageUrl: './img/projects/mvg.webp',
      technologies: ['JavaScript', 'MongoDB', 'Mongoose', 'Nodejs', 'Express'],
      text: (
        <div className='text-collapse'>
          <p>J'ai reçu le front-end et les spécifications fonctionnelles demandés. Voici les étapes que j'ai suivies</p>
          <div className='step'>
            <p>1 - Créez un serveur Express simple</p>
            <p>2 - Créez une API RESTful</p>
            <p>3 - Mettez en place un système d'authentification sur votre application</p>
            <p>4 - Ajoutez une gestion des fichiers utilisateur sur l'application</p>
            <p>5 - Gestion de l’ajout d’une notation d’un livre</p>
            <p>6 - Gestion du calcul de la note moyenne d’un livre</p>
          </div>
        </div>
      ),
      links: [
        { label: 'GitHub', url: 'https://github.com/Lbaert/Projet7-MonVieuxGrimoire' },
        { label: 'Website', url: 'https://lbaert.github.io/Projet7-MonVieuxGrimoire/' }
      ]
    },
    {
      id: 4,
      title: 'Nina Carducci',
      description: 'Débuggez et optimisez un site de photographe',
      imageUrl: './img/projects/nina.webp',
      technologies: ['SEO'],
      text: (
        <div className='text-collapse'>
          <p>J'ai reçu le code et l'audit du site. Voici les étapes que j'ai suivies :</p>
          <div className='step'>
            <p>1 - Prenez en main le code source.</p>
            <p>2 - Débuggez l’application.</p>
            <p>3 - Listez les optimisations pouvant être réalisées.</p>
            <p>4 - Optimisez les performances du site.</p>
            <p>5 - Optimisez le SEO technique.</p>
            <p>6 - Ajoutez le référencement local et réseaux sociaux.</p>
            <p>7 - Correction de l’accessibilité.</p>
            <p>8 - Génération des rapports finaux et relecture des documents.</p>
          </div>
        </div>
      ),
      links: [
        { label: 'GitHub', url: 'https://github.com/Lbaert/Projet5-NinaCarducci' },
        { label: 'Website', url: 'https://lbaert.github.io/Projet5-NinaCarducci/' }
      ]
    },
    {
      id: 5,
      title: 'Sophie Bluel',
      description: 'Créez une page web dynamique avec JavaScript',
      imageUrl: './img/projects/sophie.webp',
      technologies: ['HTML', 'CSS'],
      text: (
        <div className='text-collapse'>
          <p>J'ai reçu le code de base, la maquette du site ainsi que le Kanban. Voici les étapes que j'ai suivies :</p>
          <div className='step'>
            <p>1 - Installez l’environnement de développement.</p>
            <p>2 - Créez la page de présentation des travaux à partir du HTML existant.</p>
            <p>3 - Codez la page de connexion.</p>
            <p>4 - Ajoutez la modale.</p>
            <p>5 - Vérifiez l’ensemble du projet et s’assurer dutraitement des erreurs dans les formulaires.</p>
          </div>
        </div>
      ),
      links: [
        { label: 'GitHub', url: 'https://github.com/Lbaert/Projet3-SophieBluel' },
        { label: 'Website', url: 'https://lbaert.github.io/Projet3-SophieBluel/' }
      ]
    },
  ];

  const projectsListClassName = selectedProject !== null ? 'projects-list-open' : '';

  const toggleProjectDetails = (projectId) => {
      setSelectedProject(projectId);

      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
  };

useEffect(() => {
  const closeProjectDetails = (event) => {
    // Fermer le collapse si le clic est en dehors du composant de la collapse
    const isClickOutsideCollapse = !event.target.closest('.project-details');
    if (selectedProject && isClickOutsideCollapse) {
      setSelectedProject(null);
    }
  };

  // Ajouter un écouteur d'événements au document.body pour détecter les clics en dehors de la collapse du projet
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
                  <div className="project-links">
                    {project.links.map((link, index) => (
                      <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.label === 'GitHub' ? <i className="fa-brands fa-github fa-2xl"></i> : null}
                        {link.label === 'Website' ? <i className="fa-solid fa-eye fa-2xl"></i> : null}
                      </a>
                    ))}
                  </div>
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