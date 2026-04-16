import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Areas from "./components/Areas";
import Testimonios from "./components/Testimonios";
import Postula from "./components/Postula";
import Footer from "./components/Footer";
<<<<<<< HEAD

// ✅ IMPORTS COMBINADOS
=======
import ExploraYape from "./pages/ExploraYape";
>>>>>>> 2ac1cce83a22435ff2c94a62a207c052ca4c999f
import DetalleArea from "./pages/DetalleArea";
import ExploraYape from "./pages/ExploraYape";
import Inspiracion from "./pages/Inspiracion";
import Aprendizaje from "./pages/Aprendizaje";
import Orientacion from "./pages/Orientacion";
<<<<<<< HEAD
=======
import Estadisticas from "./components/Estadisticas";
import ChatBotYape from "./components/ChatBotYape";
import ConfianzaLaboral from "./components/ConfianzaLaboral";
import FormularioPostulacion from "./pages/FormularioPostulacion";
import Login from "./pages/Login";
import Registro from "./pages/Registro";

>>>>>>> 2ac1cce83a22435ff2c94a62a207c052ca4c999f

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
<<<<<<< HEAD

        {/* 🏠 HOME */}
=======
        {/* 🏠 HOME (Landing completa) */}
>>>>>>> 2ac1cce83a22435ff2c94a62a207c052ca4c999f
        <Route path="/" element={
          <>
            <Hero />
            <Areas />
            <Testimonios />
            <Estadisticas />
            <Postula />
          </>
        } />

<<<<<<< HEAD
        {/* ✅ TU RUTA */}
        <Route path="/explora" element={<ExploraYape />} />

        {/* ✅ RUTAS DE TUS AMIGAS */}
=======
        {/* 🚀 TUS RUTAS FUSIONADAS */}
        <Route path="/explora" element={<ExploraYape />} />
>>>>>>> 2ac1cce83a22435ff2c94a62a207c052ca4c999f
        <Route path="/inspiracion" element={<Inspiracion />} />
        <Route path="/aprendizaje" element={<Aprendizaje />} />
        <Route path="/orientacion" element={<Orientacion />} />
        <Route path="/confianzalaboral" element={<ConfianzaLaboral />} />
        <Route path="/postular/:area" element={<FormularioPostulacion />} />
        <Route path="/login" element={<Login />} />

<<<<<<< HEAD
        {/* 🔍 DETALLE */}
=======
        {/* 🔍 DETALLE DINÁMICO */}
>>>>>>> 2ac1cce83a22435ff2c94a62a207c052ca4c999f
        <Route path="/areas/:id" element={<DetalleArea />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>

      <Footer />
      <ChatBotYape />
    </Router>
  );
}

export default App;