import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'; // Import HashLink

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4 sticky-top">
      <div className="container-fluid">
        <Link smooth className="navbar-brand custom-brand" to="/#">Victor B.</Link>
        <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link smooth className="nav-link active custom-link" to="/#">Home</Link>
            </li>
            <li className="nav-item">
              <Link smooth className="nav-link custom-link" to="/#projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link smooth className="nav-link custom-link" to="/#contact">Contact Me</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
