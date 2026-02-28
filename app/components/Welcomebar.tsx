"use client";

import React from "react";
import { motion } from "framer-motion";

const WelcomeBar: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-[#0a0a0a]">
      {/* Ultra-thin line for a premium feel */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      
      {/* Subtle Moving Background using Framer Motion instead of CSS keyframes */}
      <motion.div 
        animate={{ 
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-40 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-[length:200%_200%]"
      />

      <div className="relative z-10 py-1.5 px-4 flex justify-center items-center">
        <motion.p 
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[10px] md:text-[11px] font-bold tracking-[0.25em] text-white/90 uppercase flex items-center gap-3"
        >
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
          <span>Welcome to <span className="text-white font-black">Pratima Security Services</span></span>
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
        </motion.p>
      </div>
    </div>
  );
};

export default WelcomeBar;