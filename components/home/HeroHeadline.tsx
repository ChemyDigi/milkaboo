"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroHeadline() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Track scroll progress in the first 500px for a smooth parallax fade & zoom
      const progress = Math.min(Math.max(window.scrollY / 450, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Compute smooth pop-down / fade transform driven by scroll
  const translateY = scrollProgress * 50; // moves down smoothly as you scroll
  const scale = 1 - scrollProgress * 0.08; // subtle elegant scale down
  const opacity = 1 - scrollProgress * 0.85; // soft fade out

  return (
    <section
      className="relative w-full max-w-7xl mx-auto flex flex-col items-center text-center z-10 will-change-transform transition-all duration-100 ease-out"
      style={{
        transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
        opacity,
      }}
    >
      {/* Main Headline with initial entrance pop-up animation */}
      <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] xl:text-[116px] font-[family-name:var(--font-luckiest-guy)] text-neutral-950 uppercase tracking-tight leading-[0.92] sm:leading-[0.9] select-none animate-in fade-in zoom-in-95 duration-1000">
        TASTE THE BOO <br />
        MAGIC
      </h1>
    </section>
  );
}
