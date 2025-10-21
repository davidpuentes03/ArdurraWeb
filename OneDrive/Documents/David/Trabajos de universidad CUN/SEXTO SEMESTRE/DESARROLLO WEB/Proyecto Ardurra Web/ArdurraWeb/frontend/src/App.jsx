// Componente raíz que organiza la navegación por estado simple.
// Todo el código está documentado para facilitar edición.
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Registro from "./components/Registro";
import Login from "./components/Login";

export default function App() {
  // control simple de "rutas" para evitar dependencias extra
  const [route, setRoute] = useState('home');

  const navigate = (r) => {
    setRoute(r);
    window.scrollTo(0,0);
  };

  return (
    <div className="app-root">
      <Navbar onNavigate={navigate} />
      <main className="container my-5">
        {route === 'home' && (
          <>
            <Hero />
            <Services />
            <Projects />
            <Contact />
          </>
        )}
        {route === 'services' && <Services />}
        {route === 'projects' && <Projects />}
        {route === 'contact' && <Contact />}
        {route === 'registro' && <Registro />}
        {route === 'login' && <Login />}
      </main>
      <Footer />
    </div>
  );
}
