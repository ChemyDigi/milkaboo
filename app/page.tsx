"use client";

import HeroHeadline from "@/components/home/HeroHeadline";
import DrinkShowcase from "@/components/home/DrinkShowcase";
import FlavorSection from "@/components/FlavorSection";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 md:pt-40 pb-20 sm:pb-32 bg-[#ede6f6] overflow-x-hidden">
      {/* Hero Headline and Subtitle */}
      <HeroHeadline />

      {/* Centerpiece Drink Cup with Layered Clouds */}
      <DrinkShowcase />

      {/* Flavor Section */}
      <FlavorSection />
    </div>
  );
}
