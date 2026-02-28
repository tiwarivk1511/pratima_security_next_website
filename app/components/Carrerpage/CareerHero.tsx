"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Rocket, Users, ArrowDown } from 'lucide-react';

const CareerHero = () => {
    const scrollToJobs = () => {
        const element = document.getElementById('jobs-listing');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 bg-[#05070a]">

            {/* Dynamic Background: Mesh Glow + Rising Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Main Mesh Orb */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] opacity-60" />

                {/* Top-Right Gradient Glow */}
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />

                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                <div className="flex flex-col items-center text-center">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8"
                    >
                        <Rocket size={14} className="text-blue-400" />
                        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-300">
                            Join Our Elite Talent Pool
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="text-5xl md:text-8xl font-[1000] text-white leading-[0.9] uppercase tracking-tighter mb-10"
                    >
                        Don’t Just Work. <br />
                        <span className="text-blue-500 italic">Innovate & Evolve.</span>
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl leading-relaxed mb-12"
                    >
                        At the intersection of Statutory Compliance and Workforce Solutions, we are building a team that values precision, ethics, and rapid growth. Your next big leap starts here.
                    </motion.p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-6 mb-20">
                        <motion.button
                            onClick={scrollToJobs}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-600 text-white px-12 py-6 rounded-2xl font-black uppercase text-xs tracking-[0.2em] shadow-[0_20px_40px_rgba(37,99,235,0.25)] flex items-center gap-4 group"
                        >
                            Explore Openings
                            <Briefcase size={18} className="group-hover:rotate-12 transition-transform" />
                        </motion.button>

                        <button className="text-white font-black uppercase text-xs tracking-[0.2em] px-10 py-6 rounded-2xl border border-white/10 hover:bg-white/5 transition-all"
                        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                        >
                            Our Culture
                        </button>
                    </div>

                    {/* Career Stats / Trust Factors - Added more Padding & Border Clarity */}
                    <div className="w-full max-w-5xl border-t border-white/10 pt-16 relative">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {[
                                { label: "Growth Potential", value: "2x Yearly", desc: "Performance-linked escalations" },
                                { label: "Work Culture", value: "Inclusive", desc: "Diversity-driven environment" },
                                { label: "Team Strength", value: "500+", desc: "Dynamic professionals onboard" },
                            ].map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + idx * 0.1 }}
                                    className="text-center group"
                                >
                                    <h4 className="text-3xl font-black text-white uppercase tracking-tighter mb-2 group-hover:text-blue-500 transition-colors">
                                        {stat.value}
                                    </h4>
                                    <p className="text-[11px] font-black text-blue-500 uppercase tracking-[0.2em] mb-3">
                                        {stat.label}
                                    </p>
                                    <div className="h-px w-8 bg-white/20 mx-auto mb-3" />
                                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider leading-relaxed">
                                        {stat.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* IMPROVED SCROLL INDICATOR: Stats ke niche clear gap ke saath */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-24 flex flex-col items-center gap-4 cursor-pointer group"
                        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                    >
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] group-hover:text-blue-400 transition-colors">
                            Discover Roles
                        </span>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            className="h-12 w-7 rounded-full border-2 border-white/10 flex justify-center p-2"
                        >
                            <motion.div className="h-2 w-1 bg-blue-500 rounded-full" />
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default CareerHero;