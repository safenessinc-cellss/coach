import React from 'react';
import { Shield, CheckCircle, Calendar, MapPin, Users, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Título */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Perfil Profesional
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Más de 30 años formando líderes y transformando empresas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Columna izquierda - Segunda imagen de conferencia */}
            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/conferencia2.jpg" 
                  alt="Robert Terán dando conferencia magistral" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-blue-600/90 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-white text-sm font-semibold flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Conferencia Internacional - Gestión de Calidad
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-gray-50 rounded-xl">
                  <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-xs text-gray-600">+10,000</p>
                  <p className="text-xs font-semibold">Asistentes</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-xl">
                  <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-xs text-gray-600">15+</p>
                  <p className="text-xs font-semibold">Países</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-xl">
                  <Target className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-xs text-gray-600">200+</p>
                  <p className="text-xs font-semibold">Conferencias</p>
                </div>
              </div>
            </div>

            {/* Columna derecha - Texto profesional */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Más de 30 años de Excelencia
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Profesional versátil certificado como <span className="font-semibold text-blue-600">IBM 2025 Coach</span> con más de 30 años de experiencia en la industria. 
                Sólida trayectoria en sistemas de gestión empresarial de calidad y medio ambiente, complementada con 
                gestión administrativa, ventas y operaciones comerciales.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Certificaciones como <span className="font-semibold">Auditor Líder en ISO 9001, ISO 14001, Lean Manufacturing y Six Sigma Green Belt</span>. 
                Experiencia profunda en optimización de procesos, gestión de calidad y mejora continua.
              </p>
              
              {/* Grid de habilidades */}
              <div className="grid grid-cols-2 gap-3 mt-8">
                {[
                  "ISO Gestión de Calidad",
                  "Estructuras de Empresas",
                  "Mapeo de Procesos",
                  "Análisis Crítico",
                  "Análisis de Riesgo",
                  "Análisis de Mercado",
                  "Emprendimiento & Startup",
                  "IBM 2025 Coach",
                  "Auditor Leader"
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{skill}</span>
                  </div>
                ))}
              </div>

              {/* Cita inspiracional */}
              <div className="mt-8 p-4 bg-blue-50 rounded-xl border-l-4 border-blue-600">
                <p className="text-gray-700 italic">
                  "La calidad no es un acto, es un hábito. La excelencia no es una excepción, es una cultura."
                </p>
                <p className="text-blue-600 font-semibold mt-2">— Robert Terán</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
