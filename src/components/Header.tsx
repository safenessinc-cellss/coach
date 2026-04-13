import React, { useState } from 'react';
import { Menu, X, Briefcase } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Coach ISO</h1>
              <p className="text-xs text-gray-500">Excelencia en Gestión</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition">Inicio</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition">Servicios</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition">Perfil</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition">Clientes</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contacto</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4">
            <a href="#home" className="text-gray-700 hover:text-blue-600">Inicio</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600">Servicios</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">Perfil</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600">Clientes</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contacto</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
