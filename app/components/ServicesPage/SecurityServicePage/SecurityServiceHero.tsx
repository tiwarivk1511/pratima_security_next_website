"use client";
import React from 'react';
import Link from 'next/link';
import { motion, cubicBezier } from 'framer-motion';
import { ShieldCheck, Target, Zap, ChevronDown, Star, ArrowRight } from 'lucide-react';

const SecurityHero = () => {
  const springTransition = { type: "spring", stiffness: 100, damping: 20 };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: cubicBezier(0.16, 1, 0.3, 1) } },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[#020617] px-6 lg:px-12 overflow-hidden">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        {/* Main Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://i.pinimg.com/originals/ed/c1/06/edc1061d14fac6a553e5e1270e03d8b7.jpg')`, // Professional Security/Building Image
          }}
        >
          {/* Gradient Overlays for Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/95 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/50" />
        </div>

        {/* Animated Blue Glows */}
        <motion.div 
          animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600 rounded-full blur-[150px] pointer-events-none opacity-20"
        />
      </div>

      {/* --- CONTENT --- */}
      <div className="max-w-[1400px] mx-auto w-full relative z-10 pt-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: CONTENT */}
          <motion.div
            className="lg:col-span-7"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Tagline */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-blue-500/30 bg-blue-500/10 mb-8">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-blue-400 font-black uppercase tracking-widest text-[10px]">Next-Gen Security Intelligence</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={itemVariants} className="text-[10vw] md:text-[6vw] lg:text-[5.5vw] font-[1000] text-white leading-[0.9] tracking-tighter uppercase">
              Elite <span className="text-blue-500">Protection</span> <br /> 
              For Your <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}>Assets.</span>
            </motion.h1>

            {/* Description */}
            <motion.p variants={itemVariants} className="mt-8 text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed font-medium">
              We deploy <span className="text-white">command-grade</span> security professionals and AI-driven monitoring to ensure your peace of mind 24/7.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="mt-12 flex flex-wrap gap-5">
              <Link href="/contact" className="no-underline">
                <button className="group relative bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl font-black uppercase text-xs tracking-widest transition-all shadow-[0_20px_40px_rgba(37,99,235,0.3)] flex items-center gap-3 active:scale-95">
                  Consult Our Experts
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              
              <Link href="#security-services" className="no-underline">
              <button className="px-10 py-5 rounded-xl font-black uppercase text-xs tracking-widest border border-white/10 text-white hover:bg-white/5 transition-all">
                View Solutions
              </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT: FEATURE CARD (Glassmorphism) */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <div className="relative p-1 bg-gradient-to-b from-blue-500/20 to-transparent rounded-[2.5rem]">
              <div className="bg-[#020617]/80 backdrop-blur-3xl p-10 rounded-[2.4rem] border border-white/5 shadow-2xl">
                <div className="space-y-8">
                  {[
                    { icon: <ShieldCheck className="text-blue-400" size={30}/>, title: "PSARA Certified", desc: "Fully compliant with national security regulations." },
                    { icon: <Target className="text-blue-400" size={30}/>, title: "Rapid Response", desc: "Neural-link dispatch for under 5-min intervention." },
                    { icon: <Zap className="text-blue-400" size={30}/>, title: "Tech-Enabled", desc: "Real-time GPS tracking and digital reporting." }
                  ].map((item, i) => (
                    <motion.div key={i} className="flex gap-5 items-start group" whileHover={{ x: 10 }}>
                      <div className="p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                        <p className="text-slate-500 text-sm leading-snug">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom Trust Row */}
                <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <div className="flex gap-1 mb-1">
                      {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-blue-500 text-blue-500" />)}
                    </div>
                    <p className="text-white font-black text-xs tracking-tighter">TRUSTED BY 35+ CORPORATES</p>
                  </div>
                  <div className="text-right">
                    <p className="text-blue-400 font-black text-xl">ISO</p>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">9001:2015</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent" />
        <span className="text-[10px] text-blue-500 font-bold uppercase tracking-[0.4em]">Scroll</span>
      </motion.div>

    </section>
  );
};

export default SecurityHero;


// "use client";
// import React from 'react';
// import { motion, cubicBezier } from 'framer-motion';
// import { ShieldCheck, Target, Zap, ChevronDown, Star } from 'lucide-react';

// const SecurityHero = () => {
//   // Animation variants for staggered children
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: cubicBezier(0.16, 1, 0.3, 1) } },
//   };

//   return (
//     <section className="relative min-h-screen flex flex-col justify-center bg-[#020203] px-6 lg:px-12 overflow-hidden selection:bg-emerald-500/20 selection:text-emerald-300">
      
//       {/* --- CINEMATIC BACKGROUND ELEMENTS --- */}
//       <div className="absolute inset-0 z-0">
//         {/* Base Radial Gradient */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#0a1510_0%,#020203_100%)]" />
        
//         {/* Abstract Data Lines / Tech Grid */}
//         <div 
//           className="absolute inset-0 opacity-[0.06]"
//           style={{ 
//             backgroundImage: `linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)`,
//             backgroundSize: '70px 70px',
//             maskImage: 'radial-gradient(circle at center, black 40%, transparent 90%)'
//           }}
//         />

//         {/* Ambient Glows (Teal/Green representing Safety & Growth) */}
//         <motion.div 
//           animate={{ opacity: [0.03, 0.08, 0.03], scale: [1, 1.1, 1] }}
//           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute top-1/4 left-1/10 w-[800px] h-[800px] bg-emerald-600 rounded-full blur-[180px] pointer-events-none"
//         />
//         <motion.div 
//           animate={{ opacity: [0.02, 0.06, 0.02], scale: [1, 1.2, 1] }}
//           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
//           className="absolute bottom-1/4 right-1/10 w-[600px] h-[600px] bg-cyan-600 rounded-full blur-[150px] pointer-events-none"
//         />
//       </div>

