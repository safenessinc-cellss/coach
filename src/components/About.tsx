import React from 'react';
import { Shield, CheckCircle, Target, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Título de la sección */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Perfil Profesional
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Columna izquierda - Foto */}
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src="/images/10.png" 
                  alt="Robert Terán - Perfil Profesional" 
                  className="w-80 h-80 md:w-96 md:h-96 rounded-2xl object-cover shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-blue-600 rounded-full p-3 shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            {/* Columna derecha - Texto */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Más de 30 años de Excelencia
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Profesional versátil certificado como IBM 2025 Coach con más de 30 años de experiencia en la industria. 
                Sólida trayectoria en sistemas de gestión empresarial de calidad y medio ambiente, complementada con 
                gestión administrativa, ventas y operaciones comerciales.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Certificaciones como Auditor Líder en ISO 9001, ISO 14001, Lean Manufacturing y Six Sigma Green Belt. 
                Experiencia profunda en optimización de procesos, gestión de calidad y mejora continua.
              </p>
              
              {/* Lista de habilidades */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">ISO Gestión de Calidad</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Estructuras de Empresas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Mapeo de Procesos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Análisis Crítico</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Análisis de Riesgo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">IBM 2025 Coach</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
