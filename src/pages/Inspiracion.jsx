import { VideoTestimonio } from "../components/Testimonios";
import React from "react";
import { motion } from "framer-motion";

export default function Inspiracion() {
  const videos = [
    {
      src: "/src/assets/videos/testimonio1.mp4",
      nombre: "María - Emprendedora",
      foto: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      src: "/src/assets/videos/testimonio1.mp4",
      nombre: "Luis - Freelance",
      foto: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-100">

      {/* HERO */}
      <section className="text-center py-16 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-purple-700"
        >
          Inspírate con Yape 💜
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto"
        >
          Descubre cómo jóvenes como tú transformaron su futuro trabajando con nosotros.
          En Yape creemos en el talento, la innovación y las ganas de crecer 🚀
        </motion.p>
      </section>

      {/* BLOQUE MOTIVACIONAL */}
      <section className="px-6 md:px-20 mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-purple-700 text-white rounded-3xl p-8 shadow-xl text-center"
        >
          <h2 className="text-2xl font-bold">
            💼 Trabaja con nosotros
          </h2>
          <p className="mt-3 text-purple-100">
            Sé parte de un equipo que está cambiando la forma en que millones de personas
            manejan su dinero. Tu talento puede marcar la diferencia.
          </p>
        </motion.div>
      </section>

      {/* VIDEOS */}
      <section className="px-6 md:px-20 pb-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          🎥 Historias reales
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <VideoTestimonio
                src={video.src}
                nombre={video.nombre}
                foto={video.foto}
              />
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
