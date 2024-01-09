import React from 'react';
import './Services.scss';

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: 'Création de sites web',
      description: 'Développement de sites vitrines, e-commerce et applications web sur mesure.',
      imageUrl: './img/services/web.webp', 
    },
    {
      id: 2,
      title: 'Expérience utilisateur',
      description: 'Conception d\'interfaces fluides et attrayantes pour une expérience utilisateur optimale.',
      imageUrl: './img/services/ui.webp', 
    },
    {
      id: 3,
      title: 'Référencement',
      description: 'Optimisation du contenu et des structures pour une meilleure visibilité sur les moteurs de recherche.',
      imageUrl: './img/services/seo.webp',
    },
    {
      id: 4,
      title: 'Maintenance et évolution',
      description: 'Forfaits de maintenance tout compris, avec possibilité d\'évolution des fonctionnalités.',
      imageUrl: './img/services/maj.webp',
    },
    {
      id: 5,
      title: 'Intégration de systèmes',
      description: 'Connecter et intégrer différentes plateformes et API pour une expérience utilisateur homogène.',
      imageUrl: './img/services/logic.webp',
    },
    {
      id: 6,
      title: 'Analyse de données',
      description: 'Installation d\'outils d\'analyse pour suivre les performances du site et fournir des rapports.',
      imageUrl: './img/services/stat.webp', 
    }
  ];

  return (
    <section id="services" className="services">
      <h2><i class="fa-solid fa-layer-group"></i> Mes Services</h2>
      <div className="services-list">
        {servicesData.map((service) => (
          <div key={service.id} className="service-item">
            <img src={service.imageUrl} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
