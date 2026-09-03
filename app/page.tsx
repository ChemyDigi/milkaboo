import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="flex-1 w-full bg-white flex flex-col items-center justify-start min-h-[calc(100vh-80px)]">
      {/* Hero Section */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex flex-col items-center text-center">
        {/* Subtle Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-purple-200 shadow-xs text-xs sm:text-sm font-semibold text-neutral-800 mb-8 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-purple-600" />
          <span>New Collection 2026</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-neutral-900 max-w-4xl leading-[1.1]">
          Delightful Treats & Sweet Moments
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl font-medium leading-relaxed">
          Crafted with love, passion, and sweetness. Explore our latest collection
          of handmade confections and artisanal delights.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#shop"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-neutral-900 text-white font-semibold shadow-md hover:bg-neutral-800 active:scale-95 transition-all duration-200 group cursor-pointer"
          >
            <span>Explore Shop</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-white border border-neutral-200 text-neutral-800 font-semibold shadow-xs hover:bg-neutral-50 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <span>Our Story</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
