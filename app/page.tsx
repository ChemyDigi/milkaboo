"use client";

import React from "react";
import Image from "next/image";
import FlavorSection from "@/components/FlavorSection";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-start bg-[#ede6f6] overflow-x-hidden">
      {/* Background Image Layer with Reduced Opacity */}
      <div className="fixed inset-0 w-full h-full pointer-events-none select-none z-0 opacity-40">
        <Image
          src="/images/Home/Background.jpg"
          alt="Milkaboo Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Floating Dreamy Background Clouds Layer with Smooth Top Feathering */}
      <div className="fixed inset-x-0 bottom-0 w-full h-[70vh] pointer-events-none select-none z-0 opacity-80 [mask-image:linear-gradient(to_bottom,transparent_0%,black_35%,black_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_35%,black_100%)]">
        <Image
          src="/images/Home/Clouds.png"
          alt="Background Clouds"
          fill
          priority
          className="object-cover object-bottom"
        />
      </div>

      {/* Hero Content */}
      <section className="relative w-full max-w-7xl mx-auto pt-32 sm:pt-36 md:pt-40 flex flex-col items-center text-center z-10">
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

      {/* Full Drink Cup Showcase Section with Nestling Cloud Layers */}
      <section className="relative w-full max-w-5xl mx-auto mt-6 sm:mt-10 md:mt-12 mb-24 flex flex-col items-center justify-center z-10">
        <div className="relative w-[340px] sm:w-[480px] md:w-[620px] lg:w-[760px] xl:w-[860px] flex items-center justify-center">
          {/* Cloud behind the top of the cup (Upper Center) */}
          <div className="absolute -top-12 sm:-top-16 inset-x-0 mx-auto w-[380px] sm:w-[520px] md:w-[620px] h-[180px] sm:h-[240px] pointer-events-none select-none z-0 opacity-75 animate-float-fast [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]">
            <Image
              src="/images/Home/Clouds.png"
              alt="Upper Center Cloud"
              fill
              className="object-contain"
            />
          </div>

          {/* Cloud behind the top of the cup (Top Left) */}
          <div className="absolute -left-28 sm:-left-44 md:-left-56 top-0 sm:top-6 w-[340px] sm:w-[460px] md:w-[540px] h-[220px] sm:h-[300px] md:h-[360px] pointer-events-none select-none z-0 opacity-85 animate-float-slow [mask-image:radial-gradient(circle_at_center,black_45%,transparent_75%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_45%,transparent_75%)]">
            <Image
              src="/images/Home/Clouds.png"
              alt="Top Left Cloud"
              fill
              className="object-contain"
            />
          </div>

          {/* Cloud behind the top of the cup (Top Right) */}
          <div className="absolute -right-28 sm:-right-44 md:-right-56 top-4 sm:top-10 w-[340px] sm:w-[460px] md:w-[540px] h-[220px] sm:h-[300px] md:h-[360px] pointer-events-none select-none z-0 opacity-85 animate-float-reverse [mask-image:radial-gradient(circle_at_center,black_45%,transparent_75%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_45%,transparent_75%)]">
            <Image
              src="/images/Home/Clouds.png"
              alt="Top Right Cloud"
              fill
              className="object-contain"
            />
          </div>

          {/* Cloud behind the cup on the lower left */}
          <div className="absolute -left-20 sm:-left-36 md:-left-44 bottom-10 sm:bottom-16 w-[300px] sm:w-[420px] md:w-[500px] h-[220px] sm:h-[300px] md:h-[360px] pointer-events-none select-none z-0 opacity-85 animate-float-slow [mask-image:radial-gradient(circle_at_center,black_45%,transparent_75%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_45%,transparent_75%)]">
            <Image
              src="/images/Home/Clouds.png"
              alt="Side Cloud Left"
              fill
              className="object-contain"
            />
          </div>

          {/* Cloud behind the cup on the lower right */}
          <div className="absolute -right-20 sm:-right-36 md:-right-44 bottom-12 sm:bottom-20 w-[300px] sm:w-[420px] md:w-[500px] h-[220px] sm:h-[300px] md:h-[360px] pointer-events-none select-none z-0 opacity-85 animate-float-reverse [mask-image:radial-gradient(circle_at_center,black_45%,transparent_75%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_45%,transparent_75%)]">
            <Image
              src="/images/Home/Clouds.png"
              alt="Side Cloud Right"
              fill
              className="object-contain"
            />
          </div>

          {/* Background Cloud Base behind the bottom of the cup */}
          <div className="absolute -bottom-8 sm:-bottom-12 inset-x-0 w-full h-[180px] sm:h-[240px] pointer-events-none select-none z-0 opacity-80 [mask-image:radial-gradient(ellipse_at_bottom,black_50%,transparent_80%)] [-webkit-mask-image:radial-gradient(ellipse_at_bottom,black_50%,transparent_80%)]">
            <Image
              src="/images/Home/Clouds.png"
              alt="Background Clouds Base"
              fill
              className="object-cover object-bottom"
            />
          </div>

          {/* Centerpiece Rosemilk Cup */}
          <Image
            src="/images/Home/rosemilk.png"
            alt="Milkaboo Rosemilk Drink"
            width={1200}
            height={1600}
            priority
            className="relative z-20 w-full h-auto object-contain select-none pointer-events-none drop-shadow-[0_30px_60px_rgba(0,0,0,0.18)]"
          />

          {/* FOREGROUND CLOUDS */}
          {/* Foreground Cloud Base */}
          <div className="absolute -bottom-10 sm:-bottom-16 md:-bottom-20 -inset-x-12 sm:-inset-x-24 md:-inset-x-32 h-[220px] sm:h-[300px] md:h-[360px] pointer-events-none select-none z-40 opacity-95 [mask-image:linear-gradient(to_top,black_50%,transparent_90%)] [-webkit-mask-image:linear-gradient(to_top,black_50%,transparent_90%)]">
            <Image
              src="/images/Home/Clouds.png"
              alt="Foreground Cloud Base Overlay"
              fill
              priority
              className="object-cover object-bottom"
            />
          </div>

          {/* Foreground Cloud Left */}
          <div className="absolute -left-12 sm:-left-24 md:-left-32 -bottom-4 sm:-bottom-8 w-[280px] sm:w-[400px] md:w-[480px] h-[200px] sm:h-[260px] md:h-[300px] pointer-events-none select-none z-40 opacity-90 animate-float-slow [mask-image:radial-gradient(circle_at_center,black_50%,transparent_80%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_50%,transparent_80%)]">
            <Image
              src="/images/Home/Clouds.png"
              alt="Foreground Cloud Left"
              fill
              className="object-contain object-bottom"
            />
          </div>

          {/* Foreground Cloud Right */}
          <div className="absolute -right-12 sm:-right-24 md:-right-32 -bottom-4 sm:-bottom-8 w-[280px] sm:w-[400px] md:w-[480px] h-[200px] sm:h-[260px] md:h-[300px] pointer-events-none select-none z-40 opacity-90 animate-float-reverse [mask-image:radial-gradient(circle_at_center,black_50%,transparent_80%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_50%,transparent_80%)]">
            <Image
              src="/images/Home/Clouds.png"
              alt="Foreground Cloud Right"
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </section>

      {/* Flavor Section - Horizontal Parallax Pinning Showcase */}
      <FlavorSection />
    </div>
  );
}
