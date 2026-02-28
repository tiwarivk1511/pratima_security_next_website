"use client";
import Image from "next/image";
import FacilityHero from "@/app/components/ServicesPage/FacilityServicePage/FacilityHero";
import FacilityServicesGrid from "@/app/components/ServicesPage/FacilityServicePage/FacilityServicesGrid";
import FacilityIntroduction from "@/app/components/ServicesPage/FacilityServicePage/FacilityIntroduction";
export default function FacilityService() {
  return (
   <div className="flex flex-col w-full min-h-screen">
            {/* 1. Main Hero Area */}
            <FacilityHero />

            {/* 2. Introduction Section */}
            <FacilityIntroduction />

            {/* 3. Services Grid */}
            <FacilityServicesGrid />
       </div>
  );
}