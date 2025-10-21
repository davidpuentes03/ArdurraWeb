// Sección de servicios con tarjetas
import React from 'react';

const services = [
  { id:1, title: 'Diseño hidráulico', desc: 'Cálculo y dimensionamiento de redes y estructuras.' },
  { id:2, title: 'Plantas de tratamiento', desc: 'Diseño e implementación de plantas de aguas residuales.' },
  { id:3, title: 'Monitoreo ambiental', desc: 'Estudios y control de parámetros ambientales.' }
];

export default function Services(){
  return (
    <section className="services my-4">
      <h2 className="mb-4">Servicios</h2>
      <div className="row">
        {services.map(s=>(
          <div className="col-md-4 mb-3" key={s.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{s.title}</h5>
                <p className="card-text">{s.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
