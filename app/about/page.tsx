"use client";
import AboutHero from "@/app/components/AboutPage/AboutHero";
import CompanyProfile from "../components/AboutPage/CompanyProfile";
import DetailedExplanation from "../components/AboutPage/DetailedExplanation";
import Image from "next/image";
import ClientSlider from "../components/AboutPage/ClientSlider";

export default function About() {
  return (
   <div className="flex flex-col w-full min-h-screen">
   
         {/* 2. Main Hero Area */}
        <AboutHero />
        <DetailedExplanation/>
        <ClientSlider/>
        <CompanyProfile/>
       </div>
  );
}
