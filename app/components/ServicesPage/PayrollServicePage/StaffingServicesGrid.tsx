"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldAlert, FileCheck, Users, UserPlus, 
  CheckCircle2, ArrowRight, Search, Cog, 
  ShieldCheck, Rocket, ChevronRight, 
  MessageSquare,
  Sparkles
} from 'lucide-react';

// --- DATA: Grid Services ---
const SERVICES_DATA = [
  {
    title: "Statutory Compliance",
    desc: "Comprehensive audits and management of Factory Act, Shops & Establishment Act, and labor law regulations.",
    features: ["Monthly Audits", "CLRA Licenses", "Notice Management"],
    icon: <ShieldAlert />,
    color: "bg-blue-600",
    lightColor: "bg-blue-50",
    textColor: "text-blue-600"
  },
  {
    title: "ESI & PF Management",
    desc: "End-to-end processing of employee benefits, from registration to monthly return filing and claim settlement.",
    features: ["UAN Generation", "Challan Management", "KYC Verification"],
    icon: <FileCheck />,
    color: "bg-slate-900",
    lightColor: "bg-slate-50",
    textColor: "text-slate-900"
  },
  {
    title: "Temp-to-Hire Staffing",
    desc: "Flexible workforce solutions that allow you to evaluate talent on-site before making a permanent hiring decision.",
    features: ["Reduced Hiring Risk", "Immediate Scaling", "BPO/Sales Staffing"],
    icon: <Users />,
    color: "bg-blue-600",
    lightColor: "bg-blue-50",
    textColor: "text-blue-600"
  },
  {
    title: "Bulk Recruitment",
    desc: "Large-scale hiring drives for industrial, retail, and corporate sectors with rapid turnaround times.",
    features: ["Volume Hiring", "Pre-Screening", "Pan-India Sourcing"],
    icon: <UserPlus />,
    color: "bg-slate-900",
    lightColor: "bg-slate-50",
    textColor: "text-slate-900"
  }
];

// --- DATA: Methodology Steps ---
const WORKFLOW_DATA = [
  {
    title: "Strategic Audit & Analysis",
    desc: "We perform a deep-dive audit of your current compliance status and staffing requirements, including gap analysis and risk assessment.",
    icon: <Search size={28} />,
    details: ["Legal Gap Analysis", "Workforce Requirement Mapping", "Compliance Risk Scoring"]
  },
  {
    title: "Deployment & Setup",
    desc: "From ESI/PF registration to starting the bulk hiring drive, we deploy dedicated resources to ensure a seamless setup phase.",
    icon: <Cog size={28} />,
    details: ["Bulk Sourcing Strategy", "Portal Registrations", "Documentation Setup"]
  },
  {
    title: "Rigorous Compliance",
    desc: "Handling monthly filings, managing audits, and responding to legal notices becomes our responsibility, ensuring zero penalties.",
    icon: <ShieldCheck size={28} />,
    details: ["Monthly Filing (ESI/PF)", "Labor Law Updates", "Statutory Record Maintenance"]
  },
  {
    title: "Continuous Optimization",
    desc: "We simplify processes through reporting and performance tracking to boost productivity and reduce operational costs.",
    icon: <Rocket size={28} />,
    details: ["CTC Optimization", "Replacement Management", "Audit Readiness"]
  }
];

