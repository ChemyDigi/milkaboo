"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Start fading out after 2 seconds
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2000);

    // Remove from DOM completely after fade out animation finishes (2.8s)
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#ede6f6] overflow-hidden transition-all duration-800 ease-in-out select-none ${
        isFading ? "opacity-0 pointer-events-none scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Soft Ambient Radial Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7)_0%,transparent_70%)] pointer-events-none" />

      {/* Cloud 1: Top Left Floating Cloud */}
      <div className="absolute -left-20 sm:-left-32 -top-10 sm:-top-16 w-[320px] sm:w-[480px] md:w-[560px] h-[220px] sm:h-[300px] pointer-events-none opacity-80 animate-float-slow [mask-image:radial-gradient(circle_at_center,black_45%,transparent_75%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_45%,transparent_75%)]">
        <Image
          src="/images/Home/Clouds.png"
          alt="Splash Cloud Left"
          fill
          priority
          className="object-contain"
        />
      </div>

      {/* Cloud 2: Top Right Floating Cloud */}
      <div className="absolute -right-20 sm:-right-32 top-6 sm:top-10 w-[320px] sm:w-[480px] md:w-[560px] h-[220px] sm:h-[300px] pointer-events-none opacity-80 animate-float-reverse [mask-image:radial-gradient(circle_at_center,black_45%,transparent_75%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_45%,transparent_75%)]">
        <Image
          src="/images/Home/Clouds.png"
          alt="Splash Cloud Right"
          fill
          priority
          className="object-contain"
        />
      </div>

      {/* Cloud 3: Bottom Billowing Cloud Bank */}
      <div className="absolute -bottom-8 sm:-bottom-12 inset-x-0 w-full h-[220px] sm:h-[300px] md:h-[380px] pointer-events-none opacity-90 [mask-image:linear-gradient(to_top,black_50%,transparent_90%)] [-webkit-mask-image:linear-gradient(to_top,black_50%,transparent_90%)]">
        <Image
          src="/images/Home/Clouds.png"
          alt="Splash Cloud Base"
          fill
          priority
          className="object-cover object-bottom"
        />
      </div>

      {/* Centerpiece Logo with Floating Micro-animation and Glow */}
      <div className="relative z-10 flex flex-col items-center justify-center animate-float-gentle">
        <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 drop-shadow-[0_20px_40px_rgba(147,51,234,0.18)] transition-transform duration-700">
          <Image
            src="/images/logo.png"
            alt="Milkaboo Logo"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
