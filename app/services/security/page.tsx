"use client";
import React from "react";
import Image from "next/image";
import SecurityServiceHero from "@/app/components/ServicesPage/SecurityServicePage/SecurityServiceHero";
import SecurityServicesGrid from "@/app/components/ServicesPage/SecurityServicePage/SecurityServicesGrid";

export default function SecurityService() {
  return (
   <div className="flex flex-col w-full min-h-screen">
   
         {/* 1. Main Hero Area */}
         <SecurityServiceHero />

         {/* 2. Services Grid */}
         <SecurityServicesGrid />
         
       </div>
  );
}
