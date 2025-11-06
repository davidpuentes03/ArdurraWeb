import React, { useEffect, useState } from "react";

export default function AdminMessages() {
  const [messages, setMessages] = useState([]);

  const loadMessages = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:5000/api/messages", {
        headers: { "x-auth-token": token }
      });

      const data = await res.json();
      setMessages(data);
    } catch (err) {
      console.error("Error cargando mensajes:", err);
    }
  };

  useEffect(() => {
    loadMessages();
  }, []);

  const markAsRead = async (id) => {
    const token = localStorage.getItem("token");
    await fetch(`http://localhost:5000/api/messages/read/${id}`, {
      method: "PUT",
      headers: { "x-auth-token": token }
    });
    loadMessages();
  };

  const archive = async (id) => {
    const token = localStorage.getItem("token");
    await fetch(`http://localhost:5000/api/messages/archive/${id}`, {
      method: "PUT",
      headers: { "x-auth-token": token }
    });
    loadMessages();
  };

  const deleteMessage = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar este mensaje?")) return;

    const token = localStorage.getItem("token");

    await fetch(`http://localhost:5000/api/messages/${id}`, {
      method: "DELETE",
      headers: { "x-auth-token": token }
    });

    loadMessages();
  };

  return (
    <div className="container my-4">
      <h1 className="mb-4">📨 Bandeja de Mensajes</h1>

      {/* ✅ SECCIÓN 1: No leídos */}
      <h3 className="text-primary">No leídos</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Mensaje</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {messages
            .filter(m => !m.read && !m.archived)
            .map(m => (
              <tr key={m._id}>
                <td>{m.name}</td>
                <td>{m.email}</td>
                <td>{m.message}</td>
                <td>{new Date(m.createdAt).toLocaleString()}</td>
                <td>
                  <button
                    className="btn btn-success btn-sm me-2"
                    onClick={() => markAsRead(m._id)}
                  >
                    ✅ Leer
                  </button>

                  <button
                    className="btn btn-secondary btn-sm me-2"
                    onClick={() => archive(m._id)}
                  >
                    📁 Archivar
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteMessage(m._id)}
                  >
                    🗑 Eliminar
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <hr />

      {/* ✅ SECCIÓN 2: Leídos */}
      <h3 className="text-success">Leídos</h3>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Mensaje</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {messages
            .filter(m => m.read && !m.archived)
            .map(m => (
              <tr key={m._id} className="table-success">
                <td>{m.name}</td>
                <td>{m.email}</td>
                <td>{m.message}</td>
                <td>{new Date(m.createdAt).toLocaleString()}</td>
                <td>
                  <button
                    className="btn btn-secondary btn-sm me-2"
                    onClick={() => archive(m._id)}
                  >
                    📁 Archivar
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteMessage(m._id)}
                  >
                    🗑 Eliminar
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <hr />

      {/* ✅ SECCIÓN 3: Archivados */}
      <h3 className="text-muted">Archivados</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Mensaje</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {messages
            .filter(m => m.archived)
            .map(m => (
              <tr key={m._id}>
                <td>{m.name}</td>
                <td>{m.email}</td>
                <td>{m.message}</td>
                <td>{new Date(m.createdAt).toLocaleString()}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteMessage(m._id)}
                  >
                    🗑 Eliminar
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
