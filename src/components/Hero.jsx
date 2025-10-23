// Sección principal (hero)
import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <header className="hero rounded p-4 mb-4">
      <div className="row align-items-center">
        <div className="col-md-7">
          <h1>Mejoramos vidas a través de la excelencia en ingeniería.</h1>
          <p className="lead">
            Soluciones integrales en ingeniería ambiental, tratamiento de agua y
            obras hidráulicas.
          </p>
          <p>
            <Link className="btn btn-primary" to="/contact">
                          
              Contáctanos
            </Link>
            
            
          </p>
        </div>
        <div className="col-md-5 text-center">
          <img
            src={`${process.env.PUBLIC_URL}/Imagen_principal.png`}
            alt="Ingeniería"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </header>
  );
}
