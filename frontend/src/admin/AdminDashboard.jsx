import React from "react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="container my-5">
      <h1 className="mb-4">Panel de Administración</h1>

      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm p-3">
            <h4>Servicios</h4>
            <p>Agregar, editar o eliminar los servicios de la empresa.</p>
            <Link className="btn btn-primary" to="/admin/services">Administrar</Link>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card shadow-sm p-3">
            <h4>Proyectos</h4>
            <p>Controla toda la galería de proyectos mostrados públicamente.</p>
            <Link className="btn btn-primary" to="/admin/projects">Administrar</Link>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card shadow-sm p-3">
            <h4>Mensajes</h4>
            <p>Lee los mensajes enviados desde el formulario de contacto.</p>
            <Link className="btn btn-primary" to="/admin/messages">Ver mensajes</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
