import React, { useState } from "react";
import TestModal from "./TestModal"; 

export default function Postula() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="px-6 md:px-10 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto relative group">
        
        {/* Efectos de luz de fondo para dar profundidad */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-teal-400 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

        <div className="relative bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-16 shadow-2xl flex flex-col md:flex-row items-center justify-between overflow-hidden">
          
          {/* Decoración geométrica moderna */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-teal-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>

          <div className="relative z-10 text-center md:text-left md:max-w-xl">
            <span className="inline-block px-4 py-2 rounded-full bg-purple-50 text-purple-600 text-xs font-bold uppercase tracking-widest mb-6">
              Impulsa tu Perfil
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
              Descubre tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-500">TalentView 3D</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Mucho más que un CV: mide tus valores profesionales, personalidad laboral y competencias clave para destacar ante los reclutadores.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                Tiempo estimado: 15 min
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                Resultados inmediatos
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-10 md:mt-0">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-purple-700 shadow-xl"
            >
              <span className="relative flex items-center gap-3 text-xl">
                Comenzar evaluación
                <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>

        </div>
      </div>

      {isModalOpen && (
        <TestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
    </section>
  );
}