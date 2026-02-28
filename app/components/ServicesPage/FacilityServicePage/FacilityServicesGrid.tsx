"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brush, Leaf, Coffee, Settings, Zap, ArrowUpRight, 
  Users2, X, Check, Target, Calendar, Building2
} from 'lucide-react';
import Image from 'next/image';
import { Dialog, DialogContent, TextField, IconButton, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

// --- DATA STRUCTURE ---
const FACILITY_SERVICES = [
  {
    id: 1,
    category: "Soft Services",
    title: "Premium Housekeeping",
    desc: "Maintaining pristine environments through mechanized cleaning, waste management, and specialized floor care protocols for corporate and commercial spaces.",
    icon: <Brush size={24} />,
    image: "https://sih.edu.sg/wp-content/uploads/The-Multifaceted-Role-of-Housekeeping-in-the-Hospitality-Industry.jpg"
  },
  {
    id: 2,
    category: "Hard Services",
    title: "Technical Maintenance",
    desc: "Comprehensive HVAC, electrical, and plumbing upkeep. Our certified engineers ensure zero downtime for your critical facility infrastructure.",
    icon: <Settings size={24} />,
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    category: "Soft Services",
    title: "Horticulture & Landscaping",
    desc: "Enhancing your workspace aesthetics with professional garden maintenance, indoor plants management, and sustainable green-cover solutions.",
    icon: <Leaf size={24} />,
    image: "https://images.unsplash.com/photo-1557429287-b2e26467fc2b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 4,
    category: "Support Services",
    title: "Pantry & Cafeteria",
    desc: "Managed food and beverage services focusing on hygiene, nutrition, and professional hospitality for staff and executive guests.",
    icon: <Coffee size={24} />,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 5,
    category: "Hard Services",
    title: "Fire & Life Safety",
    desc: "Regular auditing and maintenance of fire suppression systems, alarms, and emergency protocols to ensure a 100% compliant and safe facility.",
    icon: <Zap size={24} />,
    image: "https://www.electronicsecuritycorp.com/wp-content/uploads/2023/02/Fire-life-safety-banner-scaled.jpg"
  },
  {
    id: 6,
    category: "Support Services",
    title: "Admin & Helpdesk",
    desc: "Streamlined front-office management, mailroom services, and centralized helpdesk support to optimize daily business operations.",
    icon: <Users2 size={24} />,
    image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2070&auto=format&fit=crop"
  }
];

const categories = ["All", "Soft Services", "Hard Services", "Support Services"];

const FacilityServicesGrid = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpen = (serviceTitle = '') => {
    setSelectedService(serviceTitle);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const filteredServices = activeTab === "All" 
    ? FACILITY_SERVICES 
    : FACILITY_SERVICES.filter(s => s.category === activeTab);

  return (
    <section className="py-24 bg-white" id="facility-services">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          {/* <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-[1000] text-slate-900 uppercase tracking-tighter mb-4">
              Our <span className="text-blue-600">Core</span> <br /> Capabilities
            </h2>
            <p className="text-slate-500 font-medium text-lg">
              Integrated solutions designed to simplify operations and enhance asset value.
            </p>
          </div> */}

          <div className="max-w-2xl">
  <h2 className="text-4xl md:text-6xl font-[1000] text-slate-900 uppercase tracking-tighter mb-4">
    Our <span className="text-blue-600">Core</span> <br /> Capabilities
  </h2>
  <div className="space-y-4">
    <p className="text-slate-600 font-semibold text-xl leading-snug">
      Beyond basic maintenance—we provide an integrated ecosystem for smarter workspaces.
    </p>
    <p className="text-slate-500 font-medium text-base leading-relaxed">
      By synchronizing technical maintenance with premium soft services, we eliminate operational silos. 
      This unified approach doesn't just keep your facility running; it maximizes the lifecycle of your 
      critical assets and creates a high-performance environment for your people.
    </p>
  </div>
</div>

          <div className="flex flex-wrap gap-2 bg-slate-100 p-1.5 rounded-2xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                  activeTab === cat ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* SERVICES GRID */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative bg-slate-50 rounded-[2.5rem] p-4 border border-transparent hover:border-blue-100 hover:bg-white transition-all duration-500 flex flex-col cursor-pointer"
                onClick={() => handleOpen(service.title)}
              >
                <div className="relative h-64 w-full rounded-[2rem] overflow-hidden mb-6 shrink-0">
                  <Image src={service.image} alt={service.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-sm">
                    <span className="text-[9px] font-black text-slate-900 uppercase tracking-widest">{service.category}</span>
                  </div>
                </div>

                <div className="px-4 pb-4 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="h-12 w-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-100">
                      {service.icon}
                    </div>
                    <div className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight uppercase group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Enquire Service</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>


        {/* --- PROMOTIONAL CTA SECTION --- */}
        <div className="max-w-7xl mx-auto px-6 mt-20">
          <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative rounded-[3rem] bg-slate-900 overflow-hidden p-8 md:p-16 shadow-2xl"
  >
    {/* Background Pattern */}
    <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-l from-blue-600 to-transparent" />
      <svg className="w-full h-full text-white" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#grid)" />
      </svg>
    </div>

    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
      <div className="text-center lg:text-left max-w-2xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em]">Partner with the best</span>
        </div>
        
        <h3 className="text-3xl md:text-5xl font-[1000] text-white uppercase tracking-tighter leading-none mb-6">
          Need a <span className="text-blue-500">Tailored</span> Management <br className="hidden md:block" /> Plan for your property?
        </h3>
        <p className="text-slate-400 text-lg font-medium">
          Get a comprehensive site assessment and a custom service proposal 
          within 24 hours. No hidden costs, just pure efficiency.
        </p>
      </div>

      <div className="shrink-0">
        <button 
          onClick={() => handleOpen('Full Facility Audit')}
          className="group relative bg-blue-600 text-white px-12 py-7 rounded-[2rem] font-black uppercase text-xs tracking-[0.3em] hover:bg-white hover:text-blue-600 transition-all duration-500 shadow-[0_20px_40px_rgba(37,99,235,0.3)] active:scale-95 flex items-center gap-4"
        >
          <span className="relative z-10">Request Free Quote</span>
          <div className="bg-white/20 p-2 rounded-xl group-hover:bg-blue-600/10 transition-colors">
            <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-300" />
          </div>
        </button>
      </div>
    </div>

    {/* Small Trust Badges */}
    <div className="relative z-10 mt-12 flex flex-wrap justify-center lg:justify-start gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
      <div className="flex items-center gap-2">
        <Check className="text-white" size={16} />
        <span className="text-white text-[10px] font-bold uppercase tracking-widest">ISO Certified</span>
      </div>
      <div className="flex items-center gap-2">
        <Check className="text-white" size={16} />
        <span className="text-white text-[10px] font-bold uppercase tracking-widest">Pan India Presence</span>
      </div>
      <div className="flex items-center gap-2">
        <Check className="text-white" size={16} />
        <span className="text-white text-[10px] font-bold uppercase tracking-widest">100% Compliance</span>
      </div>
    </div>
  </motion.div>
</div>
      </div>


      {/* --- DYNAMIC FACILITY ENQUIRY FORM --- */}
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
          {/* Header */}
          <div className="flex justify-between items-start mb-10">
            <div>
              <h2 className="text-3xl font-[1000] text-slate-900 uppercase tracking-tighter leading-none">Service Enquiry</h2>
              <div className="flex items-center gap-2 mt-3">
                <span className="w-10 h-1 bg-blue-600 rounded-full" />
                <p className="text-blue-600 text-[10px] font-black tracking-[0.2em] uppercase">Facility Management Solution</p>
              </div>
            </div>
            <IconButton onClick={handleClose} className="hover:rotate-90 transition-all duration-300 bg-slate-100 p-2">
              <X size={20} className="text-slate-600" />
            </IconButton>
          </div>

          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleClose(); alert('Enquiry Sent Successfully!'); }}>
            
            {/* 1. Identity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <TextField fullWidth label="Your Full Name *" variant="filled" required sx={inputStyle} />
              <TextField fullWidth label="Company / Establishment" variant="filled" sx={inputStyle} />
            </div>

            {/* 2. Communication */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <TextField fullWidth label="Phone Number *" variant="filled" required sx={inputStyle} />
              <TextField fullWidth label="Official Email *" type="email" variant="filled" required sx={inputStyle} />
            </div>

            {/* 3. Site Address */}
            <div className="py-1">
              <TextField 
                fullWidth 
                label="Site / Facility Address *" 
                variant="filled" 
                multiline 
                rows={2} 
                required 
                sx={inputStyle} 
              />
            </div>

            {/* 4. Service Selection & Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FormControl fullWidth variant="filled" sx={inputStyle} required>
                <InputLabel sx={{ fontSize: '0.75rem' }}>Select Service *</InputLabel>
                <Select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  label="Select Service *"
                >
                  {FACILITY_SERVICES.map((s) => (
                    <MenuItem key={s.id} value={s.title} sx={{ fontWeight: 600 }}>{s.title}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField 
                fullWidth 
                label="Required From Date" 
                type="date" 
                variant="filled" 
                InputLabelProps={{ shrink: true }} 
                required
                sx={inputStyle} 
              />
            </div>

            {/* Trust Badge */}
            <div className="bg-blue-50/40 p-5 rounded-[1.5rem] border border-blue-100 flex items-center gap-4 my-2">
              <div className="h-10 w-10 rounded-full bg-white text-blue-600 flex items-center justify-center flex-shrink-0 shadow-sm border border-blue-100">
                <Check size={20} strokeWidth={3} />
              </div>
              <p className="text-[11px] text-slate-500 font-bold leading-relaxed uppercase tracking-tight">
                Our operations manager will contact you for a <span className="text-blue-600">customized quote</span> within 24 hours.
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button 
                type="submit"
                className="w-full bg-[#0f172a] text-white py-5 rounded-[1.25rem] font-black uppercase text-xs tracking-[0.3em] hover:bg-blue-600 transition-all shadow-xl flex items-center justify-center gap-3 group active:scale-[0.98]"
              >
                Send Request
                <Target size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

// --- CUSTOM INPUT STYLING ---
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

export default FacilityServicesGrid;

// "use client";
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   Brush, Leaf, Coffee, HardHat, 
//   Settings, Zap, Droplets, ChevronRight, ArrowUpRight, 
//   Users2
// } from 'lucide-react';
// import Image from 'next/image';

// const FACILITY_SERVICES = [
//   {
//     id: 1,
//     category: "Soft Services",
//     title: "Premium Housekeeping",
//     desc: "Maintaining pristine environments through mechanized cleaning, waste management, and specialized floor care protocols for corporate and commercial spaces.",
//     icon: <Brush size={24} />,
//     image: "https://sih.edu.sg/wp-content/uploads/The-Multifaceted-Role-of-Housekeeping-in-the-Hospitality-Industry.jpg?q=80&w=2070&auto=format&fit=crop"
//   },
//   {
//     id: 2,
//     category: "Hard Services",
//     title: "Technical Maintenance",
//     desc: "Comprehensive HVAC, electrical, and plumbing upkeep. Our certified engineers ensure zero downtime for your critical facility infrastructure.",
//     icon: <Settings size={24} />,
//     image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop"
//   },
//   {
//     id: 3,
//     category: "Soft Services",
//     title: "Horticulture & Landscaping",
//     desc: "Enhancing your workspace aesthetics with professional garden maintenance, indoor plants management, and sustainable green-cover solutions.",
//     icon: <Leaf size={24} />,
//     image: "https://images.unsplash.com/photo-1557429287-b2e26467fc2b?q=80&w=2070&auto=format&fit=crop"
//   },
//   {
//     id: 4,
//     category: "Support Services",
//     title: "Pantry & Cafeteria",
//     desc: "Managed food and beverage services focusing on hygiene, nutrition, and professional hospitality for staff and executive guests.",
//     icon: <Coffee size={24} />,
//     image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
//   },
//   {
//     id: 5,
//     category: "Hard Services",
//     title: "Fire & Life Safety",
//     desc: "Regular auditing and maintenance of fire suppression systems, alarms, and emergency protocols to ensure a 100% compliant and safe facility.",
//     icon: <Zap size={24} />,
//     image: "https://www.electronicsecuritycorp.com/wp-content/uploads/2023/02/Fire-life-safety-banner-scaled.jpg"
//   },
//   {
//     id: 6,
//     category: "Support Services",
//     title: "Admin & Helpdesk",
//     desc: "Streamlined front-office management, mailroom services, and centralized helpdesk support to optimize daily business operations.",
//     icon: <Users2 size={24} />,
//     image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2070&auto=format&fit=crop"
//   }
// ];

// const categories = ["All", "Soft Services", "Hard Services", "Support Services"];

// const FacilityServicesGrid = () => {
//   const [activeTab, setActiveTab] = useState("All");

//   const filteredServices = activeTab === "All" 
//     ? FACILITY_SERVICES 
//     : FACILITY_SERVICES.filter(s => s.category === activeTab);

//   return (
//     <section className="py-24 bg-white" id="facility-services">
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* HEADER */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
//           <div className="max-w-2xl">
//             <h2 className="text-4xl md:text-6xl font-[1000] text-slate-900 uppercase tracking-tighter mb-4">
//               Our <span className="text-blue-600">Core</span> <br /> Capabilities
//             </h2>
//             <p className="text-slate-500 font-medium text-lg">
//               Integrated solutions designed to simplify operations and enhance asset value.
//             </p>
//           </div>

//           {/* FILTER TABS */}
//           <div className="flex flex-wrap gap-2 bg-slate-100 p-1.5 rounded-2xl">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setActiveTab(cat)}
//                 className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
//                   activeTab === cat 
//                   ? "bg-white text-blue-600 shadow-sm" 
//                   : "text-slate-500 hover:text-slate-900"
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* GRID */}
//         <motion.div 
//           layout
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           <AnimatePresence mode="popLayout">
//             {filteredServices.map((service) => (
//               <motion.div
//                 key={service.id}
//                 layout
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 transition={{ duration: 0.3 }}
//                 className="group relative bg-slate-50 rounded-[2.5rem] p-4 border border-transparent hover:border-blue-100 hover:bg-white transition-all duration-500"
//               >
//                 {/* Image Container */}
//                 <div className="relative h-64 w-full rounded-[2rem] overflow-hidden mb-6">
//                   <Image 
//                     src={service.image} 
//                     alt={service.title} 
//                     fill 
//                     className="object-cover group-hover:scale-110 transition-transform duration-700" 
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                  
//                   {/* Category Tag */}
//                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-sm">
//                     <span className="text-[9px] font-black text-slate-900 uppercase tracking-widest">
//                       {service.category}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="px-4 pb-4">
//                   <div className="flex items-start justify-between mb-4">
//                     <div className="h-12 w-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-100">
//                       {service.icon}
//                     </div>
//                     <div className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:border-slate-900 group-hover:text-white transition-all duration-300">
//                       <ArrowUpRight size={20} />
//                     </div>
//                   </div>

//                   <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight uppercase group-hover:text-blue-600 transition-colors">
//                     {service.title}
//                   </h3>
//                   <p className="text-slate-500 text-sm leading-relaxed">
//                     {service.desc}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default FacilityServicesGrid;