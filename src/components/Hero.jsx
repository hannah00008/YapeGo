import React from "react";
export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-purple-700 to-pink-500 text-white px-10 py-20 grid md:grid-cols-2 items-center">

      <div>
        <h1 className="text-5xl font-bold mb-4">
          Empleabilidad e Inclusión Yape
        </h1>

        <p className="mb-6 text-lg">
          Empoderando a la Juventud Peruana mediante oportunidades laborales.
        </p>

        <button className="bg-green-400 text-black px-6 py-3 rounded-xl font-semibold">
          Participa en el Hackathon
        </button>
      </div>

      <img
        src="/hero.png"
        alt="Hero"
        className="w-full"
      />

    </section>
  );
}