"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Cog, ShieldCheck, Rocket, ChevronRight } from 'lucide-react';

const ServiceProcess = () => {
  const [activeStep, setActiveStep] = useState(0);

  const workflow = [
    {
      title: "Strategic Audit & Analysis",
      desc: "Hum aapke current compliance status aur staffing requirements ka deep-dive audit karte hain. Isme gap analysis aur risk assessment shamil hai.",
      icon: <Search size={28} />,
      details: ["Legal Gap Analysis", "Workforce Requirement Mapping", "Compliance Risk Scoring"]
    },
    {
      title: "Deployment & Setup",
      desc: "ESI/PF registration se lekar bulk hiring drive start karne tak ka execution phase. Hum dedicated resources deploy karte hain.",
      icon: <Cog size={28} />,
      details: ["Bulk Sourcing Strategy", "Portal Registrations", "Documentation Setup"]
    },
    {
      title: "Rigorous Compliance",
      desc: "Monthly returns file karna, audits manage karna aur legal notices ko handle karna hamari responsibility hoti hai.",
      icon: <ShieldCheck size={28} />,
      details: ["Monthly Filing (ESI/PF)", "Labor Law Updates", "Statutory Record Maintenance"]
    },
    {
      title: "Continuous Optimization",
      desc: "Hum reporting aur performance tracking ke zariye process ko simplify karte hain taaki productivity badhe aur cost kam ho.",
      icon: <Rocket size={28} />,
      details: ["Cost-to-Company (CTC) Optimization", "Replacement Management", "Audit Readiness"]
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* LEFT: Process Steps Navigation */}
          <div className="lg:w-1/2 w-full">
            <h2 className="text-3xl md:text-5xl font-[1000] text-slate-900 uppercase tracking-tighter mb-4">
              Our Execution <span className="text-blue-600">Methodology</span>
            </h2>
            <p className="text-slate-500 font-medium mb-12">
              Step-by-step transparency on how we manage your compliance and staffing needs.
            </p>

            <div className="space-y-4">
              {workflow.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full flex items-center gap-6 p-6 rounded-[2rem] transition-all duration-300 border ${
                    activeStep === idx 
                    ? "bg-slate-900 border-slate-900 shadow-xl translate-x-4" 
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

          {/* RIGHT: Active Step Content */}
          <div className="lg:w-1/2 w-full sticky top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-blue-50 rounded-[3rem] p-8 md:p-12 relative overflow-hidden"
              >
                {/* Background Number Decal */}
                <span className="absolute -top-10 -right-10 text-[15rem] font-black text-blue-100/50 pointer-events-none leading-none">
                  {activeStep + 1}
                </span>

                <div className="relative z-10">
                  <h3 className="text-2xl font-[1000] text-slate-900 uppercase tracking-tighter mb-6">
                    {workflow[activeStep].title}
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    {workflow[activeStep].desc}
                  </p>
                  
                  <div className="space-y-4">
                    <h5 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-4 italic">Deliverables:</h5>
                    {workflow[activeStep].details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-3 bg-white/60 p-4 rounded-2xl border border-white">
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
  );
};

export default ServiceProcess;