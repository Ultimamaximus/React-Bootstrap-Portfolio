import React from 'react';
import PropTypes from 'prop-types';
import heroImage from './assets/profile-img.webp';

function HeroSection({ name, description }) {
  return (
    <div className="container hero-section" id="home">
      <div className="card mb-3 shadow">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={heroImage} className="img-fluid hero-image" alt={`${name}'s profile`} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title display-6 fw-bold">A little about me:</h5>
              <p className="card-text fs-5">
                Hey there! I'm <span className="fw-bold">{name}</span>, on a journey to become a 
                Software Engineer with a knack for frontend stuff. 
                I love turning code into cool, user-friendly web pages. Right now, I'm sharing 
                the coding love by teaching youngsters how to start their own tech adventures. 
                I'm always learning something new in this fast-changing tech world, whether 
                it's from online courses, hangouts with other techies, or just tinkering with 
                my own projects. <span className="fw-bold">{description}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

HeroSection.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

HeroSection.defaultProps = {
  name: 'Victor',
  description: 'Excited to see where this tech journey takes me next!',
};

export default HeroSection;
