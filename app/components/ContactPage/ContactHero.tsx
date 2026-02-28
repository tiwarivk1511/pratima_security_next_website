"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ContactHero = () => {

  // Smooth Scroll Handler
  const handleScroll = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const target = document.getElementById('contact-form');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[#020203] px-6 lg:px-12 overflow-hidden">

      {/* --- PREMIUM MINIMALIST BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#0a1025_0%,#020203_100%)]" />

        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            transform: 'perspective(800px) rotateX(65deg) translateY(0%)',
            maskImage: 'linear-gradient(to bottom, transparent, black 50%, transparent)'
          }}
        />

        <motion.div
          animate={{ opacity: [0.1, 0.15, 0.1], x: [-20, 20, -20] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600 rounded-full blur-[180px] pointer-events-none"
        />
      </div>

      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end">

          {/* MAIN HEADING */}
          <div className="lg:col-span-9">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-blue-500 font-black uppercase tracking-[0.4em] text-[11px] mb-8"
            >
              Contact / Elite Security
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[13vw] lg:text-[11vw] font-black text-white leading-[0.9] tracking-[-0.05em] uppercase"
            >
              <span className="block mb-2">Let’s</span>
              <span
                className="text-transparent block"
                style={{
                  WebkitTextStroke: "1.5px rgba(255,255,255,0.3)",
                  letterSpacing: "-0.05em"
                }}
              >
                Connect.
              </span>
            </motion.h1>
          </div>

          {/* SIDE DESCRIPTION & CTA */}
          <div className="lg:col-span-3 pb-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-10"
            >
              <p className="text-slate-400 text-lg leading-relaxed font-medium border-l border-blue-600 pl-4">
                Your assets deserve more than just surveillance. <span className="text-white">Command the highest tier of protection</span> before the next breach happens.
              </p>

              <div className="flex flex-col gap-6">
                {/* Updated Action Button with onClick */}
                <button
                  onClick={handleScroll}
                  className="group flex items-center justify-between border-b border-white/20 pb-4 hover:border-blue-600 transition-all cursor-pointer w-full text-left"
                >
                  <span className="text-white font-bold uppercase tracking-widest text-[10px]">
                    Initiate Deployment
                  </span>
                  <ArrowUpRight
                    className="text-slate-500 group-hover:text-blue-500 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
                    size={18}
                  />
                </button>

                <a href="tel:+91981815212" className="group flex items-center justify-between border-b border-white/20 pb-4 hover:border-blue-600 transition-all cursor-pointer">
                  <span className="text-white font-bold uppercase tracking-widest text-[10px]">Direct Response Line</span>
                  <ArrowUpRight className="text-slate-500 group-hover:text-blue-500 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" size={18} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-20 h-[1px] w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent"></div>
      </div>

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </section>
  );
};

export default ContactHero;

// "use client";
// import React from 'react';
// import { motion } from 'framer-motion';
// import { ArrowUpRight } from 'lucide-react';

// const ContactHero = () => {
//   return (
//     <section className="relative min-h-screen flex flex-col justify-center bg-[#020203] px-6 lg:px-12 overflow-hidden">

//       {/* --- PREMIUM MINIMALIST BACKGROUND --- */}
//       <div className="absolute inset-0 z-0">
//         {/* Deep Gradient Base */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#0a1025_0%,#020203_100%)]" />

//         {/* The Perspective Floor - Very subtle, no bright colors */}
//         <div
//           className="absolute inset-0 opacity-[0.12]"
//           style={{
//             backgroundImage: `linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)`,
//             backgroundSize: '60px 60px',
//             transform: 'perspective(800px) rotateX(65deg) translateY(0%)',
//             maskImage: 'linear-gradient(to bottom, transparent, black 50%, transparent)'
//           }}
//         />

//         {/* Ambient Moving Spotlight */}
//         <motion.div
//           animate={{ opacity: [0.1, 0.15, 0.1], x: [-20, 20, -20] }}
//           transition={{ duration: 10, repeat: Infinity }}
//           className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600 rounded-full blur-[180px] pointer-events-none"
//         />
//       </div>

//       <div className="max-w-[1400px] mx-auto w-full relative z-10">
//         <div className="grid lg:grid-cols-12 gap-10 items-end">

