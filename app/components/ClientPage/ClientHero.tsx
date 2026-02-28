"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, ShieldCheck, Globe, Star } from 'lucide-react';

const ClientHero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-20">
      {/* Dynamic Gradient Background (Vibrant Blue Tones) */}
      <div className="absolute inset-0 bg-[#05070a]" /> 
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#1e3a8a_0%,_transparent_50%)] opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#2563eb_0%,_transparent_50%)] opacity-20" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 text-center">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8"
        >
          <Star size={14} className="text-blue-400 fill-blue-400" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-300">
            Trusted by 100+ Corporates
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-8xl font-[1000] text-white leading-none uppercase tracking-tighter mb-8"
        >
          Powering <br />
          <span className="text-blue-500 italic">Industry Leaders.</span>
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg md:text-xl font-medium max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          We don't just provide services; we build operational foundations. From SMEs to industry giants, our clients rely on us for zero-error compliance and agile staffing solutions.
        </motion.p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mt-20 border-t border-white/5 pt-12">
          {[
            { label: "Active Clients", value: "45+", icon: <Handshake size={20} /> },
            { label: "Compliance Rate", value: "100%", icon: <ShieldCheck size={20} /> },
            { label: "States Covered", value: "4+", icon: <Globe size={20} /> },
            { label: "Retention Rate", value: "98%", icon: <Star size={20} /> },
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="text-blue-500 mb-3 opacity-80">{stat.icon}</div>
              <h4 className="text-3xl md:text-4xl font-black text-white tracking-tighter">{stat.value}</h4>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Decorative Glow Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

export default ClientHero;