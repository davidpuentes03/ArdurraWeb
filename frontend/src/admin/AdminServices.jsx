import React, { useEffect, useState } from "react";

export default function AdminServices() {
  const [services, setServices] = useState([]);
  const [form, setForm] = useState({ title: "", desc: "" });
  const [editingId, setEditingId] = useState(null);

  const token = localStorage.getItem("token");

  // Cargar todos los servicios desde MongoDB
  const loadServices = async () => {
    const res = await fetch("http://localhost:5000/api/services");
    const data = await res.json();
    setServices(data);
  };

  useEffect(() => {
    loadServices();
  }, []);

  // Cuando escribo en el formulario
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Crear o Editar servicio
  const onSubmit = async (e) => {
    e.preventDefault();

    const method = editingId ? "PUT" : "POST";
    const url = editingId
      ? `http://localhost:5000/api/services/${editingId}`
      : "http://localhost:5000/api/services";

    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token
      },
      body: JSON.stringify(form)
    });

    if (res.ok) {
      alert(editingId ? "Servicio actualizado ✅" : "Servicio añadido ✅");
      setForm({ title: "", desc: "" });
      setEditingId(null);
      loadServices();
    } else {
      alert("❌ Error guardando servicio");
    }
  };

  // Llenar el formulario para editar
  const editService = (service) => {
    setEditingId(service._id);
    setForm({ title: service.title, desc: service.desc });
  };

  // Eliminar
  const deleteService = async (id) => {
    if (!window.confirm("¿Eliminar este servicio?")) return;

    const res = await fetch(`http://localhost:5000/api/services/${id}`, {
      method: "DELETE",
      headers: { "x-auth-token": token }
    });

    if (res.ok) {
      alert("Servicio eliminado ✅");
      loadServices();
    } else {
      alert("❌ Error eliminando servicio");
    }
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4">Administrar Servicios</h1>

      {/* Formulario */}
      <div className="card p-4 shadow-sm mb-4">
        <h4>{editingId ? "Editar servicio" : "Nuevo servicio"}</h4>

        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label">Título</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={onChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Descripción</label>
            <textarea
              name="desc"
              value={form.desc}
              onChange={onChange}
              className="form-control"
              rows="3"
              required
            />
          </div>

          <button className="btn btn-primary" type="submit">
            {editingId ? "Actualizar" : "Agregar"}
          </button>

          {editingId && (
            <button
              type="button"
              className="btn btn-secondary ms-2"
              onClick={() => {
                setEditingId(null);
                setForm({ title: "", desc: "" });
              }}
            >
              Cancelar
            </button>
          )}
        </form>
      </div>

      {/* Tabla de servicios */}
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Título</th>
            <th>Descripción</th>
            <th style={{ width: "200px" }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {services.map((s) => (
            <tr key={s._id}>
              <td>{s.title}</td>
              <td>{s.desc}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => editService(s)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteService(s._id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}

          {services.length === 0 && (
            <tr>
              <td colSpan="3" className="text-center">
                No hay servicios aún
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
