"use client";

import React, { useEffect, useRef, useState } from "react";
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
  cardBg: string; // Background backdrop styling for the card banner
  cardPattern?: string; // Subtle backdrop image or pattern
  accentColor: string;
  badgeBg: string;
  badgeText: string;
  btnBg: string;
  btnText: string;
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
    name: "ROSE MILKABOO",
    flavor: "Sweet & Floral",
    tagline: "Heart-stealing, taste-bud-thrilling sweets you won't forget!",
    description:
      "A delicate fusion of fragrant damask rose extracts, rich velvet milk tea, and chewy dark tapioca pearls topped with edible rose petals.",
    price: "$6.50",
    rating: 4.9,
    reviewsCount: 142,
    image: "/images/rosemilk.png",
    cardBg: "bg-[#f5ceda]",
    cardPattern: "/images/backgroun 1.png",
    accentColor: "from-rose-400 to-pink-500",
    badgeBg: "bg-pink-100/90 border-pink-200 text-pink-700",
    badgeText: "text-pink-700",
    btnBg: "bg-[#d8f96e] hover:bg-[#c9ef56] text-neutral-950",
    btnText: "text-neutral-950",
    notes: ["Real Rose Petals", "Velvet Milk Base", "Fresh Tapioca"],
    floatElements: [
      {
        src: "/images/rosemilka1.png",
        alt: "Rose Flower",
        posClass: "-top-6 -left-6",
        hoverPosClass: "group-hover:-translate-x-4 group-hover:-translate-y-4 group-hover:-rotate-12",
        sizeClass: "w-20 h-20 sm:w-24 sm:h-24",
        animation: "animate-float-gentle",
      },
      {
        src: "/images/rosemilka2.png",
        alt: "Pink Ice Cubes",
        posClass: "-top-4 -right-4",
        hoverPosClass: "group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:rotate-12",
        sizeClass: "w-16 h-16 sm:w-20 sm:h-20",
        animation: "animate-float-reverse",
      },
      {
        src: "/images/boba1.png",
        alt: "Boba Pearls",
        posClass: "bottom-4 -left-6",
        hoverPosClass: "group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-6",
        sizeClass: "w-16 h-16 sm:w-20 sm:h-20",
        animation: "animate-float-gentle",
      },
      {
        src: "/images/rosemilka4.png",
        alt: "Rose Bubble",
        posClass: "bottom-4 -right-6",
        hoverPosClass: "group-hover:translate-x-4 group-hover:translate-y-3 group-hover:rotate-12",
        sizeClass: "w-16 h-16 sm:w-20 sm:h-20",
        animation: "animate-float-reverse",
      },
    ],
  },
  {
    id: "apple-milkaboo",
    name: "TANGY TANGO APPLE",
    flavor: "Crisp & Zesty",
    tagline: "A tangy adventure with the sweetest epilogue!",
    description:
      "Infused with crisp orchard green apple essence, silky milk blend, and golden popping boba for a bright, fruity burst in every sip.",
    price: "$6.25",
    rating: 4.8,
    reviewsCount: 118,
    image: "/images/greenapple.png",
    cardBg: "bg-[#d0f098]",
    cardPattern: "/images/Green apple.png",
    accentColor: "from-emerald-400 to-green-500",
    badgeBg: "bg-lime-100/90 border-lime-200 text-lime-800",
    badgeText: "text-emerald-800",
    btnBg: "bg-[#d8f96e] hover:bg-[#c9ef56] text-neutral-950",
    btnText: "text-neutral-950",
    notes: ["Granny Smith Twist", "Sweet & Crisp", "Popping Boba"],
    floatElements: [
      {
        src: "/images/applemilka1.png",
        alt: "Apple Slices",
        posClass: "-top-8 -left-8",
        hoverPosClass: "group-hover:-translate-x-4 group-hover:-translate-y-4 group-hover:-rotate-12",
        sizeClass: "w-24 h-24 sm:w-28 sm:h-28",
        animation: "animate-float-gentle",
      },
      {
        src: "/images/applemilka2.png",
        alt: "Whole Green Apple",
        posClass: "-top-6 -right-6",
        hoverPosClass: "group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:rotate-12",
        sizeClass: "w-20 h-20 sm:w-24 sm:h-24",
        animation: "animate-float-reverse",
      },
      {
        src: "/images/boba1.png",
        alt: "Black Boba Pearls",
        posClass: "bottom-4 -left-6",
        hoverPosClass: "group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-6",
        sizeClass: "w-16 h-16 sm:w-20 sm:h-20",
        animation: "animate-float-gentle",
      },
      {
        src: "/images/boba2.png",
        alt: "Single Boba Pearl",
        posClass: "bottom-4 -right-4",
        hoverPosClass: "group-hover:translate-x-4 group-hover:translate-y-3 group-hover:rotate-12",
        sizeClass: "w-14 h-14 sm:w-18 sm:h-18",
        animation: "animate-float-reverse",
      },
    ],
  },
  {
    id: "blackcurrant-milkaboo",
    name: "BLACKCURRANT BLISS",
    flavor: "Rich & Tart Berry",
    tagline: "Wild berry sensation layered with pure velvet euphoria!",
    description:
      "Deep purple blackcurrant berry reduction layered over creamy milk tea with honey-soaked boba pearls for a rich sweet-tart experience.",
    price: "$6.75",
    rating: 4.9,
    reviewsCount: 156,
    image: "/images/blackcc.png",
    cardBg: "bg-[#e2cbf8]",
    cardPattern: "/images/blackbackgroiund.png",
    accentColor: "from-purple-500 to-indigo-600",
    badgeBg: "bg-purple-100/90 border-purple-200 text-purple-800",
    badgeText: "text-purple-800",
    btnBg: "bg-[#d8f96e] hover:bg-[#c9ef56] text-neutral-950",
    btnText: "text-neutral-950",
    notes: ["Wild Blackcurrant", "Berry Cream Foam", "Honey Boba"],
    floatElements: [
      {
        src: "/images/blackcurrentmilka2.png",
        alt: "Blackcurrant Cluster",
        posClass: "-top-8 -left-8",
        hoverPosClass: "group-hover:-translate-x-4 group-hover:-translate-y-4 group-hover:-rotate-12",
        sizeClass: "w-24 h-24 sm:w-28 sm:h-28",
        animation: "animate-float-gentle",
      },
      {
        src: "/images/blackcurrentmilka7.png",
        alt: "Single Blackcurrant",
        posClass: "-top-6 -right-6",
        hoverPosClass: "group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:rotate-12",
        sizeClass: "w-16 h-16 sm:w-20 sm:h-20",
        animation: "animate-float-reverse",
      },
      {
        src: "/images/blackcurrentmilka1.png",
        alt: "Boba Pearls Cluster",
        posClass: "bottom-4 -left-6",
        hoverPosClass: "group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-6",
        sizeClass: "w-18 h-18 sm:w-22 sm:h-22",
        animation: "animate-float-gentle",
      },
      {
        src: "/images/boba1.png",
        alt: "Tapioca Boba",
        posClass: "bottom-4 -right-4",
        hoverPosClass: "group-hover:translate-x-4 group-hover:translate-y-3 group-hover:rotate-12",
        sizeClass: "w-14 h-14 sm:w-18 sm:h-18",
        animation: "animate-float-reverse",
      },
    ],
  },
];

