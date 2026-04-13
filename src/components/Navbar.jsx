import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-gradient-to-r from-purple-700 to-pink-500 text-white">
      
      <h1 className="text-2xl font-bold">Yape</h1>

      <ul className="hidden md:flex gap-8">
        <li>Inicio</li>
        <li>Propósito del reto</li>
        <li>Criterios</li>
        <li>FAQ</li>
        <li>Equipo</li>
      </ul>

      <button className="bg-purple-900 px-5 py-2 rounded-lg">
        Participar
      </button>

    </nav>
  );
};

export default Navbar;