"use client";
import React from 'react';
import { motion } from 'framer-motion';
import {
    Factory,
    Store,
    Building2,
    Briefcase,
    Gavel,
    ArrowUpRight
} from 'lucide-react';

const IndustryImpact = () => {
    const sectors = [
        {
            title: "Factories & Manufacturing",
            desc: "Managing labor law compliance, Factory Act regulations, and bulk industrial staffing for large-scale production units.",
            icon: <Factory size={32} />,
            count: "40+ Units"
        },
        {
            title: "Retail Stores & Chains",
            desc: "Deployment of floor staff and cashiers with seamless Shop & Establishment Act management for retail giants.",
            icon: <Store size={32} />,
            count: "10+ Outlets"
        },
        {
            title: "Corporate Offices",
            desc: "End-to-end payroll and temp-to-hire solutions for white-collar roles and backend operations.",
            icon: <Briefcase size={32} />,
            count: "20+ Offices"
        },
        {
            title: "SMEs & Startups",
            desc: "Providing flexible staffing and outsourced HR compliance to help small businesses scale without legal risks.",
            icon: <Building2 size={32} />,
            count: "100+ SMEs"
        },
        {
            title: "Government Agencies",
            desc: "Executing specialized recruitment drives and managing contractual workforce for public sector projects.",
            icon: <Gavel size={32} />,
            count: "10+ Projects"
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Subtle Gradient Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] -mr-64 -mt-64" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-2 text-blue-600 font-black uppercase text-[10px] tracking-[0.3em] mb-4"
                        >
                            <div className="h-1 w-8 bg-blue-600" />
                            Who We Serve
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-[1000] text-slate-900 uppercase tracking-tighter leading-none">
                            Versatile Expertise Across <br />
                            <span className="text-blue-600 italic">Every Sector.</span>
                        </h2>
                    </div>
                    <p className="text-slate-500 font-medium max-w-sm border-l-2 border-blue-100 pl-6">
                        Supporting diverse business ecosystems with tailored staffing and zero-error compliance.
                    </p>
                </div>

                {/* Masonry-style Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sectors.map((sector, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 relative overflow-hidden"
                        >
                            {/* Background Number */}
                            <span className="absolute top-8 right-10 text-5xl font-black text-slate-200/50 group-hover:text-blue-100 transition-colors">
                                {`0${idx + 1}`}
                            </span>

                            <div className="relative z-10">
                                <div className="h-14 w-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                    {sector.icon}
                                </div>

                                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4">
                                    {sector.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                                    {sector.desc}
                                </p>

                                <div className="flex items-center justify-between pt-6 border-t border-slate-200/60">
                                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">
                                        {sector.count} Managed
                                    </span>
                                    <div className="h-8 w-8 rounded-full bg-slate-200/50 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all">
                                        <ArrowUpRight size={16} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Special CTA Card */}
                    <motion.div
                        className="p-10 rounded-[3rem] bg-blue-600 flex flex-col justify-center items-center text-center text-white relative overflow-hidden group cursor-pointer"
                        whileHover={{ scale: 0.98 }}
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#3b82f6_0%,_transparent_70%)] opacity-50" />
                        <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 relative z-10">Your Industry <br /> Not Listed?</h4>
                        <p className="text-blue-100 text-sm mb-8 relative z-10">We create custom compliance frameworks for unique business models.</p>
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest relative z-10 hover:bg-slate-900 hover:text-white transition-all"
                            onClick={
                                () => window.location.href = '/contact'
                            }>
                            Consult Now
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default IndustryImpact;