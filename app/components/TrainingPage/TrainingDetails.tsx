"use client";
import React from 'react';
import { motion } from 'framer-motion';
import {
    CheckCircle2,
    ShieldAlert,
    FileText,
    Eye,
    UserCheck,
    Crosshair,
    Zap,
    ArrowRight
} from 'lucide-react';

const TrainingDetailsLight = () => {
    const recruitmentCriteria = [
        { label: "Age", value: "21 – 40 Years" },
        { label: "Height", value: "5.7 feet Minimum" },
        { label: "Eyesight", value: "6 x 6 Vision" },
        { label: "Education", value: "Matriculation (English & Hindi both Proficient)" },
    ];

    const basicTraining = [
        "Drill movements at regular interval services",
        "Fire-fighting and first-aid methods",
        "Gate duties",
        "Ensuring proper documentation at the gate or reception",
        "Basic telephone duties and mannerisms",
        "Good and friendly conduct with staff and visitors",
        "Escorting the VIPs",
        "Search and frisking of persons",
        "Personal hygiene and essential housekeeping duties",
        "Car parking traffic control and much more."
    ];

    return (
        <section className="bg-[#fcfdfe] py-12 md:py-24 px-4 sm:px-6 lg:px-12 text-slate-900 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">

                {/* --- SECTION 1: RECRUITMENT --- */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-[1px] w-12 bg-blue-600"></span>
                            <h2 className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs">Phase 01: Selection</h2>
                        </div>
                        <h3 className="text-4xl lg:text-7xl font-black uppercase leading-[0.9] mb-8 text-slate-950">
                            Elite <br /> Recruitment <span className="text-blue-600">DNA.</span>
                        </h3>
                        <p className="text-slate-500 text-lg mb-10 leading-relaxed max-w-xl font-medium">
                            Our company strictly follows the general requirement procedures (based on international standards) and strict interviewing procedures to recruit one of the best and most efficient personnel in the industry.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {recruitmentCriteria.map((item, i) => (
                                <div key={i} className="group p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1 group-hover:text-blue-500 transition-colors">{item.label}</p>
                                    <p className="text-slate-900 font-bold text-xl">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="relative">
                        <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60" />
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="relative space-y-6"
                        >
                            <div className="bg-white border border-slate-100 p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl shadow-blue-900/5 flex items-start gap-6">
                                <div className="bg-blue-600 p-4 rounded-2xl text-white shadow-lg shadow-blue-200">
                                    <UserCheck size={28} />
                                </div>
                                <div>
                                    <h4 className="font-black text-xl uppercase mb-2">Criminal History</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed font-medium">We duly check the candidate's background for a clean record, free from any job-related crime or felony convictions.</p>
                                </div>
                            </div>

                            <div className="bg-slate-950 p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl flex items-start gap-6 sm:ml-8 text-white">
                                <div className="bg-white/10 p-4 rounded-2xl text-blue-400">
                                    <Crosshair size={28} />
                                </div>
                                <div>
                                    <h4 className="font-black text-xl uppercase mb-2">Physical Excellence</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed font-medium">Candidates must be in excellent physical shape with a minimum height of 5.7 feet and 6x6 eyesight.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* --- SECTION 2: TRAINING CATEGORIES --- */}
                <div className="mb-20 md:mb-32">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                        <div className="max-w-2xl">
                            <h2 className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs mb-4">Phase 02: Transformation</h2>
                            <h3 className="text-3xl lg:text-6xl font-black uppercase text-slate-950">Basic & <span className="italic text-slate-300">Tactical</span> Training</h3>
                        </div>
                        <p className="text-slate-500 font-medium max-w-sm border-l-2 border-blue-600 pl-6 mb-2">
                            Our training program is engineered to sharpen situational awareness and tactical response. While average guards merely observe, our personnel are trained to predict potential threats, ensuring a proactive safety net that provides a vision 10x more acute than an untrained individual.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Basic Training */}
                        <motion.div
                            whileHover={{ scale: 1.01 }}
                            className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border border-slate-100 shadow-sm relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                                <ShieldAlert size={200} />
                            </div>
                            <h4 className="text-xs font-black uppercase text-blue-600 tracking-widest mb-4">Core Competency</h4>
                            <h4 className="text-3xl md:text-4xl font-black uppercase mb-8 text-slate-900">Basic Induction</h4>
                            <ul className="grid sm:grid-cols-1 gap-y-4">
                                {basicTraining.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-600 font-semibold text-sm">
                                        <CheckCircle2 size={16} className="text-blue-600 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* OJT Training */}
                        <motion.div
                            whileHover={{ scale: 1.01 }}
                            className="bg-blue-50 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border border-blue-100 shadow-sm"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <div className="bg-white p-4 rounded-2xl shadow-sm text-blue-600">
                                    <Zap size={32} fill="currentColor" />
                                </div>
                                <span className="bg-blue-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-tighter">On-Job Training (OJT)</span>
                            </div>
                            <h4 className="text-3xl md:text-4xl font-black uppercase mb-4 text-slate-950">On-The-Job Training</h4>
                            <p className="text-blue-800/60 font-bold text-sm mb-8 italic italic">Session of 30-40 minutes a week at the respective site.</p>

                            <div className="space-y-4">
                                <div className="bg-white/60 p-5 rounded-2xl border border-blue-100">
                                    <h5 className="font-black text-blue-600 text-[10px] uppercase mb-2">Basic OJT Topics</h5>
                                    <p className="text-sm font-bold text-slate-800">Control of men & materials, Issue of passes, ID checking, Telephone manning, Liaison with police/fire brigade, Patrolling, Source of theft.</p>
                                </div>
                                <div className="bg-white/60 p-5 rounded-2xl border border-blue-100">
                                    <h5 className="font-black text-blue-600 text-[10px] uppercase mb-2">Specific OJT Topics</h5>
                                    <p className="text-sm font-bold text-slate-800">Operation of lifts, generators, ATMs, House-keeping duties, Telephone manning, Fire-fighting, Traffic control management.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* --- SECTION 3: RIGOROUS MONITORING (RESPONSIVE FIX) --- */}
                <div className="bg-slate-950 rounded-[2.5rem] md:rounded-[4rem] p-8 sm:p-12 lg:p-20 text-white">
                    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-5">
                            <h4 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-none mb-8">
                                Uncompromising <br /><span className="text-blue-500">Supervision.</span>
                            </h4>
                            <div className="space-y-6">
                                {[
                                    { role: "Field Officers/Supervisors", freq: "Twice a Day" },
                                    { role: "Site Manager", freq: "Every Alternate Day" },
                                    { role: "Senior Staff", freq: "Weekly Inspection" },
                                    { role: "Night Patrol Squad", freq: "Unannounced Mid-Night" },
                                    { role: "Management Audit", freq: "Surprise Monthly" }
                                ].map((check, idx) => (
                                    <div key={idx} className="flex items-center justify-between group cursor-default">
                                        <span className="text-slate-400 font-bold group-hover:text-white transition-colors text-sm sm:text-base">{check.role}</span>
                                        <div className="flex-1 border-b border-dashed border-slate-800 mx-4 mb-1"></div>
                                        <span className="text-blue-500 font-black uppercase text-[10px] sm:text-sm tracking-widest whitespace-nowrap">{check.freq}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                            <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-[2rem] backdrop-blur-sm">
                                <FileText className="text-blue-500 mb-6" size={40} />
                                <h5 className="font-black text-xl uppercase mb-4">Daily Documentation</h5>
                                <ul className="space-y-2 opacity-70 text-[11px] sm:text-xs font-bold uppercase tracking-wide">
                                    <li className="flex items-center gap-2">• Daily muster roll</li>
                                    <li className="flex items-center gap-2">• Daily occurrence book</li>
                                    <li className="flex items-center gap-2">• Daily report book</li>
                                    <li className="flex items-center gap-2">• Attendance sheet</li>
                                    <li className="flex items-center gap-2">• Visitor's register</li>
                                    <li className="flex items-center gap-2">• Vehicle movement register</li>
                                    <li className="flex items-center gap-2">• In/out register</li>
                                </ul>
                            </div>

                            <div className="bg-blue-600 p-6 sm:p-8 rounded-[2rem] shadow-2xl shadow-blue-600/20 group">
                                <Eye className="mb-6 group-hover:scale-110 transition-transform" size={40} />
                                <h5 className="font-black text-xl uppercase mb-4 text-white">Surprise Checks & Audits</h5>
                                <div className="text-blue-50 text-sm font-medium leading-relaxed mb-6 space-y-3">
                                    <p>
                                        Our leadership team conducts unannounced midnight and daytime inspections to ensure 100% alertness. Strict disciplinary action is taken against any breach of protocol or inappropriate behavior.
                                    </p>
                                    <p>
                                        To maintain elite standards, all supervisory staff and guards undergo mandatory 2-day refresher training every six months, re-evaluating their tactical skills, fire safety, and code of conduct.
                                    </p>
                                </div>
                                {/* <button className="flex w-full sm:w-auto items-center justify-center gap-2 font-black text-[10px] uppercase tracking-widest bg-slate-950 px-6 py-3 rounded-xl hover:bg-white hover:text-blue-600 transition-all active:scale-95">
        View Compliance <ArrowRight size={14} />
    </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrainingDetailsLight;
