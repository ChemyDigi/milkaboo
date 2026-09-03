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
    posClass: string;
    hoverPosClass: string;
    sizeClass: string;
    animation: string;
  }[];
}

const flavorsData: FlavorProduct[] = [
  {
    id: "rose-milkaboo",
    name: "THE SWEET SPOT",
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
        posClass: "-top-5 -left-5",
        hoverPosClass: "group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:-rotate-12",
        sizeClass: "w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24",
        animation: "animate-float-gentle",
      },
      {
        src: "/images/rosemilka2.png",
        alt: "Pink Ice Cubes",
        posClass: "-top-4 -right-4",
        hoverPosClass: "group-hover:translate-x-3 group-hover:-translate-y-3 group-hover:rotate-12",
        sizeClass: "w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20",
        animation: "animate-float-reverse",
      },
      {
        src: "/images/boba1.png",
        alt: "Boba Pearls",
        posClass: "bottom-4 -left-5",
        hoverPosClass: "group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-6",
        sizeClass: "w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20",
        animation: "animate-float-gentle",
      },
      {
        src: "/images/rosemilka4.png",
        alt: "Rose Bubble",
        posClass: "bottom-4 -right-5",
        hoverPosClass: "group-hover:translate-x-3 group-hover:translate-y-3 group-hover:rotate-12",
        sizeClass: "w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20",
        animation: "animate-float-reverse",
      },
    ],
  },
  {
    id: "apple-milkaboo",
    name: "TANGY TANGO",
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
        posClass: "-top-6 -left-6",
        hoverPosClass: "group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:-rotate-12",
        sizeClass: "w-18 h-18 sm:w-22 sm:h-22 lg:w-26 lg:h-26",
        animation: "animate-float-gentle",
      },
      {
        src: "/images/applemilka2.png",
        alt: "Whole Green Apple",
        posClass: "-top-5 -right-5",
        hoverPosClass: "group-hover:translate-x-3 group-hover:-translate-y-3 group-hover:rotate-12",
        sizeClass: "w-16 h-16 sm:w-18 sm:h-18 lg:w-22 lg:h-22",
        animation: "animate-float-reverse",
      },
      {
        src: "/images/boba1.png",
        alt: "Black Boba Pearls",
        posClass: "bottom-4 -left-5",
        hoverPosClass: "group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-6",
        sizeClass: "w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20",
        animation: "animate-float-gentle",
      },
      {
        src: "/images/boba2.png",
        alt: "Single Boba Pearl",
        posClass: "bottom-4 -right-4",
        hoverPosClass: "group-hover:translate-x-3 group-hover:translate-y-3 group-hover:rotate-12",
        sizeClass: "w-12 h-12 sm:w-14 sm:h-14 lg:w-18 lg:h-18",
        animation: "animate-float-reverse",
      },
    ],
  },
  {
    id: "blackcurrant-milkaboo",
    name: "OOPS! ALL CHOCO",
    flavor: "Rich & Tart Berry",
    tagline: "No notes, 100% chocolate euphoria you will adore!",
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
        posClass: "-top-6 -left-6",
        hoverPosClass: "group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:-rotate-12",
        sizeClass: "w-18 h-18 sm:w-22 sm:h-22 lg:w-26 lg:h-26",
        animation: "animate-float-gentle",
      },
      {
        src: "/images/blackcurrentmilka7.png",
        alt: "Single Blackcurrant",
        posClass: "-top-5 -right-5",
        hoverPosClass: "group-hover:translate-x-3 group-hover:-translate-y-3 group-hover:rotate-12",
        sizeClass: "w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20",
        animation: "animate-float-reverse",
      },
      {
        src: "/images/blackcurrentmilka1.png",
        alt: "Boba Pearls Cluster",
        posClass: "bottom-4 -left-5",
        hoverPosClass: "group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-6",
        sizeClass: "w-14 h-14 sm:w-18 sm:h-18 lg:w-22 lg:h-22",
        animation: "animate-float-gentle",
      },
      {
        src: "/images/boba1.png",
        alt: "Tapioca Boba",
        posClass: "bottom-4 -right-4",
        hoverPosClass: "group-hover:translate-x-3 group-hover:translate-y-3 group-hover:rotate-12",
        sizeClass: "w-12 h-12 sm:w-14 sm:h-14 lg:w-18 lg:h-18",
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
      const totalDist = containerRef.current.offsetHeight - window.innerHeight;

      if (totalDist <= 0) return;

      const current = -rect.top;
      const progress = Math.min(Math.max(current / totalDist, 0), 1);

      // Max horizontal translation in pixels
      const maxScrollX = Math.max(
        0,
        trackRef.current.scrollWidth - window.innerWidth + 96
      );

      // 10% pause when arriving, smooth scroll from 10% to 88%, settled pause from 88% to 100%
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
      className="relative w-full h-[320vh] bg-[#ede6f6] pb-32"
    >
      {/* Sticky viewport container (with pt-28 to clear navbar and pb-6 so nothing gets cut off) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between pt-28 sm:pt-32 pb-8 sm:pb-12 px-6 sm:px-12 lg:px-20 z-20">
        {/* Top Header Section */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 items-start shrink-0 mb-4 sm:mb-6">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-luckiest-guy)] tracking-tight text-neutral-950 uppercase leading-[0.92] select-none">
              4 Flavor Mixes <br />
              Beloved Across <br />
              The Land
            </h2>
          </div>

          <div className="pt-1 lg:pt-4 flex flex-col justify-start">
            <p className="text-sm sm:text-base md:text-lg text-neutral-700 leading-relaxed font-medium max-w-xl">
              The most celebrated bubble tea creations in the realm. Every cup is a little spell: color, texture, and taste woven into a moment of pure wonder. At Milkaboo, we elevate bubble tea into something truly enchanting.
            </p>
          </div>
        </div>

        {/* Horizontal Track with 3 Products perfectly proportioned to fit screen without cropping */}
        <div className="relative w-full overflow-visible my-auto">
          <div
            ref={trackRef}
            className="flex items-center gap-8 sm:gap-10 lg:gap-12 pl-2 pr-20 transition-transform duration-75 ease-out will-change-transform"
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
                  className="group relative flex-none w-[310px] sm:w-[380px] md:w-[440px] lg:w-[480px] xl:w-[500px] select-none cursor-pointer"
                >
                  {/* Outer Rounded Product Card Backdrop (Balanced height so header & button fit viewport) */}
                  <div className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[320px] rounded-[28px] sm:rounded-[36px] overflow-hidden flex items-center justify-center shadow-lg transition-all duration-500 group-hover:shadow-2xl">
                    {/* Rounded Colored Card Background */}
                    <div className={`absolute inset-0 ${item.cardBg}`} />

                    {/* Subtle Backdrop Pattern */}
                    {item.cardPattern && (
                      <div
                        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url('${item.cardPattern}')` }}
                      />
                    )}

                    {/* Floating Boba & Fruit Toppings */}
                    {item.floatElements.map((elem, idx) => (
                      <div
                        key={idx}
                        className={`absolute z-20 ${elem.sizeClass} ${elem.posClass} ${elem.hoverPosClass} transition-all duration-500 ease-out pointer-events-none drop-shadow-xl ${elem.animation}`}
                      >
                        <Image
                          src={elem.src}
                          alt={elem.alt}
                          fill
                          sizes="100px"
                          className="object-contain"
                        />
                      </div>
                    ))}

                    {/* Center Drink Cup (Fitting neatly inside card without overflowing vertically) */}
                    <div className="relative z-10 w-40 h-56 sm:w-48 sm:h-64 md:w-56 md:h-76 lg:w-60 lg:h-80 transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-2 drop-shadow-[0_20px_35px_rgba(0,0,0,0.22)]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 250px, 350px"
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
                      className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-white/85 backdrop-blur-md text-neutral-600 hover:text-rose-500 hover:bg-white shadow-md transition-transform active:scale-125 cursor-pointer"
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          isFav ? "fill-rose-500 text-rose-500" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="mt-4 flex flex-col items-start px-1">
                    <h3 className="text-2xl sm:text-3xl font-[family-name:var(--font-luckiest-guy)] text-neutral-950 uppercase tracking-tight leading-tight">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-xs sm:text-sm text-neutral-700 font-medium line-clamp-2 max-w-md leading-snug">
                      {item.tagline}
                    </p>

                    {/* Lime Pill SHOP NOW Button */}
                    <div className="mt-3.5">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddToCart(item.id);
                        }}
                        className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider shadow-xs active:scale-95 transition-all duration-200 cursor-pointer ${
                          isAdded
                            ? "bg-emerald-600 text-white"
                            : `${item.btnBg} hover:shadow-md`
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
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
