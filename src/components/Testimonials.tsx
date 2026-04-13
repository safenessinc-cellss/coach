import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "CEO, TechLogistics",
    content: "La visión estratégica de Robert transformó por completo nuestra estructura operativa. Logramos la certificación ISO 9001 en tiempo récord.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    name: "Ana Silva",
    role: "Directora de Operaciones, GlobalCorp",
    content: "Su enfoque de coaching no solo mejoró nuestros procesos, sino que empoderó a todo nuestro equipo directivo.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5
  },
  {
    name: "Roberto Gómez",
    role: "Gerente General, Industrias Alimenticias",
    content: "El mapeo de procesos que implementó nos permitió identificar cuellos de botella que nos costaban miles de dólares al mes.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-xl text-gray-600">Casos de éxito que respaldan nuestra experiencia</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                />
                <div>
                  <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
