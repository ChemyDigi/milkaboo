"use client";

import React from "react";
import HeroHeadline from "@/components/home/HeroHeadline";
import DrinkShowcase from "@/components/home/DrinkShowcase";
import FlavorSection from "@/components/FlavorSection";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-start overflow-x-clip transition-colors duration-700">
      {/* Dynamic 4-Flavors Interactive Hero Showcase */}
      <DrinkShowcase />

      {/* Flavor Section: Full edge-to-edge width without extra outer margin/padding cropping */}
      <div className="w-full pb-20 sm:pb-32">
        <FlavorSection />
      </div>
    </div>
  );
}
