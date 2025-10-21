// Barra de navegación principal (responsiva) sin logo.
// Comentarios: se agregaron las opciones "Registro" y "Login" con la misma función de navegación.
import React from 'react';

export default function Navbar({ onNavigate }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ardurra-navbar">
      <div className="container">
        {/* Nombre de la empresa */}
        <a
          className="navbar-brand fw-bold"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
          }}
        >
          Ardurra
        </a>

        {/* Botón del menú para dispositivos móviles */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Enlaces de navegación */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('home');
                }}
              >
                Inicio
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('services');
                }}
              >
                Servicios
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('projects');
                }}
              >
                Proyectos
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('contact');
                }}
              >
                Contacto
              </a>
            </li>

            {/* Nuevos enlaces para autenticación */}
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('registro');
                }}
              >
                Registro
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('login');
                }}
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
