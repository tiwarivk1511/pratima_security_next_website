"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  ArrowRight, 
  Users, 
  UserPlus,
  Scale,
  FileCheck2,
  CheckCircle
} from 'lucide-react';

const StaffingPayrollHero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services-grid');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#0a0a0a] overflow-hidden pt-20">
      
      {/* Background Corporate Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* LEFT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 mb-8">
            <ShieldCheck size={14} className="text-blue-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-300">
              ISO 9001:2015 Certified Solutions
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-[1000] text-white leading-[0.95] uppercase tracking-tighter mb-8">
            Statutory <br />
            <span className="text-blue-500 italic">Excellence.</span> <br />
            Staffing Power.
          </h1>

          <p className="text-lg text-slate-400 font-medium leading-relaxed max-w-lg mb-10">
            Expert management of <b>ESI & PF Compliance</b>, <b>Bulk Recruitment</b>, and <b>Temp-to-Hire</b> models. We mitigate your legal risks while providing the manpower you need to scale.
          </p>

          <div className="flex flex-wrap gap-5">
            <button 
              onClick={scrollToServices}
              className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-white hover:text-blue-600 transition-all shadow-[0_20px_40px_rgba(37,99,235,0.2)] flex items-center gap-3 group active:scale-95"
            >
              Our Expertise
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-transparent text-white border-2 border-slate-800 px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:border-blue-500 transition-all"
            onClick={() => window.location.href = '/contact'}>
              Consult our Experts
            </button>
          </div>

          {/* Quick Service Badges */}
          <div className="mt-12 flex flex-wrap gap-4">
            {["ESI & PF", "Bulk Hiring", "Statutory Audit", "Payroll"].map((tag) => (
              <div key={tag} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                <CheckCircle size={12} className="text-blue-500" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{tag}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT VISUAL - Service Focus */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Main Visual Box */}
          <div className="relative z-20 rounded-[3rem] overflow-hidden shadow-2xl border-[10px] border-slate-800/50 bg-slate-900 aspect-square flex items-center justify-center group">
             {/* Center Iconography */}
             <div className="relative z-10 flex flex-col items-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-blue-600 blur-3xl opacity-20 animate-pulse" />
                  <Users size={80} className="text-white relative z-10" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-widest">Scaling Teams</h3>
                <p className="text-blue-500 font-bold text-sm tracking-[0.2em] uppercase mt-2">Precision Staffing</p>
             </div>
             
             {/* Subtle Decorative Scale Icon in BG */}
             <Scale size={200} className="absolute opacity-[0.03] text-white -bottom-10 -right-10 rotate-12" />
          </div>

          {/* Floating Service Cards - Specific to your business */}
          
          {/* Card 1: Statutory Compliance */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-8 -left-4 md:-left-12 z-30 bg-white p-5 rounded-[2rem] shadow-2xl flex items-center gap-4"
          >
            <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
              <FileCheck2 size={20} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">ESI & PF</p>
              <h5 className="text-base font-black text-slate-900 leading-none tracking-tight">100% Statutory</h5>
            </div>
          </motion.div>

          {/* Card 2: Bulk Recruitment */}
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-8 -right-4 md:-right-8 z-30 bg-blue-600 p-6 rounded-[2rem] shadow-2xl flex items-center gap-4"
          >
            <div className="h-10 w-10 rounded-xl bg-white/20 flex items-center justify-center text-white">
              <UserPlus size={20} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-blue-100 uppercase tracking-widest leading-none mb-1">Recruitment</p>
              <h5 className="text-base font-black text-white leading-none tracking-tight">Bulk & Temp-Hire</h5>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default StaffingPayrollHero;