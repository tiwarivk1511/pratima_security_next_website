"use client";
import React from 'react';
import { 
  ShieldCheck, 
  Building2, 
  Lock, 
  SearchCheck, 
  TrendingUp 
} from 'lucide-react';

const CompanyProfile = () => {
  const services = [
    { title: "Manned Guarding", desc: "Highly trained personnel for 24/7 onsite protection.", icon: ShieldCheck },
    { title: "Corporate Investigations", desc: "Expert fraud detection and background verification.", icon: SearchCheck },
    { title: "Facility Management", desc: "Risk assessment, surveillance, and crowd management.", icon: Building2 },
    { title: "Electronic Security", desc: "Advanced ESS and 24/7 electronic monitoring.", icon: Lock },
  ];

  return (
    /* Main Wrapper with Background Dotted Grid */
    <section className="relative bg-slate-50 py-24 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      
      {/* --- 1. THE DOTTED GRID BACKGROUND (Now Sharper) --- */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(#94a3b8 1.5px, transparent 1.5px)`, 
          backgroundSize: '32px 32px',
          opacity: 0.25
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-20">
          <h2 className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4">Our Commitment to Safety</h2>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Leading Security Solutions <br/> in <span className="text-blue-600">Delhi NCR</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by 35+ corporate giants, providing tech-driven security since 2017.
          </p>
        </div>

        {/* --- ABOUT & WHY US SECTION --- */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-slate-800 border-l-4 border-blue-600 pl-6">
              Pratima Security Services
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Established in 2017, we have evolved into a premier Total Security Solutions Provider, 
              led by professionals from the <strong>defense and civil security sectors</strong>.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-white">
                <p className="text-5xl font-black text-blue-600">35+</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2">Corporate Clients</p>
              </div>
              <div className="bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-white">
                <p className="text-5xl font-black text-blue-600">2017</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2">Established</p>
              </div>
            </div>
          </div>

          {/* Right Content Card with subtle internal dots */}
          <div className="bg-blue-600 rounded-[2.5rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 opacity-20" 
                 style={{ backgroundImage: 'radial-gradient(white 1.2px, transparent 1.2px)', backgroundSize: '18px 18px' }}>
            </div>
            
            <h3 className="text-3xl font-bold mb-8 relative z-10">Why Choose Us?</h3>
            <ul className="space-y-6 relative z-10">
              {["24/7 Guarding Services", "Expert Threat Handling", "Rigorous Training Standards", "Tech-Driven Solutions"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-lg font-medium">
                  <div className="bg-white/20 p-1 rounded-full">
                    <TrendingUp className="w-5 h-5 text-blue-100" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- CORE EXPERTISE GRID --- */}
        <div className="mb-28">
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-16 underline decoration-blue-500 underline-offset-8">Our Core Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/60 border border-slate-100 group hover:bg-blue-600 transition-all duration-500 hover:-translate-y-4">
                <div className="mb-8 inline-block p-5 bg-blue-50 rounded-2xl text-blue-600 group-hover:bg-white group-hover:text-blue-600 transition-all duration-300">
                  <service.icon className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-white transition-colors">{service.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed group-hover:text-blue-50 transition-colors">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- CTA SECTION WITH VISIBLE DOTTED WORLD MAP --- */}
        <div className="relative bg-slate-900 rounded-[3.5rem] p-12 md:p-24 text-center text-white overflow-hidden shadow-3xl">
          
          {/* CSS-BASED DOTTED WORLD MAP EFFECT */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
             {/* Main Map Dots */}
             <div className="absolute inset-0 opacity-[0.35]" 
                  style={{ 
                    backgroundImage: 'radial-gradient(circle, #3b82f6 2px, transparent 2px)', 
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(ellipse at center, black, transparent 70%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 70%)'
                  }}>
             </div>
             {/* Secondary Glow Dots */}
             <div className="absolute inset-0 opacity-[0.15] animate-pulse" 
                  style={{ 
                    backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', 
                    backgroundSize: '20px 20px'
                  }}>
             </div>
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
              Ready to Secure <br className="hidden md:block"/> Your Future?
            </h2>
            <p className="text-slate-400 mb-12 max-w-2xl mx-auto text-xl font-light leading-relaxed">
              Join 35+ corporate leaders who trust Pratima Security Services for 
              comprehensive protection across India.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 px-14 rounded-2xl transition-all shadow-2xl shadow-blue-600/30 active:scale-95 text-xl">
                Contact Us Now
              </button>
              <button className="text-white font-semibold py-5 px-10 rounded-2xl border border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all text-xl">
                Our Clients
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CompanyProfile;

// "use client";
// import React from 'react';
// import { 
//   ShieldCheck, 
//   Building2, 
//   Lock, 
//   SearchCheck, 
//   TrendingUp 
// } from 'lucide-react';

// const CompanyProfile = () => {
//   const services = [
//     { 
//       title: "Manned Guarding", 
//       desc: "Highly trained personnel for 24/7 onsite protection and emergency response.", 
//       icon: ShieldCheck 
//     },
//     { 
//       title: "Corporate Investigations", 
//       desc: "Expert fraud detection, employee background verification, and risk mitigation.", 
//       icon: SearchCheck 
//     },
//     { 
//       title: "Facility Management", 
//       desc: "Comprehensive risk assessment, surveillance, and efficient crowd management.", 
//       icon: Building2 
//     },
//     { 
//       title: "Electronic Security", 
//       desc: "Advanced ESS, digital asset protection, and 24/7 electronic monitoring.", 
//       icon: Lock 
//     },
//   ];

//   const highlights = [
//     "Enhanced Safety & 24/7 Peace of Mind",
//     "Advanced Crime Prevention & Risk Reduction",
//     "Expert Handling of Security Threats",
//     "Strict Hiring & Rigorous Training Standards",
//     "Innovative Technology-Driven Solutions"
//   ];

//   return (
//     <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
//       <div className="max-w-7xl mx-auto">
        
//         {/* --- HEADER SECTION (SEO Optimized) --- */}
//         <div className="text-center mb-16">
//           <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">
//             Our Commitment to Safety
//           </h2>
//           <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
//             Pratima Security Services: Leading Security Solutions in Delhi NCR
//           </h1>
//           <p className="text-lg text-slate-600 max-w-3xl mx-auto">
//             Trusted by 35+ corporate giants, we have been providing tech-driven security since 2017. 
//             From guarding services to corporate investigations, we ensure 24/7 protection.
//           </p>
//         </div>

//         {/* --- ABOUT & WHY US SECTION --- */}
//         <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          
//           {/* Left: About Content */}
//           <div className="space-y-6">
//             <h3 className="text-2xl font-bold text-slate-800 border-l-4 border-blue-600 pl-4">
//               About Pratima Security Services
//             </h3>
//             <p className="text-slate-600 leading-relaxed text-base">
//               Established in 2017, <span className="font-semibold text-slate-900">PRATIMA SECURITY SERVICES</span> has evolved from an investigation firm to a premier 
//               Total Security Solutions Provider. Our team consists of professionals from the <strong>defense and civil security sectors</strong>, 
//               ensuring every challenge is handled with precision.
//             </p>
            
//             <div className="grid grid-cols-2 gap-6 pt-4">
//               <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
//                 <p className="text-4xl font-bold text-blue-600">35+</p>
//                 <p className="text-xs text-slate-500 font-bold uppercase mt-1 tracking-wider">Corporate Clients</p>
//               </div>
//               <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
//                 <p className="text-4xl font-bold text-blue-600">2017</p>
//                 <p className="text-xs text-slate-500 font-bold uppercase mt-1 tracking-wider">Year Established</p>
//               </div>
//             </div>
//           </div>

//           {/* Right: Why Choose Us (Dark Blue Card) */}
//           <div className="bg-blue-600 rounded-3xl p-8 md:p-10 text-white shadow-2xl relative">
//             <h3 className="text-2xl font-bold mb-8">Why Businesses Trust Us?</h3>
//             <ul className="space-y-5">
//               {highlights.map((item, index) => (
//                 <li key={index} className="flex items-start gap-4 group">
//                   <div className="bg-blue-400/30 p-1.5 rounded-full mt-1">
//                     <TrendingUp className="w-4 h-4 text-white" />
//                   </div>
//                   <span className="text-blue-50 font-medium text-lg">{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* --- CORE EXPERTISE (Service Grid with Hover Fix) --- */}
//         <div className="mb-20">
//           <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">Our Core Expertise</h3>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {services.map((service, i) => (
//               <div 
//                 key={i} 
//                 className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:-translate-y-2"
//               >
//                 {/* Fixed Icon Container */}
//                 <div className="mb-6 inline-block p-4 bg-blue-50 rounded-xl group-hover:bg-blue-600 transition-colors duration-300">
//                   <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
//                 </div>
//                 <h4 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
//                   {service.title}
//                 </h4>
//                 <p className="text-slate-600 text-sm leading-relaxed">
//                   {service.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* --- CTA SECTION --- */}
//         <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
//           <div className="relative z-10">
//             <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Secure Your Business?</h2>
//             <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-lg">
//               Partner with Pratima Security Services today and experience the highest level of safety and protection for your business in Delhi NCR.
//             </p>
//             <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg">
//               Contact Us Today
//             </button>
//           </div>
          
//           {/* Background Decorative Element */}
//           <div className="absolute -top-10 -right-10 opacity-5 pointer-events-none">
//              <ShieldCheck size={300} />
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default CompanyProfile;