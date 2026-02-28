"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, BarChart3, Globe2, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const FacilityIntroduction = () => {
    const pillars = [
        {
            icon: <ShieldCheck className="text-blue-600" size={24} />,
            title: "Strategic Preservation",
            desc: "We don't just maintain; we preserve. Our protocols are designed to extend the life of your physical assets."
        },
        {
            icon: <BarChart3 className="text-blue-600" size={24} />,
            title: "Operational Excellence",
            desc: "Streamlining complex workflows into a single, cohesive management ecosystem for 100% uptime."
        }
    ];

    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* LEFT SIDE - VISUAL STORYTELLING */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop"
                                alt="Modern Facility Management"
                                width={600}
                                height={700}
                                className="object-cover h-[550px] w-full brightness-90"
                            />
                            {/* Glass Card on Image */}
                            <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[2rem] text-white">
                                <div className="flex items-center gap-4 mb-2">
                                    <Globe2 size={20} className="text-blue-400" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Global Standards</span>
                                </div>
                                <h4 className="text-xl font-bold italic">"Transforming workspaces into high-performance environments."</h4>
                            </div>
                        </div>

                        {/* Floating Achievement Badge */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-10 -right-10 hidden md:block"
                        >
                            <div className="h-32 w-32 bg-blue-600 rounded-full flex items-center justify-center p-2 shadow-xl border-4 border-white">
                                <p className="text-[9px] font-black text-white text-center uppercase tracking-tighter">
                                    Integrated <br /> Excellence <br /> • 2026 •
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT SIDE - CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 mb-6">
                            <div className="h-[2px] w-12 bg-blue-600"></div>
                            <span className="text-[11px] font-black text-blue-600 uppercase tracking-[0.3em]">Redefining Management</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-[1000] text-slate-900 leading-[1.1] uppercase tracking-tighter mb-8">
                            Why settle for maintenance <br />
                            <span className="text-blue-600 italic">when you can have mastery?</span>
                        </h2>

                        <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10">
                            In today's fast-paced corporate world, a facility is more than just a building—it's a critical asset. We bridge the gap between basic upkeep and high-end asset management through an integrated approach that simplifies your daily operations.
                        </p>

                        {/* Pillars Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            {pillars.map((pillar, idx) => (
                                <div
                                    key={idx}
                                    className="group p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                                >
                                    {/* Icon Container - Hover par background blue hoga aur icon white */}
                                    <div className="relative z-10 bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-all duration-300">
                                        <div className="text-blue-600 group-hover:text-white transition-colors duration-300">
                                            {/* Hamein Lucide Icon ko ek div mein wrap karna hoga taaki color control ho sake */}
                                            {React.cloneElement(pillar.icon, {
                                                size: 24,
                                                className: "transition-colors duration-300"
                                            })}
                                        </div>
                                    </div>

                                    <h5 className="text-lg font-black text-slate-900 uppercase mb-2 tracking-tight group-hover:text-blue-600 transition-colors">
                                        {pillar.title}
                                    </h5>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        {pillar.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* <button className="flex items-center gap-4 text-slate-900 font-black uppercase text-xs tracking-widest group">
                            <span className="bg-slate-900 text-white p-4 rounded-full group-hover:bg-blue-600 transition-colors">
                                <ArrowRight size={20} />
                            </span>
                            Learn More About Our Methodology
                        </button> */}
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default FacilityIntroduction;