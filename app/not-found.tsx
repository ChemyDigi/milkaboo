import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Sparkles, Home as HomeIcon } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-[calc(100vh-5rem)] w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden bg-[#ede6f6] select-none">
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7)_0%,transparent_75%)] pointer-events-none" />

      {/* Dreamy Background Clouds */}
      <div className="absolute -left-24 sm:-left-36 top-12 w-[340px] sm:w-[480px] h-[220px] sm:h-[300px] pointer-events-none opacity-70 animate-float-slow [mask-image:radial-gradient(circle_at_center,black_45%,transparent_75%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_45%,transparent_75%)]">
        <Image
          src="/images/Home/Clouds.png"
          alt="Cloud Left"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="absolute -right-24 sm:-right-36 top-16 w-[340px] sm:w-[480px] h-[220px] sm:h-[300px] pointer-events-none opacity-70 animate-float-reverse [mask-image:radial-gradient(circle_at_center,black_45%,transparent_75%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_45%,transparent_75%)]">
        <Image
          src="/images/Home/Clouds.png"
          alt="Cloud Right"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="absolute -bottom-8 inset-x-0 w-full h-[200px] sm:h-[260px] pointer-events-none opacity-85 [mask-image:linear-gradient(to_top,black_50%,transparent_90%)] [-webkit-mask-image:linear-gradient(to_top,black_50%,transparent_90%)]">
        <Image
          src="/images/Home/Clouds.png"
          alt="Cloud Base"
          fill
          priority
          className="object-cover object-bottom"
        />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute left-8 sm:left-24 top-1/3 w-14 h-14 sm:w-20 sm:h-20 pointer-events-none animate-float-drift-1 drop-shadow-md">
        <Image
          src="/images/Home/rosemilka1.png"
          alt="Rose Petal"
          fill
          className="object-contain"
        />
      </div>

      <div className="absolute right-8 sm:right-24 top-1/4 w-14 h-14 sm:w-18 sm:h-18 pointer-events-none animate-float-drift-2 drop-shadow-md">
        <Image
          src="/images/Home/rosemilka2.png"
          alt="Rose Ice"
          fill
          className="object-contain"
        />
      </div>

      <div className="absolute left-16 sm:left-32 bottom-24 w-12 h-12 sm:w-16 sm:h-16 pointer-events-none animate-float-bob drop-shadow-lg">
        <Image
          src="/images/Home/boba1.png"
          alt="Boba Pearl"
          fill
          className="object-contain"
        />
      </div>

      <div className="absolute right-16 sm:right-32 bottom-28 w-10 h-10 sm:w-14 sm:h-14 pointer-events-none animate-float-fast drop-shadow-lg">
        <Image
          src="/images/Home/boba2.png"
          alt="Boba Pearl"
          fill
          className="object-contain"
        />
      </div>

      {/* Main 404 Card Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
        {/* Playful 404 Display with Center Logo */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 font-[family-name:var(--font-luckiest-guy)] text-8xl sm:text-9xl md:text-[150px] lg:text-[180px] text-neutral-900 leading-none">
          <span className="drop-shadow-[0_10px_20px_rgba(0,0,0,0.12)]">4</span>

          <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 animate-float-gentle drop-shadow-[0_15px_30px_rgba(147,51,234,0.25)] -my-4">
            <Image
              src="/images/logo.png"
              alt="Milkaboo Mascot Logo"
              fill
              priority
              className="object-contain"
            />
          </div>

          <span className="drop-shadow-[0_10px_20px_rgba(0,0,0,0.12)]">4</span>
        </div>

        {/* Headline */}
        <h1 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-luckiest-guy)] text-neutral-900 uppercase tracking-tight">
          Oops! This Boo-bble Burst!
        </h1>

        {/* Subtitle */}
        <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl font-[family-name:var(--font-sansita)] font-semibold text-neutral-700 max-w-md sm:max-w-lg mx-auto leading-relaxed">
          The magic page you&apos;re looking for floated away into the clouds or
          doesn&apos;t exist.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-neutral-900 text-white font-[family-name:var(--font-sansita)] font-bold text-base sm:text-lg shadow-lg hover:bg-neutral-800 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <HomeIcon className="w-5 h-5 text-pink-400 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Home</span>
          </Link>

          <Link
            href="/#flavors"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/75 backdrop-blur-md text-neutral-900 font-[family-name:var(--font-sansita)] font-bold text-base sm:text-lg border border-white/60 shadow-sm hover:bg-white hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Sparkles className="w-5 h-5 text-purple-600" />
            <span>Explore Flavors</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
