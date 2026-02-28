"use client";

import React from 'react';
import { motion, easeOut } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Syntax fix: Removed ": React.FC"
const HeroSection = () => { 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="https://img1.wsimg.com/isteam/stock/826/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:2046,m" 
        alt="Pratima Security Guards"
        fill // Next.js 13+ mein layout="fill" ki jagah sirf fill use hota hai
        className="object-cover z-0"
        quality={90}
        priority 
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />

      <motion.div 
        className="relative z-20 text-center max-w-4xl px-6 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6 drop-shadow-lg"
          variants={itemVariants}
        >
          <span className="text-blue-400">Securing Your Future</span> <br /> With Unwavering Vigilance
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-gray-200 font-medium mb-10 max-w-2xl mx-auto drop-shadow-md"
          variants={itemVariants}
        >
          Pratima Security Services provides elite protection and advanced facility management solutions tailored to your unique needs.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-5 justify-center"
          variants={itemVariants}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/contact" className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1">
              Get a Free Quote
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/services" className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-blue-100 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full shadow-lg hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
              Our Services
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;