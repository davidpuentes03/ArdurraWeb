// Barra de navegación principal
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ardurra-navbar shadow-sm fixed-top">
      <div className="container d-flex justify-content-between align-items-center">
        {/* LOGO / MARCA IZQUIERDA */}
        <div className="navbar-brand d-flex align-items-center">
          <i className="bi bi-droplet-fill me-2 fs-1 text-light"></i>
          <Link to="/" className="text-white text-decoration-none logo-text">
            ARDURRA
          </Link>
        </div>

        {/* BOTÓN HAMBURGUESA MÓVIL */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENÚ DERECHA */}
        <div className="collapse navbar-collapse justify-content-end" id="navMenu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="bi bi-house-door me-1"></i>Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                <i className="bi bi-tools me-1"></i>Servicios
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                <i className="bi bi-diagram-3 me-1"></i>Proyectos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                <i className="bi bi-envelope-fill me-1"></i>Contacto
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/registro">
                <i className="bi bi-person-plus me-1"></i>Registro
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <i className="bi bi-box-arrow-in-right me-1"></i>Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
