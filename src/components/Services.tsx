import React from 'react';
import { ClipboardCheck, Users, Map, BarChart3, Shield, Microscope } from 'lucide-react';

const services = [
  {
    icon: <ClipboardCheck className="w-12 h-12 text-blue-600" />,
    title: "Auditor Líder ISO",
    description: "Certificación en ISO 9001, 14001 y más. Garantizamos la excelencia operativa.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <Users className="w-12 h-12 text-blue-600" />,
    title: "IBM 2025 Coach",
    description: "Liderazgo que inspira resultados. Transformación cultural y estratégica.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <Map className="w-12 h-12 text-blue-600" />,
    title: "Mapeo de Procesos",
    description: "Estructuración organizacional y optimización de flujos de trabajo.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <BarChart3 className="w-12 h-12 text-blue-600" />,
    title: "Gestión de Riesgos",
    description: "Identificación y mitigación de riesgos estratégicos y operativos.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <Shield className="w-12 h-12 text-blue-600" />,
    title: "Certificaciones ISO",
    description: "Preparación y auditoría para obtener certificaciones internacionales.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <Microscope className="w-12 h-12 text-blue-600" />,
    title: "Mejora Continua",
    description: "Implementación de metodologías Lean Six Sigma y Kaizen.",
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Ecosistema de Soluciones</h2>
          <p className="text-xl text-gray-600">Servicios integrales para la excelencia empresarial</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition group"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <button className="mt-4 text-blue-600 font-semibold hover:text-blue-700">
                  Ver más →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
