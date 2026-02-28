"use client";
import React from 'react';
import { motion } from 'framer-motion';

// Sample Data: Aap yahan apne real logos aur names add kar sakte hain
const CLIENTS = [
  { name: "Reliance Ind.", logo: "https://cdn-icons-png.flaticon.com/512/281/281764.png" }, // Placeholder
  { name: "Tata Motors", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968263.png" },
  { name: "Adani Group", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968263.png" },
  { name: "Future Retail", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968263.png" },
  { name: "Govt. of India", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968263.png" },
  { name: "Jindal Steel", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968263.png" },
];

const ClientMarquee = () => {
  // Array ko double karte hain taaki seamless loop bane
  const duplicatedClients = [...CLIENTS, ...CLIENTS];

  return (
    <section className="py-20 bg-[#05070a] overflow-hidden relative">
      {/* Side Fades: Logos ko edge par smooth fade karne ke liye */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#05070a] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#05070a] to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h4 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] text-center">
          Trusted by Industry Giants
        </h4>
      </div>

      {/* Marquee Container */}
      <div className="flex overflow-hidden group">
        <motion.div 
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 25, 
            repeat: Infinity 
          }}
        >
          {duplicatedClients.map((client, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-5 px-8 py-5 rounded-3xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-blue-500/30 transition-all duration-500 group/item cursor-pointer"
            >
              {/* Logo Circle */}
              <div className="h-12 w-12 rounded-full bg-white/5 p-2 flex items-center justify-center grayscale group-hover/item:grayscale-0 transition-all">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Client Name */}
              <span className="text-xl font-black text-slate-400 group-hover/item:text-white uppercase tracking-tighter transition-colors">
                {client.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
};

export default ClientMarquee;