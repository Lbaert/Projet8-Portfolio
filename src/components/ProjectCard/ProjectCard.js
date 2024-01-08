// ProjectCard.js
import React from 'react';
import '../../styles/main.scss';

const ProjectCard = ({ image, title, description, technologies }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="technologies">
        {technologies.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
