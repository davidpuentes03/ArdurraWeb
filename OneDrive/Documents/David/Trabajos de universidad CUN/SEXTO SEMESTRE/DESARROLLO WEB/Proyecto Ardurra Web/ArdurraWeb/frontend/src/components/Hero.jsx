// Sección principal (hero) 
// Comentarios: imagen de fondo y texto principal.
import React from 'react';

export default function Hero(){
  return (
    <header className="hero rounded p-4 mb-4">
      <div className="row align-items-center">
        <div className="col-md-7">
          <h1>Mejoramos vidas a través de la excelencia en ingeniería.</h1>
          <p className="lead">Soluciones integrales en ingeniería ambiental, tratamiento de agua y obras hidráulicas.</p>
          <p><a className="btn btn-primary" href="#" onClick={(e)=>e.preventDefault()}>Contáctanos</a></p>
        </div>
        <div className="col-md-5 text-center">
          {/* Imagen */}

          <img
            src="/Imagen_principal.png"
            alt="Ingeniería"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </header>
  );
}