export default function FlavorSection() {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [addedId, setAddedId] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAddToCart = (id: string) => {
    setAddedId(id);
    setTimeout(() => setAddedId(null), 1800);
  };

  // Parallax horizontal pinning scroll calculation
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalDist = containerRef.current.offsetHeight - window.innerHeight;

      if (totalDist <= 0) return;

      // Distance from when the top of container hits top of viewport
      const current = -rect.top;
      const progress = Math.min(Math.max(current / totalDist, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Compute horizontal translate percentage
  // Total cards = 3. On large desktop we translate ~38-42% to reveal the 3rd card completely.
  const translateX = scrollProgress * 38;

  return (
    <div
      ref={containerRef}
      id="flavors"
      className="relative w-full h-[280vh] bg-[#ede6f6]"
    >
      {/* Sticky viewport container (stays pinned while user scrolls through the 300vh height) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center px-4 sm:px-8 lg:px-16">
        {/* Top Header Section matching the exact screenshot */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-start mb-6 lg:mb-10 shrink-0">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-3 rounded-full text-xs font-bold uppercase tracking-widest bg-purple-200/80 text-purple-900">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Signature Flavors</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-luckiest-guy)] tracking-tight text-neutral-950 uppercase leading-[0.95] select-none">
              4 Flavor Mixes <br />
              Beloved Across <br />
              The Land
            </h2>
          </div>

          <div className="pt-1 lg:pt-6 flex flex-col justify-between">
            <p className="text-sm sm:text-base md:text-lg text-neutral-700 leading-relaxed font-medium">
              The most celebrated bubble tea creations in the realm. Every cup is a little spell: color, texture, and taste woven into a moment of pure wonder. At Milkaboo, we elevate bubble tea into something truly enchanting.
            </p>

            {/* Scroll Indicator Bar */}
            <div className="mt-4 flex items-center gap-3">
              <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                Scroll to explore ({Math.round(scrollProgress * 100)}%)
              </span>
              <div className="h-1.5 w-32 bg-purple-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-neutral-900 rounded-full transition-all duration-150 ease-out"
                  style={{ width: `${Math.max(scrollProgress * 100, 10)}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Track Pinning 3 Products */}
        <div className="relative w-full overflow-visible">
          <div
            ref={trackRef}
            className="flex items-center gap-8 sm:gap-10 lg:gap-12 transition-transform duration-100 ease-out will-change-transform"
            style={{
              transform: `translate3d(-${translateX}%, 0, 0)`,
            }}
          >
            {flavorsData.map((item, index) => {
              const isFav = favorites[item.id];
              const isAdded = addedId === item.id;

              return (
                <div
                  key={item.id}
                  className="group relative flex-none w-[320px] sm:w-[420px] md:w-[480px] lg:w-[520px] select-none cursor-pointer"
                >
                  {/* Outer Rounded Product Card Backdrop matching screenshot */}
                  <div className="relative w-full aspect-[4/3] rounded-[32px] sm:rounded-[40px] overflow-hidden flex items-center justify-center shadow-lg transition-all duration-500 group-hover:shadow-2xl">
                    {/* Rounded Colored Card Background */}
                    <div className={`absolute inset-0 ${item.cardBg}`} />

                    {/* Subtle Backdrop Pattern */}
                    {item.cardPattern && (
                      <div
                        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url('${item.cardPattern}')` }}
                      />
                    )}

                    {/* Floating Boba & Fruit Toppings (Pop out on hover with parallax depth) */}
                    {item.floatElements.map((elem, idx) => (
                      <div
                        key={idx}
                        className={`absolute z-20 ${elem.sizeClass} ${elem.posClass} ${elem.hoverPosClass} transition-all duration-500 ease-out pointer-events-none drop-shadow-xl ${elem.animation}`}
                      >
                        <Image
                          src={elem.src}
                          alt={elem.alt}
                          fill
                          sizes="120px"
                          className="object-contain"
                        />
                      </div>
                    ))}

                    {/* Main Featured Drink Cup Standing in the center */}
                    <div className="relative z-10 w-44 h-64 sm:w-56 sm:h-80 md:w-64 md:h-88 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-2 drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 300px, 400px"
                        className="object-contain"
                        priority={index === 0}
                      />
                    </div>

                    {/* Favorite Heart Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(item.id);
                      }}
                      aria-label="Add to favorites"
                      className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-white/85 backdrop-blur-md text-neutral-600 hover:text-rose-500 hover:bg-white shadow-sm transition-transform active:scale-125 cursor-pointer"
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          isFav ? "fill-rose-500 text-rose-500" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Card Bottom Meta: Exact same typography and pill button as screenshot */}
                  <div className="mt-5 flex flex-col items-start">
                    <div className="flex items-center justify-between w-full">
                      <h3 className="text-2xl sm:text-3xl font-[family-name:var(--font-luckiest-guy)] text-neutral-950 uppercase tracking-tight leading-tight">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-1 bg-white/80 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-neutral-200">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span className="text-xs font-bold text-neutral-800">
                          {item.rating}
                        </span>
                      </div>
                    </div>

                    <p className="mt-1.5 text-xs sm:text-sm text-neutral-700 font-medium line-clamp-2 max-w-md leading-snug">
                      {item.tagline}
                    </p>

                    {/* SHOP NOW / ORDER NOW Pill Button matching the screenshot (Lime neon pill) */}
                    <div className="mt-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddToCart(item.id);
                        }}
                        className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider shadow-sm active:scale-95 transition-all duration-200 cursor-pointer ${
                          isAdded
                            ? "bg-emerald-600 text-white"
                            : `${item.btnBg} hover:shadow-md`
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>ADDED!</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>SHOP NOW</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
