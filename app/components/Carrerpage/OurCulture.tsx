"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, Zap, Target, ShieldCheck, 
  Users2, Award, Play, X 
} from 'lucide-react';

const OurCulture = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const values = [
    {
      title: "Integrity First",
      desc: "Compliance is embedded in our DNA. We uphold the highest transparency and ethical standards at every operational level.",
      icon: <ShieldCheck size={24} />,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      borderColor: "group-hover:border-emerald-200"
    },
    {
      title: "Growth Mindset",
      desc: "We don't just fill positions; we architect careers. Continuous learning is the fuel that drives our collective energy.",
      icon: <Zap size={24} />,
      color: "text-blue-600",
      bg: "bg-blue-50",
      borderColor: "group-hover:border-blue-200"
    },
    {
      title: "Radical Empathy",
      desc: "From factory floors to corporate boardrooms, we value human connection. For us, people always come first.",
      icon: <Heart size={24} />,
      color: "text-rose-600",
      bg: "bg-rose-50",
      borderColor: "group-hover:border-rose-200"
    },
    {
      title: "Precision Driven",
      desc: "Zero-error payroll and statutory compliance are our benchmarks. Accuracy isn't just an option—it's our promise.",
      icon: <Target size={24} />,
      color: "text-amber-600",
      bg: "bg-amber-50",
      borderColor: "group-hover:border-amber-200"
    }
  ];

  return (
    <section id="our-culture" className="py-24 bg-white relative overflow-hidden">
      {/* Background Soft Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] -mr-64 -mt-64" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6"
            >
              <Users2 size={14} className="text-slate-900" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900">Life at the Core</span>
            </motion.div>
            <h2 className="text-4xl md:text-7xl font-[1000] text-slate-900 uppercase tracking-tighter leading-[0.85]">
              More than just a <br />
              <span className="text-blue-600 italic">Workplace.</span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium max-w-sm border-l-4 border-blue-600 pl-6 leading-relaxed">
            We are building an ecosystem where regulatory compliance and professional creativity coexist seamlessly.
          </p>
        </div>

       {/* Culture Cards Grid */}
       
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {values.map((value, idx) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1 }}
      whileHover={{ y: -8 }}
      className={`group relative p-10 rounded-[3rem] bg-slate-50 border border-slate-100 transition-all duration-500 hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-500/30 overflow-hidden`}
    >
      {/* Background Decorative Circle (Hover par dikhega) */}
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700" />

      <div className="relative z-10">
        {/* Icon Container: Hover par white ho jayega */}
        <div className={`h-16 w-16 rounded-[1.5rem] ${value.bg} ${value.color} flex items-center justify-center mb-10 group-hover:bg-white group-hover:scale-110 transition-all duration-500 shadow-sm`}>
          {value.icon}
        </div>

        {/* Title: Hover par white ho jayega */}
        <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 group-hover:text-white transition-colors duration-300">
          {value.title}
        </h4>

        {/* Description: Hover par light blue/white ho jayega */}
        <p className="text-slate-500 text-sm leading-relaxed font-medium group-hover:text-blue-50 transition-colors duration-300">
          {value.desc}
        </p>
      </div>
    </motion.div>
  ))}
