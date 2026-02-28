"use client";
import TrainingHero from "@/app/components/TrainingPage/TrainingHero";
import TrainingDetails from "@/app/components/TrainingPage/TrainingDetails";
import Image from "next/image";


export default function Contact() {
    return (
        <div className="flex flex-col w-full min-h-screen">

            {/* 1. Main Hero Area */}
            <TrainingHero />
            
            {/* 2. Training Details Section */}
            <TrainingDetails />

        </div>
    );
}
