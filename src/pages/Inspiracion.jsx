import React from "react";
import { motion } from "framer-motion";
import { Sparkles, PlayCircle } from 'lucide-react';

// 🎬 Card de video
function VideoCard({ video, nombre }) {
  return (
    <div className="min-w-[280px] md:min-w-[320px] bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition">
      <video controls className="w-full h-48 object-cover">
        <source src={video} type="video/mp4" />
      </video>
      <div className="p-4">
        <p className="font-semibold text-gray-800">{nombre}</p>
      </div>
    </div>
  );
}

// 🌟 Card grande tipo Netflix
function StoryCard({ image, titulo, descripcion }) {
  return (
    <div className="relative min-w-[300px] md:min-w-[400px] h-[220px] rounded-3xl overflow-hidden shadow-xl group">
      <img
        src={image}
        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      <div className="absolute bottom-4 left-4 right-4 text-white">
        <h3 className="text-lg font-bold">{titulo}</h3>
        <p className="text-sm opacity-80">{descripcion}</p>
      </div>
    </div>
  );
}

export default function Inspiracion() {
  const historias = [
    {
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
      titulo: "De provincia a fintech",
      descripcion: "Cómo Luis encontró su oportunidad en Yape",
    },
    {
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      titulo: "Rompiendo barreras",
      descripcion: "Valeria y su camino en tecnología",
    },
    {
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      titulo: "Confianza y crecimiento",
      descripcion: "Diego y su evolución profesional",
    },
  ];

  const videos = [
    {
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      nombre: "Historia de Camila",
    },
    {
      video: "https://www.w3schools.com/html/movie.mp4",
      nombre: "Historia de Luis",
    },
    {
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      nombre: "Historia de Valeria",
    },
  ];

  return (
<<<<<<< HEAD
    <div className="bg-white min-h-screen px-6 md:px-16 py-16">
      {/* HERO */}
      <section className="mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900"
        >
          Inspírate con historias reales
        </motion.h1>

        <p className="mt-4 text-gray-600 text-lg max-w-2xl">
          Descubre cómo jóvenes como tú están cambiando su futuro con oportunidades reales.
        </p>
      </section>

      {/* 🎥 VIDEOS */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          Historias en video
        </h2>

        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {videos.map((v, i) => (
            <VideoCard key={i} {...v} />
=======
    // SECCIÓN CORREGIDA: pt-32 para dar espacio al Navbar fijo
    <div className="min-h-screen bg-[#F9FAFB] px-6 md:px-20 pt-32 pb-20 font-sans">

      {/* HERO SECTION */}
      <section className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 bg-purple-100 text-[#7422c4] px-4 py-2 rounded-full text-sm font-bold mb-6"
        >
          <Sparkles size={16} /> <span>Casos de éxito</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight"
        >
          Inspírate con <span className="text-[#7422c4]">Yape Go</span> 💜
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-500 text-lg max-w-2xl mx-auto font-light leading-relaxed"
        >
          Descubre cómo jóvenes como tú transformaron su futuro trabajando con nosotros. 
          En Yape creemos en el talento, la innovación y las ganas de crecer. 🚀
        </motion.p>
      </section>

      {/* BLOQUE MOTIVACIONAL (BANNER) */}
      <section className="max-w-6xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-[#7422c4] text-white rounded-[3rem] p-10 md:p-16 shadow-2xl overflow-hidden text-center"
        >
          {/* Círculo decorativo de fondo */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            💼 Trabaja con nosotros
          </h2>
          <p className="mt-4 text-purple-100 text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Sé parte de un equipo que está cambiando la forma en que millones de personas
            manejan su dinero. Tu talento puede marcar la diferencia en la vida de muchos peruanos.
          </p>
          
          <div className="mt-8 flex justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-sm font-bold border border-white/10">
              #TalentoDigital
            </div>
            <div className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-sm font-bold border border-white/10">
              #Innovación
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECCIÓN DE VIDEOS */}
      <section className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-10 ml-4">
          <div className="p-3 bg-purple-50 text-[#7422c4] rounded-2xl">
            <PlayCircle size={24} />
          </div>
          <h2 className="text-3xl font-black text-gray-900">
            Historias reales
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {videos.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-4 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_30px_60px_rgba(116,34,196,0.1)] transition-all group"
            >
              <VideoTestimonio
                src={video.src}
                nombre={video.nombre}
                foto={video.foto}
              />
            </motion.div>
>>>>>>> 2ac1cce83a22435ff2c94a62a207c052ca4c999f
          ))}
        </div>
      </section>

      {/* 🌟 HISTORIAS TIPO NETFLIX */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          Historias destacadas
        </h2>

        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {historias.map((h, i) => (
            <StoryCard key={i} {...h} />
          ))}
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
}

=======
}
>>>>>>> 2ac1cce83a22435ff2c94a62a207c052ca4c999f