</div>

        {/* Culture Visual Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-24 relative rounded-[4rem] overflow-hidden aspect-[16/9] md:aspect-[21/7] shadow-2xl border-8 border-white group"
        >
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
            alt="Team Collaboration" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
          
          <div className="absolute bottom-10 left-10 right-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center text-blue-600 shadow-xl">
                <Award size={28} />
              </div>
              <div className="text-left">
                <p className="text-white font-black uppercase tracking-widest text-[10px]">Excellence Standard</p>
                <p className="text-white/80 font-bold text-sm">Certified Great Place to Work</p>
              </div>
            </div>
            
            <button 
              onClick={() => setIsVideoOpen(true)}
              className="flex items-center gap-3 px-10 py-5 bg-blue-600 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-slate-900 transition-all shadow-lg shadow-blue-600/20"
            >
              <Play size={14} fill="white" />
              Watch Culture Film
            </button>
          </div>
        </motion.div>
      </div>

      {/* --- VIDEO MODAL POPUP --- */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          >
            {/* Backdrop Blur */}
            <div 
              className="absolute inset-0 bg-slate-900/90 backdrop-blur-md"
              onClick={() => setIsVideoOpen(false)}
            />
            
            {/* Close Button */}
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110]"
            >
              <X size={40} strokeWidth={1} />
            </button>

            {/* Video Container */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl z-[105] bg-black"
            >
              <iframe 
                title="vimeo-player" 
                src="https://player.vimeo.com/video/692298390?h=522c662a1c&autoplay=1" 
                className="absolute inset-0 w-full h-full"
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default OurCulture;

// "use client";
// import React from 'react';
// import { motion } from 'framer-motion';
// import { 
//   Heart, 
//   Zap, 
//   Target, 
//   ShieldCheck, 
//   Users2, 
//   Award 
// } from 'lucide-react';

// const OurCulture = () => {
//   const values = [
//     {
//       title: "Integrity First",
//       desc: "Compliance is embedded in our DNA. We prioritize radical transparency and maintain the highest ethical standards at every level.",
//       icon: <ShieldCheck size={24} />,
//       color: "text-emerald-600",
//       bg: "bg-emerald-50",
//       border: "hover:border-emerald-200"
//     },
//     {
//       title: "Growth Mindset",
//       desc: "We don't just fill positions; we architect careers. Continuous learning and professional evolution are the fuels that drive our energy.",
//       icon: <Zap size={24} />,
//       color: "text-blue-600",
//       bg: "bg-blue-50",
//       border: "hover:border-blue-200"
//     },
//     {
//       title: "Radical Empathy",
//       desc: "From factory floors to corporate boardrooms, we value human connection above all. Because at the end of the day, people matter most.",
//       icon: <Heart size={24} />,
//       color: "text-rose-600",
//       bg: "bg-rose-50",
//       border: "hover:border-rose-200"
//     },
//     {
//       title: "Precision Driven",
//       desc: "Zero-error payroll and 100% statutory compliance are our benchmarks. For us, accuracy isn't an option—it's a fundamental promise.",
//       icon: <Target size={24} />,
//       color: "text-amber-600",
//       bg: "bg-amber-50",
//       border: "hover:border-amber-200"
//     }
//   ];

//   return (
//     <section id="our-culture" className="py-24 bg-white relative overflow-hidden">
//       {/* Background Decorative Mesh - Softer for Light Theme */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_#eff6ff_0%,_transparent_70%)] opacity-70 pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
        
//         {/* Header Section */}
//         <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20">
//           <div className="max-w-2xl">
//             <motion.div 
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6"
//             >
//               <Users2 size={14} className="text-blue-600" />
//               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-700">Life at the Core</span>
//             </motion.div>
//             <h2 className="text-4xl md:text-6xl font-[1000] text-slate-900 uppercase tracking-tighter leading-[0.9]">
//               More than just a <br />
//               <span className="text-blue-600 italic">Workplace.</span>
//             </h2>
//           </div>
//           <p className="text-slate-500 font-medium max-w-sm border-l-2 border-blue-200 pl-6 leading-relaxed">
//             We are building an ecosystem where regulatory compliance and creative innovation thrive in perfect harmony.
//           </p>
//         </div>

//         {/* Culture Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {values.map((value, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: idx * 0.1 }}
//               className={`group relative p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 ${value.border} transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5`}
//             >
//               <div className={`h-14 w-14 rounded-2xl ${value.bg} ${value.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
//                 {value.icon}
//               </div>

//               <h4 className="text-xl font-[1000] text-slate-900 uppercase tracking-tight mb-4 group-hover:text-blue-600 transition-colors">
//                 {value.title}
//               </h4>
//               <p className="text-slate-500 text-sm leading-relaxed font-semibold">
//                 {value.desc}
//               </p>

//               {/* Decorative Corner Icon for Light Theme */}
//               <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
//                 <div className={`h-1 w-8 rounded-full ${value.bg.replace('50', '200')}`} />
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Culture Visual Strip (Bottom) */}
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.98 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           className="mt-20 relative rounded-[3rem] overflow-hidden aspect-[21/9] md:aspect-[3/1] border border-slate-200 shadow-xl"
//         >
//           <img 
//             src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
//             alt="Team Collaboration" 
//             className="w-full h-full object-cover filter saturate-[0.8] brightness-[0.9] hover:saturate-100 transition-all duration-1000"
//           />
//           {/* Subtle Light Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
          
//           <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row items-center justify-between gap-6">
//             <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-3xl border border-white/20">
//               <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg">
//                 <Award size={20} />
//               </div>
//               <div>
//                 <p className="text-white font-black uppercase tracking-widest text-[10px]">Recognized Excellence</p>
//                 <p className="text-blue-200 font-bold text-[10px] uppercase">Certified Great Place to Work</p>
//               </div>
//             </div>
//             <button className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-xl">
//               Discover Our Journey
//             </button>
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default OurCulture;