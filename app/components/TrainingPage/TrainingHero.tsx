"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, ShieldCheck, ChevronDown } from 'lucide-react';

const TrainingHero = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center bg-[#020203] px-6 lg:px-12 overflow-hidden">

            {/* --- CINEMATIC BACKGROUND (Blue & Black Theme) --- */}
            <div className="absolute inset-0 z-0">
                {/* Deep Blue Gradient Base */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#0a1025_0%,#020203_100%)]" />

                {/* Abstract Tech Grid - Blue Tint */}
                <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                        backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
                        backgroundSize: '80px 80px',
                        maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
                    }}
                />

                {/* Ambient Blue Glow */}
                <motion.div
                    animate={{ opacity: [0.07, 0.12, 0.07], scale: [1, 1.1, 1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[160px] pointer-events-none"
                />
            </div>

            <div className="max-w-[1400px] mx-auto w-full relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* LEFT: TEXT CONTENT */}
                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 mb-8"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            <span className="text-blue-400 font-bold uppercase tracking-[0.25em] text-[10px]">Elite Tactical Training</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[10vw] lg:text-[8vw] font-black text-white leading-[0.85] tracking-[-0.04em] uppercase"
                        >
                            Forging <br />
                            <span className="text-transparent" style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.4)" }}>Precision.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mt-10 text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed font-medium border-l-2 border-blue-600 pl-6"
                        >
                            Our training process isn't just about instruction; it's about evolution. <span className="text-white">We transform personnel into elite security assets</span> through military-grade simulations and psychological conditioning.
                        </motion.p>

                        {/* <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex flex-wrap gap-6"
            >
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-sm font-black uppercase text-xs tracking-widest transition-all shadow-[0_0_25px_rgba(37,99,235,0.3)]">
                View Curriculum
              </button>
              <button className="border border-white/20 hover:bg-white/5 text-white px-10 py-5 rounded-sm font-black uppercase text-xs tracking-widest transition-all">
                The Methodology
              </button>
            </motion.div> */}
                    </div>

                    {/* RIGHT: STATS / FEATURES CARD (Black & Glass Theme) */}
                    <div className="lg:col-span-4 self-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-6 max-w-xl mx-auto" // Ek ke niche ek stack karne ke liye flex-col
                        >
                            {[
                                {
                                    icon: <Target size={28} />,
                                    title: "Precision Drills",
                                    desc: "Comprehensive real-world combat simulations designed to master defensive tactics and situational control.",
                                    color: "from-blue-500/20"
                                },
                                {
                                    icon: <Zap size={28} />,
                                    title: "Rapid Response",
                                    desc: "Advanced neural-response training reducing critical reaction time by 40% in high-pressure environments.",
                                    color: "from-emerald-500/20"
                                },
                                {
                                    icon: <ShieldCheck size={28} />,
                                    title: "Certified Excellence",
                                    desc: "Adherence to prestigious global security standards (ISO), ensuring world-class protection protocols.",
                                    color: "from-purple-500/20"
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 10, transition: { duration: 0.2 } }} // Hover par side movement (modern feel)
                                    className="relative group cursor-pointer w-full"
                                >
                                    {/* Background Glow */}
                                    <div className={`absolute -inset-px bg-gradient-to-r ${item.color} to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                    <div className="relative bg-white border border-slate-100 p-6 md:p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-500 flex items-center gap-6">

                                        {/* Icon Wrapper */}
                                        <div className="flex-shrink-0 p-4 rounded-2xl bg-slate-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">
                                            {item.icon}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <h3 className="text-slate-950 font-black text-lg md:text-xl uppercase tracking-tight mb-1">
                                                {item.title}
                                            </h3>
                                            <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
                                                {item.desc}
                                            </p>
                                        </div>

                                        {/* Side Accent line on Hover */}
                                        <div className="w-1 h-0 group-hover:h-12 bg-blue-600 transition-all duration-500 rounded-full" />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* SCROLL INDICATOR */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] text-white/30 uppercase font-black tracking-[0.3em]">Scroll to Evolve</span>
                <ChevronDown size={20} className="text-blue-500/60" />
            </motion.div>

            {/* Cinematic Grain Overlay */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </section>
    );
};

export default TrainingHero;
