"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, ShieldCheck, Paperclip, CheckCircle2, Loader2, X } from 'lucide-react';
import { db } from '../../../firebaseConfig'; // Hum Firestore use kar rahe hain
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import CryptoJS from 'crypto-js';

const ENCRYPTION_KEY = process.env.NEXT_PUBLIC_ENCRYPTION_KEY || "default_secret_key_88606616";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [isCompressing, setIsCompressing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    missionType: 'Elite Manned Guarding',
    details: ''
  });
  const [fileBase64, setFileBase64] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  // --- Image Compression ---
  const compressImage = (base64Str: string): Promise<string> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = base64Str;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 800;
        const MAX_HEIGHT = 800;
        let width = img.width;
        let height = img.height;
        if (width > height) {
          if (width > MAX_WIDTH) { height *= MAX_WIDTH / width; width = MAX_WIDTH; }
        } else {
          if (height > MAX_HEIGHT) { width *= MAX_HEIGHT / height; height = MAX_HEIGHT; }
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', 0.6));
      };
    });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsCompressing(true);
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64 = reader.result as string;
        if (file.type.startsWith('image/')) {
          const compressed = await compressImage(base64);
          setFileBase64(compressed);
        } else {
          if (file.size > 800000) { alert("Max 800KB allowed"); setFileName(null); setIsCompressing(false); return; }
          setFileBase64(base64);
        }
        setIsCompressing(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Ye sabse important hai action trigger karne ke liye
    
    if (!fileBase64 && !formData.details) {
      alert("Please provide details or attach a file.");
      return;
    }

    setLoading(true);
    console.log("Transmission Started...");

    try {
      // 1. Data Object
      const rawData = {
        ...formData,
        file: fileBase64,
        fileName: fileName,
        sentAt: new Date().toISOString()
      };

      // 2. Encryption
      const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(rawData), ENCRYPTION_KEY).toString();

      // 3. Firestore Push (mission_requests collection)
      const colRef = collection(db, "mission_requests");
      await addDoc(colRef, {
        encryptedPayload: encryptedData,
        createdAt: serverTimestamp(),
        status: 'pending'
      });

      console.log("Intel Deployed Successfully!");
      alert("Mission Brief Encrypted & Deployed!");

      // 4. Reset Form
      setFormData({ name: '', email: '', missionType: 'Elite Manned Guarding', details: '' });
      setFileBase64(null);
      setFileName(null);
    } catch (error: any) {
      console.error("Error:", error);
      alert("Transmission failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-24 bg-[#020203] px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 text-white">
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-4">Secure <span className="text-blue-600">Portal</span></h2>
            <div className="flex items-center gap-2 opacity-40 text-[10px] font-bold uppercase tracking-widest">
              <ShieldCheck size={14} className="text-blue-500" /> AES-256 Firestore Protocol Active
            </div>
          </div>

          <div className="lg:col-span-7 bg-white/[0.03] border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-xl">
            {/* Form Tag me onSubmit hona chahiye */}
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <input required placeholder="Name" className="w-full bg-transparent border-b border-white/20 py-4 text-white outline-none focus:border-blue-500 transition-all" value={formData.name} onChange={(e)=>setFormData({...formData, name:e.target.value})} />
                <input required type="email" placeholder="Secure Email" className="w-full bg-transparent border-b border-white/20 py-4 text-white outline-none focus:border-blue-500 transition-all" value={formData.email} onChange={(e)=>setFormData({...formData, email:e.target.value})} />
              </div>

              <div className="border-b border-white/20 pb-4">
                <label className={`flex items-center gap-3 cursor-pointer ${fileBase64 ? 'text-green-500' : 'text-slate-400'}`}>
                  {isCompressing ? <Loader2 className="animate-spin" /> : (fileBase64 ? <CheckCircle2 /> : <Paperclip />)}
                  <span className="text-xs font-bold uppercase">{fileName || "Attach Tactical Brief"}</span>
                  <input type="file" className="hidden" onChange={handleFileChange} />
                </label>
              </div>

              <textarea rows={4} placeholder="Operational Details..." className="w-full bg-transparent border-b border-white/20 py-4 text-white outline-none resize-none focus:border-blue-500" value={formData.details} onChange={(e)=>setFormData({...formData, details:e.target.value})} />

              <button 
                type="submit" 
                disabled={loading || isCompressing}
                className="w-full bg-blue-600 hover:bg-blue-700 py-6 rounded-2xl text-white font-black uppercase tracking-widest text-xs flex justify-center items-center gap-4 transition-all active:scale-95 disabled:opacity-50"
              >
                {loading ? <><Loader2 className="animate-spin" /> Transmitting...</> : <><Send size={16}/> Deploy Request</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
