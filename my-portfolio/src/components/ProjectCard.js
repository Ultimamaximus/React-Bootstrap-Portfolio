import React from 'react';
import PropTypes from 'prop-types';

function ProjectCard({ title, description, imageUrl, projectUrl }) {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card h-100 hover-shadow">
        <img src={imageUrl} className="card-img-top img-fluid" alt={title} loading="lazy" />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={projectUrl} className="btn btn-outline-primary custom-btn mt-auto" aria-label={`View project: ${title}`}>
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  projectUrl: PropTypes.string.isRequired,
};

export default ProjectCard;
