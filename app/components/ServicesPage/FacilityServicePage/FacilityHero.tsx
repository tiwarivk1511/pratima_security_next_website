"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, CheckCircle2, ArrowRight, Zap } from 'lucide-react';
import Image from 'next/image';

const FacilityHero = () => {
  // Smooth scroll function
  const scrollToServices = () => {
    const element = document.getElementById('facility-services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[95vh] flex items-center bg-[#0f172a] overflow-hidden pt-20">
      
      {/* Background Decor - Dark Theme Optimized */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
        {/* Subtle Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* LEFT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
            <Zap size={14} className="text-blue-400 fill-blue-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-300">
              Integrated Facility Solutions
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-[1000] text-white leading-[0.95] uppercase tracking-tighter mb-8">
            Elevate Your <br />
            <span className="text-blue-500 italic">Workspace</span> <br />
            Standards.
          </h1>

          <p className="text-lg text-slate-400 font-medium leading-relaxed max-w-lg mb-10">
            Professional facility management tailored for modern enterprises. From premium housekeeping to technical maintenance, we ensure your assets are managed with precision.
          </p>

          <div className="flex flex-wrap gap-5">
            <button 
              onClick={scrollToServices}
              className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-white hover:text-blue-600 transition-all shadow-[0_20px_40px_rgba(37,99,235,0.2)] flex items-center gap-3 group active:scale-95"
            >
              Explore Services
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            {/* <button className="bg-transparent text-white border-2 border-slate-700 px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:border-blue-500 transition-all">
              Our Portfolio
            </button> */}
          </div>

          {/* Trust Stats - Lightened for Dark Theme */}
          <div className="mt-16 grid grid-cols-3 gap-8 pt-10 border-t border-slate-800">
            <div>
              <h4 className="text-3xl font-[1000] text-white tracking-tighter">35+</h4>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Sites Managed</p>
            </div>
            <div>
              <h4 className="text-3xl font-[1000] text-white tracking-tighter">80+</h4>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Expert Staff</p>
            </div>
            <div>
              <h4 className="text-3xl font-[1000] text-white tracking-tighter">24/7</h4>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Support</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT VISUAL SECTION */}
<motion.div 
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
  className="relative mt-12 lg:mt-0 w-full" // Mobile par thoda top margin diya hai
>
  {/* Main Image Card - Responsive Height Fix */}
  <div className="relative z-20 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.4)] border-[6px] md:border-[12px] border-slate-800/50 backdrop-blur-sm">
    <div className="relative aspect-[4/3] md:aspect-auto md:h-[600px] w-full"> 
      {/* - Mobile par aspect-ratio 4:3 rakha hai taaki pole na bane.
         - Desktop (md) par wahi purani 600px height wapas aa jayegi. 
      */}
      <Image 
        src="https://sih.edu.sg/wp-content/uploads/The-Multifaceted-Role-of-Housekeeping-in-the-Hospitality-Industry.jpg" 
        alt="Professional Office Management" 
        fill
        priority
        className="object-cover brightness-90 hover:brightness-100 transition-all duration-700"
      />
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60" />
    </div>
  </div>

  {/* Floating Info Card 1 - Mobile optimized position */}
  <motion.div 
    animate={{ y: [0, -10, 0] }}
    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
    className="absolute -top-4 -left-2 md:-top-6 md:-left-10 z-30 bg-slate-800/90 backdrop-blur-md p-3 md:p-6 rounded-2xl md:rounded-[2rem] shadow-2xl border border-slate-700 flex items-center gap-3 md:gap-4"
  >
    <div className="h-8 w-8 md:h-12 md:w-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
      <Building2 size={18} className="md:w-6 md:h-6" />
    </div>
    <div>
      <p className="text-[8px] md:text-[10px] font-black text-blue-400 uppercase tracking-widest">Efficiency</p>
      <h5 className="text-sm md:text-lg font-black text-white leading-none">Smart Ops</h5>
    </div>
  </motion.div>

  {/* Floating Info Card 2 - Mobile optimized position */}
  <motion.div 
    animate={{ y: [0, 10, 0] }}
    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
    className="absolute -bottom-4 -right-2 md:-bottom-6 md:-right-6 z-30 bg-emerald-500 p-3 md:p-6 rounded-2xl md:rounded-[2rem] shadow-2xl flex items-center gap-3 md:gap-4"
  >
    <div className="h-8 w-8 md:h-12 md:w-12 rounded-full bg-white/20 flex items-center justify-center text-white">
      <CheckCircle2 size={18} className="md:w-6 md:h-6" />
    </div>
    <div>
      <p className="text-[8px] md:text-[10px] font-bold text-emerald-100 uppercase tracking-widest">Compliance</p>
      <h5 className="text-sm md:text-lg font-black text-white leading-none">ISO Certified</h5>
    </div>
  </motion.div>
</motion.div>

      </div>
    </section>
  );
};

export default FacilityHero;

// "use client";
// import React from 'react';
// import { motion } from 'framer-motion';
// import { Building2, CheckCircle2, ArrowRight, Zap, Users2, Shield } from 'lucide-react';
// import Image from 'next/image';

// const FacilityHero = () => {
//   return (
//     <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden pt-20">
      
//       {/* Background Subtle Elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl" />
//         <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-slate-50 rounded-full blur-3xl" />
//       </div>

//       <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
//         {/* LEFT CONTENT */}
//         <motion.div 
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8">
//             <Zap size={14} className="text-blue-600 fill-blue-600" />
//             <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700">
//               Integrated Facility Solutions
//             </span>
//           </div>

//           <h1 className="text-5xl md:text-7xl font-[1000] text-slate-900 leading-[0.95] uppercase tracking-tighter mb-8">
//             Elevate Your <br />
//             <span className="text-blue-600 italic">Workspace</span> <br />
//             Standards.
//           </h1>

//           <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-lg mb-10">
//             Professional facility management tailored for modern enterprises. From premium housekeeping to technical maintenance, we ensure your assets are managed with precision.
//           </p>

//           <div className="flex flex-wrap gap-5">
//             <button className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-blue-600 transition-all shadow-2xl flex items-center gap-3 group">
//               Explore Services
//               <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
//             </button>
//             {/* <button className="bg-white text-slate-900 border-2 border-slate-100 px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:border-blue-600 transition-all">
//               Watch Reel
//             </button> */}
//           </div>

//           {/* Trust Stats */}
//           <div className="mt-16 grid grid-cols-3 gap-8 pt-10 border-t border-slate-100">
//             <div>
//               <h4 className="text-2xl font-black text-slate-900">35+</h4>
//               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Sites Managed</p>
//             </div>
//             <div>
//               <h4 className="text-2xl font-black text-slate-900">80+</h4>
//               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Expert Staff</p>
//             </div>
//             <div>
//               <h4 className="text-2xl font-black text-slate-900">24/7</h4>
//               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Support</p>
//             </div>
//           </div>
//         </motion.div>

//         {/* RIGHT VISUAL SECTION */}
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//           className="relative"
//         >
//           {/* Main Large Image Card */}
//           <div className="relative z-20 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white">
//             <Image 
//               src="https://sih.edu.sg/wp-content/uploads/The-Multifaceted-Role-of-Housekeeping-in-the-Hospitality-Industry.jpg" 
//               alt="Professional Office Management" 
//               width={800} 
//               height={1000}
//               className="object-fit h-[600px] w-full"
//             />
//             {/* Overlay Gradient */}
//             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
//           </div>

//           {/* Floating Info Card 1 */}
//           <motion.div 
//             animate={{ y: [0, -15, 0] }}
//             transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
//             className="absolute -top-6 -left-10 z-30 bg-white p-6 rounded-[2rem] shadow-xl border border-slate-50 flex items-center gap-4"
//           >
//             <div className="h-12 w-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-200">
//               <Building2 size={24} />
//             </div>
//             <div>
//               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Efficiency</p>
//               <h5 className="text-lg font-black text-slate-900 leading-none">Smart Operations</h5>
//             </div>
//           </motion.div>

//           {/* Floating Info Card 2 */}
//           <motion.div 
//             animate={{ y: [0, 15, 0] }}
//             transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
//             className="absolute -bottom-6 -right-6 z-30 bg-slate-900 p-6 rounded-[2rem] shadow-2xl flex items-center gap-4"
//           >
//             <div className="h-12 w-12 rounded-2xl bg-emerald-500 flex items-center justify-center text-white">
//               <CheckCircle2 size={24} />
//             </div>
//             <div>
//               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Compliance</p>
//               <h5 className="text-lg font-black text-white leading-none">100% Certified</h5>
//             </div>
//           </motion.div>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default FacilityHero;