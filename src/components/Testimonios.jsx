import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// ⭐ Componente de estrellas
function Stars({ rating = 5 }) {
  return (
    <div className="flex gap-1 mt-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
          ★
        </span>
      ))}
    </div>
  );
}

// 🎥 Video Testimonio PRO
export function VideoTestimonio({ src, nombre, foto }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden"
    >
      <video controls className="w-full h-48 object-cover">
        <source src={src} type="video/mp4" />
      </video>

      <div className="p-4 flex items-center gap-3">
        <img
          src={foto}
          alt={nombre}
          className="w-12 h-12 rounded-full object-cover border-2 border-purple-500"
        />

        <div>
          <p className="font-semibold">{nombre}</p>
          <Stars rating={5} />
        </div>
      </div>
    </motion.div>
  );
}

// 💬 Testimonios con diseño PRO
export default function Testimonios() {
  const users = [
    {
      nombre: "Javier",
      foto: "https://randomuser.me/api/portraits/men/32.jpg",
      comentario: "Una gran experiencia para crecer profesionalmente.",
      rating: 5,
    },
    {
      nombre: "María",
      foto: "https://randomuser.me/api/portraits/women/44.jpg",
      comentario: "Aprendí muchísimo y conocí personas increíbles.",
      rating: 4,
    },
    {
      nombre: "Luis",
      foto: "https://randomuser.me/api/portraits/men/22.jpg",
      comentario: "Excelente plataforma para desarrollarse.",
      rating: 5,
    },
    {
      nombre: "Ana",
      foto: "https://randomuser.me/api/portraits/women/68.jpg",
      comentario: "Me encantó la experiencia.",
      rating: 4,
    },
  ];

  return (
    <section className="px-10 py-20 bg-gradient-to-b from-purple-50 to-white">
      <h2 className="text-4xl font-bold mb-12 text-center">
         Testimonios
      </h2>

      <div className="grid md:grid-cols-4 gap-8">
        {users.map((user, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src={user.foto}
                alt={user.nombre}
                className="w-14 h-14 rounded-full object-cover border-2 border-purple-500"
              />

              <div>
                <h3 className="font-bold">{user.nombre}</h3>
                <Stars rating={user.rating} />
              </div>
            </div>

            <p className="text-sm text-gray-600 italic">
              "{user.comentario}"
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/inspiracion"
          className="bg-purple-700 text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:bg-purple-800 hover:scale-105 transition"
        >
          Ver más testimonios
        </Link>
      </div>
    </section>
  );
}