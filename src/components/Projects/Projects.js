import React, { useState, useEffect } from 'react';
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
  const [selectedProject, setSelectedProject] = useState(null);

  // Tableau de données des projets
  const projectsData = [
    {
      id: 1,
      title: 'Booki',
      description: 'Créez la page d\'accueil d\'une agence de voyage',
      imageUrl: './img/projects/booki.webp',
      technologies: ['html', 'css'],
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
          <p>Problème : Pendant la création de la page d'accueil pour le projet Booki, j'ai rencontré des défis dans l'application des styles avec CSS, entraînant une mise en page non demandé.</p>
          <p>Solution : Pour résoudre ce problème, j'ai développé mes compétences en utilisant les DevTools, en particulier l'inspecteur, pour analyser la structure HTML. En comprenant mieux la hiérarchie des éléments, j'ai pu cibler spécifiquement les éléments à styliser. Les DevTools m'ont permis d'expérimenter en direct, d'ajuster les styles de manière itérative, et d'acquérir des automatismes dans le processus de stylisation, améliorant ainsi l'apparence de la page d'accueil de l'agence de voyage.</p>
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
      technologies: ['react', 'sass', 'javascript'],
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
          <p>Problème : La découverte de nouvelles technologies lors du projet Kasa, notamment React, a posé des défis, notamment en termes de gestion des composants et de la réutilisation du code.</p>
          <p>Solution : Pour résoudre ce problème, j'ai rapidement compris l'importance d'utiliser des blocs réutilisables. J'ai opté pour l'utilisation de SASS pour une gestion plus efficace des styles, et j'ai intégré React pour créer une interface modulaire. Cela a non seulement facilité le développement mais a également amélioré la maintenabilité de l'application de location immobilière, offrant ainsi une expérience conviviale et efficace aux utilisateurs.</p>
        </div>
      ),
      links: [
        { label: 'GitHub', url: 'https://github.com/Lbaert/Projet6-Kasa' },
      ]
    },
    {
      id: 3,
      title: 'Mon Vieux Grimoire',
      description: 'Développez le back-end d\'un site de notation de livres',
      imageUrl: './img/projects/mvg.webp',
      technologies: ['javascript', 'mongodb', 'mongoose', 'nodejs', 'express'],
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
          <p>Problème : La gestion des images dans le projet Mon Vieux Grimoire a posé des défis, en particulier en termes de dimensionnement, de conversion et de compression tout en assurant la suppression de l'image originale.</p>
          <p>Solution : Pour surmonter cela, j'ai acquis la compétence de redimensionner, convertir et compresser les images de manière efficace. J'ai également mis en place un processus automatisé qui garantit la suppression sécurisée des images originales après leur traitement, assurant ainsi une gestion optimale des ressources tout en préservant la robustesse de l'application de notation de livres.</p>
        </div>
      ),
      links: [
        { label: 'GitHub', url: 'https://github.com/Lbaert/Projet7-MonVieuxGrimoire' },
      ]
    },
    {
      id: 4,
      title: 'Nina Carducci',
      description: 'Débuggez et optimisez un site de photographe',
      imageUrl: './img/projects/nina.webp',
      technologies: ['seo'],
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
          <p>Problème : Un problème majeur dans le projet Nina Carducci était la lenteur du chargement des images, affectant les performances globales du site.</p>
          <p>Solution : Pour résoudre ce problème, j'ai compressé les images sans compromettre leur qualité et optimisé les balises ALT pour améliorer l'accessibilité. Ces mesures ont significativement amélioré les performances du site, offrant une expérience utilisateur plus fluide et répondant aux meilleures pratiques SEO techniques.</p>
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
      technologies: ['JavaScript', 'HTML', 'CSS'],
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
          <p>Problème : La découverte des API a posé un défi dans le projet de Sophie Bluel, notamment pour récupérer et afficher dynamiquement des images.</p>
          <p>Solution : Pour surmonter cela, j'ai appris à utiliser l'API de stockage d'images, mis en place des requêtes pour récupérer les images en fonction des projets de Sophie Bluel, puis utilisé JavaScript pour dynamiquement les afficher sur sa page portfolio, offrant ainsi une expérience interactive et esthétique.</p>
        </div>
      ),
      links: [
        { label: 'GitHub', url: 'https://github.com/Lbaert/Projet3-SophieBluel' },
      ]
    },
  ];

// Classe CSS pour afficher ou masquer les détails du projet
  const projectsListClassName = selectedProject !== null ? 'projects-list-open' : '';

  // Fonction pour basculer l'affichage des détails du projet
  const toggleProjectDetails = (projectId) => {
      setSelectedProject(projectId);

      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
  };

  useEffect(() => {
    // Fonction pour fermer les détails du projet lorsqu'on clique en dehors
    const closeProjectDetails = (event) => {
      const isClickOutsideCollapse = !event.target.closest('.project-item') && !event.target.closest('.back-arrow');
  
      if (selectedProject && isClickOutsideCollapse) {
        setSelectedProject(null);
      }
    };
  
    document.body.addEventListener('click', closeProjectDetails);
  
    return () => {
      document.body.removeEventListener('click', closeProjectDetails);
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="projects">
      <h2><i class="fa-solid fa-list-check"></i> Mes Projets</h2>
      <div className={`projects-list ${projectsListClassName}`}>
      {projectsData.map((project) => (

          <div
            key={project.id}
            className={`project-item project-${project.id} ${selectedProject !== null && selectedProject !== project.id ? 'hidden' : ''} ${selectedProject === null ? 'project-item-closed' : ''}`}
            onClick={() => toggleProjectDetails(project.id)}>
            {selectedProject === project.id && (
              <div className="back-arrow" onClick={(e) => { e.stopPropagation(); toggleProjectDetails(null); }}>
                <i className="fa-solid fa-reply"></i>
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