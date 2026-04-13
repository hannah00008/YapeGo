import React from "react";

export default function Areas() {

  const areas = [
    { title: "Tecnología", icon: "💻" },
    { title: "Datos y Analítica", icon: "📊" },
    { title: "Marketing", icon: "📢" }
  ];

  return (
    <section className="px-10 py-16 bg-gray-100">

      <h2 className="text-3xl font-bold mb-8">
        Conoce las áreas
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {areas.map((area, i) => (
          <div key={i}
            className="bg-white p-6 rounded-xl shadow hover:scale-105 transition">

            <div className="text-4xl">{area.icon}</div>
            <h3 className="text-xl font-semibold mt-4">
              {area.title}
            </h3>

            <button className="mt-4 bg-purple-500 text-white px-4 py-2 rounded">
              Ver roles
            </button>

          </div>
        ))}

      </div>

    </section>
  );
}