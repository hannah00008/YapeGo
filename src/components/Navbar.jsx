
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 h-16 bg-[#742284]/80 backdrop-blur-md text-white border-b border-white/10 font-sans">
      
      {/* LOGO */}
      <div className="relative w-32 h-full flex items-center">
        <img 
          src="/logo.png" 
          alt="Yape Logo" 
          className="absolute -top-5 left-0 h-24 w-auto object-contain drop-shadow-lg" 
        />
      </div>

      {/* MENÚ  */}
      <ul className="hidden md:flex gap-8 items-center">
        <li><Link to="/">Inicio</Link></li>
        <li>Empleos</li>
        <li><Link to="/inspiracion">Inspiración</Link></li>
        <li><Link to="/aprendizaje">Aprendizaje</Link></li>
        <li><Link to="/orientacion">Orientación</Link></li>

        <li>Mi perfil</li>
        <li>✉</li>
        <li>Ayuda</li>
      </ul>

      {/* BOTÓN */}
      <button className="bg-purple-900 px-5 py-2 rounded-lg">
        Iniciar sesión
      </button>
    </nav>
  );
}

export default Navbar;