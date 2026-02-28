"use client";
import CareerHero from "../components/Carrerpage/CareerHero";
import JobBoard from "../components/Carrerpage/JobBoard";
import OurCulture from "../components/Carrerpage/OurCulture";

export default function Career() {
    return (
        <div className="flex flex-col w-full min-h-screen">
            {/* 1. Main Hero Area */}
            <CareerHero />
            {/* 2. Our Culture Section */}
            <OurCulture />
            {/* 3. Job Board Section */}
            <JobBoard/>

        </div>
    );
}