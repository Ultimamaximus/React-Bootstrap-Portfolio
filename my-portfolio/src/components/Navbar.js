import React from 'react';
// import { Link } from 'react-router-dom'; // Uncomment if using react-router

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4 sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand custom-brand" href="#">Victor B.</a>
        <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* <Link className="nav-link active custom-link" to="/">Home</Link> */}
              <a className="nav-link active custom-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link custom-link" to="/projects">Projects</Link> */}
              <a className="nav-link custom-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link custom-link" to="/contact">Contact Me</Link> */}
              <a className="nav-link custom-link" href="#contact-me">Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