//       {/* --- MAIN CONTENT CONTAINER --- */}
//       <div className="max-w-[1400px] mx-auto w-full relative z-10 pt-32 pb-24">
//         <div className="grid lg:grid-cols-12 gap-16 items-center">
          
//           {/* LEFT: TEXT & CTA CONTENT */}
//           <motion.div
//             className="lg:col-span-8"
//             initial="hidden"
//             animate="visible"
//             variants={containerVariants}
//           >
//             {/* 1. Status Badge */}
//             <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 mb-10 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
//               <span className="relative flex h-2.5 w-2.5">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
//               </span>
//               <span className="text-emerald-400 font-bold uppercase tracking-[0.25em] text-[11px]">24/7 Proactive Protection</span>
//             </motion.div>

//             {/* 2. Main Headline */}
//             <motion.h1 variants={itemVariants} className="text-[11vw] md:text-[8vw] lg:text-[7.5vw] font-black text-white leading-[0.85] tracking-[-0.05em] uppercase">
//               Secure <br /> Your <span className="text-transparent" style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.5)" }}>Legacy.</span>
//             </motion.h1>

//             {/* 3. Sub-headline / Description */}
//             <motion.p variants={itemVariants} className="mt-12 text-slate-300 text-xl md:text-2xl max-w-3xl leading-relaxed font-medium border-l-2 border-emerald-600 pl-8">
//               Expertise <span className="text-white">deployed</span> where it matters most. We provide elite security manpower and integrated technology solutions, transforming vulnerability into unbeatable strength.
//             </motion.p>

//             {/* 4. CTA Buttons */}
//             <motion.div variants={itemVariants} className="mt-16 flex flex-wrap gap-8 items-center">
//               <button className="relative group bg-emerald-600 hover:bg-emerald-500 text-white px-12 py-6 rounded-sm font-black uppercase text-sm tracking-widest transition-all shadow-[0_10px_30px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.5)] active:scale-95">
//                 <span className="relative z-10">Request a Proposal</span>
//                 <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-sm" />
//               </button>
//               <button className="group flex items-center gap-3 border border-white/15 hover:border-white/30 hover:bg-white/5 text-white px-12 py-6 rounded-sm font-black uppercase text-sm tracking-widest transition-all">
//                 Explore Services
//                 <div className="w-1.5 h-1.5 bg-white rounded-full group-hover:scale-150 transition-transform" />
//               </button>
//             </motion.div>
//           </motion.div>

//           {/* RIGHT: TRUST CARDS / VISUAL ELEMENT */}
//           <motion.div
//             className="lg:col-span-4 self-center lg:mt-0 mt-20"
//             initial={{ opacity: 0, scale: 0.9, x: 30 }}
//             animate={{ opacity: 1, scale: 1, x: 0 }}
//             transition={{ delay: 0.8, duration: 1, ease: cubicBezier(0.16, 1, 0.3, 1) }}
//           >
//             <div className="relative p-10 bg-white/[0.01] border border-white/10 backdrop-blur-2xl rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
//               {/* Subtle radial overlay inside card */}
//               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)] rounded-3xl pointer-events-none" />
              
//               <div className="space-y-10 relative z-10">
//                 {[
//                   { icon: <ShieldCheck className="text-emerald-400" size={28}/>, title: "Verified Personnel", desc: "Rigorous background checks & continuous evaluation." },
//                   { icon: <Target className="text-emerald-400" size={28}/>, title: "Strategic Deployment", desc: "Custom risk assessment and asset-focused guarding." },
//                   { icon: <Zap className="text-emerald-400" size={28}/>, title: "Incident Response", desc: "Rapid 24/7 coordination & management protocols." }
//                 ].map((item, i) => (
//                   <motion.div 
//                     key={i} 
//                     className="flex gap-6 items-start"
//                     whileHover={{ x: 5, transition: { duration: 0.2 } }}
//                   >
//                     <div className="flex-shrink-0 p-4 bg-emerald-950 border border-emerald-500/20 rounded-2xl shadow-inner">
//                       {item.icon}
//                     </div>
//                     <div>
//                       <h3 className="text-white font-bold text-xl tracking-tight mb-1">{item.title}</h3>
//                       <p className="text-slate-400 text-base leading-snug">{item.desc}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Trust Badge Below the Stack */}
//               <div className="mt-12 pt-10 border-t border-white/10 flex items-center justify-between gap-6 relative z-10">
//                 <div className="flex items-center gap-1.5">
//                     {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />)}
//                 </div>
//                 <div className="text-right">
//                     <p className="text-white font-bold text-lg">ISO 9001:2015</p>
//                     <p className="text-slate-500 text-xs uppercase font-black tracking-widest">Certified Quality</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* --- SCROLL INDICATOR --- */}
//       <motion.div 
//         animate={{ y: [0, 12, 0] }}
//         transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer group"
//         onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
//       >
//         <span className="text-[11px] text-white/30 uppercase font-black tracking-[0.3em] group-hover:text-white/60 transition-colors">Discover Our Services</span>
//         <div className="p-2 border border-white/10 rounded-full group-hover:border-emerald-500/50 transition-colors">
//             <ChevronDown size={22} className="text-emerald-500/60 group-hover:text-emerald-400" />
//         </div>
//       </motion.div>

//       {/* --- CINEMATIC OVERLAYS --- */}
//       {/* 1. Vignette Effect */}
//       <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#020203_100%)] opacity-80" />
      
//       {/* 2. Grain Overlay */}
//       <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] blend-overlay" />
//     </section>
//   );
// };

// export default SecurityHero;