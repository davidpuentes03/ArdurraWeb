// Componente principal que muestra la página de inicio y usa <Outlet> para las rutas hijas.
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Outlet, useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();

  // Detectar si estamos en la página principal o en otra
  const isHome =
    location.pathname === "/" || location.pathname === "/ArdurraWeb/";

  return (
    <div className="app-root">
      <Navbar />

      <main className="container my-5">
        {/* Mostrar las secciones solo en la página principal */}
        {isHome && (
          <>
            <Hero />
            <Services />
            <Projects />
            <Contact />
          </>
        )}

        {/* Rutas hijas como /login o /registro */}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
