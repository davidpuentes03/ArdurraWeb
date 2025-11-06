import React, { useEffect, useState } from "react";

export default function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    img: "",
    icon: ""
  });
  const [editingId, setEditingId] = useState(null);

  const loadProjects = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/projects");
      const data = await res.json();
      setProjects(data);
    } catch (err) {
      console.error("Error cargando proyectos:", err);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      alert("⚠ Debes iniciar sesión para crear proyectos.");
      return;
    }

    const method = editingId ? "PUT" : "POST";
    const url = editingId
      ? `http://localhost:5000/api/projects/${editingId}`
      : "http://localhost:5000/api/projects";

    const res = await fetch(url, {
      method,
      headers: { 
     "Content-Type": "application/json",
     "x-auth-token": localStorage.getItem("token")
    },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      const error = await res.json();
      alert("⚠ Error: " + (error.msg || "No autorizado"));
      return;
    }

    await res.json();
    alert(editingId ? "Proyecto actualizado ✅" : "Proyecto creado ✅");

    setForm({
      title: "",
      description: "",
      img: "",
      icon: ""
    });
    setEditingId(null);
    loadProjects();
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");

    if (!window.confirm("¿Eliminar este proyecto?")) return;
    if (!token) {
      alert("⚠ Debes iniciar sesión para borrar proyectos.");
      return;
    }

    await fetch(`http://localhost:5000/api/projects/${id}`, {
     method: "DELETE",
     headers: {
    "x-auth-token": localStorage.getItem("token")
    }
    });

    loadProjects();
  };

  const handleEdit = (p) => {
    setForm({
      title: p.title,
      description: p.description,
      img: p.img,
      icon: p.icon || ""
    });
    setEditingId(p._id);
  };

  return (
    <div className="container my-4">
      <h1 className="mb-4">Administrar Proyectos</h1>

      <form onSubmit={handleSubmit} className="mb-4">

        <input
          className="form-control mb-2"
          placeholder="Título"
          name="title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <textarea
          className="form-control mb-2"
          placeholder="Descripción"
          name="description"
          value={form.description}
          onChange={handleChange}
          required
        />

        <input
          className="form-control mb-2"
          placeholder="URL de imagen"
          name="img"
          value={form.img}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          placeholder="Bootstrap Icon (ej: bi-water)"
          name="icon"
          value={form.icon}
          onChange={handleChange}
        />

        <button className="btn btn-primary w-100" type="submit">
          {editingId ? "Actualizar Proyecto" : "Crear Proyecto"}
        </button>
      </form>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Título</th>
            <th>Descripción</th>
            <th>Imagen</th>
            <th>Icono</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {projects.map((p) => (
            <tr key={p._id}>
              <td>{p.title}</td>
              <td>{p.description}</td>
              <td>
                {p.img ? <img src={p.img} alt="" width="90" /> : "Sin imagen"}
              </td>
              <td>{p.icon || "—"}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEdit(p)}
                >
                  Editar
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(p._id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
