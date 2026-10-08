"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface FloatingItem {
  src: string;
  alt: string;
  className: string;
  shadowClass?: string;
  popOffset?: string;
}

interface ProductShowcase {
  id: string;
  num: string;
  name: string;
  flavor: string;
  eyebrow: string;
  leftHeadline: string;
  rightHeadline: string;
  description: string;
  drinkImage: string;
  snackImage: string;
  snackTitle: string;
  bgColor: string;
  floatingElements: FloatingItem[];
}

export const showcaseProducts: ProductShowcase[] = [
  {
    id: "rose-milkaboo",
    bgColor: "#f04e7a",
    num: "01",
    name: "Rose Milkaboo",
    flavor: "Rose Flavour",
    eyebrow: "YOUR ONE STOP",
    leftHeadline: "ROSE",
    rightHeadline: "BOO",
    description:
      "Milkaboo Dirty Soda And Exotic Snacks, It's A Mouthful But That's Kind Of What We Are All About. Welcome To Your One Stop Shop For Delicious Drinks And Snacks From All Over The World.",
    drinkImage: "/images/hand.png",
    snackImage: "/images/rosemilk.png",
    snackTitle: "Miss Rose Boba",
    floatingElements: [
      // 1. TOP-CENTER/LEFT: Sub image near the top of the drink cup (like top orange)
      {
        src: "/images/Home/rosemilka1.png",
        alt: "Rose Blossom Top",
        className:
          "left-[27%] sm:left-[30%] md:left-[32%] lg:left-[33%] top-[3%] sm:top-[4%] md:top-[5%] w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 -rotate-[10deg] animate-float-drift-1 z-20",
        shadowClass: "drop-shadow-[0_20px_35px_rgba(244,63,94,0.3)]",
        popOffset: "-translate-x-8 -translate-y-8",
      },
      // 2. BOTTOM-RIGHT: Sub image peeking near the bottom right under the snack/cup (like bottom orange)
      {
        src: "/images/Home/rosemilk3.png",
        alt: "Rose Bloom Bottom Right",
        className:
          "right-[20%] sm:right-[22%] md:right-[24%] lg:right-[25%] bottom-[2%] sm:bottom-[3%] md:bottom-[4%] w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rotate-[15deg] animate-float-drift-2 z-20",
        shadowClass: "drop-shadow-[0_24px_40px_rgba(244,63,94,0.28)]",
        popOffset: "translate-x-10 translate-y-10",
      },
      // 3. TOP-RIGHT CORNER: Giant, blurred element in the top right corner, half displayed / half out of screen
      {
        src: "/images/Home/rosemilka1.png",
        alt: "Rose Bloom Edge Blurred",
        className:
          "-right-28 sm:-right-36 md:-right-44 lg:-right-52 -top-20 sm:-top-24 md:-top-32 w-72 h-72 sm:w-96 sm:h-96 md:w-[440px] md:h-[440px] lg:w-[540px] lg:h-[540px] rotate-[22deg] blur-[8px] sm:blur-[12px] opacity-85 z-10",
        shadowClass: "drop-shadow-[0_30px_60px_rgba(244,63,94,0.35)]",
        popOffset: "translate-x-16 -translate-y-6",
      },
    ],
  },
  {
    id: "apple-milkaboo",
    bgColor: "#5cb531",
    num: "02",
    name: "Apple Milkaboo",
    flavor: "Apple Flavour",
    eyebrow: "YOUR ONE STOP",
    leftHeadline: "FLAVOR",
    rightHeadline: "SHOP",
    description:
      "Johnny's Dirty Soda And Exotic Snacks, It's A Mouthful But That's Kind OF What We Are All About. Welcome To Your One Stop Shop For Delicious Drinks And Snacks From All Over The World.",
    drinkImage: "/images/hand apple milkaboo.png",
    snackImage: "/images/greenapple.png",
    snackTitle: "Miss Apple Crisp",
    floatingElements: [
      // 1. TOP-CENTER/LEFT: Whole apple/slice matching top orange position
      {
        src: "/images/applemilka2.png",
        alt: "Green Apple Top",
        className:
          "left-[27%] sm:left-[30%] md:left-[32%] lg:left-[33%] top-[3%] sm:top-[4%] md:top-[5%] w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 -rotate-[10deg] animate-float-drift-1 z-20",
        shadowClass: "drop-shadow-[0_20px_35px_rgba(34,197,94,0.3)]",
        popOffset: "-translate-x-8 -translate-y-8",
      },
      // 2. BOTTOM-RIGHT: Matching lower orange position
      {
        src: "/images/applemilka1.png",
        alt: "Apple Slice Bottom Right",
        className:
          "right-[20%] sm:right-[22%] md:right-[24%] lg:right-[25%] bottom-[2%] sm:bottom-[3%] md:bottom-[4%] w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rotate-[15deg] animate-float-drift-2 z-20",
        shadowClass: "drop-shadow-[0_24px_40px_rgba(34,197,94,0.28)]",
        popOffset: "translate-x-10 translate-y-10",
      },
      // 3. TOP-RIGHT CORNER: Giant, blurred element in the top right corner, half displayed / half out of screen
      {
        src: "/images/applemilka2.png",
        alt: "Green Apple Edge Blurred",
        className:
          "-right-28 sm:-right-36 md:-right-44 lg:-right-52 -top-20 sm:-top-24 md:-top-32 w-72 h-72 sm:w-96 sm:h-96 md:w-[440px] md:h-[440px] lg:w-[540px] lg:h-[540px] rotate-[22deg] blur-[8px] sm:blur-[12px] opacity-85 z-10",
        shadowClass: "drop-shadow-[0_30px_60px_rgba(34,197,94,0.35)]",
        popOffset: "translate-x-16 -translate-y-6",
      },
    ],
  },
  {
    id: "custard-milkaboo",
    bgColor: "#f4a300",
    num: "03",
    name: "Custard Milkaboo",
    flavor: "Custard Flavour",
    eyebrow: "YOUR ONE STOP",
    leftHeadline: "SWEET",
    rightHeadline: "CUSTARD",
    description:
      "Milkaboo Dirty Soda And Exotic Snacks, It's A Mouthful But That's Kind Of What We Are All About. Welcome To Your One Stop Shop For Delicious Drinks And Snacks From All Over The World.",
    drinkImage: "/images/custard.png",
    snackImage: "/images/custard_pudding.png",
    snackTitle: "Miss Custard Tart",
    floatingElements: [
      // 1. TOP-CENTER/LEFT: Tart matching top orange position
      {
        src: "/images/custard_pudding.png",
        alt: "Golden Custard Tart Top",
        className:
          "left-[27%] sm:left-[30%] md:left-[32%] lg:left-[33%] top-[3%] sm:top-[4%] md:top-[5%] w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 -rotate-[10deg] animate-float-drift-1 z-20",
        shadowClass: "drop-shadow-[0_20px_35px_rgba(217,119,6,0.3)]",
        popOffset: "-translate-x-8 -translate-y-8",
      },
      // 2. BOTTOM-RIGHT: Matching lower orange position
      {
        src: "/images/vanilla_flower.png",
        alt: "Vanilla Orchid Bottom Right",
        className:
          "right-[20%] sm:right-[22%] md:right-[24%] lg:right-[25%] bottom-[2%] sm:bottom-[3%] md:bottom-[4%] w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rotate-[15deg] animate-float-drift-2 z-20",
        shadowClass: "drop-shadow-[0_24px_40px_rgba(217,119,6,0.28)]",
        popOffset: "translate-x-10 translate-y-10",
      },
      // 3. TOP-RIGHT CORNER: Giant, blurred element in the top right corner, half displayed / half out of screen
      {
        src: "/images/custard_pudding.png",
        alt: "Custard Edge Blurred",
        className:
          "-right-28 sm:-right-36 md:-right-44 lg:-right-52 -top-20 sm:-top-24 md:-top-32 w-72 h-72 sm:w-96 sm:h-96 md:w-[440px] md:h-[440px] lg:w-[540px] lg:h-[540px] rotate-[22deg] blur-[8px] sm:blur-[12px] opacity-85 z-10",
        shadowClass: "drop-shadow-[0_30px_60px_rgba(217,119,6,0.35)]",
        popOffset: "translate-x-16 -translate-y-6",
      },
    ],
  },
  {
    id: "blackcurrant-milkaboo",
    bgColor: "#6d28a8",
    num: "04",
    name: "Blackcurrant Milkaboo",
    flavor: "Blackcurrant Flavour",
    eyebrow: "YOUR ONE STOP",
    leftHeadline: "BERRY",
    rightHeadline: "CRUSH",
    description:
      "Milkaboo Dirty Soda And Exotic Snacks, It's A Mouthful But That's Kind Of What We Are All About. Welcome To Your One Stop Shop For Delicious Drinks And Snacks From All Over The World.",
    drinkImage: "/images/black current.png",
    snackImage: "/images/blackcc.png",
    snackTitle: "Miss Berry Crunch",
    floatingElements: [
      // 1. TOP-CENTER/LEFT: Berry cluster matching top orange position
      {
        src: "/images/blackcurrentmilka2.png",
        alt: "Blackcurrant Cluster Top",
        className:
          "left-[27%] sm:left-[30%] md:left-[32%] lg:left-[33%] top-[3%] sm:top-[4%] md:top-[5%] w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 -rotate-[10deg] animate-float-drift-1 z-20",
        shadowClass: "drop-shadow-[0_20px_35px_rgba(147,51,234,0.3)]",
        popOffset: "-translate-x-8 -translate-y-8",
      },
      // 2. BOTTOM-RIGHT: Matching lower orange position
      {
        src: "/images/blackcurrentmilka1.png",
        alt: "Wild Currant Bottom Right",
        className:
          "right-[20%] sm:right-[22%] md:right-[24%] lg:right-[25%] bottom-[2%] sm:bottom-[3%] md:bottom-[4%] w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rotate-[15deg] animate-float-drift-2 z-20",
        shadowClass: "drop-shadow-[0_24px_40px_rgba(147,51,234,0.28)]",
        popOffset: "translate-x-10 translate-y-10",
      },
      // 3. TOP-RIGHT CORNER: Giant, blurred element in the top right corner, half displayed / half out of screen
      {
        src: "/images/blackcurrentmilka2.png",
        alt: "Berry Element Edge Blurred",
        className:
          "-right-28 sm:-right-36 md:-right-44 lg:-right-52 -top-20 sm:-top-24 md:-top-32 w-72 h-72 sm:w-96 sm:h-96 md:w-[440px] md:h-[440px] lg:w-[540px] lg:h-[540px] rotate-[22deg] blur-[8px] sm:blur-[12px] opacity-85 z-10",
        shadowClass: "drop-shadow-[0_30px_60px_rgba(147,51,234,0.35)]",
        popOffset: "translate-x-16 -translate-y-6",
      },
    ],
  },
];

