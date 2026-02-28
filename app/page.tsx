"use client";
import React from "react";
import Image from "next/image";
import HeroSection from "./components/HomePage/HomeHero";
import AboutIntro from "./components/HomePage/AboutIntro";
import WhyChooseUs from "./components/HomePage/WhyChooseUs";
import ContactUsSection from "./components/HomePage/ContactUsSection";
import Footer from "./components/Footer";
export default function Home() {
  return (
   <div className="flex flex-col w-full min-h-screen">
   
         {/* 2. Main Hero Area */}
         <HeroSection />
         <AboutIntro/>
         <WhyChooseUs/>
         <ContactUsSection/>
         
       </div>
  );
}
