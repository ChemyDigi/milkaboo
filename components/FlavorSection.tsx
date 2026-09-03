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
        posClass: "-top-8 -left-8",
        hoverPosClass: "group-hover:-translate-x-5 group-hover:-translate-y-5 group-hover:-rotate-12",
        sizeClass: "w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32",
        animation: "animate-float-gentle",
      },
      {
        src: "/images/rosemilka2.png",
        alt: "Pink Ice Cubes",
        posClass: "-top-6 -right-6",
        hoverPosClass: "group-hover:translate-x-5 group-hover:-translate-y-5 group-hover:rotate-12",
        sizeClass: "w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28",
        animation: "animate-float-reverse",
      },
      {
        src: "/images/boba1.png",
        alt: "Boba Pearls",
        posClass: "bottom-6 -left-8",
        hoverPosClass: "group-hover:-translate-x-4 group-hover:translate-y-4 group-hover:-rotate-6",
        sizeClass: "w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28",
        animation: "animate-float-gentle",
      },
      {
        src: "/images/rosemilka4.png",
        alt: "Rose Bubble",
        posClass: "bottom-6 -right-8",
        hoverPosClass: "group-hover:translate-x-5 group-hover:translate-y-4 group-hover:rotate-12",
        sizeClass: "w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28",
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
        posClass: "-top-10 -left-10",
        hoverPosClass: "group-hover:-translate-x-5 group-hover:-translate-y-5 group-hover:-rotate-12",
        sizeClass: "w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36",
        animation: "animate-float-gentle",
      },
      {
        src: "/images/applemilka2.png",
        alt: "Whole Green Apple",
        posClass: "-top-8 -right-8",
        hoverPosClass: "group-hover:translate-x-5 group-hover:-translate-y-5 group-hover:rotate-12",
        sizeClass: "w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32",
        animation: "animate-float-reverse",
      },
      {
        src: "/images/boba1.png",
        alt: "Black Boba Pearls",
        posClass: "bottom-6 -left-8",
        hoverPosClass: "group-hover:-translate-x-4 group-hover:translate-y-4 group-hover:-rotate-6",
        sizeClass: "w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28",
        animation: "animate-float-gentle",
      },
      {
        src: "/images/boba2.png",
        alt: "Single Boba Pearl",
        posClass: "bottom-6 -right-6",
        hoverPosClass: "group-hover:translate-x-5 group-hover:translate-y-4 group-hover:rotate-12",
        sizeClass: "w-18 h-18 sm:w-22 sm:h-22 md:w-26 md:h-26",
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
        posClass: "-top-10 -left-10",
        hoverPosClass: "group-hover:-translate-x-5 group-hover:-translate-y-5 group-hover:-rotate-12",
        sizeClass: "w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36",
        animation: "animate-float-gentle",
      },
      {
        src: "/images/blackcurrentmilka7.png",
        alt: "Single Blackcurrant",
        posClass: "-top-8 -right-8",
        hoverPosClass: "group-hover:translate-x-5 group-hover:-translate-y-5 group-hover:rotate-12",
        sizeClass: "w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28",
        animation: "animate-float-reverse",
      },
      {
        src: "/images/blackcurrentmilka1.png",
        alt: "Boba Pearls Cluster",
        posClass: "bottom-6 -left-8",
        hoverPosClass: "group-hover:-translate-x-4 group-hover:translate-y-4 group-hover:-rotate-6",
        sizeClass: "w-22 h-22 sm:w-26 sm:h-26 md:w-30 md:h-30",
        animation: "animate-float-gentle",
      },
      {
        src: "/images/boba1.png",
        alt: "Tapioca Boba",
        posClass: "bottom-6 -right-6",
        hoverPosClass: "group-hover:translate-x-5 group-hover:translate-y-4 group-hover:rotate-12",
        sizeClass: "w-18 h-18 sm:w-22 sm:h-22 md:w-26 md:h-26",
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

  // Phase 1 (0 to 12%): Fixed stop where all 3 products are presented in view
  // Phase 2 (12% to 88%): Smooth horizontal scroll traversing the products across the screen
  // Phase 3 (88% to 100%): Settled pause at the end, followed by buffer gap before continuing down
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalDist = containerRef.current.offsetHeight - window.innerHeight;

      if (totalDist <= 0) return;

      // Distance from top of viewport
      const current = -rect.top;
      const progress = Math.min(Math.max(current / totalDist, 0), 1);

      // Max horizontal translation in pixels
      const maxScrollX = Math.max(
        0,
        trackRef.current.scrollWidth - window.innerWidth + 120
      );

      // Map progress with pause at beginning and end
      const startPause = 0.10;
      const endPause = 0.88;

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
    <div
      ref={containerRef}
      id="flavors"
      className="relative w-full h-[380vh] bg-[#ede6f6] pb-32 sm:pb-48"
    >
      {/* Sticky viewport container (stays fixed while user scrolls through) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center px-6 sm:px-12 lg:px-20 z-20">
        {/* Top Header Section */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-start mb-6 sm:mb-8 lg:mb-12 shrink-0">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-3 rounded-full text-xs font-bold uppercase tracking-widest bg-purple-200/90 text-purple-900 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-purple-700" />
              <span>Signature Flavors</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-[family-name:var(--font-luckiest-guy)] tracking-tight text-neutral-950 uppercase leading-[0.93] select-none">
              4 Flavor Mixes <br />
              Beloved Across <br />
              The Land
            </h2>
          </div>

          <div className="pt-2 lg:pt-6 flex flex-col justify-between">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-700 leading-relaxed font-medium max-w-xl">
              The most celebrated bubble tea creations in the realm. Every cup is a little spell: color, texture, and taste woven into a moment of pure wonder. At Milkaboo, we elevate bubble tea into something truly enchanting.
            </p>
          </div>
        </div>

        {/* Horizontal Track Pinning 3 Products */}
        <div className="relative w-full overflow-visible">
          <div
            ref={trackRef}
            className="flex items-center gap-10 sm:gap-14 lg:gap-16 pl-2 pr-24 transition-transform duration-75 ease-out will-change-transform"
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
                  className="group relative flex-none w-[360px] sm:w-[480px] md:w-[560px] lg:w-[620px] xl:w-[680px] select-none cursor-pointer"
                >
                  {/* Outer Rounded Product Card Backdrop (Larger size) */}
                  <div className="relative w-full aspect-[16/11] rounded-[36px] sm:rounded-[48px] overflow-hidden flex items-center justify-center shadow-xl transition-all duration-500 group-hover:shadow-2xl">
                    {/* Rounded Colored Card Background */}
                    <div className={`absolute inset-0 ${item.cardBg}`} />

                    {/* Subtle Backdrop Pattern */}
                    {item.cardPattern && (
                      <div
                        className="absolute inset-0 bg-cover bg-center opacity-35 mix-blend-overlay transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url('${item.cardPattern}')` }}
                      />
                    )}

                    {/* Floating Boba & Fruit Toppings (Increased size & pop-outs) */}
                    {item.floatElements.map((elem, idx) => (
                      <div
                        key={idx}
                        className={`absolute z-20 ${elem.sizeClass} ${elem.posClass} ${elem.hoverPosClass} transition-all duration-500 ease-out pointer-events-none drop-shadow-2xl ${elem.animation}`}
                      >
                        <Image
                          src={elem.src}
                          alt={elem.alt}
                          fill
                          sizes="(max-width: 768px) 120px, 180px"
                          className="object-contain"
                        />
                      </div>
                    ))}

                    {/* Main Featured Drink Cup (Prominently Larger) */}
                    <div className="relative z-10 w-52 h-76 sm:w-68 sm:h-96 md:w-80 md:h-[430px] lg:w-92 lg:h-[480px] transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-3 drop-shadow-[0_25px_40px_rgba(0,0,0,0.28)]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 350px, 550px"
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
                      className="absolute top-5 right-5 z-30 p-3 rounded-full bg-white/85 backdrop-blur-md text-neutral-600 hover:text-rose-500 hover:bg-white shadow-md transition-transform active:scale-125 cursor-pointer"
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          isFav ? "fill-rose-500 text-rose-500" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="mt-6 flex flex-col items-start px-2">
                    <div className="flex items-center justify-between w-full">
                      <h3 className="text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-luckiest-guy)] text-neutral-950 uppercase tracking-tight leading-tight">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-1.5 bg-white/85 backdrop-blur-xs px-3 py-1 rounded-full border border-neutral-200/80 shadow-xs">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span className="text-xs sm:text-sm font-bold text-neutral-800">
                          {item.rating}
                        </span>
                      </div>
                    </div>

                    <p className="mt-2 text-sm sm:text-base text-neutral-700 font-medium line-clamp-2 max-w-xl leading-snug">
                      {item.tagline}
                    </p>

                    {/* SHOP NOW Button */}
                    <div className="mt-5">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddToCart(item.id);
                        }}
                        className={`inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider shadow-sm active:scale-95 transition-all duration-200 cursor-pointer ${
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
  );
}
