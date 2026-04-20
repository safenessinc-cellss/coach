import { Analytics } from '@vercel/analytics/react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Users, Globe, Linkedin, Mail, Award, Network, Workflow, FileCheck, Activity, CheckCircle2, Menu, X, Brain, BarChart3, ShieldAlert, LineChart, Rocket, ClipboardCheck, Briefcase, Map, Quote, ArrowRight, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import data from './data.json';
import ChatWidget from './components/ChatWidget';

const iconMap: Record<string, any> = {
  ShieldCheck, Network, Workflow, Brain, BarChart3, ShieldAlert, LineChart, Rocket, Award, ClipboardCheck, Map
};

function App() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isBioModalOpen, setIsBioModalOpen] = useState(false);
  const [isCertificationsModalOpen, setIsCertificationsModalOpen] = useState(false);
  const [selectedIllustration, setSelectedIllustration] = useState<{ title: string; image: string; description: string; items: string[] } | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    closeMenu();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // Todas las certificaciones ISO existentes
  const allCertifications = [
    { code: "ISO 9001:2015", name: "Gestión de Calidad", description: "Sistemas de Gestión de Calidad - Requisitos" },
    { code: "ISO 14001:2015", name: "Gestión Ambiental", description: "Sistemas de Gestión Ambiental - Requisitos" },
    { code: "ISO 45001:2018", name: "Seguridad y Salud en el Trabajo", description: "Sistemas de Gestión de SST" },
    { code: "ISO 27001:2022", name: "Seguridad de la Información", description: "Sistemas de Gestión de Seguridad de la Información" },
    { code: "ISO 22000", name: "Seguridad Alimentaria", description: "Sistemas de Gestión de Inocuidad de los Alimentos" },
    { code: "ISO 50001:2018", name: "Gestión de la Energía", description: "Sistemas de Gestión de la Energía" },
    { code: "ISO 31000:2018", name: "Gestión de Riesgos", description: "Directrices para la Gestión de Riesgos" },
    { code: "ISO 26000", name: "Responsabilidad Social", description: "Guía de Responsabilidad Social" },
    { code: "ISO 37001", name: "Anti-Soborno", description: "Sistemas de Gestión Anti-Soborno" },
    { code: "ISO 22301", name: "Continuidad del Negocio", description: "Sistemas de Gestión de Continuidad del Negocio" },
    { code: "ISO 20000-1", name: "Gestión de Servicios TI", description: "Gestión de Servicios de Tecnología de la Información" },
    { code: "ISO 13485", name: "Dispositivos Médicos", description: "Sistemas de Gestión de Calidad para Dispositivos Médicos" },
    { code: "IATF 16949", name: "Automotriz", description: "Sistemas de Gestión de Calidad para la Industria Automotriz" },
    { code: "ISO 17025", name: "Laboratorios", description: "Requisitos para Laboratorios de Ensayo y Calibración" },
    { code: "ISO 21001", name: "Educación", description: "Sistemas de Gestión para Organizaciones Educativas" },
    { code: "ISO 28000", name: "Cadena de Suministro", description: "Sistemas de Gestión de Seguridad de la Cadena de Suministro" },
    { code: "ISO 37000", name: "Gobierno Corporativo", description: "Guía de Buen Gobierno" },
    { code: "ISO 42001", name: "Inteligencia Artificial", description: "Sistemas de Gestión de IA" },
  ];

  // Ilustraciones para Estructuración Organizacional con tus imágenes
  const illustrations = [
    {
      title: "Estructuración Organizacional",
      image: "/images/estructura-organigrama.jpg",
      description: "Diseño de organigramas y estructuras ágiles para optimizar la jerarquía y comunicación empresarial.",
      items: [
        "Diseño de organigramas y estructuras ágiles",
        "Definición de roles, perfiles de puesto y responsabilidades",
        "Alineación de objetivos estratégicos (OKRs y KPIs)"
      ]
    },
    {
      title: "Mapeo y Optimización",
      image: "/images/mapeo-procesos.jpg",
      description: "Diagramación avanzada bajo estándares BPMN para identificar y eliminar cuellos de botella.",
      items: [
        "Levantamiento de procesos actuales (As-Is) y futuros (To-Be)",
        "Diagramación avanzada bajo estándares internacionales (BPMN)",
        "Identificación y eliminación de cuellos de botella (Metodología Lean)"
      ]
    },
    {
      title: "Estandarización (SGC)",
      image: "/images/estandarizacion-sgc.jpg.png",
      description: "Desarrollo de procedimientos estandarizados para garantizar la calidad y consistencia operativa.",
      items: [
        "Desarrollo de Procedimientos Operativos Estándar (SOPs)",
        "Creación de manuales de calidad y políticas corporativas",
        "Diseño de cuadros de mando integrales (Dashboards)"
      ]
    },
    {
      title: "Gestión de Riesgos y Mejora",
      image: "/images/gestion-riesgo.png",
      description: "Identificación y mitigación de riesgos para asegurar la mejora continua.",
      items: [
        "Elaboración de matrices de riesgos corporativos e impacto",
        "Implementación del Ciclo PDCA (Plan-Do-Check-Act)",
        "Auditorías internas preventivas y planes de acción correctiva"
      ]
    }
  ];

  return (
    <div className="min-h-screen selection:bg-red-500/30 font-sans">
      {/* SKELETON LOADER OVERLAY */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center p-8"
          >
            <div className="w-full max-w-4xl space-y-8">
              <div className="flex justify-between items-center">
                <div className="w-12 h-12 bg-white/5 rounded-lg animate-pulse"></div>
                <div className="hidden md:flex gap-4">
                  {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-20 h-4 bg-white/5 rounded animate-pulse"></div>)}
                </div>
              </div>
              <div className="flex flex-col items-center text-center space-y-6 pt-20">
                <div className="w-32 h-6 bg-white/5 rounded-full animate-pulse"></div>
                <div className="w-3/4 h-16 md:h-24 bg-white/5 rounded-2xl animate-pulse"></div>
                <div className="w-1/2 h-6 bg-white/5 rounded animate-pulse"></div>
                <div className="flex gap-4 pt-8">
                  <div className="w-40 h-12 bg-white/5 rounded-full animate-pulse"></div>
                  <div className="w-40 h-12 bg-white/5 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========== MODAL DE CERTIFICACIONES ISO ========== */}
      <AnimatePresence>
        {isCertificationsModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setIsCertificationsModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 md:p-8 max-w-5xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              <button 
                onClick={() => setIsCertificationsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10 bg-black/50 rounded-full p-2"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Certificaciones ISO</h2>
                <p className="text-gray-400">Todas las certificaciones disponibles para auditoría y consultoría</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {allCertifications.map((cert, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-red-500/30 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-red-600/20 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white">{cert.code}</h3>
                        <p className="text-red-400 text-xs">{cert.name}</p>
                        <p className="text-gray-400 text-xs mt-1">{cert.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center text-gray-500 text-xs">
                Total: {allCertifications.length} certificaciones disponibles
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========== MODAL DE BIOGRAFÍA (+30 Años) ========== */}
      <AnimatePresence>
        {isBioModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setIsBioModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 md:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              <button 
                onClick={() => setIsBioModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10 bg-black/50 rounded-full p-2"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
                <div className="w-16 h-16 rounded-full bg-red-600/20 flex items-center justify-center">
                  <Award className="w-8 h-8 text-red-500" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Trayectoria Profesional</h2>
                  <p className="text-red-400">Más de 30 años de experiencia</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">{data.about.bio}</p>
                
                <div className="bg-white/5 rounded-xl p-4">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-red-500" />
                    Hitos profesionales
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-400 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>+50 certificaciones ISO exitosas lideradas</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-400 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>Más de 500 empresas asesoradas en 15 países</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-400 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>Certificado IBM 2025 Coach - Liderazgo ejecutivo</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-400 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>Lean Manufacturing y Six Sigma Green Belt</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-red-600/10 border border-red-500/20 rounded-xl p-4">
                  <h3 className="text-md font-bold text-white mb-2">🏆 Filosofía profesional</h3>
                  <p className="text-gray-300 text-sm italic">"La calidad no es un acto, es un hábito. La excelencia no es una excepción, es una cultura."</p>
                  <p className="text-red-400 text-xs mt-2">— Robert Terán</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========== MODAL DE ILUSTRACIONES ========== */}
      <AnimatePresence>
        {selectedIllustration && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedIllustration(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 md:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              <button 
                onClick={() => setSelectedIllustration(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10 bg-black/50 rounded-full p-2"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-2xl overflow-hidden bg-white/5 flex items-center justify-center min-h-[250px]">
                  <img 
                    src={selectedIllustration.image} 
                    alt={selectedIllustration.title}
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/conferencia2.jpg';
                    }}
                  />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{selectedIllustration.title}</h2>
                  <p className="text-gray-300 leading-relaxed mb-6">{selectedIllustration.description}</p>
                  
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-3">
                    <ClipboardCheck className="w-5 h-5 text-red-500" />
                    Elementos clave:
                  </h3>
                  <ul className="space-y-2">
                    {selectedIllustration.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-400 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <p className="text-gray-500 text-xs">Ilustración técnica - Metodología profesional</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========== MODAL DE PERFIL PROFESIONAL ========== */}
      <AnimatePresence>
        {isProfileModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setIsProfileModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 md:p-8 max-w-5xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              <button 
                onClick={() => setIsProfileModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10 bg-black/50 rounded-full p-2"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="relative rounded-2xl overflow-hidden border-2 border-red-500/30 shadow-2xl">
                    <img 
                      src="/images/conferencia2.jpg" 
                      alt="Robert Terán - Perfil Profesional"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-black/70 backdrop-blur-md rounded-xl p-3 border border-red-500/30">
                        <div className="flex items-center gap-2 mb-1">
                          <Award className="w-4 h-4 text-red-500" />
                          <span className="text-white text-xs font-bold uppercase tracking-wider">Coach · Auditor · Developer</span>
                        </div>
                        <p className="text-gray-300 text-xs">+30 años de experiencia</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 justify-center">
                    <a href={data.profile.linkedin} target="_blank" rel="noopener noreferrer" className="bg-blue-600/20 hover:bg-blue-600 transition-colors p-3 rounded-full">
                      <Linkedin className="w-5 h-5 text-blue-400" />
                    </a>
                    <a href={`mailto:${data.profile.email}`} className="bg-red-600/20 hover:bg-red-600 transition-colors p-3 rounded-full">
                      <Mail className="w-5 h-5 text-red-400" />
                    </a>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="border-b border-white/10 pb-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">{data.profile.name}</h2>
                    <p className="text-red-400 font-medium mt-1">Auditor Líder ISO | Coach Ejecutivo</p>
                    <p className="text-gray-400 text-sm mt-2">La Calidad es Innegociable</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-3">
                      <Briefcase className="w-4 h-4 text-red-500" />
                      Perfil Profesional
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{data.about.bio.substring(0, 500)}...</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-3">
                      <Award className="w-4 h-4 text-red-500" />
                      Certificaciones
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {data.about.badges.slice(0, 10).map((badge, idx) => {
                        const Icon = iconMap[badge.icon] || CheckCircle2;
                        return (
                          <div key={idx} className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
                            <Icon className="w-3 h-3 text-red-500" />
                            <span className="text-xs text-gray-300">{badge.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div className="pt-3 flex justify-end">
                    <Link to="/agendar" onClick={() => setIsProfileModalOpen(false)} className="bg-red-600 text-white px-5 py-2 rounded-full font-bold hover:bg-red-700 transition flex items-center gap-2 text-sm">
                      Agendar Consultoría
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========== HEADER ========== */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] max-w-5xl">
        <div className="glass rounded-full px-4 md:px-6 py-2 flex justify-between items-center border border-white/10">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setIsProfileModalOpen(true)}>
            <img 
              src="/images/logo-robert-teran.png" 
              alt="Robert Teran" 
              className="h-10 w-auto object-contain"
            />
            <div className="hidden sm:block">
              <p className="text-xs font-bold text-white leading-tight">ROBERT TERAN</p>
              <p className="text-[8px] text-gray-400 uppercase tracking-wider">Coach · Auditor · Developer</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <div className="flex gap-6 text-xs font-medium uppercase tracking-widest text-gray-400 items-center">
              <button onClick={() => setIsProfileModalOpen(true)} className={`transition ${activeSection === 'about' ? 'text-red-500' : 'hover:text-red-500'}`}>{t('nav.perfil')}</button>
              <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className={`transition ${activeSection === 'services' ? 'text-red-500' : 'hover:text-red-500'}`}>{t('nav.servicios')}</a>
              <a href="#procesos" onClick={(e) => handleNavClick(e, 'procesos')} className={`transition ${activeSection === 'procesos' ? 'text-red-500' : 'hover:text-red-500'}`}>{t('nav.procesos')}</a>
              <a href="#certifications" onClick={(e) => handleNavClick(e, 'certifications')} className={`transition ${activeSection === 'certifications' ? 'text-red-500' : 'hover:text-red-500'}`}>{t('nav.certificaciones')}</a>
            </div>
            
            <div className="w-px h-6 bg-white/20"></div>
            
            <div className="flex gap-1 text-sm font-semibold">
              <button onClick={() => changeLanguage('es')} className={`px-2 py-1 rounded-md transition ${i18n.language === 'es' ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}>ES</button>
              <button onClick={() => changeLanguage('en')} className={`px-2 py-1 rounded-md transition ${i18n.language === 'en' ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}>EN</button>
              <button onClick={() => changeLanguage('pt')} className={`px-2 py-1 rounded-md transition ${i18n.language === 'pt' ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}>PT</button>
              <button onClick={() => changeLanguage('it')} className={`px-2 py-1 rounded-md transition ${i18n.language === 'it' ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}>IT</button>
            </div>
            
            <Link to="/agendar" className="bg-white text-black px-4 py-1.5 rounded-full hover:bg-red-600 hover:text-white transition text-center text-xs font-medium uppercase tracking-widest">
              {t('nav.contacto')}
            </Link>
          </div>

          <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="absolute top-full left-0 w-full mt-4 glass rounded-3xl border border-white/10 p-4 flex flex-col gap-2 shadow-2xl md:hidden overflow-hidden"
            >
              <button onClick={() => { setIsProfileModalOpen(true); closeMenu(); }} className="text-sm font-bold uppercase tracking-widest px-4 py-3 rounded-xl transition text-gray-300 hover:text-white hover:bg-white/5">{t('nav.perfil')}</button>
              <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-sm font-bold uppercase tracking-widest px-4 py-3 rounded-xl transition text-gray-300 hover:text-white hover:bg-white/5">{t('nav.servicios')}</a>
              <a href="#procesos" onClick={(e) => handleNavClick(e, 'procesos')} className="text-sm font-bold uppercase tracking-widest px-4 py-3 rounded-xl transition text-gray-300 hover:text-white hover:bg-white/5">{t('nav.procesos')}</a>
              <a href="#certifications" onClick={(e) => handleNavClick(e, 'certifications')} className="text-sm font-bold uppercase tracking-widest px-4 py-3 rounded-xl transition text-gray-300 hover:text-white hover:bg-white/5">{t('nav.certificaciones')}</a>
              
              <div className="flex gap-2 justify-center py-3 mt-2 border-t border-white/10 pt-3">
                <button onClick={() => changeLanguage('es')} className={`px-3 py-1 rounded-md text-sm font-semibold ${i18n.language === 'es' ? 'bg-red-600 text-white' : 'text-gray-400 bg-white/5'}`}>ES</button>
                <button onClick={() => changeLanguage('en')} className={`px-3 py-1 rounded-md text-sm font-semibold ${i18n.language === 'en' ? 'bg-red-600 text-white' : 'text-gray-400 bg-white/5'}`}>EN</button>
                <button onClick={() => changeLanguage('pt')} className={`px-3 py-1 rounded-md text-sm font-semibold ${i18n.language === 'pt' ? 'bg-red-600 text-white' : 'text-gray-400 bg-white/5'}`}>PT</button>
                <button onClick={() => changeLanguage('it')} className={`px-3 py-1 rounded-md text-sm font-semibold ${i18n.language === 'it' ? 'bg-red-600 text-white' : 'text-gray-400 bg-white/5'}`}>IT</button>
              </div>
              
              <div className="h-px w-full bg-white/10 my-2"></div>
              <Link to="/agendar" onClick={closeMenu} className="bg-red-600 text-white px-4 py-4 rounded-xl hover:bg-red-700 transition text-center font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2">
                {t('footer.agendar')}
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ========== HERO SECTION ========== */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/conferencia1.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/80"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-xs font-bold mb-6 tracking-[0.2em] uppercase">
              {t('hero.badge')}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-none mb-8">
              {t('hero.title')} <br /> <span className="text-white/40">{t('hero.titleHighlight')}</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              {t('hero.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========== PERFIL Y TRAYECTORIA ========== */}
      <section id="about" className="py-24 relative z-10 bg-[#0a0a0a] border-t border-white/5">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="flex justify-center mb-8 cursor-pointer" onClick={() => setIsProfileModalOpen(true)}>
                <div className="relative group">
                  <div className="w-full max-w-md rounded-2xl overflow-hidden border-2 border-red-500/30 ring-2 ring-white/10 shadow-2xl transition-transform group-hover:scale-105 duration-300">
                    <img 
                      src="/images/conferencia2.jpg" 
                      alt="Robert Terán - Perfil Profesional"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-red-600 rounded-full p-3 border-2 border-black shadow-lg">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/70 backdrop-blur-sm rounded-lg p-2 text-center">
                      <p className="text-white text-xs font-semibold flex items-center justify-center gap-2">
                        <Users className="w-3 h-3 text-red-400" />
                        Conferencia Internacional - Gestión de Calidad
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                    <span className="text-white text-sm font-bold bg-red-600/80 px-4 py-2 rounded-full">Ver perfil completo →</span>
                  </div>
                </div>
              </div>
              
              <span className="inline-block px-4 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-xs font-bold mb-6 tracking-[0.2em] uppercase">
                {t('about.badge')}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">{t('about.title')}</h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-10">
                {data.about.bio.substring(0, 350)}...
              </p>
              
              <button 
                onClick={() => setIsBioModalOpen(true)}
                className="flex items-center gap-2 text-red-500 hover:text-red-400 transition font-semibold mb-6"
              >
                Ver biografía completa <ArrowRight className="w-4 h-4" />
              </button>
              
              <div className="flex flex-wrap gap-3">
                {data.about.badges.slice(0, 8).map((badge, idx) => {
                  const Icon = iconMap[badge.icon] || CheckCircle2;
                  return (
                    <div key={idx} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:border-red-500/50 transition-colors">
                      <Icon className="w-4 h-4 text-red-500" />
                      <span>{badge.label}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="space-y-6">
              {/* Estándar ISO clickeable */}
              <div 
                onClick={() => setIsCertificationsModalOpen(true)}
                className="cursor-pointer glass p-8 rounded-3xl border border-white/5 hover:border-red-500/30 transition-colors hover:bg-red-500/5"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-red-500 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Estándar ISO</h3>
                    <p className="text-gray-400 text-sm">Todas las certificaciones ISO disponibles</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">Haz clic para ver todas las certificaciones ISO existentes para auditoría y consultoría.</p>
                <div className="mt-3 text-xs text-red-500 flex items-center gap-1">
                  Ver todas las certificaciones <ArrowRight className="w-3 h-3" />
                </div>
              </div>
              
              {/* +30 Años clickeable */}
              <div 
                onClick={() => setIsBioModalOpen(true)}
                className="cursor-pointer glass p-8 rounded-3xl border border-white/5 hover:border-red-500/30 transition-colors hover:bg-red-500/5"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center shrink-0">
                    <Award className="text-red-500 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">+30 Años de Trayectoria</h3>
                    <p className="text-gray-400 text-sm">Experiencia y logros profesionales</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">Haz clic para conocer mi biografía completa, certificaciones y filosofía profesional.</p>
                <div className="mt-3 text-xs text-red-500 flex items-center gap-1">
                  Ver biografía completa <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SERVICES SECTION ========== */}
      <section id="services" className="py-24 relative z-10 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-xs font-bold mb-6 tracking-[0.2em] uppercase">
              {t('services.badge')}
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">{t('services.title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onClick={() => setSelectedService(data.services[0])}
              className="md:col-span-2 md:row-span-2 glass rounded-3xl p-8 bento-card flex flex-col justify-end relative overflow-hidden group cursor-pointer"
            >
              <ShieldCheck className="absolute top-8 right-8 w-16 h-16 text-red-600/20 group-hover:scale-110 group-hover:text-red-500/40 transition-all duration-500" />
              <h3 className="text-2xl font-bold mb-2 group-hover:text-red-400 transition-colors">{t('services.auditorTitle')}</h3>
              <p className="text-gray-400 text-sm max-w-md">{t('services.auditorDesc')}</p>
              <div className="mt-4 text-xs font-bold text-red-500 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                {t('services.details')} <ArrowRight className="w-3 h-3" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onClick={() => setSelectedService(data.services[1])}
              className="md:col-span-2 glass rounded-3xl p-8 bento-card flex items-center gap-6 group cursor-pointer"
            >
              <div className="w-16 h-16 bg-red-600/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-red-600/20 transition-colors">
                <Users className="text-red-500 w-8 h-8 group-hover:scale-110 transition-all duration-300" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold group-hover:text-red-400 transition-colors">{t('services.coachTitle')}</h3>
                <p className="text-gray-400 text-sm italic">{t('services.coachDesc')}</p>
              </div>
              <div className="hidden md:block text-xs font-bold text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md:col-span-1 glass rounded-3xl p-6 bento-card flex flex-col items-center justify-center text-center group"
            >
              <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-3 group-hover:bg-red-500/20 transition-colors">
                <Award className="w-6 h-6 text-red-500 group-hover:scale-110 transition-all duration-300" />
              </div>
              <p className="font-bold text-white">Estándar ISO</p>
              <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider">Calidad Total</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="md:col-span-1 glass rounded-3xl p-6 bento-card flex flex-col items-center justify-center text-center group cursor-pointer"
              onClick={() => setIsBioModalOpen(true)}
            >
              <span className="text-4xl font-black text-white group-hover:scale-110 group-hover:text-red-500 transition-all duration-300">{data.metrics.yearsExperience}</span>
              <span className="text-[10px] uppercase tracking-tighter text-gray-500 font-bold mt-1">{data.metrics.label}</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="md:col-span-2 glass rounded-3xl p-8 bento-card flex justify-between items-center group"
            >
              <div className="flex flex-col gap-2">
                <span className="text-xs text-gray-500 font-bold uppercase">{t('global.title')}</span>
                <div className="flex gap-3 text-sm font-semibold">
                  <span className="text-white">ES</span>
                  <span className="text-white">EN</span>
                  <span className="text-white">PT</span>
                  <span className="text-white">IT</span>
                </div>
              </div>
              <Globe className="text-gray-700 w-10 h-10 group-hover:scale-110 group-hover:text-red-500 transition-all duration-500" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== PROCESS MAPPING & STRUCTURING SECTION ========== */}
      <section id="procesos" className="py-24 relative z-10 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-xs font-bold mb-6 tracking-[0.2em] uppercase">
              Ingeniería Organizacional
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">{data.expertise.title}</h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg font-light leading-relaxed">
              {data.expertise.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.expertise.areas.map((area, idx) => {
              const IconComponent = 
                area.icon === 'Network' ? Network :
                area.icon === 'Workflow' ? Workflow :
                area.icon === 'FileCheck' ? FileCheck : Activity;
              
              const illustration = illustrations.find(ill => ill.title === area.title);

              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass p-8 rounded-3xl border border-white/5 hover:border-red-500/30 transition-colors group cursor-pointer"
                  onClick={() => illustration && setSelectedIllustration(illustration)}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center shrink-0 group-hover:bg-red-600/20 transition-colors">
                      <IconComponent className="text-red-500 w-6 h-6 group-hover:scale-110 transition-all duration-300" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{area.title}</h3>
                  </div>
                  <ul className="space-y-4">
                    {area.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400">
                        <CheckCircle2 className="w-5 h-5 text-red-500/70 shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <ImageIcon className="w-3 h-3" />
                      Ilustración técnica
                    </span>
                    <span className="text-xs text-red-500 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      Ver ilustración <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== CERTIFICATIONS SECTION ========== */}
      <section id="certifications" className="py-24 relative z-10 bg-[#0a0a0a] border-t border-white/5">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-xs font-bold mb-6 tracking-[0.2em] uppercase">
              {t('certifications.badge')}
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">{t('certifications.title')}</h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg font-light leading-relaxed">
              {t('certifications.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.certifications && data.certifications.slice(0, 6).map((cert, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="glass p-8 rounded-3xl border border-white/5 hover:border-red-500/30 transition-colors group cursor-pointer"
                onClick={() => setIsCertificationsModalOpen(true)}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600/20 to-red-800/10 flex items-center justify-center shrink-0 border border-red-500/20 group-hover:border-red-500/50 transition-all">
                      <span className="text-2xl font-black text-red-500 group-hover:scale-110 transition-transform">
                        {cert.title ? cert.title.charAt(0) : 'ISO'}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors">{cert.title || 'Certificación'}</h3>
                      <span className="text-xs font-bold text-red-500 uppercase tracking-widest mt-1 block">{cert.subtitle || 'Certificación ISO'}</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-red-500/10 transition-colors">
                    <Award className="text-gray-400 group-hover:text-red-500 transition-colors w-5 h-5" />
                  </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed font-light">{cert.description || 'Certificación profesional en sistemas de gestión.'}</p>
                <div className="mt-3 text-xs text-red-500 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  Ver todas las certificaciones <ArrowRight className="w-3 h-3" />
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button 
              onClick={() => setIsCertificationsModalOpen(true)}
              className="text-red-500 hover:text-red-400 transition font-semibold flex items-center gap-2 mx-auto"
            >
              Ver todas las certificaciones ISO disponibles
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS SECTION ========== */}
      <section id="testimonials" className="py-24 relative z-10 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-xs font-bold mb-6 tracking-[0.2em] uppercase">
              {t('testimonials.badge')}
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">{t('testimonials.title')}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.testimonials && data.testimonials.map((testimonial, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setSelectedTestimonial(testimonial)}
                className="glass p-8 rounded-3xl border border-white/5 hover:border-red-500/30 transition-colors flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <Quote className="w-8 h-8 text-red-500/50 mb-6 group-hover:text-red-500 transition-colors" />
                  <p className="text-gray-300 leading-relaxed font-light italic mb-8 group-hover:text-white transition-colors">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600/30 to-red-800/20 flex items-center justify-center ring-2 ring-red-500/20 group-hover:ring-red-500/50 transition-all">
                      <span className="text-lg font-bold text-red-400">
                        {testimonial.name ? testimonial.name.charAt(0) : 'C'}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold">{testimonial.name || 'Cliente'}</h4>
                      <p className="text-sm text-red-400">{testimonial.title || 'Ejecutivo'}</p>
                    </div>
                  </div>
                  <div className="text-xs font-bold text-red-500 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    {t('testimonials.viewCase')} <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer id="contact" className="py-12 border-t border-white/5 mt-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-left">
            <p className="text-sm text-gray-500 font-mono tracking-tighter">coach-iso.eu // {data.profile.name}</p>
          </div>
          <div className="flex gap-4">
            <a href={data.profile.linkedin} className="p-4 glass rounded-full hover:bg-white hover:text-black transition">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={`mailto:${data.profile.email}`} className="p-4 glass rounded-full hover:bg-red-600 hover:text-white transition">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>

      {/* ========== MODALS DE SERVICIOS Y TESTIMONIOS ========== */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative rounded-2xl overflow-hidden min-h-[300px]">
                  <img 
                    src="/images/conferencia2.jpg" 
                    alt={selectedService.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/70 backdrop-blur-md rounded-xl p-3 border border-red-500/30">
                      <div className="flex items-center gap-2 mb-1">
                        <ShieldCheck className="w-4 h-4 text-red-500" />
                        <span className="text-white text-xs font-bold uppercase tracking-wider">{selectedService.id === 'iso' ? 'Auditor Líder ISO' : 'IBM 2025 Coach'}</span>
                      </div>
                      <p className="text-gray-300 text-xs">+30 años de experiencia</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-red-600/10 rounded-2xl flex items-center justify-center shrink-0">
                      {selectedService.id === 'iso' ? 
                        <ShieldCheck className="text-red-500 w-7 h-7" /> : 
                        <Users className="text-red-500 w-7 h-7" />
                      }
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">{selectedService.title}</h3>
                      <p className="text-red-400 text-sm font-medium mt-1">{selectedService.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                      {selectedService.detailedDescription}
                    </p>
                    
                    <div className="bg-red-600/10 border border-red-500/20 rounded-xl p-4">
                      <p className="text-gray-200 text-sm leading-relaxed">
                        <span className="text-red-400 font-bold">{selectedService.id === 'iso' ? '🏆 +50 certificaciones exitosas' : '🏆 +200 ejecutivos formados'}</span><br />
                        {selectedService.id === 'iso' ?
                          "He liderado con éxito procesos de certificación en industrias que van desde la manufactura hasta los servicios tecnológicos." :
                          "He acompañado a líderes de más de 15 países en su transformación personal y profesional."
                        }
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4">
                      <span className="text-xs bg-white/5 border border-white/10 rounded-full px-3 py-1 text-gray-400">ISO 9001:2015</span>
                      <span className="text-xs bg-white/5 border border-white/10 rounded-full px-3 py-1 text-gray-400">ISO 14001:2015</span>
                      <span className="text-xs bg-white/5 border border-white/10 rounded-full px-3 py-1 text-gray-400">Lean Manufacturing</span>
                      <span className="text-xs bg-white/5 border border-white/10 rounded-full px-3 py-1 text-gray-400">Six Sigma</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-end">
                    <Link to="/agendar" className="bg-red-600 text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition flex items-center gap-2">
                      Agendar Consultoría
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {selectedTestimonial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedTestimonial(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              <button 
                onClick={() => setSelectedTestimonial(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-600/30 to-red-800/20 flex items-center justify-center ring-2 ring-red-500/20">
                  <span className="text-2xl font-bold text-red-400">
                    {selectedTestimonial.name ? selectedTestimonial.name.charAt(0) : 'C'}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedTestimonial.name}</h3>
                  <p className="text-red-400 font-medium">{selectedTestimonial.title}</p>
                </div>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 relative">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-white/5" />
                <p className="text-gray-300 italic text-lg leading-relaxed relative z-10">
                  "{selectedTestimonial.quote}"
                </p>
              </div>

              {selectedTestimonial.caseStudy && (
                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-red-500" />
                    Caso de Éxito
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    {selectedTestimonial.caseStudy}
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <ChatWidget />
    </div>
  );
}

export default App;
