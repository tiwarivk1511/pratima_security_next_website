"use client";
import ContactHero from "@/app/components/ContactPage/ContactHero";
import ContactUsSection from "@/app/components/HomePage/ContactUsSection";
import Image from "next/image";


export default function Contact() {
  return (
   <div className="flex flex-col w-full min-h-screen">
   
         {/* 1. Main Hero Area */}
        <ContactHero />
          {/* 2. Contact Form */}
         <ContactUsSection/>       
       </div>
  );
}
