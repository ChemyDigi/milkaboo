"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ShoppingBag, Heart, Check } from "lucide-react";

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
  cardBg: string;
  cardPattern?: string;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
  btnBg: string;
  btnText: string;
  notes: string[];
  floatElements: {
    src: string;
    alt: string;
    // Initial hidden rest position behind bottle center
    basePosClass: string;
    // Hover transform: shoots out symmetrically to four quadrants without colliding with text
    hoverTransform: string;
    sizeClass: string;
    animation: string;
  }[];
}

const flavorsData: FlavorProduct[] = [
  {
    id: "rose-milkaboo",
    name: "ROSE MILKABOO",
    flavor: "Sweet & Floral",
    tagline: "Floral, silky and enchanting damask rose milk tea with honey boba.",
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
        // Top-Left quadrant
        basePosClass: "top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-50 opacity-0",
        hoverTransform: "group-hover:-translate-x-40 sm:group-hover:-translate-x-52 group-hover:-translate-y-36 sm:group-hover:-translate-y-44 group-hover:-rotate-12 group-hover:scale-100 group-hover:opacity-100",
        sizeClass: "w-20 h-20 sm:w-26 sm:h-26 md:w-30 md:h-30",
        animation: "animate-float-gentle",
      },
      {
        src: "/images/rosemilka2.png",
        alt: "Pink Ice Cubes",
        // Top-Right quadrant
        basePosClass: "top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-50 opacity-0",
        hoverTransform: "group-hover:translate-x-40 sm:group-hover:translate-x-52 group-hover:-translate-y-32 sm:group-hover:-translate-y-40 group-hover:rotate-12 group-hover:scale-100 group-hover:opacity-100",
        sizeClass: "w-18 h-18 sm:w-22 sm:h-22 md:w-26 md:h-26",
        animation: "animate-float-reverse",
      },
      {
        src: "/images/boba1.png",
        alt: "Boba Pearls",
        // Mid-Left quadrant: floats directly leftwards (above the bottom text)
        basePosClass: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-50 opacity-0",
        hoverTransform: "group-hover:-translate-x-44 sm:group-hover:-translate-x-56 group-hover:-translate-y-2 sm:group-hover:-translate-y-4 group-hover:-rotate-6 group-hover:scale-100 group-hover:opacity-100",
        sizeClass: "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24",
        animation: "animate-float-gentle",
      },
      {
        src: "/images/rosemilka4.png",
        alt: "Rose Bubble",
        // Mid-Right quadrant: floats directly rightwards
        basePosClass: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-50 opacity-0",
        hoverTransform: "group-hover:translate-x-44 sm:group-hover:translate-x-56 group-hover:-translate-y-2 sm:group-hover:-translate-y-4 group-hover:rotate-12 group-hover:scale-100 group-hover:opacity-100",
        sizeClass: "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24",
        animation: "animate-float-reverse",
      },
    ],
  },
  {
    id: "apple-milkaboo",
    name: "APPLE MILKABOO",
    flavor: "Crisp & Zesty",
    tagline: "Crisp orchard green apples blended with creamy milk tea and popping boba.",
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
        // Top-Left quadrant
        basePosClass: "top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-50 opacity-0",
        hoverTransform: "group-hover:-translate-x-40 sm:group-hover:-translate-x-54 group-hover:-translate-y-36 sm:group-hover:-translate-y-46 group-hover:-rotate-12 group-hover:scale-100 group-hover:opacity-100",
        sizeClass: "w-22 h-22 sm:w-28 sm:h-28 md:w-34 md:h-34",
        animation: "animate-float-gentle",
      },
      {
        src: "/images/applemilka2.png",
        alt: "Whole Green Apple",
        // Top-Right quadrant
        basePosClass: "top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-50 opacity-0",
        hoverTransform: "group-hover:translate-x-40 sm:group-hover:translate-x-52 group-hover:-translate-y-32 sm:group-hover:-translate-y-40 group-hover:rotate-12 group-hover:scale-100 group-hover:opacity-100",
        sizeClass: "w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28",
        animation: "animate-float-reverse",
      },
      {
        src: "/images/boba1.png",
        alt: "Black Boba Pearls",
        // Mid-Left quadrant: floats directly leftwards
        basePosClass: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-50 opacity-0",
        hoverTransform: "group-hover:-translate-x-44 sm:group-hover:-translate-x-56 group-hover:-translate-y-2 sm:group-hover:-translate-y-4 group-hover:-rotate-6 group-hover:scale-100 group-hover:opacity-100",
        sizeClass: "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24",
        animation: "animate-float-gentle",
      },
      {
        src: "/images/boba2.png",
        alt: "Single Boba Pearl",
        // Mid-Right quadrant: floats directly rightwards
        basePosClass: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-50 opacity-0",
        hoverTransform: "group-hover:translate-x-44 sm:group-hover:translate-x-56 group-hover:-translate-y-2 sm:group-hover:-translate-y-4 group-hover:rotate-12 group-hover:scale-100 group-hover:opacity-100",
        sizeClass: "w-16 h-16 sm:w-20 sm:h-20 md:w-22 md:h-22",
        animation: "animate-float-reverse",
      },
    ],
  },
  {
    id: "blackcurrant-milkaboo",
    name: "BLACKCURRANT MILKABOO",
    flavor: "Rich & Tart Berry",
    tagline: "Bold wild blackcurrant berries layered over velvety sweet cream and boba.",
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
        // Top-Left quadrant
        basePosClass: "top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-50 opacity-0",
        hoverTransform: "group-hover:-translate-x-40 sm:group-hover:-translate-x-54 group-hover:-translate-y-36 sm:group-hover:-translate-y-46 group-hover:-rotate-12 group-hover:scale-100 group-hover:opacity-100",
        sizeClass: "w-22 h-22 sm:w-28 sm:h-28 md:w-34 md:h-34",
        animation: "animate-float-gentle",
      },
      {
        src: "/images/blackcurrentmilka7.png",
        alt: "Single Blackcurrant",
        // Top-Right quadrant
        basePosClass: "top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-50 opacity-0",
        hoverTransform: "group-hover:translate-x-40 sm:group-hover:translate-x-52 group-hover:-translate-y-32 sm:group-hover:-translate-y-40 group-hover:rotate-12 group-hover:scale-100 group-hover:opacity-100",
        sizeClass: "w-18 h-18 sm:w-22 sm:h-22 md:w-26 md:h-26",
        animation: "animate-float-reverse",
      },
      {
        src: "/images/blackcurrentmilka1.png",
        alt: "Boba Pearls Cluster",
        // Mid-Left quadrant: floats directly leftwards
        basePosClass: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-50 opacity-0",
        hoverTransform: "group-hover:-translate-x-44 sm:group-hover:-translate-x-56 group-hover:-translate-y-2 sm:group-hover:-translate-y-4 group-hover:-rotate-6 group-hover:scale-100 group-hover:opacity-100",
        sizeClass: "w-18 h-18 sm:w-22 sm:h-22 md:w-26 md:h-26",
        animation: "animate-float-gentle",
      },
      {
        src: "/images/boba1.png",
        alt: "Tapioca Boba",
        // Mid-Right quadrant: floats directly rightwards
        basePosClass: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-50 opacity-0",
        hoverTransform: "group-hover:translate-x-44 sm:group-hover:translate-x-56 group-hover:-translate-y-2 sm:group-hover:-translate-y-4 group-hover:rotate-12 group-hover:scale-100 group-hover:opacity-100",
        sizeClass: "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24",
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
  const [scrollTranslate, setScrollTranslate] = useState(0);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAddToCart = (id: string) => {
    setAddedId(id);
    setTimeout(() => setAddedId(null), 1800);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();

      const pinOffset = 140;
      const totalDist = containerRef.current.offsetHeight - window.innerHeight;

      if (totalDist <= 0) return;

      const current = pinOffset - rect.top;
      const progress = Math.min(Math.max(current / totalDist, 0), 1);

      const maxScrollX = Math.max(
        0,
        trackRef.current.scrollWidth - window.innerWidth + 200
      );

      const startPause = 0.05;
      const endPause = 0.92;

      let horizontalFraction = 0;
      if (progress <= startPause) {
        horizontalFraction = 0;
      } else if (progress >= endPause) {
        horizontalFraction = 1;
      } else {
        horizontalFraction = (progress - startPause) / (endPause - startPause);
      }

      setScrollTranslate(horizontalFraction * maxScrollX);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div id="flavors" className="relative w-full bg-[#dfd2f5]">
      {/* 1. TOP HEADER WORDING SECTION */}
      <div className="w-full max-w-7xl mx-auto pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-14 px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-start">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-luckiest-guy)] tracking-tight text-neutral-950 uppercase leading-[0.95] select-none">
              4 Flavor Mixes <br />
              Beloved Across <br />
              The Land
            </h2>
          </div>

          <div className="flex flex-col justify-start lg:pt-3">
            <p className="text-base sm:text-lg md:text-xl text-neutral-700 leading-relaxed font-medium max-w-xl">
              The most celebrated bubble tea creations in the realm. Every cup is a little spell: color, texture, and taste woven into a moment of pure wonder. At Milkaboo, we elevate bubble tea into something truly enchanting.
            </p>
          </div>
        </div>
      </div>

      {/* 2. PINNED PARALLAX SECTION */}
      <div ref={containerRef} className="relative w-full h-[360vh] pb-36">
        <div className="sticky top-24 sm:top-28 md:top-32 h-[calc(100vh-120px)] w-full overflow-hidden flex flex-col justify-center px-6 sm:px-12 lg:px-20 z-20">

          <div className="relative w-full overflow-visible my-auto py-10">
            <div
              ref={trackRef}
              className="flex items-start gap-12 sm:gap-16 lg:gap-24 pl-6 pr-48 transition-transform duration-75 ease-out will-change-transform"
              style={{
                transform: `translate3d(-${scrollTranslate}px, 0, 0)`,
              }}
            >
              {flavorsData.map((item, index) => {
                const isFav = favorites[item.id];
                const isAdded = addedId === item.id;

                return (
                  <div
                    key={item.id}
                    className="group relative flex-none w-[340px] sm:w-[440px] md:w-[500px] lg:w-[560px] xl:w-[600px] select-none cursor-pointer pt-12"
                  >
                    {/* Outer Card Wrapper with overflow-visible */}
                    <div className="relative w-full overflow-visible">

                      {/* Rounded Colored Card Background */}
                      <div className="relative w-full h-[220px] sm:h-[260px] md:h-[280px] lg:h-[300px] rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-2xl">
                        <div className={`absolute inset-0 ${item.cardBg}`} />

                        {item.cardPattern && (
                          <div
                            className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: `url('${item.cardPattern}')` }}
                          />
                        )}

                        {/* Favorite Heart Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite(item.id);
                          }}
                          aria-label="Add to favorites"
                          className="absolute top-4 right-4 sm:top-5 sm:right-5 z-40 p-2.5 sm:p-3 rounded-full bg-white/85 backdrop-blur-md text-neutral-600 hover:text-rose-500 hover:bg-white shadow-md transition-transform active:scale-125 cursor-pointer"
                        >
                          <Heart
                            className={`w-4 h-4 sm:w-5 sm:h-5 ${isFav ? "fill-rose-500 text-rose-500" : ""
                              }`}
                          />
                        </button>
                      </div>

                      {/* INGREDIENTS & FLOATING TOPPINGS:
                          Symmetrically distributed to the 4 corners/sides around the card.
                          The lower items shoot directly out to the sides (-translate-y-2) so they never touch the bottom text! */}
                      {item.floatElements.map((elem, idx) => (
                        <div
                          key={idx}
                          className={`absolute z-25 ${elem.sizeClass} ${elem.basePosClass} ${elem.hoverTransform} transition-all duration-700 ease-out pointer-events-none drop-shadow-2xl ${elem.animation}`}
                        >
                          <Image
                            src={elem.src}
                            alt={elem.alt}
                            fill
                            sizes="(max-width: 768px) 140px, 200px"
                            className="object-contain"
                          />
                        </div>
                      ))}

                      {/* HERO PRODUCT CUP/BOTTLE: In front of ingredients */}
                      <div className="absolute inset-x-0 mx-auto -top-14 sm:-top-18 md:-top-22 lg:-top-24 w-52 h-76 sm:w-64 sm:h-92 md:w-72 md:h-[390px] lg:w-80 lg:h-[420px] z-30 pointer-events-none transition-all duration-500 ease-out group-hover:scale-108 group-hover:-translate-y-4 drop-shadow-[0_28px_40px_rgba(0,0,0,0.30)] flex items-center justify-center">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="(max-width: 768px) 340px, 480px"
                          className="object-contain"
                          priority={index === 0}
                        />
                      </div>
                    </div>

                    {/* Card Bottom Meta: Generous mt-8/mt-10 spacing so bottom ingredients never overlap */}
                    <div className="mt-8 sm:mt-10 flex flex-col items-start px-1 shrink-0 relative z-30">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-[family-name:var(--font-luckiest-guy)] text-neutral-950 uppercase tracking-tight leading-tight">
                        {item.name}
                      </h3>

                      <p className="mt-1 sm:mt-1.5 text-xs sm:text-sm md:text-base text-neutral-700 font-medium line-clamp-2 max-w-lg leading-snug">
                        {item.tagline}
                      </p>

                      {/* Lime Pill SHOP NOW Button */}
                      <div className="mt-3.5 sm:mt-4">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAddToCart(item.id);
                          }}
                          className={`inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider shadow-sm active:scale-95 transition-all duration-200 cursor-pointer ${isAdded
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
                              <ShoppingBag className="w-4 h-4" />
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
    </div>
  );
}
