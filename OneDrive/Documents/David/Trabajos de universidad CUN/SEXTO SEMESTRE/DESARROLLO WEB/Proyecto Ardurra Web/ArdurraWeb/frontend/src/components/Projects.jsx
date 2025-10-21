// Sección de proyectos (muestras visuales)
import React from 'react';

const projects = [
  { id:1, title: 'Planta de tratamiento - Municipio X', img: null },
  { id:2, title: 'Red de acueducto - Sede Y', img: null }
];

export default function Projects(){
  return (
    <section className="projects my-4">
      <h2 className="mb-4">Proyectos</h2>
      <div className="row">
        {projects.map(p=>(
          <div className="col-md-6 mb-3" key={p.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5>{p.title}</h5>
                <p>Descripción breve del proyecto. Esta área puede contener imágenes y enlaces.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