//           {/* MAIN HEADING */}
//           <div className="lg:col-span-9">
//             <motion.p
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-blue-500 font-black uppercase tracking-[0.4em] text-[11px] mb-8"
//             >
//               Contact / Elite Security
//             </motion.p>

//             <motion.h1
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//               // leading ko 0.8 se badha kar 0.9 kiya taaki lines ke beech balance rahe
//               // tracking ko -0.05em (equalized) rakha hai
//               className="text-[13vw] lg:text-[11vw] font-black text-white leading-[0.9] tracking-[-0.05em] uppercase"
//             >
//               <span className="block mb-2">Let’s</span>
//               <span
//                 className="text-transparent block"
//                 style={{
//                   WebkitTextStroke: "1.5px rgba(255,255,255,0.3)",
//                   // Character spacing ko force karne ke liye inline style
//                   letterSpacing: "-0.05em"
//                 }}
//               >
//                 Connect.
//               </span>
//             </motion.h1>
//           </div>

//           {/* SIDE DESCRIPTION & CTA */}
//           <div className="lg:col-span-3 pb-4">
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5 }}
//               className="space-y-10"
//             >
//               {/* ENGAGING DIALOGUE */}
//               <p className="text-slate-400 text-lg leading-relaxed font-medium border-l border-blue-600 pl-4">
//                 Your assets deserve more than just surveillance. <span className="text-white">Command the highest tier of protection</span> before the next breach happens.
//               </p>

//               <div className="flex flex-col gap-6">
//                 <a
//                   href="#contact-form" // Yeh niche wale section ki id se match karega
//                   className="group flex items-center justify-between border-b border-white/20 pb-4 hover:border-blue-600 transition-all cursor-pointer"
//                 >
//                   <span className="text-white font-bold uppercase tracking-widest text-[10px]">
//                     Initiate Deployment
//                   </span>
//                   <ArrowUpRight
//                     className="text-slate-500 group-hover:text-blue-500 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
//                     size={18}
//                   />
//                 </a>
//                 <a href="tel:+91981815212" className="group flex items-center justify-between border-b border-white/20 pb-4 hover:border-blue-600 transition-all cursor-pointer">
//                   <span className="text-white font-bold uppercase tracking-widest text-[10px]">Direct Response Line</span>
//                   <ArrowUpRight className="text-slate-500 group-hover:text-blue-500 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" size={18} />
//                 </a>
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         {/* BOTTOM DECORATION - Minimalist Line */}
//         <div className="mt-20 h-[1px] w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent"></div>
//       </div>

//       {/* Subtle Cinematic Grain */}
//       <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
//     </section>
//   );
// };

// export default ContactHero;




{/* <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "General Inquiry",
              desc: "Talk to us about your basic security requirements.",
              icon: MessageSquare,
              action: "Start Chat"
            },
            {
              title: "Request a Quote",
              desc: "Get a detailed pricing structure for your project.",
              icon: Phone,
              action: "Call Experts"
            },
            {
              title: "Partner with Us",
              desc: "Join our network of global security partners.",
              icon: Mail,
              action: "Email Team"
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + (idx * 0.1) }}
              whileHover={{ y: -12 }}
              className="group relative bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-10 rounded-[3rem] overflow-hidden transition-all duration-500 hover:border-blue-500/50"
            >
              {/* Card Hover Glow */}
// <div className="absolute -inset-px bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

{/* ICON CONTAINER */ }
// <div className="relative mb-8 p-5 bg-white/5 border border-white/10 rounded-2xl w-fit group-hover:bg-blue-600 group-hover:border-blue-400 transition-all duration-300 shadow-2xl">
//   <item.icon className="w-7 h-7 text-blue-500 group-hover:text-white transition-colors duration-300" />
// </div>

// <div className="relative">
//   <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{item.title}</h3>
//   <p className="text-slate-500 text-base mb-8 leading-relaxed group-hover:text-slate-300 transition-colors">
//     {item.desc}
//   </p>

//   <div className="flex items-center gap-3 text-blue-500 font-extrabold text-sm uppercase tracking-widest group-hover:text-blue-400 transition-all">
//     <span>{item.action}</span>
//     <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
//   </div>
// </div>
//     </motion.div>
//   ))}
// </div> 
