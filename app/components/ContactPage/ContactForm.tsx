"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Send, ShieldCheck, ArrowRight } from 'lucide-react';

const ContactForm = () => {
  return (
    <section id="form" className="relative py-24 bg-[#020203] px-6 overflow-hidden">
      
      {/* Background Decor (Matching Hero) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Left: Form Header */}
          <div className="lg:col-span-5">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-8"
            >
              Request <br /> 
              <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}>Intelligence.</span>
            </motion.h2>
            <p className="text-slate-500 text-lg max-w-sm mb-12">
              Fill out the operational brief below. Our tactical team will analyze your requirements and respond within 15 minutes.
            </p>
            
            {/* Trust Badges */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-white/40 group cursor-default">
                <div className="p-2 border border-white/10 rounded-lg group-hover:border-blue-500 transition-colors">
                  <ShieldCheck size={20} className="text-blue-500" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest">End-to-End Encrypted</span>
              </div>
            </div>
          </div>

          {/* Right: The Actual Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 bg-white/[0.02] border border-white/10 backdrop-blur-3xl p-8 md:p-12 rounded-[2rem]"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Name Field */}
                <div className="relative group">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2 block ml-1">Personnel Name</label>
                  <input 
                    type="text" 
                    placeholder="E.g. John Doe"
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-white/10"
                  />
                </div>
                
                {/* Email Field */}
                <div className="relative group">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2 block ml-1">Comms Email</label>
                  <input 
                    type="email" 
                    placeholder="john@enterprise.com"
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-white/10"
                  />
                </div>
              </div>

              {/* Subject / Service Selection */}
              <div className="relative group">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2 block ml-1">Mission Type</label>
                <select className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-blue-500 transition-all appearance-none cursor-pointer">
                  <option className="bg-[#020203]">Elite Manned Guarding</option>
                  <option className="bg-[#020203]">Corporate Intelligence</option>
                  <option className="bg-[#020203]">Asset Protection</option>
                  <option className="bg-[#020203]">Cyber Defense</option>
                </select>
              </div>

              {/* Message Field */}
              <div className="relative group">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2 block ml-1">Operational Details</label>
                <textarea 
                  rows={20} 
                  placeholder="Describe your security challenge..."
                  className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-blue-500 transition-all resize-none placeholder:text-white/10"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button className="relative w-full group overflow-hidden bg-blue-600 px-8 py-6 rounded-xl transition-all active:scale-95">
                <div className="absolute inset-0 bg-white/20 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300" />
                <div className="relative flex items-center justify-center gap-4">
                  <span className="text-white font-black uppercase tracking-[0.3em] text-xs">Deploy Request</span>
                  <Send size={16} className="text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;