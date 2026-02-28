"use client";

import React from "react";
import { motion } from "framer-motion";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VerifiedIcon from '@mui/icons-material/Verified';
import GppGoodIcon from '@mui/icons-material/GppGood';
import Link from "next/link";

const AboutIntro = () => {
    return (
        <section className="relative py-24 bg-[#ffffff] overflow-hidden">
            {/* Background Subtle Element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 translate-x-20 z-0" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* LEFT CONTENT: Detailed Marketing Copy */}
                    <div className="w-full lg:w-[60%]">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-2 mb-6">
                                <GppGoodIcon className="text-blue-600" fontSize="small" />
                                <span className="text-[11px] font-black tracking-[0.3em] uppercase text-slate-500">
                                    Delhi NCR's Premier Security Force
                                </span>
                            </div>

                            <h2 className="text-4xl md:text-6xl font-black text-slate-950 leading-[1.1] mb-8 tracking-tighter">
                                TRUSTED PROTECTION. <br />
                                <span className="text-blue-600">UNCOMPROMISED INTEGRITY.</span>
                            </h2>

                            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                                <p>
                                    <span className="text-slate-950 font-bold">Pratima Security Services</span> stands as a beacon of reliability in India’s security landscape. We don't just provide guards; we deliver
                                    <span className="text-slate-950 font-semibold"> comprehensive tactical solutions</span> specifically engineered for the diverse needs of Delhi NCR and beyond.
                                </p>

                                <p>
                                    Our DNA is rooted in the discipline of the <span className="text-blue-600 font-bold italic">Defense and Civil Security sectors</span>. This expertise allows us to serve a wide-spectrum of clients—from high-traffic <span className="text-slate-900 font-semibold">Shopping Malls and Educational Institutions</span> to sensitive <span className="text-slate-900 font-semibold">Government Agencies and Industrial Factories</span>. We bridge the gap between traditional guarding and modern tactical intelligence.
                                </p>

                                <p>
                                    Whether it is <span className="text-slate-950 font-medium italic">Security Consulting, Fleet Management, or Corporate Investigations</span>, our approach is always 24/7. By integrating high-end surveillance technology with personnel trained to handle real-world crisis, we ensure your assets, people, and peace of mind remain impenetrable.
                                </p>
                            </div>

                            {/* Core Pillars Grid */}
                            <div className="grid sm:grid-cols-2 gap-6 mt-12">
                                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-hover hover:shadow-md">
                                    <VerifiedIcon className="text-blue-600 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 uppercase text-sm tracking-tight">MSME & Corporate</h4>
                                        <p className="text-xs text-slate-500 mt-1">Tailored security for offices and emerging businesses.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-hover hover:shadow-md">
                                    <VerifiedIcon className="text-blue-600 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 uppercase text-sm tracking-tight">Industrial & Govt</h4>
                                        <p className="text-xs text-slate-500 mt-1">Robust protection for factories and state agencies.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT CONTENT: Visual Element & Quick Stats */}
                    <div className="w-full lg:w-[40%] sticky top-24">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
                                <img
                                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000"
                                    alt="Professional Security Team"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Experience Badge */}
                            <div className="absolute -bottom-10 -left-10 bg-blue-600 text-white p-8 rounded-3xl shadow-xl z-20">
                                <p className="text-5xl font-black tracking-tighter italic">8+</p>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] leading-tight mt-2 text-blue-100">
                                    Years of Unmatched <br /> Service Excellence
                                </p>
                            </div>

                            {/* Decorative Dots */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 opacity-20"
                                style={{ backgroundImage: 'radial-gradient(#2563eb 2px, transparent 2px)', backgroundSize: '15px 15px' }} />
                        </motion.div>
                    </div>

                </div>

                {/* Bottom CTA Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-24 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8"
                >
                    <p className="text-slate-500 font-medium max-w-md text-center md:text-left">
                        Ready to secure your premises with Delhi NCR's most disciplined security force?
                    </p>
                    <Link href="/contact" className="px-8 py-4 bg-slate-950 text-white rounded-full font-bold uppercase tracking-widest text-xs flex items-center gap-3 hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-200">
                        Request a Consultation <ArrowForwardIcon fontSize="small" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutIntro;