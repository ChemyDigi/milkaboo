import React from "react";

export default function HeroHeadline() {
  return (
    <section className="relative w-full max-w-7xl mx-auto mt-16 sm:mt-24 md:mt-28 lg:mt-32 flex flex-col items-center text-center z-10">
      {/* Main Headline */}
      <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[110px] xl:text-[130px] font-[family-name:var(--font-luckiest-guy)] text-neutral-950 uppercase tracking-tight leading-[0.92] sm:leading-[0.9] select-none">
        TASTE THE BOO <br />
        MAGIC
      </h1>

      {/* Subtitle */}
      <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl font-[family-name:var(--font-sansita)] font-bold text-neutral-800 max-w-xl sm:max-w-2xl mx-auto leading-snug select-none">
        Where every sip is packed with bubbles, sweetness, and a little bit of magic.
      </p>
    </section>
  );
}
