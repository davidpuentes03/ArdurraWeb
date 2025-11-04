// Sección de servicios con tarjetas
import React from 'react';

const services = [
  { id:1, title: 'Plantas de tratamiento', desc: 'Diseño, construcción y puesta en marcha de sistemas para depuración de aguas residuales y potables.' },
  { id:2, title: 'Estaciones de bombeo', desc: 'Ingeniería de estaciones para el impulsión y transporte eficiente de agua o efluentes.' },
  { id:3, title: 'Suministro de agua', desc: 'Planificación, diseño y ejecución de redes de abastecimiento de agua potable a comunidades o industrias.' },
  { id:4, title: 'Alcantarillados (pluvial, sanitario)', desc: 'Diseño y ejecución de sistemas de recolección y evacuación de aguas lluvias y residuales.' },
  { id:5, title: 'Hidráulica fluvial', desc: 'Ingeniería aplicada al análisis y control de cauces y ríos para prevención de inundaciones y gestión de aguas.' },
  { id:6, title: 'Hidrología', desc: 'Estudios del ciclo del agua, estimaciones de caudales y aguas subterráneas para soporte técnico de proyectos.' },
  { id:7, title: 'Instrumentación y Control', desc: 'Implementación de sistemas de automatización, supervisión y control para infraestructuras hidráulicas y de agua.' },
  { id:8, title: 'Eléctrica', desc: 'Diseño y suministro de instalaciones eléctricas asociadas a plantas de agua, bombeo e infraestructura de ingeniería civil.' }
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
