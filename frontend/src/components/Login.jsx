import React, { useState } from "react";
import "../styles/Login.css";

const Login = () => {
  // Estado para guardar email y contraseña
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Función para manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Maneja los cambios en los inputs
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password
      })
    });

    const data = await res.json();
    console.log("Respuesta login:", data);

    if (data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      alert(" Bienvenido " + data.user.name);
      window.location.href = "/ArdurraWeb";
    } else {
      alert(" " + data.msg);
    }

  } catch (error) {
    console.error("Error login:", error);
    alert("Error de servidor");
  }
};


  return (
    <div className="login-container">
      <h1>Iniciar Sesión</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required/>
        </label>
        <br />

        <label>
          Contraseña:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required/>
        </label>
        <br />

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;

