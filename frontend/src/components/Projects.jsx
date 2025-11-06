import React, { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  const load = async () => {
    const res = await fetch("http://localhost:5000/api/projects");
    const data = await res.json();
    setProjects(data);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <section className="projects my-4">
      <h2 className="mb-4">
        <i className="bi bi-diagram-3 text-primary me-2"></i>Proyectos
      </h2>

      <div className="row">
        {projects.map((p) => (
          <div className="col-md-6 mb-3" key={p._id}>
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
                  {p.icon && <i className={`bi ${p.icon} text-primary me-2`}></i>}
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
