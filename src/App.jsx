import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Areas from "./components/Areas";
import Testimonios from "./components/Testimonios";
import Postula from "./components/Postula";
import Footer from "./components/Footer";
<<<<<<< HEAD
import DetalleArea from "./pages/DetalleArea"; // <--- Crearemos este archivo ahora
import ExploraYape from "./pages/ExploraYape";
=======

import DetalleArea from "./pages/DetalleArea";
import Inspiracion from "./pages/Inspiracion";
import Aprendizaje from "./pages/Aprendizaje";
import Orientacion from "./pages/Orientacion";
>>>>>>> 04193ecf10f4218e3aec0f01f72c679807e36a91

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>

        {/* 🏠 HOME (tu landing completa) */}
        <Route path="/" element={
          <>
            <Hero />
            <Areas />
            <Testimonios />
            <Postula />
          </>
        } />
<<<<<<< HEAD
<Route path="/explora" element={<ExploraYape />} />
        {/* RUTA DINÁMICA: Se activa al entrar a /areas/marketing, etc. */}
=======

        {/* 🆕 TUS NUEVAS PÁGINAS */}
        <Route path="/inspiracion" element={<Inspiracion />} />
        <Route path="/aprendizaje" element={<Aprendizaje />} />
        <Route path="/orientacion" element={<Orientacion />} />

        {/* 🔍 DETALLE */}
>>>>>>> 04193ecf10f4218e3aec0f01f72c679807e36a91
        <Route path="/areas/:id" element={<DetalleArea />} />

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