export default function DrinkShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Sync scroll progress through runway + Auto-cycle when not scrolling
  useEffect(() => {
    let lastScrollTime = 0;

    const handleScroll = () => {
      lastScrollTime = Date.now();
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;

      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / totalScrollable, 0), 0.999);
      setScrollProgress(progress);

      const numProducts = showcaseProducts.length;
      const newIndex = Math.floor(progress * numProducts);
      setActiveIndex(Math.min(Math.max(newIndex, 0), numProducts - 1));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Automatically transition through all 4 drinks when not scrolling
    const autoCycleTimer = setInterval(() => {
      if (Date.now() - lastScrollTime < 1500) return;
      setActiveIndex((prev) => (prev + 1) % showcaseProducts.length);
    }, 4000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(autoCycleTimer);
    };
  }, []);

  const currentProduct = showcaseProducts[activeIndex];

  // Subtle natural momentum tilt matching reference cup angle (~6 degrees tilt)
  const cupTilt = -4.5 + Math.sin(scrollProgress * Math.PI * 4) * 2;
  const cupPopScale = 1 + Math.sin(scrollProgress * Math.PI * 2) * 0.025;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen min-h-[680px] overflow-hidden select-none"
    >
      {/* SOLID FLAVOR-COLORED BACKDROP (cross-fades per flavor) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {showcaseProducts.map((product, idx) => (
          <div
            key={`bg-${product.id}`}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              activeIndex === idx ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundColor: product.bgColor }}
          />
        ))}
      </div>



      {/* Full-Viewport Hero Stage */}
      <div className="relative h-full w-full overflow-hidden select-none z-10">

        {/* ================= HEADLINE BLOCK (TOP-LEFT) & RIGHT WORD ================= */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {showcaseProducts.map((product, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div
                key={`hero-words-${product.id}`}
                className={`absolute inset-0 transition-all duration-700 ease-out will-change-transform ${
                  isActive
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 translate-y-8"
                }`}
              >
                {/* LEFT: number watermark + eyebrow + giant word, left aligned */}
                <div key={`left-${isActive}`} className={`${isActive ? "animate-hero-drop-ease" : ""} absolute left-[5%] sm:left-[7%] md:left-[9%] lg:left-[10%] top-[14%] sm:top-[15%] md:top-[16%] flex flex-col items-start text-left`}>
                  <div className="relative">
                    <span className="absolute -top-8 sm:-top-12 md:-top-14 lg:-top-16 left-2 sm:left-4 md:text-8xl text-5xl sm:text-6xl md:text-7xl lg:text-[95px] xl:text-[105px] font-[family-name:var(--font-luckiest-guy)] text-white/35 leading-none select-none">
                      {product.num}
                    </span>
                    <span className="relative z-10 block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-[family-name:var(--font-luckiest-guy)] text-white tracking-tight uppercase leading-none">
                      {product.eyebrow}
                    </span>
                  </div>
                  <h1 className="mt-2 sm:mt-3 md:mt-4 text-6xl sm:text-7xl md:text-[110px] lg:text-[140px] xl:text-[175px] 2xl:text-[200px] font-[family-name:var(--font-luckiest-guy)] text-white uppercase tracking-tight leading-[0.85]">
                    {product.leftHeadline}
                  </h1>
                </div>

                {/* RIGHT: second word, lower and brought closer towards the center to fit comfortably within the screen */}
                <div key={`right-${isActive}`} className={`${isActive ? "animate-hero-drop-ease" : ""} absolute left-[52%] sm:left-[54%] md:left-[55%] lg:left-[56%] top-[34%] sm:top-[33%] md:top-[32%] max-w-[45vw]`}>
                  <h1 className="text-6xl sm:text-7xl md:text-[110px] lg:text-[140px] xl:text-[175px] 2xl:text-[200px] font-[family-name:var(--font-luckiest-guy)] text-white uppercase tracking-tight leading-[0.85]">
                    {product.rightHeadline}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= CENTERPIECE: TILTED CUP & FLOATING ELEMENTS ================= */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="relative w-full h-full flex items-center justify-center">

            {/* MAIN CENTER CUP */}
            <div
              className="relative z-30 w-[380px] sm:w-[520px] md:w-[650px] lg:w-[780px] xl:w-[880px] flex items-center justify-center transition-transform duration-500 ease-out will-change-transform"
              style={{
                transform: `scale(${cupPopScale}) rotate(${cupTilt}deg)`,
              }}
            >
              {showcaseProducts.map((product, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <div
                    key={`main-cup-${product.id}`}
                    className={`w-full transition-all duration-700 ease-out will-change-transform ${
                      isActive
                        ? "opacity-100 scale-100 translate-y-0 z-30"
                        : "opacity-0 scale-90 translate-y-12 pointer-events-none absolute inset-0 z-10"
                    }`}
                  >
                    <div key={`cup-anim-${isActive}`} className={isActive ? "animate-hero-drop-spring" : ""}>
                    <Image
                      src={product.drinkImage}
                      alt={product.name}
                      width={1400}
                      height={1800}
                      priority={idx === 0}
                      className="w-full max-h-[80vh] sm:max-h-[88vh] md:max-h-[94vh] lg:max-h-[98vh] h-auto object-contain select-none pointer-events-none drop-shadow-[0_32px_60px_rgba(0,0,0,0.28)]"
                    />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* FLOATING ELEMENTS (positions unchanged) */}
            {showcaseProducts.map((product, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={`floating-set-${product.id}`}
                  className={`absolute inset-0 pointer-events-none transition-all duration-700 ease-out ${
                    isActive ? "opacity-100 scale-100" : "opacity-0 scale-75"
                  }`}
                >
                  {product.floatingElements.map((el, elIdx) => (
                    <div
                      key={`${product.id}-el-${elIdx}`}
                      className={`absolute pointer-events-none select-none transition-all duration-700 ease-out will-change-transform ${
                        el.className
                      } ${el.shadowClass || ""} ${
                        isActive
                          ? "opacity-100 scale-100 translate-x-0 translate-y-0"
                          : `opacity-0 scale-50 ${el.popOffset || ""}`
                      }`}
                    >
                      <div
                        key={`el-anim-${isActive}`}
                        className={`absolute inset-0 ${isActive ? "animate-hero-drop-spring-fruit" : ""}`}
                        style={{ animationDelay: `${0.08 * elIdx}s` }}
                      >
                        <Image
                          src={el.src}
                          alt={el.alt}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= BOTTOM LEFT: DESCRIPTION + ORDER BUTTON ================= */}
        <div key={`bottom-${activeIndex}`} className="animate-hero-rise absolute left-[6%] sm:left-[9%] md:left-[11%] lg:left-[12%] bottom-[6%] sm:bottom-[7%] z-40 w-[80%] max-w-xs sm:max-w-sm md:max-w-md pointer-events-auto">
          {showcaseProducts.map((product, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div
                key={`desc-${product.id}`}
                className={`transition-all duration-500 ease-out ${
                  isActive ? "opacity-100 translate-y-0 block" : "opacity-0 translate-y-4 hidden"
                }`}
              >
                <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed font-semibold">
                  {product.description}
                </p>
              </div>
            );
          })}
          <a
            href="https://www.doordash.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 sm:mt-6 inline-flex items-center gap-2 h-12 sm:h-14 px-8 sm:px-10 rounded-full bg-white text-neutral-900 text-sm sm:text-base font-bold shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:scale-105"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
              <path
                fill="#ff3008"
                d="M22.4 8.6c-1-2-3-3.2-5.3-3.2H1.6c-.5 0-.8.6-.5 1l3 3.1c.3.3.7.5 1.1.5h11.5c.7 0 1.3.6 1.3 1.3 0 .7-.6 1.3-1.3 1.3H9.3c-.5 0-.8.6-.5 1l3 3.1c.3.3.7.5 1.1.5h3.8c4.5 0 7.6-4.5 5.7-8.6z"
              />
            </svg>
            Order
          </a>
        </div>
      </div>
    </div>
  );
}
