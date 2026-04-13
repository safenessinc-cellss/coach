import React from 'react';
import { Award, TrendingUp, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-white">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            La Calidad es
            <span className="text-blue-400"> Innegociable</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Fusiono la precisión técnica de la ingeniería con el desarrollo del talento humano
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition">
              Agendar Consultoría
            </button>
            <button className="border-2 border-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition">
              Ver Servicios
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-6 h-6 text-blue-400" />
                <span className="font-bold text-2xl">30+</span>
              </div>
              <p className="text-sm text-gray-300">Años de Experiencia</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-6 h-6 text-blue-400" />
                <span className="font-bold text-2xl">500+</span>
              </div>
              <p className="text-sm text-gray-300">Empresas Asesoradas</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
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
