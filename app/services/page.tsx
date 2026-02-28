"use client";
import Image from "next/image";
import ServicesHero from "../components/ServicesPage/ServiceHero";
import ServiceIntro from "../components/ServicesPage/ServiceIntro";
import ServiceGrid from "../components/ServicesPage/ServiceGrid";

export default function Services() {
  return (
   <div className="flex flex-col w-full min-h-screen">
   
         {/* 2. Main Hero Area */}
        <ServicesHero />
        <ServiceIntro />
        <ServiceGrid />
         
       </div>
  );
}
