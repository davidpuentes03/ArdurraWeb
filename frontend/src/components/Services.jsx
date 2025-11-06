import React, { useEffect, useState } from "react";

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // Cargar servicios desde el backend
  const loadServices = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/services");
      const data = await res.json();
      setServices(data);
    } catch (err) {
      console.error("Error cargando servicios:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadServices();
  }, []);

  if (loading) return <p>Cargando servicios...</p>;

  return (
    <section className="services my-4">
      <h2 className="bi bi-tools me-1 mb-4">Servicios</h2>

      <div className="row">
        {services.map((s) => (
          <div className="col-md-4 mb-3" key={s._id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{s.title}</h5>
                <p className="card-text">{s.desc}</p>
              </div>
            </div>
          </div>
        ))}

        {services.length === 0 && (
          <p className="text-center">No hay servicios para mostrar.</p>
        )}
      </div>
    </section>
  );
}
