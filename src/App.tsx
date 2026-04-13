{/* CERTIFICATIONS SECTION */}
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
      {data.certifications.map((cert, idx) => (
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
              {/* IMAGEN MEJORADA: Icono de certificación profesional */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600/20 to-red-800/10 flex items-center justify-center shrink-0 border border-red-500/20 group-hover:border-red-500/50 transition-all">
                <span className="text-2xl font-black text-red-500 group-hover:scale-110 transition-transform">
                  {cert.title.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors">{cert.title}</h3>
                <span className="text-xs font-bold text-red-500 uppercase tracking-widest mt-1 block">{cert.subtitle}</span>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-red-500/10 transition-colors">
              <Award className="text-gray-400 group-hover:text-red-500 transition-colors w-5 h-5" />
            </div>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed font-light">{cert.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
