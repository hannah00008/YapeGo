import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, PlayCircle } from "lucide-react";

function VideoCard({ video, nombre }) {
  return (
    <div className="bg-white p-4 rounded-[2.5rem] shadow-lg border border-gray-100 hover:shadow-xl transition-all">
      <div className="w-full h-48 rounded-xl overflow-hidden">
        <iframe
          className="w-full h-full"
          src={video}
          title={nombre}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <p className="mt-3 font-semibold text-gray-800">{nombre}</p>
    </div>
  );
}

// 🌟 Card historias
function StoryCard({ image, titulo, descripcion, onClick }) {
  return (
    <div className="relative min-w-[300px] md:min-w-[400px] h-[220px] rounded-3xl overflow-hidden shadow-xl group">
      <div
  onClick={onClick}
  className="cursor-pointer relative min-w-[300px] md:min-w-[400px] h-[220px] rounded-3xl overflow-hidden shadow-xl group"
></div>
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
  const [selectedStory, setSelectedStory] = useState(null);
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
    video: "https://www.youtube.com/embed/o5-6UZmRkTE",
    nombre: "Historia de Camila",
  },
  {
    video: "https://www.youtube.com/embed/o5-6UZmRkTE",
    nombre: "Historia de Diego",
  },

];

  return (
    <div className="min-h-screen bg-[#F9FAFB] px-6 md:px-20 pt-32 pb-20 font-sans">

      {/* HERO */}
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
          className="text-4xl md:text-6xl font-black text-gray-900"
        >
          Inspírate con <span className="text-[#7422c4]">Yape Go</span> 💜
        </motion.h1>

        <motion.p className="mt-6 text-gray-500 text-lg max-w-2xl mx-auto">
          Descubre cómo jóvenes como tú transformaron su futuro con oportunidades reales.
        </motion.p>
      </section>

      {/* VIDEOS */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="flex items-center gap-3 mb-10 ml-4">
          <PlayCircle size={24} />
          <h2 className="text-3xl font-black text-gray-900">
            Historias reales
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {videos.map((v, i) => (
            <VideoCard key={i} {...v} />
          ))}
        </div>
      </section>

      {/* HISTORIAS */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          Historias destacadas
        </h2>

        <div className="flex gap-6 overflow-x-auto pb-4">
          {historias.map((h, i) => (
  <StoryCard
    key={i}
    {...h}
    onClick={() => setSelectedStory(h)}
  />
))}
        </div>
      </section>

    {selectedStory && (
  <div
    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
    onClick={() => setSelectedStory(null)}
  >
    <div
      className="bg-white rounded-3xl max-w-xl w-full p-6 relative"
      onClick={(e) => e.stopPropagation()}
    >
      <img
        src={selectedStory.image}
        className="w-full h-60 object-cover rounded-xl mb-4"
      />
      <h2 className="text-2xl font-bold mb-2">
        {selectedStory.titulo}
      </h2>
      <p className="text-gray-600">
        {selectedStory.descripcion}
      </p>

      <button
        onClick={() => setSelectedStory(null)}
        className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-xl"
      >
        Cerrar
      </button>
    </div>
  </div>
)}

    </div>

  );
}