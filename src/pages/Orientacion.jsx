import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Orientacion() {
  const preguntas = [
    "¿Tienes acceso a internet?",
    "¿Tienes ganas de aprender?",
    "¿Puedes comprometerte con el proceso?",
  ];

  const [respuestas, setRespuestas] = useState(Array(preguntas.length).fill(null));

  const handleRespuesta = (index, valor) => {
    const nuevas = [...respuestas];
    nuevas[index] = valor;
    setRespuestas(nuevas);
  };

  const progreso =
    (respuestas.filter((r) => r !== null).length / preguntas.length) * 100;

  const califica = respuestas.every((r) => r === true);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-100 px-6 md:px-20 py-12">

      {/* HERO */}
      <section className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-purple-700"
        >
          Orientación para Postular 🧭
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto"
        >
          Te guiamos paso a paso y te ayudamos a descubrir si estás listo para ser parte de Yape 🚀
        </motion.p>
      </section>

      {/* REQUISITOS */}
      <section className="mb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-3xl shadow-lg"
        >
          <h2 className="text-xl font-bold mb-4">
            🎯 Criterios de elegibilidad
          </h2>

          <ul className="space-y-3 text-gray-600">
            <li>✅ Ser joven con ganas de mejorar</li>
            <li>🌐 Tener acceso a internet</li>
            <li>💪 Compromiso con el aprendizaje</li>
          </ul>
        </motion.div>
      </section>

      {/* TEST INTERACTIVO */}
      <section className="mb-12">
        <div className="bg-white p-8 rounded-3xl shadow-lg">

          <h2 className="text-xl font-bold mb-4">
            🎯 ¿Calificas para postular?
          </h2>

          {/* PROGRESO */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-6 overflow-hidden">
            <motion.div
              className="bg-purple-600 h-3"
              initial={{ width: 0 }}
              animate={{ width: `${progreso}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>

          <div className="space-y-6">
            {preguntas.map((pregunta, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="font-medium mb-2">{pregunta}</p>

                <div className="flex gap-3">
                  <button
                    onClick={() => handleRespuesta(i, true)}
                    className={`px-4 py-2 rounded-xl border transition ${
                      respuestas[i] === true
                        ? "bg-green-500 text-white scale-105"
                        : "bg-white hover:bg-gray-100"
                    }`}
                  >
                    Sí
                  </button>

                  <button
                    onClick={() => handleRespuesta(i, false)}
                    className={`px-4 py-2 rounded-xl border transition ${
                      respuestas[i] === false
                        ? "bg-red-500 text-white scale-105"
                        : "bg-white hover:bg-gray-100"
                    }`}
                  >
                    No
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RESULTADO */}
          {progreso === 100 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-6 text-center"
            >
              {califica ? (
                <div className="text-green-600 font-bold text-lg">
                  🎉 ¡Cumples con los requisitos!
                </div>
              ) : (
                <div className="text-red-500 font-bold text-lg">
                  ⚠️ Aún puedes mejorar algunos aspectos
                </div>
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* PASOS */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 text-gray-800">
          🚀 ¿Cómo postular?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Regístrate",
            "Evaluación",
            "Entrevista"
          ].map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-md text-center"
            >
              <div className="text-purple-600 font-bold mb-2">
                Paso {i + 1}
              </div>
              <p className="font-semibold">{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-purple-700 text-white p-8 rounded-3xl shadow-xl"
        >
          <h2 className="text-2xl font-bold">
            💼 ¿Listo para dar el siguiente paso?
          </h2>

          <p className="mt-3 text-purple-100">
            Postula ahora y empieza tu crecimiento con nosotros
          </p>

          <Link
            to="/postula"
            className="inline-block mt-5 bg-white text-purple-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Postular ahora 🚀
          </Link>
        </motion.div>
      </section>

    </div>
  );
}