"use client";
import React from 'react';
import { motion } from 'framer-motion';
import {
    Users2,
    ShieldCheck,
    UserCheck,
    BarChart4,
    ArrowUpRight
} from 'lucide-react';

const StaffingIntro = () => {
    const highlights = [
        {
            title: "Statutory Precision",
            desc: "End-to-end management of ESI, PF, and Professional Tax filings with zero-error guarantee.",
            icon: <ShieldCheck className="text-blue-600" size={24} />,
        },
        {
            title: "Workforce Scalability",
            desc: "From Temp-to-Hire models to massive Bulk Recruitment drives across multiple industries.",
            icon: <Users2 className="text-blue-600" size={24} />,
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Subtle Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#2563eb 1px, transparent 1px)', backgroundSize: '30px 30px' }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* LEFT: Content & Narrative */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6"
                        >
                            <span className="text-[11px] font-black text-blue-600 uppercase tracking-[0.2em]">Our Core Identity</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-[1000] text-slate-900 leading-[1.1] uppercase tracking-tighter mb-8"
                        >
                            Building Teams. <br />
                            <span className="text-blue-600 italic">Ensuring Compliance.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-500 text-lg font-medium leading-relaxed mb-10 max-w-xl"
                        >
                            We act as the strategic bridge between your business goals and regulatory requirements.
                            By integrating **Statutory Compliance** with dynamic **Staffing Solutions**,
                            we allow your HR leadership to focus on culture while we handle the operational heavy lifting.
                        </motion.p>

                        {/* Highlights Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="group cursor-default"
                                >
                                    {/* Icon Container Fix */}
                                    <div className="h-14 w-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:shadow-lg group-hover:shadow-blue-200 transition-all duration-300">
                                        <div className="text-blue-700 group-hover:text-white transition-colors duration-300">
                                            {/* React.cloneElement se icon ki visibility ensure ki hai */}
                                            {React.cloneElement(item.icon, {
                                                size: 26,
                                                className: "transition-colors duration-300"
                                            })}
                                        </div>
                                    </div>

                                    <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-2 group-hover:text-blue-600 transition-colors">
                                        {item.title}
                                    </h4>
                                    <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* <button className="inline-flex items-center gap-3 text-slate-900 font-black uppercase text-xs tracking-widest hover:text-blue-600 transition-colors">
                            Download Compliance Checklist
                            <ArrowUpRight size={18} />
                        </button> */}
                    </div>

                    {/* RIGHT: Visual Element (Staggered Cards) */}
                    <div className="lg:w-1/2 relative flex justify-center">
                        {/* Main Image Base */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="w-full max-w-[450px] aspect-[4/5] bg-slate-100 rounded-[3rem] overflow-hidden relative border-8 border-white shadow-2xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=200&w=1974&auto=format&fit=crop"
                                alt="Corporate Management"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply" />
                        </motion.div>

                        {/* Floating Trust Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="absolute -right-4 top-20 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 max-w-[220px]"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                    <UserCheck size={16} />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Onboarding</span>
                            </div>
                            <p className="text-sm font-bold text-slate-800 leading-tight">
                                "99.8% Accuracy in Employee Documentation"
                            </p>
                        </motion.div>

                        {/* Floating Metric Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="absolute -bottom-8 -left-4 bg-slate-900 p-6 rounded-3xl shadow-2xl text-white min-w-[200px]"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <BarChart4 size={20} className="text-blue-400" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">Efficiency</span>
                            </div>
                            <div className="space-y-2">
                                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        className="h-full bg-blue-500"
                                    />
                                </div>
                                <p className="text-[10px] font-medium text-slate-400 italic">Zero Non-Compliance Penalties</p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default StaffingIntro;