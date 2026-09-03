"use client";

import React from "react";

export default function Home() {
  return (
    <div className="relative w-full min-h-[calc(100vh-112px)] flex flex-col items-center justify-center overflow-x-hidden px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Hero Content */}
      <section className="relative w-full max-w-7xl mx-auto flex flex-col items-center text-center z-10">
        {/* Main Headline */}
        <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[130px] xl:text-[160px] font-[family-name:var(--font-luckiest-guy)] text-neutral-950 uppercase tracking-tight leading-[0.88] sm:leading-[0.85] select-none">
          TASTE THE BOO <br />
          MAGIC
        </h1>

        {/* Subtitle */}
        <p className="mt-3 sm:mt-5 text-base sm:text-lg md:text-xl lg:text-2xl font-[family-name:var(--font-sansita)] font-bold text-neutral-800 max-w-xl sm:max-w-2xl mx-auto leading-snug select-none">
          Where every sip is packed with bubbles, sweetness, and a little bit of magic.
        </p>
      </section>
    </div>
  );
}
