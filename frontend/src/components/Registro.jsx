import React, { useState } from "react";
import "../styles/Registro.css"; // hoja de estilos para este componente

const Registro = () => {
  // Estado para guardar los datos que el usuario escribe
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Maneja los cambios de los inputs (cada vez que el usuario escribe)
  const handleChange = (evento) => {
    const { name, value } = evento.target;
    setFormData({
      ...formData, // copia el estado actual
      [name]: value, // reemplaza el valor del input que cambió
    });
  };

  // Maneja el envío del formulario
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData) // aquí se mandan los datos correctos
    });

    const data = await res.json();
    console.log(data);

    if (res.ok) {
      alert("Registro exitoso");
      window.location.href = "/ArdurraWeb/login";
    } else {
      alert(" " + data.msg);
    }

  } catch (error) {
    console.error(error);
    alert("Error de servidor");
  }
};



  return (
    <div className="registro-container">
      <h1>Registro</h1>
      <form className="registro-form" onSubmit={handleSubmit}>
        {/* Campo nombre */}
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        {/* Campo correo */}
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        {/* Campo contraseña */}
        <label>
          Contraseña:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        {/* Botón enviar */}
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Registro;



