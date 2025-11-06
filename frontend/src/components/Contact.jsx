import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const [loading, setLoading] = useState(false);

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (res.ok) {
        alert("Mensaje enviado correctamente.");
        setForm({ name:'', email:'', message:'' });
      } else {
        alert("⚠️ Error: " + data.msg);
      }

    } catch (err) {
      alert("Error en el servidor.");
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <section className="contact my-4">
      <h2 className="mb-4">Contacto</h2>
      <form onSubmit={onSubmit} className="row g-3">

        <div className="col-md-6">
          <label className="form-label">Nombre</label>
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            className="form-control"
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Correo</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            className="form-control"
            required
          />
        </div>

        <div className="col-12">
          <label className="form-label">Mensaje</label>
          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            className="form-control"
            rows="4"
            required
          />
        </div>

        <div className="col-12">
          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Enviar mensaje"}
          </button>
        </div>
      </form>
    </section>
  );
}
