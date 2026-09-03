"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface FloatingItem {
  src: string;
  alt: string;
  className: string;
  shadowClass?: string;
}

interface ProductShowcase {
  id: string;
  name: string;
  flavor: string;
  tagline: string;
  bgColor: string;
  drinkImage: string;
  floatingElements: FloatingItem[];
}

export const showcaseProducts: ProductShowcase[] = [
  {
    id: "rose-milkaboo",
    name: "Rose Milkaboo",
    flavor: "Rose Flavour",
    tagline: "Floral, Creamy & Enchanting",
    bgColor: "#ede6f6",
    drinkImage: "/images/hand.png",
    floatingElements: [
      {
        src: "/images/Home/rosemilka1.png",
        alt: "Rose Blossom",
        className:
          "-left-12 sm:-left-24 md:-left-36 lg:-left-44 top-2 sm:top-6 md:top-8 w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-42 lg:h-42 -rotate-12 animate-float-drift-1 z-30",
        shadowClass: "drop-shadow-[0_12px_24px_rgba(244,63,94,0.25)]",
      },
      {
        src: "/images/Home/rosemilka2.png",
        alt: "Rose Ice Element",
        className:
          "-right-10 sm:-right-20 md:-right-32 lg:-right-40 top-4 sm:top-8 md:top-10 w-20 h-20 sm:w-28 sm:h-28 md:w-34 md:h-34 lg:w-40 lg:h-40 rotate-15 animate-float-drift-2 z-30",
        shadowClass: "drop-shadow-[0_12px_24px_rgba(244,63,94,0.2)]",
      },
      {
        src: "/images/Home/rosemilka4.png",
        alt: "Rose Petal Splash",
        className:
          "-left-14 sm:-left-28 md:-left-44 lg:-left-56 top-[42%] sm:top-[44%] w-22 h-22 sm:w-32 sm:h-32 md:w-42 md:h-42 lg:w-48 lg:h-48 -rotate-20 animate-float-sway z-30",
        shadowClass: "drop-shadow-[0_16px_32px_rgba(244,63,94,0.22)]",
      },
      {
        src: "/images/Home/rosemilk3.png",
        alt: "Rose Bloom",
        className:
          "-right-14 sm:-right-28 md:-right-44 lg:-right-52 top-[38%] sm:top-[40%] w-20 h-20 sm:w-28 sm:h-28 md:w-38 md:h-38 lg:w-44 lg:h-44 rotate-[20deg] animate-float-drift-3 z-30",
        shadowClass: "drop-shadow-[0_16px_32px_rgba(244,63,94,0.2)]",
      },
      {
        src: "/images/Home/boba1.png",
        alt: "Glossy Boba Cluster",
        className:
          "-left-8 sm:-left-16 md:-left-24 lg:-left-30 bottom-10 sm:bottom-16 md:bottom-20 w-18 h-18 sm:w-26 sm:h-26 md:w-32 md:h-32 lg:w-36 lg:h-36 -rotate-12 animate-float-bob z-50",
        shadowClass: "drop-shadow-[0_16px_32px_rgba(0,0,0,0.35)]",
      },
      {
        src: "/images/Home/boba2.png",
        alt: "Fresh Boba Pearl",
        className:
          "-right-6 sm:-right-14 md:-right-20 lg:-right-26 bottom-14 sm:bottom-20 md:bottom-24 w-16 h-16 sm:w-22 sm:h-22 md:w-28 md:h-28 lg:w-32 lg:h-32 rotate-15 animate-float-fast z-50",
        shadowClass: "drop-shadow-[0_16px_32px_rgba(0,0,0,0.35)]",
      },
    ],
  },
  {
    id: "apple-milkaboo",
    name: "Apple Milkaboo",
    flavor: "Apple Flavour",
    tagline: "Crisp, Tangy & Refreshing",
    bgColor: "#e2f6e9",
    drinkImage: "/images/hand apple milkaboo.png",
    floatingElements: [
      {
        src: "/images/applemilka1.png",
        alt: "Apple Slices",
        className:
          "-left-12 sm:-left-24 md:-left-36 lg:-left-44 top-2 sm:top-6 md:top-8 w-22 h-22 sm:w-30 sm:h-30 md:w-38 md:h-38 lg:w-44 lg:h-44 -rotate-12 animate-float-drift-1 z-30",
        shadowClass: "drop-shadow-[0_12px_24px_rgba(34,197,94,0.25)]",
      },
      {
        src: "/images/applemilka2.png",
        alt: "Green Apple",
        className:
          "-right-10 sm:-right-20 md:-right-32 lg:-right-40 top-4 sm:top-8 md:top-10 w-20 h-20 sm:w-28 sm:h-28 md:w-34 md:h-34 lg:w-40 lg:h-40 rotate-15 animate-float-drift-2 z-30",
        shadowClass: "drop-shadow-[0_12px_24px_rgba(34,197,94,0.2)]",
      },
      {
        src: "/images/applemilka3.png",
        alt: "Apple Splash",
        className:
          "-left-14 sm:-left-28 md:-left-44 lg:-left-56 top-[42%] sm:top-[44%] w-24 h-24 sm:w-34 sm:h-34 md:w-44 md:h-44 lg:w-50 lg:h-50 -rotate-20 animate-float-sway z-30",
        shadowClass: "drop-shadow-[0_16px_32px_rgba(34,197,94,0.22)]",
      },
      {
        src: "/images/applemilka1.png",
        alt: "Crisp Apple Piece",
        className:
          "-right-14 sm:-right-28 md:-right-44 lg:-right-52 top-[38%] sm:top-[40%] w-20 h-20 sm:w-28 sm:h-28 md:w-38 md:h-38 lg:w-44 lg:h-44 rotate-[20deg] animate-float-drift-3 z-30",
        shadowClass: "drop-shadow-[0_16px_32px_rgba(34,197,94,0.2)]",
      },
      {
        src: "/images/boba1.png",
        alt: "Glossy Boba Cluster",
        className:
          "-left-8 sm:-left-16 md:-left-24 lg:-left-30 bottom-10 sm:bottom-16 md:bottom-20 w-18 h-18 sm:w-26 sm:h-26 md:w-32 md:h-32 lg:w-36 lg:h-36 -rotate-12 animate-float-bob z-50",
        shadowClass: "drop-shadow-[0_16px_32px_rgba(0,0,0,0.35)]",
      },
      {
        src: "/images/boba2.png",
        alt: "Fresh Boba Pearl",
        className:
          "-right-6 sm:-right-14 md:-right-20 lg:-right-26 bottom-14 sm:bottom-20 md:bottom-24 w-16 h-16 sm:w-22 sm:h-22 md:w-28 md:h-28 lg:w-32 lg:h-32 rotate-15 animate-float-fast z-50",
        shadowClass: "drop-shadow-[0_16px_32px_rgba(0,0,0,0.35)]",
      },
    ],
  },
  {
    id: "blackcurrant-milkaboo",
    name: "Blackcurrant Milkaboo",
    flavor: "Blackcurrant Flavour",
    tagline: "Bold, Berry-Rich & Vibrant",
    bgColor: "#efe6f8",
    drinkImage: "/images/black current.png",
    floatingElements: [
      {
        src: "/images/blackcurrentmilka1.png",
        alt: "Blackcurrant Berry",
        className:
          "-left-12 sm:-left-24 md:-left-36 lg:-left-44 top-2 sm:top-6 md:top-8 w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-42 lg:h-42 -rotate-12 animate-float-drift-1 z-30",
        shadowClass: "drop-shadow-[0_12px_24px_rgba(147,51,234,0.25)]",
      },
      {
        src: "/images/blackcurrentmilka2.png",
        alt: "Blackcurrant Cluster",
        className:
          "-right-10 sm:-right-20 md:-right-32 lg:-right-40 top-4 sm:top-8 md:top-10 w-20 h-20 sm:w-28 sm:h-28 md:w-34 md:h-34 lg:w-40 lg:h-40 rotate-15 animate-float-drift-2 z-30",
        shadowClass: "drop-shadow-[0_12px_24px_rgba(147,51,234,0.2)]",
      },
      {
        src: "/images/blackcurrentmilka7.png",
        alt: "Wild Currant",
        className:
          "-left-14 sm:-left-28 md:-left-44 lg:-left-56 top-[42%] sm:top-[44%] w-22 h-22 sm:w-30 sm:h-30 md:w-38 md:h-38 lg:w-44 lg:h-44 -rotate-20 animate-float-sway z-30",
        shadowClass: "drop-shadow-[0_16px_32px_rgba(147,51,234,0.22)]",
      },
      {
        src: "/images/blackcurrentmilka2.png",
        alt: "Berry Element",
        className:
          "-right-14 sm:-right-28 md:-right-44 lg:-right-52 top-[38%] sm:top-[40%] w-20 h-20 sm:w-28 sm:h-28 md:w-38 md:h-38 lg:w-44 lg:h-44 rotate-[20deg] animate-float-drift-3 z-30",
        shadowClass: "drop-shadow-[0_16px_32px_rgba(147,51,234,0.2)]",
      },
      {
        src: "/images/boba1.png",
        alt: "Glossy Boba Cluster",
        className:
          "-left-8 sm:-left-16 md:-left-24 lg:-left-30 bottom-10 sm:bottom-16 md:bottom-20 w-18 h-18 sm:w-26 sm:h-26 md:w-32 md:h-32 lg:w-36 lg:h-36 -rotate-12 animate-float-bob z-50",
        shadowClass: "drop-shadow-[0_16px_32px_rgba(0,0,0,0.35)]",
      },
      {
        src: "/images/boba2.png",
        alt: "Fresh Boba Pearl",
        className:
          "-right-6 sm:-right-14 md:-right-20 lg:-right-26 bottom-14 sm:bottom-20 md:bottom-24 w-16 h-16 sm:w-22 sm:h-22 md:w-28 md:h-28 lg:w-32 lg:h-32 rotate-15 animate-float-fast z-50",
        shadowClass: "drop-shadow-[0_16px_32px_rgba(0,0,0,0.35)]",
      },
    ],
  },
];

