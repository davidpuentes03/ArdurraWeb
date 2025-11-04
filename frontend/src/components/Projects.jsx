// Sección de proyectos (muestras visuales)
import React from "react";

const projects = [
  {
    id: 1,
    title: "Planta de tratamiento - Las Bocas, PR",
    description: "Rehabilitación y diseño de estructuras hidráulicas y floculadores.",
    img: `${process.env.PUBLIC_URL}/planta_tratamiento.jpg`,
    icon: "bi-water", // agua
  },
  {
    id: 2,
    title: "Estaciones de bombeo - North WWPS",
    description: "Diseño y análisis hidráulico de estaciones para aguas residuales.",
    img: `${process.env.PUBLIC_URL}/estaciones_bombeo.jpg`,
    icon: "bi-droplet-half", // bomba/fluido
  },
  {
    id: 3,
    title: "Suministro de agua - Venice, FL",
    description: "Modelación y planificación de sistemas de distribución de agua potable.",
    img: `${process.env.PUBLIC_URL}/suministro_agua.jpg`,
    icon: "bi-droplet", // tubería
  },
  {
    id: 4,
    title: "Alcantarillado pluvial - Cairo Lane",
    description: "Evaluación y modelación de drenajes pluviales urbanos.",
    img: `${process.env.PUBLIC_URL}/alcantarillado_pluvial.jpg`,
    icon: "bi-building", // ciudad
  },
  {
    id: 5,
    title: "Hidráulica fluvial - Barranquitas, PR",
    description: "Modelación hidrológica y diseño de obras contra socavación.",
    img: `${process.env.PUBLIC_URL}/hidraulica_fluvial.jpg`,
    icon: "bi-tsunami", // ríos y flujo
  },
];

export default function Projects() {
  return (
    <section className="projects my-4">
      <h2 className="mb-4">
        <i className="bi bi-diagram-3 text-primary me-2"></i>Proyectos
      </h2>
      <div className="row">
        {projects.map((p) => (
          <div className="col-md-6 mb-3" key={p.id}>
            <div className="card h-100 shadow-sm">
              {p.img && (
                <img
                  src={p.img}
                  alt={p.title}
                  className="card-img-top"
                  style={{ height: "220px", objectFit: "cover" }}
                />
              )}
              <div className="card-body">
                <h5>
                  <i className={`bi ${p.icon} text-primary me-2`}></i>
                  {p.title}
                </h5>
                <p>{p.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
