"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react'; // Placeholder icon (logos ki jagah use karne ke liye)

const ClientSlider = () => {
  const clients = [
    { name: "HDFC Bank", logo: "H" },
    { name: "Samsung", logo: "S" },
    { name: "Apollo Tyres", logo: "A" },
    { name: "Max Health", logo: "M" },
    { name: "DLF Cyber", logo: "D" },
    { name: "IndiGo", logo: "I" },
    { name: "Religare", logo: "R" },
    { name: "Fortis", logo: "F" },
    { name: "Hero Moto", logo: "H" },
    { name: "Coca-Cola", logo: "C" },
    { name: "Wipro", logo: "W" },
    { name: "Lenskart", logo: "L" }
  ];

  const marqueeVariants = {
    animate: {
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section className="py-24 bg-[#0a0a0b] overflow-hidden relative border-y border-slate-800">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 mb-16 relative z-10 text-center">
        <h2 className="text-blue-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-4">Elite Partnership</h2>
        <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          Trusted by <span className="text-blue-600">Industry Leaders</span>
        </h3>
      </div>

      {/* Infinite Slider */}
      <div className="relative flex items-center">
        {/* Fading Gradients */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-72 bg-gradient-to-r from-[#0a0a0b] via-[#0a0a0b]/80 to-transparent z-20"></div>
        <div className="absolute inset-y-0 right-0 w-32 md:w-72 bg-gradient-to-l from-[#0a0a0b] via-[#0a0a0b]/80 to-transparent z-20"></div>

        <motion.div 
          className="flex whitespace-nowrap gap-6"
          variants={marqueeVariants}
          animate="animate"
        >
          {[...clients, ...clients].map((client, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center justify-center min-w-[160px] md:min-w-[220px] p-8 bg-slate-900/30 backdrop-blur-xl border border-slate-800 rounded-[2.5rem] hover:border-blue-500/50 hover:bg-slate-900/60 transition-all duration-500"
            >
              {/* Logo Container */}
              <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-800 rounded-2xl mb-6 flex items-center justify-center border border-slate-700 group-hover:border-blue-500/50 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner">
                {/* Yahan aap <img> tag use kar sakte hain: <img src={client.logoPath} alt={client.name} /> */}
                <span className="text-2xl md:text-3xl font-black text-blue-600">
                  {client.logo}
                </span>
              </div>
              
              {/* Client Name */}
              <span className="text-sm md:text-base font-bold text-slate-400 group-hover:text-white transition-colors tracking-wide uppercase">
                {client.name}
              </span>
              
              {/* Subtle Indicator Line */}
              <div className="w-0 group-hover:w-8 h-[2px] bg-blue-600 mt-2 transition-all duration-500"></div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-16 text-center opacity-40">
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-slate-800 rounded-full bg-slate-900/50">
          <ShieldCheck className="w-4 h-4 text-blue-500" />
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Certified Security Partners</span>
        </div>
      </div>
    </section>
  );
};

export default ClientSlider;