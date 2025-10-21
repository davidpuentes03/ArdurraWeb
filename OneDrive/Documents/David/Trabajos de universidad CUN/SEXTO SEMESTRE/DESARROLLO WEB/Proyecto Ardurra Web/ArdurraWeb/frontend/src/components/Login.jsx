import React, { useState } from "react";
import "../styles/Login.css";

const Login = () => {
  // Estado para guardar email y contraseña
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Maneja los cambios en los inputs
  const handleChange = (evento) => {
    const { name, value } = evento.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Maneja el envío del formulario
  const handleSubmit = (evento) => {
    evento.preventDefault();
    console.log("Datos del login:", formData);
    alert(`Bienvenido ${formData.email}`);
  };

  return (
    <div className="login-container">
      <h1>Iniciar Sesión</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" onChange={handleChange} required />
        </label>
        <br />

        <label>
          Contraseña:
          <input type="password" name="password" onChange={handleChange} required />
        </label>
        <br />

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
