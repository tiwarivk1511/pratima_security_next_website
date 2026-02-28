"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, UserCheck, Users, Target, Eye, Briefcase,
  Factory, ShoppingBag, Zap, Navigation, UserRoundCheck, X, Check, ChevronDown
} from 'lucide-react';
import Image from 'next/image';
import { Dialog, DialogContent, TextField, IconButton, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

// --- DATA STRUCTURE ---

const SERVICES_DATA = [
  {
    id: 1,
    title: "Trained Security Guards",
    desc: "Our frontline security personnel are recruited from elite backgrounds including the Ex-Army, Police, and NCC. They undergo rigorous training modules covering physical endurance, fire safety protocols, first aid, and advanced emergency response. This ensures a disciplined presence that protects your property and assets around the clock with unwavering alertness.",
    image: "https://img1.wsimg.com/isteam/ip/f997cb5d-e6b8-4e6c-b940-a6a129efa554/1.jpg/:/cr=t:0.89%25,l:0%25,w:100%25,h:98.21%25/rs=w:388,h:388,cg:true", 
    icon: <UserCheck className="text-blue-600" size={24} />,
  },
  {
    id: 2,
    title: "Armed Security Guards",
    desc: "For high-stakes protection, our armed guards are highly proficient in handling licensed firearms with precision. Ideally suited for banks, high-value logistics, and sensitive installations, these professionals are trained in threat neutralization and situational combat, providing a formidable layer of defense against any criminal intrusion or high-risk threat.",
    image: "https://img1.wsimg.com/isteam/stock/5Wz3ge8/:/cr=t:0%25,l:16.69%25,w:66.61%25,h:99.99%25/rs=w:388,h:388,cg:true,m",
    icon: <ShieldCheck className="text-blue-600" size={24} />,
  },
  {
    id: 3,
    title: "Unarmed Security Guards",
    desc: "Our unarmed guards focus on vigilance, access control, and comprehensive visitor management. Expertly trained in surveillance and interpersonal communication, they are the perfect fit for residential complexes and corporate offices where maintaining a secure yet hospitable environment is paramount. They ensure total compliance with your facility's safety guidelines.",
    image: "https://img1.wsimg.com/isteam/ip/f997cb5d-e6b8-4e6c-b940-a6a129efa554/IMG-20210914-WA0014-3079a1c.jpg/:/cr=t:0%25,l:0%25,w:80.64%25,h:100%25/rs=w:388,h:388,cg:true",
    icon: <Users className="text-blue-600" size={24} />,
  },
  {
    id: 4,
    title: "Event Security Services",
    desc: "From massive concerts to high-profile corporate galas, we specialize in end-to-end crowd management. Our team handles entry/exit logistics, VIP escorting, and contingency planning with tactical expertise. We perform comprehensive sweep-checks and maintain a proactive stance to ensure your event proceeds seamlessly without any security disruptions.",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop",
    icon: <Target className="text-blue-600" size={24} />,
  },
  {
    id: 5,
    title: "Personal Security Officer",
    desc: "Designed for Celebrities, HNI's, and Executives, our PSO services provide discrete yet robust personal protection. Our officers are experts in tactical combat, situational awareness, and defensive driving. They act as a silent shadow, identifying and mitigating potential risks before they materialize, ensuring your personal safety in any environment.",
    image: "https://img1.wsimg.com/isteam/ip/f997cb5d-e6b8-4e6c-b940-a6a129efa554/3.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:90.21%25/rs=w:388,h:388,cg:true",
    icon: <Eye className="text-blue-600" size={24} />,
  },
  {
    id: 6,
    title: "Security Consulting",
    desc: "We offer professional risk assessment and strategic security auditing to identify vulnerabilities in your current setup. Our consultants design custom SOP (Standard Operating Procedure) manuals tailored to your specific business needs, ensuring alignment with international security standards and modern threat-prevention technologies to safeguard your future.",
    image: "https://img1.wsimg.com/isteam/stock/289/:/cr=t:0%25,l:24.49%25,w:66.67%25,h:100%25/rs=w:388,h:388,cg:true",
    icon: <Briefcase className="text-blue-600" size={24} />,
  },
  {
    id: 7,
    title: "Industrial Security Services",
    desc: "Factories and industrial hubs require a specialized approach to safety. Our guards are trained in perimeter patrolling, hazardous material awareness, and labor management protocols. We focus on preventing theft of industrial assets and ensuring that safety regulations are strictly followed at all entry and exit points of the manufacturing facility.",
    image: "https://tse3.mm.bing.net/th/id/OIP.dXw4iQ9dbBW0Oy-PpOZBLwAAAA?w=268&h=300&rs=1&pid=ImgDetMain&o=7&rm=300",
    icon: <Factory className="text-blue-600" size={24} />,
  },
  {
    id: 8,
    title: "Retail Security Services",
    desc: "Maintaining a safe shopping experience is crucial for retail success. Our retail-focused guards are experts in loss prevention, shoplifting deterrence, and conflict resolution. They blend into the retail environment to provide a sense of safety for customers while keeping a sharp eye on inventory protection and suspicious behavior.",
    image: "https://citadelprivatesecurity.com/wp-content/uploads/2022/09/m21.jpg",
    icon: <ShoppingBag className="text-blue-600" size={24} />,
  },
  {
    id: 9,
    title: "Gunman Services",
    desc: "Our gunmen are elite marksmen provided for high-risk environments that demand an immediate deterrent. Trained in tactical firearms handling and rapid-response threat neutralization, they provide an uncompromised security shield for premises requiring a heightened level of protection against potential armed threats or organized crime.",
    image: "https://img1.wsimg.com/isteam/stock/5Wz3ge8/:/cr=t:0%25,l:16.69%25,w:66.61%25,h:99.99%25/rs=w:388,h:388,cg:true,m",
    icon: <Zap className="text-blue-600" size={24} />,  
  },
  {
    id: 10,
    title: "Mobile Patrol Services",
    desc: "For expansive campuses and gated communities, we provide dynamic mobile security patrols. Utilizing GPS-tracked vehicles, our personnel conduct regular, randomized patrols to deter criminal activity. This ensures a rapid response to alarms and provides a visible security presence that covers more ground than static guarding alone.",
    image: "https://img1.wsimg.com/isteam/ip/f997cb5d-e6b8-4e6c-b940-a6a129efa554/a-c609ca3.jpg/:/cr=t:0%25,l:16.67%25,w:66.67%25,h:100%25/rs=w:388,h:388,cg:true",
    icon: <Navigation className="text-blue-600" size={24} />,
  },
  {
    id: 11,
    title: "Lady Security Guards",
    desc: "We provide specially trained female security professionals for environments where gender-specific sensitivity is required, such as women's hostels, hospitals, and female-only corporate events. They are experts in frisking, female visitor management, and ensuring a comfortable yet strictly secure environment for women and children.",
    image: "https://img1.wsimg.com/isteam/ip/f997cb5d-e6b8-4e6c-b940-a6a129efa554/lady-security-guard-380.webp/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:388,h:388,cg:true",
    icon: <UserRoundCheck className="text-blue-600" size={24} />,
  }
];

const SecurityServicesLight = () => {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpen = (serviceTitle = '') => {
    setSelectedService(serviceTitle);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <section className="relative py-24 bg-[#f8fafc] overflow-hidden" id='security-services'>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-slate-100 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}>
            <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] bg-blue-50 px-4 py-2 rounded-full mb-6 inline-block border border-blue-100">
              Reliable Manpower Solutions
            </span>
            <h2 className="text-4xl md:text-5xl font-[1000] text-slate-900 leading-tight uppercase tracking-tighter">
              Bespoke <span className="text-blue-600">Security</span> <br /> For Every Sector
            </h2>
          </motion.div>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-8 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => handleOpen(service.title)}
              className="group cursor-pointer bg-white rounded-[2rem] overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image src={service.image} alt={service.title} fill className="object-fit group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur p-3 rounded-2xl shadow-lg border border-slate-100">
                  {service.icon}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors uppercase tracking-tight">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {service.desc}
                </p>
                <div className="mt-6 flex items-center justify-between">
                   <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-lg">Book Survey</span>
                   <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <ChevronDown size={14} className="-rotate-90" />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CALLOUT */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-20 p-12 rounded-[3rem] bg-slate-900 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full" />
          <div className="relative z-10 text-center md:text-left">
            <h4 className="text-white text-3xl font-[1000] uppercase tracking-tighter mb-2">Secure Your Assets Today</h4>
            <p className="text-slate-400 font-medium text-lg">Book a complimentary site survey with our lead risk consultants.</p>
          </div>
          <button 
            onClick={() => handleOpen()}
            className="relative z-10 bg-blue-600 text-white px-14 py-6 rounded-2xl font-black uppercase text-xs tracking-[0.2em] hover:bg-white hover:text-blue-600 transition-all shadow-[0_20px_40px_rgba(37,99,235,0.3)] active:scale-95"
          >
            Schedule Assessment
          </button>
        </motion.div>
      </div>

      {/* --- FORM DIALOG --- */}
      <Dialog 
        open={open} 
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          sx: { 
            borderRadius: '2.5rem', 
            bgcolor: 'rgba(255,255,255,0.98)', 
            backdropFilter: 'blur(20px)',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
            backgroundImage: 'none'
          }
        }}
      >
        <DialogContent sx={{ p: { xs: 3, md: 6 } }}>
          {/* HEADER SECTION */}
          <div className="flex justify-between items-start mb-10">
            <div>
              <h2 className="text-3xl font-[1000] text-slate-900 uppercase tracking-tighter leading-none">Book Site Survey</h2>
              <div className="flex items-center gap-2 mt-3">
                <span className="w-10 h-1 bg-blue-600 rounded-full" />
                <p className="text-blue-600 text-[10px] font-black tracking-[0.2em] uppercase">Security Deployment Request</p>
              </div>
            </div>
            <IconButton onClick={handleClose} className="hover:rotate-90 transition-all duration-300 bg-slate-100 p-2">
              <X size={20} className="text-slate-600" />
            </IconButton>
          </div>

          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleClose(); alert('Assessment Requested Successfully!'); }}>
            
            {/* 1. IDENTITY (Name & Company) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <TextField fullWidth label="Your Full Name *" variant="filled" required sx={inputStyle} />
              <TextField fullWidth label="Company / Establishment" variant="filled" sx={inputStyle} />
            </div>

            {/* 2. COMMUNICATION (Phone & Email) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <TextField fullWidth label="Phone Number *" variant="filled" required sx={inputStyle} />
              <TextField fullWidth label="Email Address *" type="email" variant="filled" required sx={inputStyle} />
            </div>

            {/* 3. LOCATION (Address) */}
            <div className="py-1">
              <TextField 
                fullWidth 
                label="Deployment Site Address *" 
                variant="filled" 
                multiline 
                rows={2} 
                required 
                sx={inputStyle} 
              />
            </div>

            {/* 4. DETAILS (Service & Date) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FormControl fullWidth variant="filled" sx={inputStyle} required>
                <InputLabel sx={{ fontSize: '0.75rem' }}>Select Service *</InputLabel>
                <Select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  label="Select Service *"
                >
                  {SERVICES_DATA.map((s) => (
                    <MenuItem key={s.id} value={s.title} sx={{ fontWeight: 600 }}>
                      {s.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField 
                fullWidth 
                label="Preferred Survey Date *" 
                type="date" 
                variant="filled" 
                InputLabelProps={{ shrink: true }} 
                required
                sx={inputStyle} 
              />
            </div>

            {/* TRUST BADGE */}
            <div className="bg-blue-50/40 p-5 rounded-[1.5rem] border border-blue-100 flex items-center gap-4 my-2">
              <div className="h-10 w-10 rounded-full bg-white text-blue-600 flex items-center justify-center flex-shrink-0 shadow-sm border border-blue-100">
                <Check size={20} strokeWidth={3} />
              </div>
              <p className="text-[11px] text-slate-500 font-bold leading-relaxed uppercase tracking-tight">
                Our team will conduct a <span className="text-blue-600">24-point vulnerability audit</span> at your site on the selected date.
              </p>
            </div>

            {/* SUBMIT SECTION */}
            <div className="pt-2">
              <button 
                type="submit"
                className="w-full bg-[#0f172a] text-white py-5 rounded-[1.25rem] font-black uppercase text-xs tracking-[0.3em] hover:bg-blue-600 transition-all shadow-xl flex items-center justify-center gap-3 group active:scale-[0.98]"
              >
                Confirm Booking
                <Target size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="text-center text-[9px] text-slate-400 uppercase font-black tracking-[0.15em] mt-8 opacity-70">
                By submitting, you agree to our privacy policy and security protocols.
              </p>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

// --- STYLING CONSTANT ---
const inputStyle = {
  '& .MuiFilledInput-root': {
    bgcolor: '#f8fafc',
    borderRadius: '1.25rem',
    border: '1px solid #e2e8f0',
    transition: '0.3s all ease',
    '&:before, &:after': { display: 'none' },
    '&:hover': { bgcolor: '#f1f5f9' },
    '&.Mui-focused': { 
      bgcolor: 'white',
      borderColor: '#2563eb',
      boxShadow: '0 10px 15px -3px rgba(37,99,235,0.08)'
    }
  },
  '& .MuiInputLabel-root': { color: '#94a3b8', fontWeight: 800, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em' },
  '& .MuiInputLabel-root.Mui-focused': { color: '#2563eb' },
  '& .MuiSelect-select': { fontWeight: 700, color: '#0f172a' }
};

export default SecurityServicesLight;



