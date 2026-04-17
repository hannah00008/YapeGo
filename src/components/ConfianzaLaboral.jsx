import React from 'react';
import { ShieldCheck, AlertTriangle, CheckCircle, Building2, Users, Lock } from 'lucide-react';

const ConfianzaLaboral = () => {
  return (
    <div className="min-h-screen bg-[#fafbff] pt-40 pb-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* --- SECCIÓN HERO (CABECERA) --- */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-5 py-2 rounded-full text-sm font-bold mb-6 border border-green-100 shadow-sm animate-bounce-short">
            <ShieldCheck size={20} />
            Tu seguridad es nuestra prioridad
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
            Navega con <span className="text-[#7422ed]">Seguridad Total</span>
          </h1>
          <p className="text-gray-500 text-xl max-w-3xl mx-auto leading-relaxed">
            En Yape Go aplicamos filtros avanzados para que solo interactúes con empresas reales y oportunidades legítimas.
          </p>
        </div>

        {/* --- GRID DE INFORMACIÓN PRINCIPAL --- */}
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          
          {/* Card: Empresa Verificada */}
          <div className="md:col-span-7 bg-white rounded-[3rem] p-10 shadow-2xl shadow-purple-100/50 border border-gray-50 relative overflow-hidden group transition-all hover:scale-[1.01]">
            <div className="absolute -top-10 -right-10 opacity-[0.03] group-hover:rotate-12 transition-transform">
              <Building2 size={240} />
            </div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-green-50 rounded-3xl flex items-center justify-center mb-8 text-green-500 shadow-inner">
                <ShieldCheck size={40} strokeWidth={2.5} />
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-5 flex items-center gap-3">
                Empresa 100% Verificada
                <CheckCircle className="text-blue-500" size={28} fill="#eff6ff" />
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Validamos el **RUC**, la existencia legal y el contacto real de cada reclutador. Buscamos el sello verde para postular con total tranquilidad.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <span className="bg-green-100 text-green-700 px-6 py-2.5 rounded-2xl text-sm font-black uppercase tracking-wider">
                  Confianza Inmediata
                </span>
                <button className="text-purple-600 font-bold text-sm hover:text-purple-800 transition-colors flex items-center gap-2 border-b-2 border-transparent hover:border-purple-200">
                  Reportar oferta sospechosa <AlertTriangle size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Card: Checklist de Seguridad */}
          <div className="md:col-span-5 bg-gradient-to-br from-white to-purple-50/30 rounded-[3rem] p-10 border border-purple-100 shadow-xl shadow-gray-100/50">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-purple-600 text-white rounded-xl">
                <Lock size={20} />
              </div>
              <h3 className="text-2xl font-black text-gray-900">Checklist</h3>
            </div>
            
            <ul className="space-y-5">
              {[
                "RUC de empresa validado ante SUNAT",
                "Contacto de reclutador corporativo",
                "Oferta sin cobros ocultos",
                "Sin solicitud de claves privadas"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 bg-white p-5 rounded-[1.5rem] shadow-sm border border-purple-50 hover:border-purple-200 transition-colors">
                  <div className="bg-purple-100 text-[#7422ed] rounded-full p-1.5">
                    <CheckCircle size={18} weight="fill" />
                  </div>
                  <span className="text-gray-700 font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- SECCIÓN DARK: SEÑALES DE ALERTA --- */}
        <div className="bg-[#111827] rounded-[4rem] p-10 md:p-16 text-white relative overflow-hidden mb-20 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#7422ed] opacity-10 blur-[120px]"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 text-red-400 font-black text-2xl mb-6 uppercase tracking-tight">
                <AlertTriangle size={32} /> ¡Cuidado con las estafas!
              </div>
              <p className="text-gray-400 text-lg mb-10 max-w-xl">
                Recuerda: Si te piden dinero para exámenes médicos, capacitaciones o uniformes, **es una estafa**. ¡No compartas tus datos!
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 p-7 rounded-[2rem] hover:bg-white/10 transition-all group">
                  <span className="text-red-400 font-black block mb-3 text-lg group-hover:scale-105 transition-transform">
                    ❌ "Paga por tu examen"
                  </span>
                  <p className="text-sm text-gray-400 leading-relaxed">Ninguna empresa real te cobrará un sol por postular o capacitarte.</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-7 rounded-[2rem] hover:bg-white/10 transition-all group">
                  <span className="text-red-400 font-black block mb-3 text-lg group-hover:scale-105 transition-transform">
                    ❌ "Sueldos irreales"
                  </span>
                  <p className="text-sm text-gray-400 leading-relaxed">Duda de ofertas que prometen miles de soles por pocas horas de trabajo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- FOOTER DE CONFIANZA --- */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all flex items-center gap-8 group">
            <div className="w-20 h-20 bg-purple-50 text-[#7422ed] rounded-3xl flex items-center justify-center group-hover:bg-[#7422ed] group-hover:text-white transition-all">
              <Building2 size={38} />
            </div>
            <div>
              <h4 className="text-2xl font-black text-gray-900 mb-1">Empresas TOP</h4>
              <p className="text-gray-500 font-medium">Marcas aliadas que cumplen con altos estándares de ética.</p>
            </div>
          </div>
          
          <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all flex items-center gap-8 group">
            <div className="w-20 h-20 bg-blue-50 text-blue-500 rounded-3xl flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all">
              <Users size={38} />
            </div>
            <div>
              <h4 className="text-2xl font-black text-gray-900 mb-1">Voz Yapera</h4>
              <p className="text-gray-500 font-medium">Comunidad activa reportando y validando procesos reales.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ConfianzaLaboral;