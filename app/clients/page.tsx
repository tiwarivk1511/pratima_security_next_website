"use client";
import Image from "next/image";
import ClientHero from "../components/ClientPage/ClientHero";
import IndustryImpact from "../components/ClientPage/IndustryImpact";
import ClientSlider from "../components/AboutPage/ClientSlider";

export default function Clients() {
    return (
        <div className="flex flex-col w-full min-h-screen">
            {/* 1. Main Hero Area */}
            <ClientHero />
            {/* 2. Industry Impact */}
            <IndustryImpact />
            {/* 3. Client Slider */}
            <ClientSlider />


        </div>
    );
}