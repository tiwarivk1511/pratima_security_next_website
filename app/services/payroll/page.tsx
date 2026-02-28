"use client";
import Image from "next/image";
import PayrollHero from "@/app/components/ServicesPage/PayrollServicePage/PayrollHero";
import StaffingIntro from "@/app/components/ServicesPage/PayrollServicePage/StaffingIntro";
import StaffingServicesGrid from "@/app/components/ServicesPage/PayrollServicePage/StaffingServicesGrid";


export default function PayrollService() {
  return (
   <div className="flex flex-col w-full min-h-screen">
            {/* 1. Main Hero Area */}
            <PayrollHero />
            {/* 2. Introduction Section */}
            <StaffingIntro />
            {/* 3. Services Grid */}
            <StaffingServicesGrid/>
            
       </div>
  );
}