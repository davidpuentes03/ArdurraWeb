// Formulario de contacto únicamente visual. 
// Para pruebas de frontend, el envío muestra una alerta.
import React, { useState } from 'react';

export default function Contact(){
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const onChange = (e) => setForm({...form, [e.target.name]: e.target.value});
  const onSubmit = (e) => {
    e.preventDefault();
    // Mostrar mensaje visual en vez de enviar a servidor.
    alert('Gracias por tu mensaje' + form.name + '. Pronto nos comunicaremos.');
    setForm({ name:'', email:'', message:'' });
  };
  return (
    <section className="contact my-4">
      <h2 className="mb-4">Contacto</h2>
      <form onSubmit={onSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Nombre</label>
          <input name="name" value={form.name} onChange={onChange} className="form-control" required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Correo</label>
          <input name="email" type="email" value={form.email} onChange={onChange} className="form-control" required />
        </div>
        <div className="col-12">
          <label className="form-label">Mensaje</label>
          <textarea name="message" value={form.message} onChange={onChange} className="form-control" rows="4" required />
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">Enviar mensaje</button>
        </div>
      </form>
    </section>
  );
}



