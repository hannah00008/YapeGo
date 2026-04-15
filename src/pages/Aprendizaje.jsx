import React from "react";
import Card from "../components/Card";

export default function Aprendizaje() {
  return (
    <div className="p-8 bg-linear-to-b from-purple-50 to-white min-h-screen">

      {/* HEADER */}
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 leading-tight">
  Aprende con Yape
</h1>
        <p className="mt-3 text-gray-600 text-lg">
          No solo te ayudamos a conseguir trabajo, también te enseñamos a
          manejar tu dinero y tomar mejores decisiones financieras.
        </p>
      </div>

      {/* CARDS PRINCIPALES */}
      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <Card icon="💰" title="Gestión de dinero">
          Organiza tus ingresos, controla tus gastos y crea tu primer presupuesto.
        </Card>

        <Card icon="🐷" title="Ahorro inteligente">
          Aprende a ahorrar sin dejar de disfrutar, con tips prácticos y reales.
        </Card>

        <Card icon="📱" title="Herramientas digitales">
          Usa Yape para pagar, recargar, ahorrar y simplificar tu día a día.
        </Card>

      </div>

      {/* SECCIÓN DIFERENCIAL */}
      <div className="mt-12 bg-purple-700 text-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold">
          🚀 Más que empleabilidad
        </h2>
        <p className="mt-2 text-purple-100">
          Queremos que no solo consigas un trabajo, sino que aprendas a gestionar
          tu dinero, crecer y construir tu independencia financiera.
        </p>
      </div>

      <div className="mt-12">
  <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
    🎥 Aprende viendo
  </h2>

  <p className="text-gray-500 mt-2">
    Videos cortos para mejorar tu manejo del dinero en minutos.
  </p>

  <div className="grid md:grid-cols-2 gap-8 mt-6">

    {/* VIDEO 1 */}
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <video controls className="w-full h-56 object-cover">
        <source src="/videos/presupuesto.mp4" type="video/mp4" />
      </video>

      <div className="p-4">
        <p className="font-semibold text-lg">
          💰 Cómo hacer tu presupuesto
        </p>
        <p className="text-gray-500 text-sm">
          Aprende a organizar tu dinero desde cero.
        </p>
      </div>
    </div>

    {/* VIDEO 2 */}
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <video controls className="w-full h-56 object-cover">
        <source src="/videos/ahorro.mp4" type="video/mp4" />
      </video>

      <div className="p-4">
        <p className="font-semibold text-lg">
          🐷 Tips para ahorrar
        </p>
        <p className="text-gray-500 text-sm">
          Pequeños cambios que hacen una gran diferencia.
        </p>
      </div>
    </div>

  </div>
</div>

      {/* RECOMENDACIONES */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800">
          💡 Recomendaciones para ti
        </h2>

        <ul className="mt-4 space-y-3 text-gray-600">
          <li>✔ Registra todos tus gastos diarios</li>
          <li>✔ Ahorra al menos el 10% de lo que recibes</li>
          <li>✔ Usa Yape para controlar mejor tus pagos</li>
        </ul>
      </div>

    </div>
  );
}
