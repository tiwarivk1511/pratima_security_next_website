"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldAlert, FileCheck, Users, UserPlus,
  CheckCircle2, ArrowRight, Search, Cog,
  ShieldCheck, Rocket, ChevronRight,
  MessageSquare,
  Sparkles,
  X,
  Target,
  Check
} from 'lucide-react';

// --- Firebase Imports ---
import { ref, push, set, serverTimestamp } from "firebase/database";
import { rtdb } from "../../../../firebaseConfig"; // Apna firebase config path check kar lein
import { Dialog, DialogContent, TextField, IconButton, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

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

  // --- NEW: Form & Loading States ---
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleOpen = (serviceTitle = '') => {
    setFormData(prev => ({ ...prev, service: serviceTitle }));
    setOpen(true);
  };

  const handleClose = () => {
    if (!loading) setOpen(false);
  };

  const handleDetailClick = (index: number) => {
    setActiveStep(index);
    const element = document.getElementById('service-methodology');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // --- NEW: Database Submission Logic ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const timestamp = serverTimestamp();
      const safeEmail = formData.email.replace(/\./g, '_');

      // 1. Staffing Request Collection
      const requestRef = push(ref(rtdb, 'staffing_requests'));
      await set(requestRef, {
        ...formData,
        createdAt: timestamp,
        status: 'pending'
      });

      // 2. Subscription Sync (Unique Email Logic)
      const subRef = ref(rtdb, `subscriptions/${safeEmail}`);
      await set(subRef, {
        userName: formData.fullName,
        userEmail: formData.email,
        subscribedAt: timestamp,
        status: 'active',
        source: 'staffing_form'
      });

      alert('Consultation Request Sent Successfully!');
      setFormData({ fullName: '', company: '', phone: '', email: '', service: '', message: '' });
      setOpen(false);

    } catch (err: any) {
      console.error("Staffing Form Error:", err);
      alert(`Error: ${err.message}`);
    } finally {
      setLoading(false);
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
                    onClick={() => handleOpen(service.title)}
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
                    className={`w-full flex items-center gap-6 p-6 rounded-[2rem] transition-all duration-300 border ${activeStep === idx
                      ? "bg-slate-900 border-slate-900 shadow-xl lg:translate-x-4"
                      : "bg-white border-slate-100 hover:border-blue-200"
                      }`}
                  >
                    <div className={`h-12 w-12 rounded-2xl flex items-center justify-center transition-colors ${activeStep === idx ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"
                      }`}>
                      {step.icon}
                    </div>
                    <div className="text-left">
                      <h4 className={`text-lg font-black uppercase tracking-tight ${activeStep === idx ? "text-white" : "text-slate-900"
                        }`}>
                        {`0${idx + 1}. ${step.title}`}
                      </h4>
                    </div>
                    <ChevronRight
                      className={`ml-auto transition-transform ${activeStep === idx ? "text-blue-400 rotate-90" : "text-slate-300"
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
        <div className="absolute inset-0 bg-[#05070a]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1e3a8a_0%,_transparent_65%)] opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#2563eb_0%,_transparent_50%)] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070a] via-transparent to-blue-950/30" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[4rem] p-12 md:p-20 text-center overflow-hidden"
          >
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
                onClick={() => handleOpen()}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <MessageSquare size={18} />
                Consult an Expert
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- FORM DIALOG --- */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm" PaperProps={{ sx: dialogSx }}>
        <DialogContent sx={{ p: { xs: 4, md: 6 }, position: 'relative', overflow: 'hidden' }}>

          {/* Decorative Background Element for Modern Look */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

          <div className="relative z-10">
            {/* Header Section */}
            <div className="flex items-start justify-between mb-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-[1000] text-slate-900 uppercase tracking-tighter leading-none">
                  Request <span className="text-blue-600">Expert</span> Advice
                </h2>
                <div className="flex items-center gap-2 mt-4">
                  <span className="w-12 h-[3px] bg-blue-600 rounded-full" />
                  <p className="text-slate-500 text-[10px] font-black tracking-[0.2em] uppercase">
                    Staffing & Compliance Solutions
                  </p>
                </div>
              </div>
              <IconButton
                onClick={handleClose}
                disabled={loading}
                className="bg-slate-50 hover:bg-red-50 hover:text-red-500 transition-all duration-300"
              >
                <X size={20} />
              </IconButton>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <TextField
                  label="Full Name"
                  variant="filled"
                  fullWidth
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                  sx={inputStyle}
                />
                <TextField
                  label="Company Name"
                  variant="filled"
                  fullWidth
                  required
                  value={formData.company}
                  onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                  sx={inputStyle}
                />
              </div>

              {/* Row 2: Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <TextField
                  label="Phone Number"
                  variant="filled"
                  fullWidth
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  sx={inputStyle}
                />
                <TextField
                  label="Work Email"
                  variant="filled"
                  fullWidth
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  sx={inputStyle}
                />
              </div>

              {/* Row 3 - Service Selection */}
              <FormControl fullWidth variant="filled" sx={{ ...inputStyle, mb: 2 }} required> {/* mb: 2 add kiya gaya */}
                <InputLabel id="service-select-label" sx={{ fontWeight: 800, fontSize: '0.75rem', mt: 0.5 }}>
                  Core Service of Interest
                </InputLabel>
                <Select
                  labelId="service-select-label"
                  value={formData.service}
                  onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
                  disableUnderline
                  sx={{
                    '& .MuiSelect-select': {
                      pt: 4, // Padding badhayi gayi taaki label se na takraye
                      pb: 2,
                      fontWeight: 700,
                      fontSize: '0.9rem'
                    }
                  }}
                >
                  {SERVICES_DATA.map((service, idx) => (
                    <MenuItem key={idx} value={service.title} sx={menuItemStyle}>
                      {service.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* Row 4 - Message Box (Ab ye dropdown se door rahega) */}
              <TextField
                label="Specific Requirements"
                variant="filled"
                fullWidth
                multiline
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                sx={{
                  ...inputStyle,
                  '& .MuiFilledInput-root': {
                    ...inputStyle['& .MuiFilledInput-root'],
                    pt: 3, // Text area ke andar top padding fix
                  }
                }}
              />

              {/* Trust Indicator */}
              <div className="mt-8 relative group overflow-hidden flex items-center justify-between p-5 bg-gradient-to-r from-slate-50/80 to-white rounded-[1.5rem] border border-slate-100/80 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-100">

                {/* Subtitle Glass Glow Effect */}
                <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-blue-50/40 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />

                <div className="flex items-center gap-4 relative z-10">
                  <div className="relative flex items-center justify-center">
                    {/* Triple Ring Pulse for Modern Look */}
                    <div className="absolute h-4 w-4 bg-green-400/20 rounded-full animate-ping" />
                    <div className="absolute h-3 w-3 bg-green-400/40 rounded-full animate-pulse" />
                    <div className="relative h-2.5 w-2.5 bg-green-500 rounded-full shadow-[0_0_12px_rgba(34,197,94,0.6)] border border-white" />
                  </div>

                  <div className="flex flex-col">
                    <p className="text-[10px] text-slate-800 font-[900] uppercase tracking-[0.15em] leading-tight">
                      Consultant <span className="text-blue-600">Live</span>
                    </p>
                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">
                      Priority Support Active
                    </p>
                  </div>
                </div>

                {/* Minimalist Divider */}
                <div className="h-6 w-[1px] bg-gradient-to-b from-transparent via-slate-200 to-transparent" />

                <div className="text-right relative z-10">
                  <p className="text-[9px] text-slate-400 font-black uppercase tracking-[0.1em] mb-0.5">
                    Avg. Response
                  </p>
                  <div className="flex items-center justify-end gap-1">
                    <span className="text-[12px] text-slate-900 font-black">24</span>
                    <span className="text-[9px] text-blue-600 font-black uppercase">Hours</span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.01, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className={`group relative w-full overflow-hidden flex items-center justify-center gap-4 bg-[#0f172a] text-white py-5 rounded-[1.5rem] font-black uppercase text-xs tracking-[0.3em] shadow-xl hover:shadow-blue-500/20 transition-all duration-500 ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-600'}`}
              >
                {loading ? (
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processing...
                  </div>
                ) : (
                  <>
                    Send Inquiry <Target size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

// --- STYLING HELPERS ---
const dialogSx = {
  borderRadius: '2.5rem', bgcolor: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(20px)',
  boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', backgroundImage: 'none'
};

const inputStyle = {
  '& .MuiFilledInput-root': {
    bgcolor: '#f8fafc',
    borderRadius: '1.5rem',
    border: '1px solid #f1f5f9',
    transition: 'all 0.3s ease',
    '&:before, &:after': { display: 'none' },
    '&:hover': { bgcolor: '#f1f5f9', borderColor: '#e2e8f0' },
    '&.Mui-focused': { bgcolor: 'white', borderColor: '#2563eb', boxShadow: '0 10px 25px -5px rgba(37,99,235,0.1)' }
  },
  '& .MuiInputLabel-root': { color: '#64748b', fontWeight: 800, fontSize: '0.75rem', px: 1, py: 0.5 },
  '& .MuiInputLabel-root.Mui-focused': { color: '#2563eb' }
};

const menuItemStyle = {
  py: 2, px: 3, fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase',
  '&.Mui-selected': { bgcolor: 'blue.50', color: 'blue.600' },
  '&:hover': { bgcolor: 'slate.50' }
};

export default StaffingServicesFull;
