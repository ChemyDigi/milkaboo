"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, ShoppingBag, Heart, Star, Check } from "lucide-react";

interface FlavorProduct {
  id: string;
  name: string;
  flavor: string;
  tagline: string;
  description: string;
  price: string;
  rating: number;
  reviewsCount: number;
  image: string;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
  notes: string[];
  floatElements: {
    src: string;
    alt: string;
    posClass: string;
    hoverPosClass: string;
    sizeClass: string;
    animation: string;
  }[];
}

const flavorsData: FlavorProduct[] = [
  {
    id: "rose-milkaboo",
    name: "Rose Milkaboo",
    flavor: "rose flavour",
    tagline: "Floral, Creamy & Enchanting",
    description:
      "A delicate fusion of fragrant damask rose extracts, rich velvet milk tea, and chewy dark tapioca pearls topped with edible rose petals.",
    price: "$6.50",
    rating: 4.9,
    reviewsCount: 142,
    image: "/images/rosemilk.png",
    accentColor: "from-rose-400 to-pink-500",
    badgeBg: "bg-pink-100 border-pink-200",
    badgeText: "text-pink-700",
    notes: ["Real Rose Petals", "Velvet Milk Base", "Fresh Tapioca"],
    floatElements: [
      {
        src: "/images/rosemilka1.png",
        alt: "Rose Flower",
        posClass: "top-0 left-0 -translate-x-2 -translate-y-2",
        hoverPosClass: "group-hover/card:-translate-x-8 group-hover/card:-translate-y-8 group-hover/card:-rotate-12",
        sizeClass: "w-16 h-16 sm:w-20 sm:h-20",
        animation: "animate-float-gentle",
      },
      {
        src: "/images/rosemilka2.png",
        alt: "Pink Ice Cubes",
        posClass: "top-0 right-0 translate-x-2 -translate-y-2",
        hoverPosClass: "group-hover/card:translate-x-8 group-hover/card:-translate-y-8 group-hover/card:rotate-12",
        sizeClass: "w-14 h-14 sm:w-18 sm:h-18",
        animation: "animate-float-reverse",
      },
      {
        src: "/images/boba1.png",
        alt: "Boba Pearls",
        posClass: "bottom-12 left-0 -translate-x-2 translate-y-2",
        hoverPosClass: "group-hover/card:-translate-x-8 group-hover/card:translate-y-6 group-hover/card:-rotate-6",
        sizeClass: "w-14 h-14 sm:w-18 sm:h-18",
        animation: "animate-float-gentle",
      },
      {
        src: "/images/boba2.png",
        alt: "Glossy Boba Pearl",
        posClass: "bottom-12 right-0 translate-x-2 translate-y-2",
        hoverPosClass: "group-hover/card:translate-x-8 group-hover/card:translate-y-6 group-hover/card:rotate-12",
        sizeClass: "w-12 h-12 sm:w-16 sm:h-16",
        animation: "animate-float-reverse",
      },
    ],
  },
  {
    id: "apple-milkaboo",
    name: "Apple Milkaboo",
    flavor: "apple flavour",
    tagline: "Crisp, Tangy & Refreshing",
    description:
      "Infused with crisp orchard green apple essence, silky milk blend, and golden popping boba for a bright, fruity burst in every sip.",
    price: "$6.25",
    rating: 4.8,
    reviewsCount: 118,
    image: "/images/greenapple.png",
    accentColor: "from-emerald-400 to-green-500",
    badgeBg: "bg-emerald-100 border-emerald-200",
    badgeText: "text-emerald-800",
    notes: ["Granny Smith Twist", "Sweet & Crisp", "Popping Boba"],
    floatElements: [
      {
        src: "/images/applemilka1.png",
        alt: "Apple Slices",
        posClass: "top-0 left-0 -translate-x-2 -translate-y-2",
        hoverPosClass: "group-hover/card:-translate-x-10 group-hover/card:-translate-y-10 group-hover/card:-rotate-12",
        sizeClass: "w-20 h-20 sm:w-24 sm:h-24",
        animation: "animate-float-gentle",
      },
      {
        src: "/images/applemilka2.png",
        alt: "Whole Green Apple",
        posClass: "top-0 right-0 translate-x-2 -translate-y-2",
        hoverPosClass: "group-hover/card:translate-x-10 group-hover/card:-translate-y-10 group-hover/card:rotate-12",
        sizeClass: "w-18 h-18 sm:w-22 sm:h-22",
        animation: "animate-float-reverse",
      },
      {
        src: "/images/boba1.png",
        alt: "Black Boba Pearls",
        posClass: "bottom-12 left-0 -translate-x-2 translate-y-2",
        hoverPosClass: "group-hover/card:-translate-x-8 group-hover/card:translate-y-6 group-hover/card:-rotate-6",
        sizeClass: "w-14 h-14 sm:w-18 sm:h-18",
        animation: "animate-float-gentle",
      },
      {
        src: "/images/boba2.png",
        alt: "Single Boba Pearl",
        posClass: "bottom-12 right-0 translate-x-2 translate-y-2",
        hoverPosClass: "group-hover/card:translate-x-8 group-hover/card:translate-y-6 group-hover/card:rotate-12",
        sizeClass: "w-12 h-12 sm:w-16 sm:h-16",
        animation: "animate-float-reverse",
      },
    ],
  },
  {
    id: "blackcurrant-milkaboo",
    name: "Blackcurrant Milkaboo",
    flavor: "blackcurrant flav",
    tagline: "Bold, Berry-Rich & Vibrant",
    description:
      "Deep purple blackcurrant berry reduction layered over creamy milk tea with honey-soaked boba pearls for a rich sweet-tart experience.",
    price: "$6.75",
    rating: 4.9,
    reviewsCount: 156,
    image: "/images/blackcc.png",
    accentColor: "from-purple-500 to-indigo-600",
    badgeBg: "bg-purple-100 border-purple-200",
    badgeText: "text-purple-800",
    notes: ["Wild Blackcurrant", "Berry Cream Foam", "Honey Boba"],
    floatElements: [
      {
        src: "/images/blackcurrentmilka2.png",
        alt: "Blackcurrant Cluster",
        posClass: "top-0 left-0 -translate-x-2 -translate-y-2",
        hoverPosClass: "group-hover/card:-translate-x-10 group-hover/card:-translate-y-10 group-hover/card:-rotate-12",
        sizeClass: "w-20 h-20 sm:w-24 sm:h-24",
        animation: "animate-float-gentle",
      },
      {
        src: "/images/blackcurrentmilka7.png",
        alt: "Single Blackcurrant",
        posClass: "top-0 right-0 translate-x-2 -translate-y-2",
        hoverPosClass: "group-hover/card:translate-x-10 group-hover/card:-translate-y-10 group-hover/card:rotate-12",
        sizeClass: "w-14 h-14 sm:w-18 sm:h-18",
        animation: "animate-float-reverse",
      },
      {
        src: "/images/blackcurrentmilka1.png",
        alt: "Boba Pearls Cluster",
        posClass: "bottom-12 left-0 -translate-x-2 translate-y-2",
        hoverPosClass: "group-hover/card:-translate-x-8 group-hover/card:translate-y-6 group-hover/card:-rotate-6",
        sizeClass: "w-16 h-16 sm:w-20 sm:h-20",
        animation: "animate-float-gentle",
      },
      {
        src: "/images/boba1.png",
        alt: "Tapioca Boba",
        posClass: "bottom-12 right-0 translate-x-2 translate-y-2",
        hoverPosClass: "group-hover/card:translate-x-8 group-hover/card:translate-y-6 group-hover/card:rotate-12",
        sizeClass: "w-14 h-14 sm:w-18 sm:h-18",
        animation: "animate-float-reverse",
      },
    ],
  },
  {
    id: "custard-milkaboo",
    name: "Custard Milkaboo",
    flavor: "custard flav",
    tagline: "Golden, Silky & Indulgent",
    description:
      "Slow-cooked vanilla egg custard blended into warm caramelized milk tea with brown sugar boba pearls and creme brulee topping.",
    price: "$6.95",
    rating: 5.0,
    reviewsCount: 189,
    image: "/images/custard-milkaboo.jpg",
    accentColor: "from-amber-400 to-orange-500",
    badgeBg: "bg-amber-100 border-amber-200",
    badgeText: "text-amber-800",
    notes: ["Creme Brulee Top", "Real Vanilla Custard", "Brown Sugar Pearls"],
    floatElements: [
      {
        src: "/images/boba1.png",
        alt: "Brown Sugar Boba",
        posClass: "top-0 left-0 -translate-x-2 -translate-y-2",
        hoverPosClass: "group-hover/card:-translate-x-8 group-hover/card:-translate-y-8 group-hover/card:-rotate-12",
        sizeClass: "w-16 h-16 sm:w-20 sm:h-20",
        animation: "animate-float-gentle",
      },
      {
        src: "/images/boba2.png",
        alt: "Glossy Boba",
        posClass: "top-0 right-0 translate-x-2 -translate-y-2",
        hoverPosClass: "group-hover/card:translate-x-8 group-hover/card:-translate-y-8 group-hover/card:rotate-12",
        sizeClass: "w-14 h-14 sm:w-18 sm:h-18",
        animation: "animate-float-reverse",
      },
      {
        src: "/images/boba3.png",
        alt: "Tapioca Pearl",
        posClass: "bottom-12 left-0 -translate-x-2 translate-y-2",
        hoverPosClass: "group-hover/card:-translate-x-8 group-hover/card:translate-y-6 group-hover/card:-rotate-6",
        sizeClass: "w-12 h-12 sm:w-14 sm:h-14",
        animation: "animate-float-gentle",
      },
      {
        src: "/images/boba1.png",
        alt: "Caramel Boba",
        posClass: "bottom-12 right-0 translate-x-2 translate-y-2",
        hoverPosClass: "group-hover/card:translate-x-8 group-hover/card:translate-y-6 group-hover/card:rotate-12",
        sizeClass: "w-14 h-14 sm:w-18 sm:h-18",
        animation: "animate-float-reverse",
      },
    ],
  },
];

