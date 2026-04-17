import React from "react";



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import Areas from "./components/Areas";
import Testimonios from "./components/Testimonios";
import Postula from "./components/Postula";
<<<<<<< HEAD
import Footer from "./components/Footer";

=======
import Estadisticas from "./components/Estadisticas";
import ChatBotYape from "./components/ChatBotYape";
import ConfianzaLaboral from "./components/ConfianzaLaboral";

import ExploraYape from "./pages/ExploraYape";
>>>>>>> a8620d0916c62ee5a661a9280721e53475389550
import DetalleArea from "./pages/DetalleArea";
import ExploraYape from "./pages/ExploraYape";
import Inspiracion from "./pages/Inspiracion";
import Aprendizaje from "./pages/Aprendizaje";
import Orientacion from "./pages/Orientacion";
<<<<<<< HEAD

import Estadisticas from "./components/Estadisticas";
import ChatBotYape from "./components/ChatBotYape";
import ConfianzaLaboral from "./components/ConfianzaLaboral";
import FormularioPostulacion from "./pages/FormularioPostulacion";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
=======
import FormularioPostulacion from "./pages/FormularioPostulacion";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Perfil from "./pages/Perfil";
>>>>>>> a8620d0916c62ee5a661a9280721e53475389550

function App() {
  return (
    <Router>

      {/* ✅ NAVBAR SIEMPRE VISIBLE */}
      <Navbar />

      <Routes>
<<<<<<< HEAD
        {/* 🏠 HOME */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Areas />
              <Testimonios />
              <Estadisticas />
              <Postula />
            </>
          }
        />

        {/* 🚀 RUTAS */}
=======

        {/* 🏠 HOME */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Areas />
              <Testimonios />
              <Estadisticas />
              <Postula />
            </>
          }
        />

        {/* 🚀 PÁGINAS */}
>>>>>>> a8620d0916c62ee5a661a9280721e53475389550
        <Route path="/explora" element={<ExploraYape />} />
        <Route path="/inspiracion" element={<Inspiracion />} />
        <Route path="/aprendizaje" element={<Aprendizaje />} />
        <Route path="/orientacion" element={<Orientacion />} />
        <Route path="/confianzalaboral" element={<ConfianzaLaboral />} />
<<<<<<< HEAD
        <Route path="/postular/:area" element={<FormularioPostulacion />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/areas/:id" element={<DetalleArea />} />
=======

        <Route path="/postular/:area" element={<FormularioPostulacion />} />
        <Route path="/areas/:id" element={<DetalleArea />} />

        {/* 🔐 AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />

        {/* 👤 PERFIL */}
        <Route path="/perfil" element={<Perfil />} />

>>>>>>> a8620d0916c62ee5a661a9280721e53475389550
      </Routes>

      {/* ✅ SIEMPRE VISIBLES */}
      <Footer />
      <ChatBotYape />

    </Router>
  );
}

export default App;