"use client";

import React from "react";
import { motion } from "framer-motion";
import VerifiedIcon from '@mui/icons-material/Verified';
import SecurityIcon from '@mui/icons-material/Security';
import HandshakeIcon from '@mui/icons-material/Handshake';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import WatchLaterIcon from '@mui/icons-material/WatchLater';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <AccountBalanceIcon className="text-blue-500" />,
      title: "Legal & Law Compliance",
      desc: "8+ years of expertise in ESI, PF, and Labor Law compliance. We handle the paperwork, you get zero legal risk."
    },
    {
      icon: <HandshakeIcon className="text-blue-500" />,
      title: "Trusted by 35+ SMEs",
      desc: "Proven track record with builders, malls, and small businesses across Delhi NCR. We grow as you grow."
    },
    {
      icon: <SecurityIcon className="text-blue-500" />,
      title: "Tactical Guarding",
      desc: "From Armed guards to VIP protection, our force is trained for active response, not just static monitoring."
    },
    {
      icon: <WatchLaterIcon className="text-blue-500" />,
      title: "24/7 Monitoring",
      desc: "Advanced surveillance and emergency response systems that never sleep. Round-the-clock protection."
    }
  ];

  return (
    <section className="relative py-28 bg-[#020617] overflow-hidden">
      
      {/* --- Background Design Elements --- */}
      {/* 1. Mesh Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
      
      {/* 2. Tactical Dot Pattern */}
      <div className="absolute inset-0 opacity-[0.2]" 
           style={{ 
             backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px)`,
             backgroundSize: '40px 40px' 
           }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-blue-500 font-black uppercase tracking-[0.5em] text-[12px] mb-4">
              Our Value Proposition
            </h2>
            <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
              Why Choose <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">
                Pratima Security?
              </span>
            </h3>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-8 rounded-full" />
          </motion.div>
        </div>

        {/* --- Why Choose Us Content --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="flex gap-6 p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 backdrop-blur-sm hover:bg-white/[0.07] hover:border-blue-500/30 transition-all duration-500">
                {/* Icon Container */}
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center border border-blue-500/20 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                
                {/* Text Content */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-3 uppercase tracking-tight group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                    {item.desc}
                  </p>
                </div>

                {/* Decorative Index Number */}
                <span className="absolute top-6 right-8 text-4xl font-black text-white/[0.02] group-hover:text-blue-500/10 transition-colors select-none">
                  0{idx + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Mission Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent rounded-[2.5rem]"
        >
          <div className="bg-[#0f172a]/60 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/5 text-center">
            <div className="flex justify-center mb-6">
               <VerifiedIcon className="text-blue-500" fontSize="large" />
            </div>
            <p className="text-xl md:text-2xl text-blue-100/80 font-medium italic leading-relaxed max-w-4xl mx-auto">
              "Our mission is to provide affordable, defense-grade security and housekeeping 
              for Malls, Factories, and Schools across Delhi NCR, without compromising 
              on legal standards or safety quality."
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;

// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import ShieldIcon from '@mui/icons-material/Shield';
// import FactCheckIcon from '@mui/icons-material/FactCheck';
// import EngineeringIcon from '@mui/icons-material/Engineering';
// import HubIcon from '@mui/icons-material/Hub';

// const WhyChooseUs = () => {
//   return (
//     <section className="relative py-28 bg-[#020617] overflow-hidden">
      
//       {/* 1. Dynamic Background - Fluid Gradients */}
//       <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
//       <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-indigo-900/20 blur-[120px] rounded-full" />

//       {/* 2. Tactical Dot & Grid Pattern */}
//       <div className="absolute inset-0 opacity-[0.15]" 
//            style={{ 
//              backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px), linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
//              backgroundSize: '40px 40px, 80px 80px, 80px 80px' 
//            }} 
//       />

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
        
//         {/* Modern Header */}
//         <div className="mb-20">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="flex flex-col md:flex-row md:items-end justify-between gap-6"
//           >
//             <div>
//               <h2 className="text-6xl md:text-8xl font-black text-white tracking-[ -0.05em] leading-none">
//                 THE <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-700">ELITE</span> <br /> 
//                 DIFFERENCE
//               </h2>
//             </div>
//             <p className="text-blue-200/50 font-medium tracking-[0.2em] uppercase text-xs border-l-2 border-blue-600 pl-4">
//               8+ Years of Tactical Excellence <br /> Across Delhi NCR
//             </p>
//           </motion.div>
//         </div>

//         {/* 3. New Unique Feature Layout (Non-Traditional Cards) */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
//           {/* Left Column: Big Highlight */}
//           <motion.div 
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             className="group relative p-1 bg-gradient-to-br from-blue-500/20 to-transparent rounded-[2rem]"
//           >
//             <div className="bg-[#0f172a]/80 backdrop-blur-xl p-10 rounded-[2rem] h-full border border-white/5">
//               <FactCheckIcon className="text-blue-500 text-5xl mb-8" />
//               <h3 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">Zero-Liability <br /> Compliance</h3>
//               <p className="text-slate-400 text-lg leading-relaxed mb-8">
//                 We take the legal burden off your shoulders. 100% adherence to **ESI, PF, and Labor Laws** ensures your business stays audit-ready and focused on growth.
//               </p>
//               <div className="flex gap-4">
//                 <span className="px-4 py-2 bg-blue-600/10 rounded-full text-blue-400 text-[10px] font-black uppercase tracking-widest border border-blue-500/20">ESI Verified</span>
//                 <span className="px-4 py-2 bg-blue-600/10 rounded-full text-blue-400 text-[10px] font-black uppercase tracking-widest border border-blue-500/20">PF Compliant</span>
//               </div>
//             </div>
//           </motion.div>

//           {/* Right Column: Mini Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
//             {/* SME & Builders */}
//             <motion.div 
//               whileHover={{ scale: 1.02 }}
//               className="p-8 bg-white/[0.03] border border-white/5 rounded-[2rem] hover:bg-white/[0.06] transition-all"
//             >
//               <HubIcon className="text-blue-400 mb-4" />
//               <h4 className="text-white font-black text-xl mb-2 italic">35+ PARTNERS</h4>
//               <p className="text-slate-500 text-sm">Trusted by premium builders & SMEs for localized security.</p>
//             </motion.div>

//             {/* Defense Training */}
//             <motion.div 
//               whileHover={{ scale: 1.02 }}
//               className="p-8 bg-white/[0.03] border border-white/5 rounded-[2rem] hover:bg-white/[0.06] transition-all"
//             >
//               <ShieldIcon className="text-blue-400 mb-4" />
//               <h4 className="text-white font-black text-xl mb-2 italic">TACTICAL FORCE</h4>
//               <p className="text-slate-500 text-sm">Armed & VIP personnel with rigorous defense-style training.</p>
//             </motion.div>

//             {/* Housekeeping Integration */}
//             <motion.div 
//               whileHover={{ scale: 1.02 }}
//               className="col-span-1 sm:col-span-2 p-8 bg-gradient-to-r from-blue-900/20 to-transparent border border-white/5 rounded-[2rem] flex items-center gap-6"
//             >
//               <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shrink-0">
//                 <EngineeringIcon className="text-white" fontSize="large" />
//               </div>
//               <div>
//                 <h4 className="text-white font-black text-xl uppercase tracking-tighter">Unified Facility Solutions</h4>
//                 <p className="text-slate-500 text-sm">Combining 24/7 Monitoring with professional Housekeeping.</p>
//               </div>
//             </motion.div>

//           </div>
//         </div>

//         {/* Bottom Banner - The "Price & Mission" Hook */}
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="mt-12 p-10 rounded-[2.5rem] bg-blue-600 relative overflow-hidden group cursor-default"
//         >
//           <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
//             <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter leading-tight">
//               Premium Protection. <br /> <span className="text-blue-200">Affordable Reality.</span>
//             </h3>
//             <p className="max-w-md text-blue-100 text-sm font-medium leading-relaxed">
//               We understand the balance between quality and budget. Our mission is to provide trusted security for Malls, Factories, and Schools while staying within your financial roadmap.
//             </p>
//           </div>
//           {/* Animated Highlight */}
//           <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/10 opacity-40 group-hover:animate-shine" />
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;