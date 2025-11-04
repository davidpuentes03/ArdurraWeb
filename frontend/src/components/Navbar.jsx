// Barra de navegación principal
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

  // Leer usuario desde localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  // Función cerrar sesión
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/ArdurraWeb"; // recarga a inicio
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark ardurra-navbar shadow-sm fixed-top">
      <div className="container d-flex justify-content-between align-items-center">

        {/* LOGO */}
        <div className="navbar-brand d-flex align-items-center">
          <i className="bi bi-droplet-fill me-2 fs-1 text-light"></i>
          <Link to="/" className="text-white text-decoration-none logo-text">
            ARDURRA
          </Link>
        </div>

        {/* Hamburguesa */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
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

            {/* Mostrar solo si NO está logueado */}
            {!user && (
              <>
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
              </>
            )}

            {/* Mostrar solo si SÍ está logueado */}
            {user && (
              <>
                <li className="nav-item">
                  <span className="nav-link text-warning">
                    <i className="bi bi-person-circle me-1"></i>
                    Hola, {user.name}
                  </span>
                </li>

                <li className="nav-item">
                  <button className="btn btn-danger ms-2" onClick={logout}>
                    <i className="bi bi-box-arrow-right me-1"></i>Salir
                  </button>
                </li>
              </>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
}
