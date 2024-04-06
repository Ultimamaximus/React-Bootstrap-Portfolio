import React from 'react';

function ProjectCard({ title, description, imageUrl, projectUrl }) {
  return (
    <div className="col-md-4">
      <div className="card h-100 hover-shadow">
        <img src={imageUrl} className="card-img-top img-fluid" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={projectUrl} className="btn btn-outline-primary custom-btn">View Project</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
