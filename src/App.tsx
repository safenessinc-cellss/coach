<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] max-w-4xl">
  <div className="glass rounded-full px-4 md:px-6 py-3 flex justify-between items-center border border-white/10">
    {/* LOGO CORPORATIVO */}
    <div className="flex items-center gap-3">
      <img 
        src="/images/logo-robert-teran.png" 
        alt="Robert Teran - Coach Empresarial" 
        className="w-12 h-12 object-contain rounded-lg"
      />
      <div className="hidden sm:block">
        <p className="text-xs font-bold text-white leading-tight">ROBERT TERAN</p>
        <p className="text-[8px] text-gray-400 uppercase tracking-wider">Coach · Auditor · Developer</p>
      </div>
    </div>
    
    {/* Resto del menú (no cambia) */}
    <div className="hidden md:flex gap-6 text-xs font-medium uppercase tracking-widest text-gray-400 items-center">
      <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className={`transition ${activeSection === 'about' ? 'text-red-500' : 'hover:text-red-500'}`}>Perfil</a>
      <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className={`transition ${activeSection === 'services' ? 'text-red-500' : 'hover:text-red-500'}`}>Servicios</a>
      <a href="#procesos" onClick={(e) => handleNavClick(e, 'procesos')} className={`transition ${activeSection === 'procesos' ? 'text-red-500' : 'hover:text-red-500'}`}>Procesos</a>
      <a href="#certifications" onClick={(e) => handleNavClick(e, 'certifications')} className={`transition ${activeSection === 'certifications' ? 'text-red-500' : 'hover:text-red-500'}`}>Certificaciones</a>
      <Link to="/agendar" className="bg-white text-black px-4 py-1.5 rounded-full hover:bg-red-600 hover:text-white transition text-center">
        Contacto
      </Link>
    </div>

    <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
      {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  </div>
  {/* Mobile menu... (se mantiene igual) */}
</nav>
  import { useState, useEffect } from 'react';
import { ShieldCheck, Users, Globe, Linkedin, Mail, Award, Network, Workflow, FileCheck, Activity, CheckCircle2, Menu, X, Brain, BarChart3, ShieldAlert, LineChart, Rocket, ClipboardCheck, Briefcase, Map, Quote, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import data from './data.json';
import ChatWidget from './components/ChatWidget';

const iconMap: Record<string, any> = {
  ShieldCheck, Network, Workflow, Brain, BarChart3, ShieldAlert, LineChart, Rocket, Award, ClipboardCheck, Map
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null);

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

      {/* NAV ULTRA-MINIMALISTA */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] max-w-4xl">
        <div className="glass rounded-full px-4 md:px-6 py-3 flex justify-between items-center border border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center font-black text-white italic shrink-0">
              {data.profile.initials}
            </div>
            <span className="font-semibold tracking-tighter hidden sm:block uppercase">
              {data.profile.name}
            </span>
          </div>
          
          <div className="hidden md:flex gap-6 text-xs font-medium uppercase tracking-widest text-gray-400 items-center">
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className={`transition ${activeSection === 'about' ? 'text-red-500' : 'hover:text-red-500'}`}>Perfil</a>
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className={`transition ${activeSection === 'services' ? 'text-red-500' : 'hover:text-red-500'}`}>Servicios</a>
            <a href="#procesos" onClick={(e) => handleNavClick(e, 'procesos')} className={`transition ${activeSection === 'procesos' ? 'text-red-500' : 'hover:text-red-500'}`}>Procesos</a>
            <a href="#certifications" onClick={(e) => handleNavClick(e, 'certifications')} className={`transition ${activeSection === 'certifications' ? 'text-red-500' : 'hover:text-red-500'}`}>Certificaciones</a>
            <Link to="/agendar" className="bg-white text-black px-4 py-1.5 rounded-full hover:bg-red-600 hover:text-white transition text-center">
              Contacto
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
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className={`text-sm font-bold uppercase tracking-widest px-4 py-3 rounded-xl transition ${activeSection === 'about' ? 'text-white bg-white/10' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>Perfil</a>
              <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className={`text-sm font-bold uppercase tracking-widest px-4 py-3 rounded-xl transition ${activeSection === 'services' ? 'text-white bg-white/10' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>Servicios</a>
              <a href="#procesos" onClick={(e) => handleNavClick(e, 'procesos')} className={`text-sm font-bold uppercase tracking-widest px-4 py-3 rounded-xl transition ${activeSection === 'procesos' ? 'text-white bg-white/10' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>Procesos</a>
              <a href="#certifications" onClick={(e) => handleNavClick(e, 'certifications')} className={`text-sm font-bold uppercase tracking-widest px-4 py-3 rounded-xl transition ${activeSection === 'certifications' ? 'text-white bg-white/10' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>Certificaciones</a>
              <div className="h-px w-full bg-white/10 my-2"></div>
              <Link to="/agendar" onClick={closeMenu} className="bg-red-600 text-white px-4 py-4 rounded-xl hover:bg-red-700 transition text-center font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2">
                Agendar Consulta
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-red-900/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-xs font-bold mb-6 tracking-[0.2em] uppercase">
              Soluciones de Ingeniería & Liderazgo
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-none mb-8">
              La Calidad es <br /> <span className="text-white/40">Innegociable.</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              {data.profile.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* PERFIL Y TRAYECTORIA */}
      <section id="about" className="py-24 relative z-10 bg-[#0a0a0a] border-t border-white/5">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="inline-block px-4 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-xs font-bold mb-6 tracking-[0.2em] uppercase">
                Perfil Profesional
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">Más de 30 años de Excelencia</h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-10">
                {data.about.bio}
              </p>
              
              <div className="flex flex-wrap gap-3">
                {data.about.badges.map((badge, idx) => {
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
              {data.about.career.map((block, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="glass p-8 rounded-3xl border border-white/5 hover:border-red-500/30 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-red-600/10 flex items-center justify-center shrink-0">
                      <Briefcase className="text-red-500 w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{block.area}</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">{block.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {block.roles.map((role, i) => (
                      <span key={i} className="text-xs font-mono text-red-400 bg-red-400/10 px-3 py-1.5 rounded-lg border border-red-500/20">
                        {role}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 relative z-10 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-xs font-bold mb-6 tracking-[0.2em] uppercase">
              Mis Servicios
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Ecosistema de Soluciones</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onClick={() => setSelectedService(data.services[0])}
              className="md:col-span-2 md:row-span-2 glass rounded-3xl p-8 bento-card flex flex-col justify-end relative overflow-hidden group cursor-pointer"
            >
              <ShieldCheck className="absolute top-8 right-8 w-16 h-16 text-red-600/20 group-hover:scale-110 group-hover:text-red-500/40 group-hover:drop-shadow-[0_0_15px_rgba(239,68,68,0.8)] transition-all duration-500" />
              <h3 className="text-2xl font-bold mb-2 group-hover:text-red-400 transition-colors">{data.services[0].title}</h3>
              <p className="text-gray-400 text-sm max-w-md">{data.services[0].description}</p>
              <div className="mt-4 text-xs font-bold text-red-500 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                Ver detalles <ArrowRight className="w-3 h-3" />
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
                <Users className="text-red-500 w-8 h-8 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(239,68,68,0.8)] transition-all duration-300" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold group-hover:text-red-400 transition-colors">{data.services[1].title}</h3>
                <p className="text-gray-400 text-sm italic">{data.services[1].description}</p>
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
                <Award className="w-6 h-6 text-red-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(239,68,68,0.8)] transition-all duration-300" />
              </div>
              <p className="font-bold text-white">Estándar ISO</p>
              <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider">Calidad Total</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="md:col-span-1 glass rounded-3xl p-6 bento-card flex flex-col items-center justify-center text-center group"
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
                <span className="text-xs text-gray-500 font-bold uppercase">Global Reach</span>
                <div className="flex gap-3 text-sm font-semibold">
                  {data.languages.map((lang) => (
                    <span key={lang.code} className={lang.active ? "text-white" : "text-white/20"}>
                      {lang.code}
                    </span>
                  ))}
                </div>
              </div>
              <Globe className="text-gray-700 w-10 h-10 group-hover:scale-110 group-hover:text-red-500 group-hover:drop-shadow-[0_0_15px_rgba(239,68,68,0.5)] transition-all duration-500" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESS MAPPING & STRUCTURING SECTION */}
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

              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass p-8 rounded-3xl border border-white/5 hover:border-red-500/30 transition-colors group"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center shrink-0 group-hover:bg-red-600/20 transition-colors">
                      <IconComponent className="text-red-500 w-6 h-6 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(239,68,68,0.8)] transition-all duration-300" />
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
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS SECTION - VERSIÓN CORREGIDA */}
      <section id="certifications" className="py-24 relative z-10 bg-[#0a0a0a] border-t border-white/5">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-xs font-bold mb-6 tracking-[0.2em] uppercase">
              El Estándar de Oro
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">{data.certificationsInfo.title}</h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg font-light leading-relaxed">
              {data.certificationsInfo.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.certifications && data.certifications.map((cert, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="glass p-8 rounded-3xl border border-white/5 hover:border-red-500/30 transition-colors group"
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-24 relative z-10 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-xs font-bold mb-6 tracking-[0.2em] uppercase">
              Casos de Éxito
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Lo que dicen nuestros clientes</h2>
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
                    Ver caso <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER / CONTACTO */}
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

      {/* MODALS */}
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
              className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-red-600/10 rounded-2xl flex items-center justify-center shrink-0">
                  {selectedService.id === 'iso' ? <ShieldCheck className="text-red-500 w-8 h-8" /> : <Users className="text-red-500 w-8 h-8" />}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">{selectedService.title}</h3>
                  <p className="text-red-400 font-medium mt-1">{selectedService.description}</p>
                </div>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed text-lg">
                  {selectedService.detailedDescription}
                </p>
              </div>
              
              <div className="mt-10 flex justify-end">
                <Link 
                  to="/agendar" 
                  className="bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition"
                >
                  Agendar Consulta
                </Link>
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

// ✅ EXPORTACIÓN DEFAULT (¡ESTA LÍNEA ES LA QUE FALTABA!)
export default App;