export default function FlavorSection() {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [addedId, setAddedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"rose" | "apple" | "blackcurrant">("rose");

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAddToCart = (id: string) => {
    setAddedId(id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <section id="flavors" className="w-full bg-[#f3edf7] py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Top Header Section matching user reference photo layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-12">
          <div>
            <span className="inline-block px-3 py-1 mb-4 rounded-full text-xs font-bold uppercase tracking-widest bg-purple-200 text-purple-900">
              Our Signature Selection
            </span>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-[family-name:var(--font-luckiest-guy)] tracking-tight text-neutral-950 uppercase leading-[0.95]">
              4 Flavor Mixes <br />
              Beloved Across <br />
              The Land
            </h2>
          </div>

          <div className="pt-2 lg:pt-8">
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-medium">
              The most celebrated bubble tea creations in the realm. Every cup is a little spell: color, texture, and taste woven into a moment of pure wonder. At Milkaboo, we embrace artisanal flavor crafting & elevate bubble tea into something truly enchanting.
            </p>
          </div>
        </div>

        {/* Tab Switcher for Featured Interactive Showcases */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveTab("rose")}
            className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 cursor-pointer shadow-xs ${activeTab === "rose"
                ? "bg-pink-600 text-white shadow-md scale-105"
                : "bg-white text-neutral-700 hover:bg-pink-50"
              }`}
          >
            🌸 Rose Milkaboo Spotlight
          </button>

          <button
            onClick={() => setActiveTab("apple")}
            className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 cursor-pointer shadow-xs ${activeTab === "apple"
                ? "bg-emerald-600 text-white shadow-md scale-105"
                : "bg-white text-neutral-700 hover:bg-emerald-50"
              }`}
          >
            🍏 Green Apple Milkaboo Spotlight
          </button>

          <button
            onClick={() => setActiveTab("blackcurrant")}
            className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 cursor-pointer shadow-xs ${activeTab === "blackcurrant"
                ? "bg-purple-700 text-white shadow-md scale-105"
                : "bg-white text-neutral-700 hover:bg-purple-50"
              }`}
          >
            🍇 Blackcurrant Milkaboo Spotlight
          </button>
        </div>

        {/* Featured Interactive Showcase Container */}
        <div className="mb-16">
          {activeTab === "rose" ? (
            /* Rose Milkaboo Spotlight Container */
            <div className="relative group w-full h-[420px] sm:h-[480px] lg:h-[520px] rounded-3xl overflow-hidden shadow-xl flex items-center justify-center cursor-pointer border border-pink-200/80 transition-all duration-500">
              {/* 1. Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('/images/backgroun 1.png')` }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-pink-950/40 via-transparent to-pink-950/10 opacity-70 group-hover:opacity-40 transition-opacity duration-500" />

              {/* 2. Four Floating Images Pop Out from BEHIND the hand on Hover */}
              <div className="absolute z-10 w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 transition-all duration-700 ease-out transform scale-50 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-x-32 sm:group-hover:-translate-x-48 lg:group-hover:-translate-x-64 group-hover:-translate-y-24 sm:group-hover:-translate-y-36 group-hover:-rotate-12 pointer-events-none drop-shadow-2xl animate-float-gentle">
                <Image src="/images/rosemilka1.png" alt="Rose Flower" fill className="object-contain" />
              </div>

              <div className="absolute z-10 w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 transition-all duration-700 ease-out transform scale-50 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-32 sm:group-hover:translate-x-48 lg:group-hover:translate-x-64 group-hover:-translate-y-24 sm:group-hover:-translate-y-36 group-hover:rotate-12 pointer-events-none drop-shadow-2xl animate-float-reverse">
                <Image src="/images/rosemilka2.png" alt="Pink Ice Cubes" fill className="object-contain" />
              </div>

              <div className="absolute z-10 w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 transition-all duration-700 ease-out transform scale-50 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-x-32 sm:group-hover:-translate-x-48 lg:group-hover:-translate-x-64 group-hover:translate-y-20 sm:group-hover:translate-y-28 group-hover:-rotate-6 pointer-events-none drop-shadow-2xl animate-float-gentle">
                <Image src="/images/boba1.png" alt="Black Boba Pearls" fill className="object-contain" />
              </div>

              <div className="absolute z-10 w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 transition-all duration-700 ease-out transform scale-50 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-32 sm:group-hover:translate-x-48 lg:group-hover:translate-x-64 group-hover:translate-y-20 sm:group-hover:translate-y-28 group-hover:rotate-12 pointer-events-none drop-shadow-2xl animate-float-reverse">
                <Image src="/images/rosemilka4.png" alt="Rose Bubbles" fill className="object-contain" />
              </div>

              {/* Center Hand holding Rose Milkaboo Cup */}
              <div className="relative z-20 w-56 h-80 sm:w-72 sm:h-[380px] lg:w-80 lg:h-[420px] transition-transform duration-500 ease-out transform group-hover:scale-110 group-hover:-translate-y-2 drop-shadow-[0_20px_35px_rgba(0,0,0,0.3)]">
                <Image src="/images/rosemilk.png" alt="Rose Milkaboo Hand" fill sizes="(max-width: 768px) 100vw, 400px" className="object-contain" priority />
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 bg-white/80 backdrop-blur-md px-5 py-2 rounded-full border border-pink-200 shadow-md text-xs sm:text-sm font-bold text-pink-950 flex items-center gap-2 transition-all duration-300 group-hover:bg-white group-hover:scale-105">
                <Sparkles className="w-4 h-4 text-pink-600 animate-pulse" />
                <span>Hover over to reveal Rose Milkaboo ingredients & boba!</span>
              </div>
            </div>
          ) : activeTab === "apple" ? (
            /* Green Apple Milkaboo Spotlight Container */
            <div className="relative group w-full h-[420px] sm:h-[480px] lg:h-[520px] rounded-3xl overflow-hidden shadow-xl flex items-center justify-center cursor-pointer border border-emerald-200/80 transition-all duration-500">
              {/* Green Apple Background */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('/images/Green apple.png')` }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-emerald-950/10 opacity-60 group-hover:opacity-30 transition-opacity duration-500" />

              {/* Floating Green Apple & Boba Elements popping out from BEHIND */}
              <div className="absolute z-10 w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 transition-all duration-700 ease-out transform scale-50 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-x-36 sm:group-hover:-translate-x-52 lg:group-hover:-translate-x-72 group-hover:-translate-y-24 sm:group-hover:-translate-y-36 group-hover:-rotate-12 pointer-events-none drop-shadow-2xl animate-float-gentle">
                <Image src="/images/applemilka1.png" alt="Green Apple Slices & Drops" fill sizes="200px" className="object-contain" />
              </div>

              <div className="absolute z-10 w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 transition-all duration-700 ease-out transform scale-50 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-36 sm:group-hover:translate-x-52 lg:group-hover:translate-x-72 group-hover:-translate-y-24 sm:group-hover:-translate-y-36 group-hover:rotate-12 pointer-events-none drop-shadow-2xl animate-float-reverse">
                <Image src="/images/applemilka2.png" alt="Whole Green Apple" fill sizes="200px" className="object-contain" />
              </div>

              <div className="absolute z-10 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 transition-all duration-700 ease-out transform scale-50 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-x-32 sm:group-hover:-translate-x-48 lg:group-hover:-translate-x-64 group-hover:translate-y-20 sm:group-hover:translate-y-28 group-hover:-rotate-6 pointer-events-none drop-shadow-2xl animate-float-gentle">
                <Image src="/images/boba1.png" alt="Glossy Boba Cluster" fill sizes="180px" className="object-contain" />
              </div>

              <div className="absolute z-10 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 transition-all duration-700 ease-out transform scale-50 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-32 sm:group-hover:translate-x-48 lg:group-hover:translate-x-64 group-hover:translate-y-20 sm:group-hover:translate-y-28 group-hover:rotate-12 pointer-events-none drop-shadow-2xl animate-float-reverse">
                <Image src="/images/boba2.png" alt="Single Boba Pearl" fill sizes="160px" className="object-contain" />
              </div>

              {/* Center Green Apple Drink Image */}
              <div className="relative z-20 w-60 h-80 sm:w-80 sm:h-[380px] lg:w-96 lg:h-[430px] transition-transform duration-500 ease-out transform group-hover:scale-110 group-hover:-translate-y-2 drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)]">
                <Image src="/images/greenapple.png" alt="Green Apple Milkaboo" fill sizes="(max-width: 768px) 100vw, 400px" className="object-contain" priority />
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 bg-white/80 backdrop-blur-md px-5 py-2 rounded-full border border-emerald-200 shadow-md text-xs sm:text-sm font-bold text-emerald-950 flex items-center gap-2 transition-all duration-300 group-hover:bg-white group-hover:scale-105">
                <Sparkles className="w-4 h-4 text-emerald-600 animate-pulse" />
                <span>Hover over to reveal Green Apple slices & boba!</span>
              </div>
            </div>
          ) : (
            /* Blackcurrant Milkaboo Spotlight Container */
            <div className="relative group w-full h-[420px] sm:h-[480px] lg:h-[520px] rounded-3xl overflow-hidden shadow-xl flex items-center justify-center cursor-pointer border border-purple-200/80 transition-all duration-500">
              {/* Blackcurrant Background */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('/images/blackbackgroiund.png')` }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/40 via-transparent to-purple-950/10 opacity-60 group-hover:opacity-30 transition-opacity duration-500" />

              {/* Floating Blackcurrant & Boba Elements popping out from BEHIND */}
              <div className="absolute z-10 w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 transition-all duration-700 ease-out transform scale-50 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-x-36 sm:group-hover:-translate-x-52 lg:group-hover:-translate-x-72 group-hover:-translate-y-24 sm:group-hover:-translate-y-36 group-hover:-rotate-12 pointer-events-none drop-shadow-2xl animate-float-gentle">
                <Image src="/images/blackcurrentmilka2.png" alt="Blackcurrant Cluster" fill sizes="200px" className="object-contain" />
              </div>

              <div className="absolute z-10 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 transition-all duration-700 ease-out transform scale-50 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-36 sm:group-hover:translate-x-52 lg:group-hover:translate-x-72 group-hover:-translate-y-24 sm:group-hover:-translate-y-36 group-hover:rotate-12 pointer-events-none drop-shadow-2xl animate-float-reverse">
                <Image src="/images/blackcurrentmilka7.png" alt="Single Blackcurrant" fill sizes="160px" className="object-contain" />
              </div>

              <div className="absolute z-10 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 transition-all duration-700 ease-out transform scale-50 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-x-32 sm:group-hover:-translate-x-48 lg:group-hover:-translate-x-64 group-hover:translate-y-20 sm:group-hover:translate-y-28 group-hover:-rotate-6 pointer-events-none drop-shadow-2xl animate-float-gentle">
                <Image src="/images/blackcurrentmilka1.png" alt="Boba Cluster" fill sizes="180px" className="object-contain" />
              </div>

              <div className="absolute z-10 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 transition-all duration-700 ease-out transform scale-50 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-32 sm:group-hover:translate-x-48 lg:group-hover:translate-x-64 group-hover:translate-y-20 sm:group-hover:translate-y-28 group-hover:rotate-12 pointer-events-none drop-shadow-2xl animate-float-reverse">
                <Image src="/images/boba1.png" alt="Tapioca Pearl" fill sizes="160px" className="object-contain" />
              </div>

              {/* Center Blackcurrant Drink Image */}
              <div className="relative z-20 w-56 h-80 sm:w-72 sm:h-[380px] lg:w-80 lg:h-[420px] transition-transform duration-500 ease-out transform group-hover:scale-110 group-hover:-translate-y-2 drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)]">
                <Image src="/images/blackcc.png" alt="Blackcurrant Milkaboo" fill sizes="(max-width: 768px) 100vw, 400px" className="object-contain" priority />
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 bg-white/80 backdrop-blur-md px-5 py-2 rounded-full border border-purple-200 shadow-md text-xs sm:text-sm font-bold text-purple-950 flex items-center gap-2 transition-all duration-300 group-hover:bg-white group-hover:scale-105">
                <Sparkles className="w-4 h-4 text-purple-600 animate-pulse" />
                <span>Hover over to reveal Blackcurrant berries & boba!</span>
              </div>
            </div>
          )}
        </div>

        {/* 4 Bubble Tea Products Grid with Floating Boba & Flavor Pop-Outs on Hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {flavorsData.map((item) => {
            const isFav = favorites[item.id];
            const isAdded = addedId === item.id;
            const isRose = item.id === "rose-milkaboo";
            const isApple = item.id === "apple-milkaboo";
            const isBlackcurrant = item.id === "blackcurrant-milkaboo";

            return (
              <div
                key={item.id}
                className="group/card relative bg-white rounded-3xl p-5 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between border border-purple-100/60 hover:-translate-y-1"
              >
                {/* Floating Boba & Ingredients Bursting Out on Hover */}
                {item.floatElements.map((elem, idx) => (
                  <div
                    key={idx}
                    className={`absolute z-30 ${elem.sizeClass} ${elem.posClass} ${elem.hoverPosClass} opacity-0 group-hover/card:opacity-100 transition-all duration-500 ease-out pointer-events-none drop-shadow-lg ${elem.animation}`}
                  >
                    <Image src={elem.src} alt={elem.alt} fill sizes="100px" className="object-contain" />
                  </div>
                ))}

                {/* Product Top Image Container */}
                <div>
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-neutral-100 mb-5">
                    {isRose ? (
                      /* Mini Interactive Showcase for Rose Milkaboo Card */
                      <div className="relative w-full h-full bg-cover bg-center overflow-hidden flex items-center justify-center" style={{ backgroundImage: `url('/images/backgroun 1.png')` }}>
                        <div className="relative z-20 w-36 h-48 transition-transform duration-500 group-hover/card:scale-110">
                          <Image src="/images/rosemilk.png" alt="Hand holding Rose Milkaboo" fill sizes="(max-width: 768px) 100vw, 25vw" className="object-contain" />
                        </div>
                      </div>
                    ) : isApple ? (
                      /* Mini Interactive Showcase for Green Apple Card */
                      <div className="relative w-full h-full bg-cover bg-center overflow-hidden flex items-center justify-center" style={{ backgroundImage: `url('/images/Green apple.png')` }}>
                        <div className="relative z-20 w-44 h-48 transition-transform duration-500 group-hover/card:scale-110">
                          <Image src="/images/greenapple.png" alt="Green Apple Milkaboo" fill sizes="(max-width: 768px) 100vw, 25vw" className="object-contain" />
                        </div>
                      </div>
                    ) : isBlackcurrant ? (
                      /* Mini Interactive Showcase for Blackcurrant Card */
                      <div className="relative w-full h-full bg-cover bg-center overflow-hidden flex items-center justify-center" style={{ backgroundImage: `url('/images/blackbackgroiund.png')` }}>
                        <div className="relative z-20 w-36 h-48 transition-transform duration-500 group-hover/card:scale-110">
                          <Image src="/images/blackcc.png" alt="Blackcurrant Milkaboo" fill sizes="(max-width: 768px) 100vw, 25vw" className="object-contain" />
                        </div>
                      </div>
                    ) : (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                      />
                    )}

                    {/* Flavor Tag Badge */}
                    <div className="absolute top-3 left-3 z-20">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-bold capitalize border shadow-xs backdrop-blur-md ${item.badgeBg} ${item.badgeText}`}
                      >
                        {item.flavor}
                      </span>
                    </div>

                    {/* Favorite Button */}
                    <button
                      onClick={() => toggleFavorite(item.id)}
                      aria-label="Add to favorites"
                      className="absolute top-3 right-3 z-20 p-2.5 rounded-full bg-white/80 backdrop-blur-md text-neutral-600 hover:text-rose-500 hover:bg-white shadow-xs transition-colors cursor-pointer"
                    >
                      <Heart
                        className={`w-4 h-4 transition-transform active:scale-125 ${isFav ? "fill-rose-500 text-rose-500" : ""
                          }`}
                      />
                    </button>

                    {/* Gradient Overlay Accent */}
                    <div
                      className={`absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t ${item.accentColor} opacity-0 group-hover/card:opacity-20 transition-opacity duration-300`}
                    />
                  </div>

                  {/* Title & Rating */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-2xl sm:text-3xl font-[family-name:var(--font-luckiest-guy)] text-neutral-900 leading-tight tracking-wide">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-200/50 shrink-0">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="text-xs font-bold text-amber-900">{item.rating}</span>
                    </div>
                  </div>

                  {/* Tagline & Description */}
                  <p className="text-xs font-semibold text-purple-700 mb-2">
                    {item.tagline}
                  </p>
                  <p className="text-xs text-neutral-600 leading-relaxed line-clamp-3 mb-4">
                    {item.description}
                  </p>

                  {/* Flavor Notes Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {item.notes.map((note, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-semibold bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded-md"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Price & Order Action */}
                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-xs text-neutral-400 font-medium block">Price</span>
                    <span className="text-lg font-black text-neutral-900">{item.price}</span>
                  </div>

                  <button
                    onClick={() => handleAddToCart(item.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all duration-200 cursor-pointer shadow-xs active:scale-95 ${isAdded
                        ? "bg-emerald-600 text-white"
                        : "bg-neutral-900 hover:bg-neutral-800 text-white hover:shadow-md"
                      }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Order Now</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
