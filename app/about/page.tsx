import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Heart, Coffee, Leaf, ShieldCheck, Smile } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="relative w-full min-h-screen pt-32 sm:pt-36 md:pt-40 pb-24 px-4 sm:px-6 lg:px-8 bg-[#ede6f6] overflow-x-hidden">
      {/* Background Floating Clouds */}
      <div className="absolute -left-28 top-20 w-[420px] h-[260px] pointer-events-none opacity-60 animate-float-slow [mask-image:radial-gradient(circle_at_center,black_45%,transparent_75%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_45%,transparent_75%)]">
        <Image src="/images/Home/Clouds.png" alt="Cloud Left" fill className="object-contain" />
      </div>
      <div className="absolute -right-28 top-48 w-[420px] h-[260px] pointer-events-none opacity-60 animate-float-reverse [mask-image:radial-gradient(circle_at_center,black_45%,transparent_75%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_45%,transparent_75%)]">
        <Image src="/images/Home/Clouds.png" alt="Cloud Right" fill className="object-contain" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Hero Title */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white/60 shadow-xs mb-4">
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-800 font-[family-name:var(--font-sansita)]">
              Our Story & Passion
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-[family-name:var(--font-luckiest-guy)] text-neutral-950 uppercase tracking-tight leading-[0.95]">
            THE STORY OF MILKABOO
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl font-[family-name:var(--font-sansita)] font-bold text-neutral-700 max-w-2xl mx-auto leading-relaxed">
            Where every sip is packed with bubbles, sweetness, and a whole lot of dreamy magic.
          </p>
        </div>

        {/* Story Section Card with Mascot */}
        <div className="mt-14 sm:mt-16 bg-white/75 backdrop-blur-xl rounded-[36px] p-8 sm:p-12 lg:p-16 border border-white/80 shadow-[0_15px_40px_rgba(0,0,0,0.06)] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Mascot / Visual Column */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 animate-float-gentle drop-shadow-[0_20px_40px_rgba(147,51,234,0.22)]">
              <Image
                src="/images/logo.png"
                alt="Milkaboo Mascot Character"
                fill
                priority
                className="object-contain"
              />
            </div>
            {/* Small floating boba and rose petals */}
            <div className="absolute -top-4 -left-4 w-16 h-16 pointer-events-none animate-float-slow drop-shadow-md">
              <Image src="/images/Home/rosemilka1.png" alt="Rose Petal" fill className="object-contain" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-14 h-14 pointer-events-none animate-float-bob drop-shadow-md">
              <Image src="/images/Home/boba1.png" alt="Boba Pearl" fill className="object-contain" />
            </div>
          </div>

          {/* Text Story Column */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-pink-600 uppercase font-[family-name:var(--font-sansita)]">
              Born Out Of Pure Passion
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-luckiest-guy)] text-neutral-950 uppercase leading-tight">
              A LOVE LETTER TO BOBA TEA
            </h2>
            <p className="text-base sm:text-lg font-[family-name:var(--font-sansita)] font-medium text-neutral-700 leading-relaxed">
              Milkaboo started with a simple yet ambitious dream: what if bubble tea was brewed with the delicacy of artisanal tea salons and the playful wonder of our sweetest childhood memories?
            </p>
            <p className="text-base sm:text-lg font-[family-name:var(--font-sansita)] font-medium text-neutral-700 leading-relaxed">
              From hand-picking real damask rose extracts to double-cooking brown sugar tapioca pearls until they reach golden, bouncy perfection, we craft each recipe to make your day just a little bit brighter.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="px-7 py-3.5 rounded-full bg-neutral-950 text-white font-[family-name:var(--font-sansita)] font-bold text-base hover:bg-pink-600 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md"
              >
                Explore The Flavors
              </Link>
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-full bg-white/80 text-neutral-900 border border-neutral-200 font-[family-name:var(--font-sansita)] font-bold text-base hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Magic Pillars */}
        <div className="mt-16 sm:mt-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-luckiest-guy)] text-neutral-950 uppercase">
              THE 4 BOO PILLARS
            </h2>
            <p className="mt-2 text-base sm:text-lg font-[family-name:var(--font-sansita)] font-bold text-neutral-600">
              The secret recipe behind every magical sip.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Leaf,
                title: "Real Ingredients",
                desc: "100% natural floral extracts, fresh orchard fruits, and pure teas with no artificial aftertastes.",
                color: "text-emerald-600 bg-emerald-100",
              },
              {
                icon: Coffee,
                title: "Slow-Cooked Boba",
                desc: "Boiled fresh hourly in organic brown sugar for an unbeatable chewy, bouncy texture.",
                color: "text-amber-700 bg-amber-100",
              },
              {
                icon: Heart,
                title: "Velvet Cream Milk",
                desc: "Custom-blended silky dairy and dairy-free oat alternatives for the creamiest mouthfeel.",
                color: "text-pink-600 bg-pink-100",
              },
              {
                icon: Smile,
                title: "Pure Joy",
                desc: "Every cup is topped with good vibes, friendly service, and a little touch of enchantment.",
                color: "text-purple-600 bg-purple-100",
              },
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white/70 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-white/80 shadow-[0_10px_25px_rgba(0,0,0,0.04)] hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${pillar.color} mb-4 shadow-xs`}>
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-[family-name:var(--font-luckiest-guy)] text-neutral-950 uppercase">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base font-[family-name:var(--font-sansita)] font-medium text-neutral-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Milestone Bar */}
        <div className="mt-16 sm:mt-24 rounded-[36px] bg-neutral-950 text-white p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500K+", label: "Happy Sips Served" },
              { number: "100%", label: "Real Ingredients" },
              { number: "12+", label: "Signature Blends" },
              { number: "4.9 ★", label: "Customer Love Rating" },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-4xl sm:text-5xl md:text-6xl font-[family-name:var(--font-luckiest-guy)] text-pink-400">
                  {stat.number}
                </span>
                <span className="mt-2 text-sm sm:text-base font-[family-name:var(--font-sansita)] font-bold text-neutral-300">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