const StaffingServicesFull = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleDetailClick = (index: number) => {
    setActiveStep(index);
    const element = document.getElementById('service-methodology');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-slate-50 font-sans">
      
      {/* SECTION 1: SERVICES GRID */}
      <section id="services-grid" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 mb-6 shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em]">Our Expertise</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-[1000] text-slate-900 uppercase tracking-tighter leading-none mb-6">
              Scalable Solutions for <br />
              <span className="text-blue-600">Modern Enterprises</span>
            </h2>
            <p className="text-slate-500 font-medium text-lg italic">
              "Integrated solutions designed to simplify operations and enhance asset value."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DATA.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 overflow-hidden flex flex-col h-full"
              >
                <div className={`absolute top-0 right-0 w-24 h-24 ${service.lightColor} rounded-bl-[5rem] -mr-10 -mt-10 group-hover:scale-[10] transition-transform duration-700 opacity-50`} />

                <div className="relative z-10 flex flex-col h-full">
                  <div className={`h-16 w-16 rounded-2xl ${service.color} text-white flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                    {React.cloneElement(service.icon as React.ReactElement, { size: 32 } as any)}
                  </div>

                  <h3 className="text-xl font-[1000] text-slate-900 uppercase tracking-tight mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 flex-grow">
                    {service.desc}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2">
                        <CheckCircle2 size={14} className={service.textColor} />
                        <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wide">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => handleDetailClick(idx)}
                    className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-900 group-hover:gap-4 transition-all"
                  >
                    View Process <ArrowRight size={14} className={service.textColor} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: METHODOLOGY (Click triggered scroll) */}
      <section id="service-methodology" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            <div className="lg:w-1/2 w-full">
              <h2 className="text-3xl md:text-5xl font-[1000] text-slate-900 uppercase tracking-tighter mb-4">
                Our Execution <span className="text-blue-600">Methodology</span>
              </h2>
              <p className="text-slate-500 font-medium mb-12">
                Click on a service above or select a step below to see how we deliver excellence.
              </p>

              <div className="space-y-4">
                {WORKFLOW_DATA.map((step, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`w-full flex items-center gap-6 p-6 rounded-[2rem] transition-all duration-300 border ${
                      activeStep === idx 
                      ? "bg-slate-900 border-slate-900 shadow-xl lg:translate-x-4" 
                      : "bg-white border-slate-100 hover:border-blue-200"
                    }`}
                  >
                    <div className={`h-12 w-12 rounded-2xl flex items-center justify-center transition-colors ${
                      activeStep === idx ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"
                    }`}>
                      {step.icon}
                    </div>
                    <div className="text-left">
                      <h4 className={`text-lg font-black uppercase tracking-tight ${
                        activeStep === idx ? "text-white" : "text-slate-900"
                      }`}>
                        {`0${idx + 1}. ${step.title}`}
                      </h4>
                    </div>
                    <ChevronRight 
                      className={`ml-auto transition-transform ${
                        activeStep === idx ? "text-blue-400 rotate-90" : "text-slate-300"
                      }`} 
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 w-full lg:sticky lg:top-32">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-blue-50 rounded-[3.5rem] p-8 md:p-14 relative overflow-hidden shadow-inner"
                >
                  <span className="absolute -top-10 -right-10 text-[15rem] font-black text-blue-100/50 pointer-events-none leading-none select-none">
                    {activeStep + 1}
                  </span>

                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-[1000] text-slate-900 uppercase tracking-tighter mb-6">
                      {WORKFLOW_DATA[activeStep].title}
                    </h3>
                    <p className="text-slate-600 text-lg leading-relaxed mb-10">
                      {WORKFLOW_DATA[activeStep].desc}
                    </p>
                    
                    <div className="space-y-4">
                      <h5 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-4 italic">Core Deliverables:</h5>
                      {WORKFLOW_DATA[activeStep].details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-4 bg-white/80 p-5 rounded-2xl border border-white shadow-sm">
                          <div className="h-2 w-2 rounded-full bg-blue-600" />
                          <span className="text-sm font-bold text-slate-700 uppercase tracking-wide">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
     <section className="relative py-24 overflow-hidden">
 {/* Updated Gradient Background Layer - More Visible Blue Tones */}
<div className="absolute inset-0 bg-[#05070a]" /> {/* Thoda aur deep base */}

{/* 1. Primary Mesh Glow (Center) */}
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1e3a8a_0%,_transparent_65%)] opacity-30" />

{/* 2. Secondary Corner Glow (Bottom Right) */}
<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#2563eb_0%,_transparent_50%)] opacity-20" />

{/* 3. Subtle Linear Fade for Depth */}
<div className="absolute inset-0 bg-gradient-to-b from-[#05070a] via-transparent to-blue-950/30" />

  {/* Dynamic Background Elements (Original) */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] opacity-50" />
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
  </div>

  <div className="max-w-5xl mx-auto px-6 relative z-10">
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[4rem] p-12 md:p-20 text-center overflow-hidden"
    >
      {/* Decorative Corner Icon */}
      <div className="absolute top-10 right-10 opacity-20 hidden md:block">
        <Sparkles size={40} className="text-blue-400 animate-pulse" />
      </div>

      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-300">
          Experts Available Now
        </span>
      </div>

      <h3 className="text-4xl md:text-6xl font-[1000] text-white uppercase tracking-tighter leading-[0.9] mb-8">
        Ready to streamline <br />
        <span className="text-blue-500 italic">your workforce?</span>
      </h3>

      <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-12">
        Join 50+ industry leaders who trust our statutory compliance and staffing models. Let's build your high-performance team today.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative bg-blue-600 text-white px-12 py-6 rounded-2xl font-black uppercase text-xs tracking-[0.2em] shadow-[0_20px_40px_rgba(37,99,235,0.3)] flex items-center gap-4 overflow-hidden transition-all"
            onClick={() => window.location.href = '/contact'}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          <MessageSquare size={18} />
          Consult an Expert
          <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
        </motion.button>

        {/* <button className="text-white font-black uppercase text-xs tracking-[0.2em] px-8 py-6 rounded-2xl border border-white/10 hover:bg-white/5 transition-all">
          Schedule Audit
        </button> */}
      </div>

      {/* Trust Batch */}
      <div className="mt-16 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-8 opacity-40">
        {['No Penalties', '100% Statutory', 'Pan-India'].map((item) => (
          <span key={item} className="text-[10px] font-bold text-white uppercase tracking-[0.3em] italic">
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  </div>
</section>
    </div>
  );
};

export default StaffingServicesFull;


// "use client";
// import React from 'react';
// import { motion } from 'framer-motion';
// import { 
//   ShieldAlert, 
//   FileCheck, 
//   Users, 
//   UserPlus, 
//   CheckCircle2, 
//   ArrowRight 
// } from 'lucide-react';

// const StaffingServicesGrid = () => {
//   const services = [
//     {
//       title: "Statutory Compliance",
//       desc: "Comprehensive audits and management of Factory Act, Shops & Establishment Act, and labor law regulations.",
//       features: ["Monthly Audits", "CLRA Licenses", "Notice Management"],
//       icon: <ShieldAlert />,
//       color: "bg-blue-600",
//       lightColor: "bg-blue-50",
//       textColor: "text-blue-600"
//     },
//     {
//       title: "ESI & PF Management",
//       desc: "End-to-end processing of employee benefits, from registration to monthly return filing and claim settlement.",
//       features: ["UAN Generation", "Challan Management", "KYC Verification"],
//       icon: <FileCheck />,
//       color: "bg-slate-900",
//       lightColor: "bg-slate-50",
//       textColor: "text-slate-900"
//     },
//     {
//       title: "Temp-to-Hire Staffing",
//       desc: "Flexible workforce solutions that allow you to evaluate talent on-site before making a permanent hiring decision.",
//       features: ["Reduced Hiring Risk", "Immediate Scaling", "BPO/Sales Staffing"],
//       icon: <Users />,
//       color: "bg-blue-600",
//       lightColor: "bg-blue-50",
//       textColor: "text-blue-600"
//     },
//     {
//       title: "Bulk Recruitment",
//       desc: "Large-scale hiring drives for industrial, retail, and corporate sectors with rapid turnaround times.",
//       features: ["Volume Hiring", "Pre-Screening", "Pan-India Sourcing"],
//       icon: <UserPlus />,
//       color: "bg-slate-900",
//       lightColor: "bg-slate-50",
//       textColor: "text-slate-900"
//     }
//   ];

//   return (
//     <section id="services-grid" className="py-24 bg-slate-50">
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* SECTION HEADER */}
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 mb-6 shadow-sm"
//           >
//             <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
//             <span className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em]">Our Expertise</span>
//           </motion.div>
//           <h2 className="text-4xl md:text-6xl font-[1000] text-slate-900 uppercase tracking-tighter leading-none mb-6">
//             Scalable Solutions for <br />
//             <span className="text-blue-600">Modern Enterprises</span>
//           </h2>
//           <p className="text-slate-500 font-medium text-lg">
//             From legal audits to high-volume staffing, we provide the operational backbone for your workforce management.
//           </p>
//         </div>

//         {/* SERVICES GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {services.map((service, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: idx * 0.1 }}
//               whileHover={{ y: -10 }}
//               className="group relative bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 overflow-hidden flex flex-col h-full"
//             >
//               {/* Background Accent on Hover */}
//               <div className={`absolute top-0 right-0 w-24 h-24 ${service.lightColor} rounded-bl-[5rem] -mr-10 -mt-10 group-hover:scale-[10] transition-transform duration-700 opacity-50`} />

//               <div className="relative z-10 flex flex-col h-full">
//                 {/* Icon Box */}
//                 <div className={`h-16 w-16 rounded-2xl ${service.color} text-white flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500`}>
//                   {React.cloneElement(service.icon, { size: 32 })}
//                 </div>

//                 {/* Content */}
//                 <h3 className="text-xl font-[1000] text-slate-900 uppercase tracking-tight mb-4 group-hover:text-blue-600 transition-colors">
//                   {service.title}
//                 </h3>
//                 <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 flex-grow">
//                   {service.desc}
//                 </p>

//                 {/* Features List */}
//                 <div className="space-y-3 mb-8">
//                   {service.features.map((feature, fIdx) => (
//                     <div key={fIdx} className="flex items-center gap-2">
//                       <CheckCircle2 size={14} className={service.textColor} />
//                       <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wide">{feature}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* CTA Link */}
//                 <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-900 group-hover:gap-4 transition-all">
//                   Details <ArrowRight size={14} className={service.textColor} />
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* BOTTOM TAGLINE */}
//         <div className="mt-16 text-center">
//           <p className="text-slate-400 text-sm font-bold uppercase tracking-[0.3em]">
//             Customizing staffing models for Over <span className="text-blue-600 italic">50+ Industries</span>
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default StaffingServicesGrid;