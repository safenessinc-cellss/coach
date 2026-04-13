import React from 'react';
import { Award, TrendingUp, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image Corporativa */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay oscuro para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/70"></div>
      </div>

      {/* Logo flotante (opcional) */}
      <div className="absolute top-32 right-8 z-10 opacity-20 hidden lg:block">
        <img 
          src="/images/logo-robert-teran.png" 
          alt="Logo" 
          className="w-48 h-48 object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-white">
        <div className="max-w-3xl">
          {/* Sello de calidad */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
            <Shield className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-bold uppercase tracking-wider">ISO 9001 · 14001 · 45001</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-none mb-6">
            La Calidad es
            <span className="text-blue-400 block mt-2"> Innegociable</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl">
            Fusiono la precisión técnica de la ingeniería con el desarrollo del talento humano para crear empresas exponenciales.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105">
              Agendar Consultoría
            </button>
            <button className="border-2 border-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105">
              Ver Servicios
            </button>
          </div>

          {/* Stats con iconos */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
                <Award className="w-6 h-6 text-blue-400" />
                <span className="font-bold text-2xl">30+</span>
              </div>
              <p className="text-sm text-gray-300">Años de Experiencia</p>
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
                <TrendingUp className="w-6 h-6 text-blue-400" />
                <span className="font-bold text-2xl">500+</span>
              </div>
              <p className="text-sm text-gray-300">Empresas Asesoradas</p>
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
                <Shield className="w-6 h-6 text-blue-400" />
                <span className="font-bold text-2xl">100%</span>
              </div>
              <p className="text-sm text-gray-300">Certificaciones ISO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
