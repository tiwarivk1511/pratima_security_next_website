"use client";
import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, MapPin, Clock, ArrowRight, 
  Search, Inbox, X, Upload, CheckCircle2, 
  AlertCircle, Sparkles, Target, ShieldCheck,
  Zap, Laptop, UserCheck, FileText, IndianRupee,
  Building2
} from 'lucide-react';

// --- Types & Interfaces ---
interface Job {
  id: number;
  title: string;
  category: string;
  location: string;
  type: string;
  salary: string;
  minExp: number;
  description: string;
}

const JobBoard = () => {
  // --- States ---
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Form States
  const [experience, setExperience] = useState("");
  const [error, setError] = useState("");
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // --- Data ---
  const categories = ["All", "Operations", "HR & Admin", "Sales", "Compliance"];
  
  const jobs: Job[] = [
    {
      id: 1,
      title: "Operations Manager",
      category: "Operations",
      location: "Gurugram, HR",
      type: "Full-time",
      salary: "6-8 LPA",
      minExp: 3,
      description: "Lead high-impact factory operations and streamline logistics with a focus on 100% operational efficiency and zero downtime."
    },
    {
      id: 2,
      title: "Statutory Compliance Officer",
      category: "Compliance",
      location: "Mumbai, MH",
      type: "Full-time",
      salary: "5-7 LPA",
      minExp: 2,
      description: "Navigate complex labor laws and ensure seamless ESI, PF, and Factory Act audits for India's leading retail brands."
    },
    {
      id: 3,
      title: "Talent Acquisition Specialist",
      category: "HR & Admin",
      location: "Remote / Delhi",
      type: "Contract",
      salary: "4-6 LPA",
      minExp: 1,
      description: "Execute large-scale recruitment strategies to find the next generation of talent for government and SME sectors."
    }
  ];

  // --- Logic ---
  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesTab = activeTab === "All" || job.category === activeTab;
      const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            job.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setSelectedFileName(file.name);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (selectedJob && parseInt(experience) < selectedJob.minExp) {
      setError(`Minimum ${selectedJob.minExp} years of experience is required for this role.`);
      return;
    }
    setIsSubmitted(true);
  };

  const openForm = (job: Job | null) => {
    setSelectedJob(job || { 
      id: 0, title: "General Application", category: "General", 
      location: "N/A", type: "Full-time", salary: "Negotiable", 
      minExp: 0, description: "Submit your CV for future opportunities." 
    });
    setIsSubmitted(false);
    setExperience("");
    setError("");
    setSelectedFileName(null);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 pb-20">
      
      {/* --- HERO SECTION --- */}
      <section id="jobs-listing" className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8"
          >
            <Sparkles size={14} /> Join the revolution
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-[1000] tracking-tighter leading-[0.85] mb-12">
            BUILD THE <br/> <span className="text-blue-600 italic underline decoration-blue-100">FUTURE</span> WITH US
          </h1>

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="relative group shadow-2xl shadow-blue-500/5">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={24} />
              <input 
                type="text"
                placeholder="Search by role, city or expertise..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-16 pr-8 py-7 bg-white border border-slate-100 rounded-[2.5rem] text-lg font-bold outline-none focus:ring-4 focus:ring-blue-500/10 transition-all"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button 
                  key={cat} 
                  onClick={() => setActiveTab(cat)}
                  className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === cat ? "bg-slate-900 text-white shadow-lg" : "bg-white text-slate-400 hover:bg-slate-100"}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- JOB LISTING SECTION --- */}
      <section className="px-6">
        <div className="max-w-5xl mx-auto space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="group relative bg-white border border-slate-100 rounded-[3rem] p-1 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)]"
                >
                  <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="flex-1 space-y-6">
                      <div className="flex items-center gap-4">
                        <span className="px-4 py-1.5 bg-blue-50 text-blue-700 rounded-xl text-[10px] font-black uppercase tracking-widest">{job.category}</span>
                        <span className="flex items-center gap-1.5 text-slate-400 text-[11px] font-bold uppercase tracking-widest">
                            <Clock size={14} className="text-blue-500"/> {job.type}</span>
                      </div>
                      <div>
                        <h3 className="text-4xl font-black tracking-tight group-hover:text-blue-600 transition-colors">{job.title}</h3>
                        <p className="mt-4 text-slate-500 font-medium leading-relaxed max-w-xl">{job.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-8 pt-2">
                        <div className="flex items-center gap-2.5 text-slate-600">
                          <MapPin size={18} className="text-blue-600" />
                          <span className="text-xs font-black uppercase tracking-widest">{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-slate-600">
                          <Briefcase size={18} className="text-blue-600" />
                          <span className="text-xs font-black uppercase tracking-widest">{job.salary}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-row md:flex-col items-center gap-8 w-full md:w-auto border-t md:border-t-0 md:border-l border-slate-100 pt-8 md:pt-0 md:pl-12">
                      <div className="text-center flex-1 md:flex-none">
                        <div className="text-3xl font-[1000] text-slate-900">{job.minExp}+</div>
                        <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Years Exp</div>
                      </div>
                      <button 
                        onClick={() => openForm(job)}
                        className="px-12 py-6 bg-slate-900 text-white rounded-[2rem] font-black uppercase text-[10px] tracking-[0.2em] shadow-xl hover:bg-blue-600 transition-all active:scale-95 flex items-center gap-3 shrink-0"
                      >
                        Apply Now <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-24 bg-white rounded-[4rem] border-2 border-dashed border-slate-100 text-center px-6">
                <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner"><Inbox size={48} className="text-slate-200" /></div>
                <h2 className="text-3xl font-[1000] text-slate-900 uppercase italic mb-4">No Openings Found</h2>
                <button onClick={() => openForm(null)} className="px-12 py-6 bg-blue-600 text-white rounded-[2rem] font-black uppercase text-[10px] tracking-[0.2em]">Drop Your Resume</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* --- MASTER APPLICATION MODAL --- */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedJob(null)} className="absolute inset-0 bg-slate-900/90 backdrop-blur-xl" />
            
            <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }} className="relative bg-white w-full max-w-3xl rounded-[4rem] shadow-2xl overflow-y-auto max-h-[90vh]">
              <button onClick={() => setSelectedJob(null)} className="absolute top-10 right-10 p-3 bg-slate-50 rounded-full text-slate-400 hover:text-slate-900 transition-colors z-20"><X size={24} /></button>
              
              <div className="p-12 md:p-20">
                {!isSubmitted ? (
                  <>
                    <div className="mb-12">
                      <div className="flex items-center gap-3 text-blue-600 mb-4 font-black uppercase text-[10px] tracking-[0.3em]"><Zap size={16} fill="currentColor" /> Hiring Application</div>
                      <h3 className="text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-4">{selectedJob.title}</h3>
                      <div className="flex gap-6 text-slate-400 font-bold text-xs uppercase tracking-widest">
                        <span className="flex items-center gap-2"><MapPin size={14}/> {selectedJob.location}</span>
                        <span className="flex items-center gap-2"><Target size={14}/> Min {selectedJob.minExp} Years Required</span>
                      </div>
                    </div>

                    <form className="space-y-10" onSubmit={handleSubmit}>
                      {/* Section 1: Personal */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Full Name</label>
                          <input required type="text" placeholder="e.g. Rahul Sharma" className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 outline-none font-bold" />
                        </div>
                        <div className="space-y-3">
                          <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Email</label>
                          <input required type="email" placeholder="rahul@example.com" className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 outline-none font-bold" />
                        </div>
                      </div>

                      {/* Section 2: Experience & Role (FIXED WITH CURRENT POSITION) */}
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Current Position / Job Role</label>
                            <input required type="text" placeholder="e.g. Senior Executive" className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 outline-none font-bold" />
                          </div>
                          <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Current Company</label>
                            <div className="relative">
                              <Building2 className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                              <input required type="text" placeholder="Organization Name" className="w-full pl-14 pr-8 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 outline-none font-bold" />
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Total Experience (Years)</label>
                            <input 
                              required type="number" value={experience} onChange={(e) => setExperience(e.target.value)}
                              placeholder="Total Years" 
                              className={`w-full px-8 py-5 bg-slate-50 border rounded-2xl focus:ring-4 outline-none font-bold ${error ? 'border-red-500 bg-red-50' : 'border-slate-100'}`} 
                            />
                            {error && <p className="text-[10px] text-red-500 font-bold flex items-center gap-1 mt-1"><AlertCircle size={12}/> {error}</p>}
                          </div>
                          <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Notice Period (Days)</label>
                            <input required type="number" placeholder="e.g. 30" className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 outline-none font-bold" />
                          </div>
                        </div>
                      </div>

                      {/* Section 3: Salary Package */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Current CTC (LPA)</label>
                          <div className="relative">
                              <IndianRupee className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                              <input required type="number" step="0.1" placeholder="e.g. 5.5" className="w-full pl-14 pr-8 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 outline-none font-bold" />
                          </div>
                        </div>
                        <div className="space-y-3">
                          <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Expected CTC (LPA)</label>
                          <div className="relative">
                              <IndianRupee className="absolute left-6 top-1/2 -translate-y-1/2 text-blue-400" size={18} />
                              <input required type="number" step="0.1" placeholder="e.g. 8.0" className="w-full pl-14 pr-8 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 outline-none font-bold" />
                          </div>
                        </div>
                      </div>

                      {/* Section 4: File Upload */}
                      <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Curriculum Vitae (PDF/DOCX)</label>
                        <div 
                          onClick={() => fileInputRef.current?.click()}
                          className={`flex flex-col items-center justify-center w-full h-44 border-2 border-dashed rounded-[2.5rem] cursor-pointer transition-all ${selectedFileName ? 'border-emerald-400 bg-emerald-50/30' : 'border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-400'} group relative`}
                        >
                          {selectedFileName ? (
                            <div className="text-center animate-in zoom-in duration-300">
                               <FileText className="text-emerald-500 mx-auto mb-3" size={40} />
                               <p className="text-sm font-bold text-slate-900 px-8 line-clamp-1">{selectedFileName}</p>
                            </div>
                          ) : (
                            <>
                              <Upload className="text-slate-300 group-hover:text-blue-600 mb-3" size={32} />
                              <p className="text-xs font-black text-slate-400 uppercase tracking-widest group-hover:text-blue-600 text-center px-4">Select your professional CV</p>
                              <p className="text-[9px] text-slate-300 mt-2 font-bold uppercase tracking-widest">PDF, DOC, DOCX up to 5MB</p>
                            </>
                          )}
                          <input ref={fileInputRef} type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={handleFileChange} required />
                        </div>
                      </div>

                      <button type="submit" className="w-full py-8 bg-blue-600 text-white rounded-[2.5rem] font-black uppercase text-xs tracking-[0.3em] shadow-2xl shadow-blue-200 hover:bg-slate-900 transition-all flex items-center justify-center gap-4 group/btn">
                        Submit Application <ArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
                      </button>
                    </form>
                  </>
                ) : (
                  <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="text-center py-10">
                    <div className="w-32 h-32 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-10 shadow-inner"><CheckCircle2 size={64} /></div>
                    <h3 className="text-5xl font-black text-slate-900 uppercase tracking-tighter mb-6">Application <br/> Received!</h3>
                    <p className="text-slate-500 font-bold mb-12 max-w-sm mx-auto uppercase text-[10px] tracking-widest">We will reach out to you shortly.</p>
                    <button onClick={() => setSelectedJob(null)} className="px-16 py-6 bg-slate-900 text-white rounded-[2rem] font-black uppercase text-[10px] tracking-[0.2em]">Done</button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JobBoard;


// "use client";
// import React, { useState, useMemo, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   Briefcase, MapPin, Clock, ArrowRight, 
//   Search, Inbox, X, Upload, CheckCircle2, 
//   AlertCircle, Sparkles, Target, ShieldCheck,
//   Zap, Laptop, UserCheck, FileText
// } from 'lucide-react';

// // --- Types & Interfaces ---
// interface Job {
//   id: number;
//   title: string;
//   category: string;
//   location: string;
//   type: string;
//   salary: string;
//   minExp: number;
//   description: string;
// }

// const JobBoard = () => {
//   // --- States ---
//   const [activeTab, setActiveTab] = useState("All");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedJob, setSelectedJob] = useState<Job | null>(null);
//   const [isSubmitted, setIsSubmitted] = useState(false);
  
//   // Form States
//   const [experience, setExperience] = useState("");
//   const [error, setError] = useState("");

//   // --- FILE UPLOAD FIX STATES ---
//   const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   // --- Data ---
//   const categories = ["All", "Operations", "HR & Admin", "Sales", "Compliance"];
  
//   const jobs: Job[] = [
//     {
//       id: 1,
//       title: "Operations Manager",
//       category: "Operations",
//       location: "Gurugram, HR",
//       type: "Full-time",
//       salary: "6-8 LPA",
//       minExp: 3,
//       description: "Lead high-impact factory operations and streamline logistics with a focus on 100% operational efficiency and zero downtime."
//     },
//     {
//       id: 2,
//       title: "Statutory Compliance Officer",
//       category: "Compliance",
//       location: "Mumbai, MH",
//       type: "Full-time",
//       salary: "5-7 LPA",
//       minExp: 2,
//       description: "Navigate complex labor laws and ensure seamless ESI, PF, and Factory Act audits for India's leading retail brands."
//     },
//     {
//       id: 3,
//       title: "Talent Acquisition Specialist",
//       category: "HR & Admin",
//       location: "Remote / Delhi",
//       type: "Contract",
//       salary: "4-6 LPA",
//       minExp: 1,
//       description: "Execute large-scale recruitment strategies to find the next generation of talent for government and SME sectors."
//     }
//   ];

//   // --- Logic ---
//   const filteredJobs = useMemo(() => {
//     return jobs.filter(job => {
//       const matchesTab = activeTab === "All" || job.category === activeTab;
//       const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
//                             job.location.toLowerCase().includes(searchQuery.toLowerCase());
//       return matchesTab && matchesSearch;
//     });
//   }, [activeTab, searchQuery]);

//   // --- FILE HANDLER FIX ---
//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setSelectedFileName(file.name);
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");

//     // Professional Eligibility Check
//     if (selectedJob && parseInt(experience) < selectedJob.minExp) {
//       setError(`Minimum ${selectedJob.minExp} years of experience is required for this role.`);
//       return;
//     }
//     setIsSubmitted(true);
//   };

//   const openForm = (job: Job | null) => {
//     setSelectedJob(job || { 
//       id: 0, title: "General Application", category: "General", 
//       location: "N/A", type: "Full-time", salary: "Negotiable", 
//       minExp: 0, description: "Submit your CV for future opportunities." 
//     });
//     setIsSubmitted(false);
//     setExperience("");
//     setError("");
//     setSelectedFileName(null); // Reset file on new form open
//   };

//   return (
//     <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 pb-20">
      
//       {/* --- HERO SECTION --- */}
//       <section className="pt-32 pb-16 px-6">
//         <div className="max-w-6xl mx-auto text-center">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8"
//           >
//             <Sparkles size={14} /> Join the revolution
//           </motion.div>
//           <h1 className="text-6xl md:text-8xl font-[1000] tracking-tighter leading-[0.85] mb-12">
//             BUILD THE <br/> <span className="text-blue-600 italic underline decoration-blue-100">FUTURE</span> WITH US
//           </h1>

//           {/* Search Bar & Tabs */}
//           <div className="max-w-3xl mx-auto space-y-8">
//             <div className="relative group shadow-2xl shadow-blue-500/5">
//               <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={24} />
//               <input 
//                 type="text"
//                 placeholder="Search by role, city or expertise..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-16 pr-8 py-7 bg-white border border-slate-100 rounded-[2.5rem] text-lg font-bold outline-none focus:ring-4 focus:ring-blue-500/10 transition-all"
//               />
//             </div>
            
//             <div className="flex flex-wrap justify-center gap-2">
//               {categories.map((cat) => (
//                 <button 
//                   key={cat} 
//                   onClick={() => setActiveTab(cat)}
//                   className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === cat ? "bg-slate-900 text-white shadow-lg" : "bg-white text-slate-400 hover:bg-slate-100"}`}
//                 >
//                   {cat}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- JOB LISTING SECTION --- */}
//       <section className="px-6">
//         <div className="max-w-5xl mx-auto space-y-6">
//           <AnimatePresence mode="popLayout">
//             {filteredJobs.length > 0 ? (
//               filteredJobs.map((job) => (
//                 <motion.div
//                   key={job.id}
//                   layout
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, scale: 0.95 }}
//                   className="group relative bg-white border border-slate-100 rounded-[3rem] p-1 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)]"
//                 >
//                   <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10">
//                     <div className="flex-1 space-y-6">
//                       <div className="flex items-center gap-4">
//                         <span className="px-4 py-1.5 bg-blue-50 text-blue-700 rounded-xl text-[10px] font-black uppercase tracking-widest">{job.category}</span>
//                         <span className="flex items-center gap-1.5 text-slate-400 text-[11px] font-bold uppercase tracking-widest"><Clock size={14} className="text-blue-500"/> {job.type}</span>
//                       </div>
//                       <div>
//                         <h3 className="text-4xl font-black tracking-tight group-hover:text-blue-600 transition-colors">{job.title}</h3>
//                         <p className="mt-4 text-slate-500 font-medium leading-relaxed max-w-xl">{job.description}</p>
//                       </div>
//                       <div className="flex flex-wrap gap-8 pt-2">
//                         <div className="flex items-center gap-2.5 text-slate-600">
//                           <MapPin size={18} className="text-blue-600" />
//                           <span className="text-xs font-black uppercase tracking-widest">{job.location}</span>
//                         </div>
//                         <div className="flex items-center gap-2.5 text-slate-600">
//                           <Target size={18} className="text-blue-600" />
//                           <span className="text-xs font-black uppercase tracking-widest">{job.salary}</span>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="flex flex-row md:flex-col items-center gap-8 w-full md:w-auto border-t md:border-t-0 md:border-l border-slate-100 pt-8 md:pt-0 md:pl-12">
//                       <div className="text-center flex-1 md:flex-none">
//                         <div className="text-3xl font-[1000] text-slate-900">{job.minExp}+</div>
//                         <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Years Exp</div>
//                       </div>
//                       <button 
//                         onClick={() => openForm(job)}
//                         className="px-12 py-6 bg-slate-900 text-white rounded-[2rem] font-black uppercase text-[10px] tracking-[0.2em] shadow-xl hover:bg-blue-600 transition-all active:scale-95 flex items-center gap-3 shrink-0"
//                       >
//                         Apply Now <ArrowRight size={18} />
//                       </button>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))
//             ) : (
//               /* --- EMPTY STATE --- */
//               <motion.div 
//                 initial={{ opacity: 0 }} 
//                 animate={{ opacity: 1 }}
//                 className="py-24 bg-white rounded-[4rem] border-2 border-dashed border-slate-100 text-center px-6"
//               >
//                 <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
//                   <Inbox size={48} className="text-slate-200" />
//                 </div>
//                 <h2 className="text-3xl font-[1000] text-slate-900 uppercase italic mb-4">No Openings Found</h2>
//                 <p className="text-slate-400 font-medium mb-12 max-w-sm mx-auto">We couldn't find a direct match, but we're always looking for talent. Drop your CV below!</p>
//                 <button 
//                   onClick={() => openForm(null)}
//                   className="px-12 py-6 bg-blue-600 text-white rounded-[2rem] font-black uppercase text-[10px] tracking-[0.2em] shadow-2xl shadow-blue-200"
//                 >
//                   Drop Your Resume
//                 </button>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </section>

//       {/* --- MASTER APPLICATION MODAL --- */}
//       <AnimatePresence>
//         {selectedJob && (
//           <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
//             <motion.div 
//               initial={{ opacity: 0 }} 
//               animate={{ opacity: 1 }} 
//               exit={{ opacity: 0 }} 
//               onClick={() => setSelectedJob(null)}
//               className="absolute inset-0 bg-slate-900/90 backdrop-blur-xl" 
//             />
            
//             <motion.div 
//               initial={{ y: 100, opacity: 0 }} 
//               animate={{ y: 0, opacity: 1 }} 
//               exit={{ y: 100, opacity: 0 }}
//               className="relative bg-white w-full max-w-3xl rounded-[4rem] shadow-2xl overflow-y-auto max-h-[90vh]"
//             >
//               <button 
//                 onClick={() => setSelectedJob(null)} 
//                 className="absolute top-10 right-10 p-3 bg-slate-50 rounded-full text-slate-400 hover:text-slate-900 transition-colors z-20"
//               >
//                 <X size={24} />
//               </button>
              
//               <div className="p-12 md:p-20">
//                 {!isSubmitted ? (
//                   <>
//                     <div className="mb-12">
//                       <div className="flex items-center gap-3 text-blue-600 mb-4 font-black uppercase text-[10px] tracking-[0.3em]">
//                         <Zap size={16} fill="currentColor" /> Hiring Application
//                       </div>
//                       <h3 className="text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-4">{selectedJob.title}</h3>
//                       <div className="flex gap-6 text-slate-400 font-bold text-xs uppercase tracking-widest">
//                         <span className="flex items-center gap-2"><MapPin size={14}/> {selectedJob.location}</span>
//                         <span className="flex items-center gap-2"><Target size={14}/> Min {selectedJob.minExp} Years Required</span>
//                       </div>
//                     </div>

//                     <form className="space-y-10" onSubmit={handleSubmit}>
//                       {/* Section: Personal */}
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div className="space-y-3">
//                           <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Full Name</label>
//                           <input required type="text" placeholder="e.g. Rahul Sharma" className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 outline-none font-bold" />
//                         </div>
//                         <div className="space-y-3">
//                           <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Email</label>
//                           <input required type="email" placeholder="rahul@example.com" className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 outline-none font-bold" />
//                         </div>
//                       </div>

//                       {/* Section: Professional (Detailed) */}
//                       <div className="space-y-6">
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                           <div className="space-y-3">
//                             <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Total Experience (Years)</label>
//                             <input 
//                               required 
//                               type="number" 
//                               value={experience}
//                               onChange={(e) => setExperience(e.target.value)}
//                               placeholder="Min. requirement check" 
//                               className={`w-full px-8 py-5 bg-slate-50 border rounded-2xl focus:ring-4 outline-none font-bold transition-all ${error ? 'border-red-500 bg-red-50 ring-red-100' : 'border-slate-100 focus:ring-blue-500/10'}`} 
//                             />
//                             {error && <p className="text-[10px] text-red-500 font-bold flex items-center gap-1 mt-1"><AlertCircle size={12}/> {error}</p>}
//                           </div>
//                           <div className="space-y-3">
//                             <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Current/Last Company</label>
//                             <input required type="text" placeholder="Organization Name" className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 outline-none font-bold" />
//                           </div>
//                         </div>

//                         {/* Role Based Dynamic Fields */}
//                         {selectedJob.category === "Operations" && (
//                           <div className="space-y-3">
//                             <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Logistics Portfolio / LinkedIn</label>
//                             <input type="url" placeholder="https://linkedin.com/in/..." className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 outline-none font-bold" />
//                           </div>
//                         )}
//                         {selectedJob.category === "Compliance" && (
//                           <div className="space-y-3">
//                             <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Expertise Area</label>
//                             <select className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 outline-none font-bold appearance-none">
//                               <option>ESI / PF Statutory Audit</option>
//                               <option>Factory Act Compliance</option>
//                               <option>Payroll Management</option>
//                             </select>
//                           </div>
//                         )}
//                       </div>

//                       {/* --- FIX: UPDATED UPLOAD SECTION --- */}
//                       <div className="space-y-4">
//                         <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Curriculum Vitae (PDF/DOCX)</label>
//                         <div 
//                           onClick={() => fileInputRef.current?.click()}
//                           className={`flex flex-col items-center justify-center w-full h-44 border-2 border-dashed rounded-[2.5rem] cursor-pointer transition-all duration-300 ${selectedFileName ? 'border-emerald-400 bg-emerald-50/30' : 'border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-400'} group relative`}
//                         >
//                           {selectedFileName ? (
//                             <div className="text-center animate-in zoom-in duration-300">
//                                <FileText className="text-emerald-500 mx-auto mb-3" size={40} />
//                                <p className="text-sm font-bold text-slate-900 px-8 line-clamp-1">{selectedFileName}</p>
//                                <p className="text-[9px] font-black text-blue-600 uppercase mt-2 tracking-widest">Click to change</p>
//                             </div>
//                           ) : (
//                             <>
//                               <Upload className="text-slate-300 group-hover:text-blue-600 mb-3" size={32} />
//                               <p className="text-xs font-black text-slate-400 uppercase tracking-widest group-hover:text-blue-600">Select your professional CV</p>
//                               <p className="text-[9px] text-slate-300 mt-2 font-bold uppercase tracking-widest underline underline-offset-4">PDF, DOC, DOCX up to 5MB</p>
//                             </>
//                           )}
                          
//                           <input 
//                             ref={fileInputRef}
//                             type="file" 
//                             className="hidden" 
//                             accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" 
//                             onChange={handleFileChange}
//                             required 
//                           />
//                         </div>
//                       </div>

//                       <button type="submit" className="w-full py-8 bg-blue-600 text-white rounded-[2.5rem] font-black uppercase text-xs tracking-[0.3em] shadow-2xl shadow-blue-200 hover:bg-slate-900 transition-all flex items-center justify-center gap-4 group/btn">
//                         Submit Application <ArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
//                       </button>
//                     </form>
//                   </>
//                 ) : (
//                   <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="text-center py-10">
//                     <div className="w-32 h-32 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-10 shadow-inner">
//                       <CheckCircle2 size={64} />
//                     </div>
//                     <h3 className="text-5xl font-black text-slate-900 uppercase tracking-tighter mb-6 leading-none">Application <br/> Received!</h3>
//                     <p className="text-slate-500 font-bold mb-12 max-w-sm mx-auto uppercase text-xs tracking-widest leading-loose">
//                       Your application for <b>{selectedJob.title}</b> is now in our system. Our recruitment specialists will reach out shortly.
//                     </p>
//                     <button onClick={() => setSelectedJob(null)} className="px-16 py-6 bg-slate-900 text-white rounded-[2rem] font-black uppercase text-[10px] tracking-[0.2em] shadow-2xl">Done</button>
//                   </motion.div>
//                 )}
//               </div>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>

//     </div>
//   );
// };

// export default JobBoard;