export default function DrinkShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;

      if (totalScrollable <= 0) return;

      // Calculate progress from 0 to 1 as the sticky section scrolls
      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / totalScrollable, 0), 0.999);

      const numProducts = showcaseProducts.length;
      const newIndex = Math.floor(progress * numProducts);
      setActiveIndex(Math.min(Math.max(newIndex, 0), numProducts - 1));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentProduct = showcaseProducts[activeIndex];

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[280vh] sm:h-[300vh] mt-4 sm:mt-8 md:mt-12"
    >
      {/* Dynamic Background Tint that changes color smoothly */}
      <div
        className="fixed inset-0 pointer-events-none -z-10 transition-colors duration-700 ease-in-out"
        style={{ backgroundColor: currentProduct.bgColor }}
      />

      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 pt-20 sm:pt-28 md:pt-36 pb-8 sm:pb-12">
        {/* Central Showcase Section */}
        <section className="relative w-full max-w-5xl mx-auto mt-4 sm:mt-8 md:mt-12 flex flex-col items-center justify-center z-10">
          <div className="relative w-[340px] sm:w-[480px] md:w-[620px] lg:w-[760px] xl:w-[860px] flex items-center justify-center">
            {/* Cloud behind the top of the cup (Upper Center) */}
            <div className="absolute -top-12 sm:-top-16 inset-x-0 mx-auto w-[380px] sm:w-[520px] md:w-[620px] h-[180px] sm:h-[240px] pointer-events-none select-none z-0 opacity-75 animate-float-fast [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]">
              <Image
                src="/images/Home/Clouds.png"
                alt="Upper Center Cloud"
                fill
                className="object-contain"
              />
            </div>

            {/* Cloud behind the top of the cup (Top Left) */}
            <div className="absolute -left-28 sm:-left-44 md:-left-56 top-0 sm:top-6 w-[340px] sm:w-[460px] md:w-[540px] h-[220px] sm:h-[300px] md:h-[360px] pointer-events-none select-none z-0 opacity-85 animate-float-slow [mask-image:radial-gradient(circle_at_center,black_45%,transparent_75%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_45%,transparent_75%)]">
              <Image
                src="/images/Home/Clouds.png"
                alt="Top Left Cloud"
                fill
                className="object-contain"
              />
            </div>

            {/* Cloud behind the top of the cup (Top Right) */}
            <div className="absolute -right-28 sm:-right-44 md:-right-56 top-4 sm:top-10 w-[340px] sm:w-[460px] md:w-[540px] h-[220px] sm:h-[300px] md:h-[360px] pointer-events-none select-none z-0 opacity-85 animate-float-reverse [mask-image:radial-gradient(circle_at_center,black_45%,transparent_75%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_45%,transparent_75%)]">
              <Image
                src="/images/Home/Clouds.png"
                alt="Top Right Cloud"
                fill
                className="object-contain"
              />
            </div>

            {/* Cloud behind the cup on the lower left */}
            <div className="absolute -left-20 sm:-left-36 md:-left-44 bottom-10 sm:bottom-16 w-[300px] sm:w-[420px] md:w-[500px] h-[220px] sm:h-[300px] md:h-[360px] pointer-events-none select-none z-0 opacity-85 animate-float-slow [mask-image:radial-gradient(circle_at_center,black_45%,transparent_75%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_45%,transparent_75%)]">
              <Image
                src="/images/Home/Clouds.png"
                alt="Side Cloud Left"
                fill
                className="object-contain"
              />
            </div>

            {/* Cloud behind the cup on the lower right */}
            <div className="absolute -right-20 sm:-right-36 md:-right-44 bottom-12 sm:bottom-20 w-[300px] sm:w-[420px] md:w-[500px] h-[220px] sm:h-[300px] md:h-[360px] pointer-events-none select-none z-0 opacity-85 animate-float-reverse [mask-image:radial-gradient(circle_at_center,black_45%,transparent_75%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_45%,transparent_75%)]">
              <Image
                src="/images/Home/Clouds.png"
                alt="Side Cloud Right"
                fill
                className="object-contain"
              />
            </div>

            {/* Background Cloud Base behind the bottom of the cup */}
            <div className="absolute -bottom-8 sm:-bottom-12 inset-x-0 w-full h-[180px] sm:h-[240px] pointer-events-none select-none z-0 opacity-80 [mask-image:radial-gradient(ellipse_at_bottom,black_50%,transparent_80%)] [-webkit-mask-image:radial-gradient(ellipse_at_bottom,black_50%,transparent_80%)]">
              <Image
                src="/images/Home/Clouds.png"
                alt="Background Clouds Base"
                fill
                className="object-cover object-bottom"
              />
            </div>

            {/* ================= CENTERPIECE DRINK CUPS (CROSS-FADING) ================= */}
            <div className="relative z-20 w-full flex items-center justify-center">
              {showcaseProducts.map((product, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <div
                    key={product.id}
                    className={`w-full transition-all duration-700 ease-out ${
                      isActive
                        ? "opacity-100 scale-100 z-20"
                        : "opacity-0 scale-95 pointer-events-none absolute inset-0 z-10"
                    }`}
                  >
                    <Image
                      src={product.drinkImage}
                      alt={product.name}
                      width={1200}
                      height={1600}
                      priority={idx === 0}
                      className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-[0_30px_60px_rgba(0,0,0,0.18)]"
                    />
                  </div>
                );
              })}
            </div>

            {/* ================= PRODUCT SPECIFIC FLOATING ELEMENTS ================= */}
            {showcaseProducts.map((product, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={`elements-${product.id}`}
                  className={`absolute inset-0 pointer-events-none transition-all duration-700 ease-out ${
                    isActive
                      ? "opacity-100 scale-100 pointer-events-auto"
                      : "opacity-0 scale-90 pointer-events-none"
                  }`}
                >
                  {product.floatingElements.map((el, elIdx) => (
                    <div
                      key={`${product.id}-el-${elIdx}`}
                      className={`absolute pointer-events-none select-none ${el.className} ${
                        el.shadowClass || ""
                      }`}
                    >
                      <Image
                        src={el.src}
                        alt={el.alt}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              );
            })}

            {/* FOREGROUND CLOUDS (High Z-Index z-40, Layered On Top of the Drink Image) */}
            {/* Foreground Cloud Base: Billowing cloud bank nestling and overlaying the bottom base */}
            <div className="absolute -bottom-10 sm:-bottom-16 md:-bottom-20 -inset-x-12 sm:-inset-x-24 md:-inset-x-32 h-[220px] sm:h-[300px] md:h-[360px] pointer-events-none select-none z-40 opacity-95 [mask-image:linear-gradient(to_top,black_50%,transparent_90%)] [-webkit-mask-image:linear-gradient(to_top,black_50%,transparent_90%)]">
              <Image
                src="/images/Home/Clouds.png"
                alt="Foreground Cloud Base Overlay"
                fill
                priority
                className="object-cover object-bottom"
              />
            </div>

            {/* Foreground Cloud Left: Puffy cloud over bottom-left rim/boba */}
            <div className="absolute -left-12 sm:-left-24 md:-left-32 -bottom-4 sm:-bottom-8 w-[280px] sm:w-[400px] md:w-[480px] h-[200px] sm:h-[260px] md:h-[300px] pointer-events-none select-none z-40 opacity-90 animate-float-slow [mask-image:radial-gradient(circle_at_center,black_50%,transparent_80%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_50%,transparent_80%)]">
              <Image
                src="/images/Home/Clouds.png"
                alt="Foreground Cloud Left"
                fill
                className="object-contain object-bottom"
              />
            </div>

            {/* Foreground Cloud Right: Puffy cloud over bottom-right rim/boba */}
            <div className="absolute -right-12 sm:-right-24 md:-right-32 -bottom-4 sm:-bottom-8 w-[280px] sm:w-[400px] md:w-[480px] h-[200px] sm:h-[260px] md:h-[300px] pointer-events-none select-none z-40 opacity-90 animate-float-reverse [mask-image:radial-gradient(circle_at_center,black_50%,transparent_80%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_50%,transparent_80%)]">
              <Image
                src="/images/Home/Clouds.png"
                alt="Foreground Cloud Right"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}


