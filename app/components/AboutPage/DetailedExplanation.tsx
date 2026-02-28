"use client";
import React from 'react';
import { 
  History, 
  Target, 
  ShieldCheck, 
  Briefcase, 
  CheckCircle2,
  Award
} from 'lucide-react';

const DetailedExplanation = () => {
  const coreValues = [
    {
      title: "Defense-Grade Expertise",
      desc: "Our leadership and core team consist of seasoned professionals from the defense and civil security sectors, bringing military-grade precision to private security.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "24/7 Command Center",
      desc: "We operate a round-the-clock monitoring and emergency response system to ensure that our clients are protected every second of every day.",
      icon: <History className="w-6 h-6" />
    },
    {
      title: "Advanced Tech Integration",
      desc: "From AI-driven surveillance to electronic access control, we blend traditional guarding with the latest security technology for foolproof safety.",
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Subtle Dotted Background for consistency */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Story & Philosophy */}
          <div className="space-y-8">
            <div>
              <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Who We Are</h2>
              <h3 className="text-4xl font-extrabold text-slate-900 leading-tight">
                Redefining Security Standards <br/> Since 2017
              </h3>
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              Pratima Security Services began its journey as a specialized investigation firm. Today, we have transformed into a <strong>Total Security Solutions Provider</strong>, serving over 35+ multinational corporations, banks, and industrial giants across India.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="bg-blue-600 text-white p-3 rounded-xl h-fit">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xl mb-1">Our Mission</h4>
                  <p className="text-slate-600">To deliver uncompromising safety through a perfect synergy of highly trained manpower and cutting-edge electronic surveillance.</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="bg-blue-600 text-white p-3 rounded-xl h-fit">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xl mb-1">Our Compliance</h4>
                  <p className="text-slate-600">Strict adherence to international security protocols and local government regulations, ensuring a 100% compliant security framework.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Detailed Points & Experience */}
          <div className="lg:pl-8">
            <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-2xl relative">
              <h3 className="text-2xl font-bold mb-8 border-b border-slate-700 pb-4">Our Operational Excellence</h3>
              
              <div className="space-y-10">
                {coreValues.map((value, index) => (
                  <div key={index} className="relative group">
                    <div className="flex items-start gap-5">
                      <div className="text-blue-400 mt-1 group-hover:scale-110 transition-transform">
                        {value.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                        <p className="text-slate-400 leading-relaxed">{value.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Badges */}
              <div className="mt-12 pt-8 border-t border-slate-700 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-blue-500 w-5 h-5" />
                  <span className="text-sm font-medium">PSARA Licensed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-blue-500 w-5 h-5" />
                  <span className="text-sm font-medium">ISO Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-blue-500 w-5 h-5" />
                  <span className="text-sm font-medium">Defense Led</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-blue-500 w-5 h-5" />
                  <span className="text-sm font-medium">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Detailed Stats or Sector Logos (Optional) */}
        <div className="mt-20 py-10 border-t border-slate-100">
          <p className="text-center text-slate-400 font-bold uppercase tracking-widest text-xs mb-8">Sectors We Empower</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 grayscale opacity-60">
             {["MNCs", "Banking", "Embassies", "Pharmaceuticals", "Manufacturing", "Residential", "Govertnment"].map((sector) => (
               <span key={sector} className="text-xl font-extrabold text-slate-800">{sector}</span>
             ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default DetailedExplanation;