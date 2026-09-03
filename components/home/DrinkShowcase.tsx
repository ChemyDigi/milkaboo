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
          "-left-10 sm:-left-20 md:-left-28 lg:-left-36 top-6 sm:top-10 md:top-14 w-20 h-20 sm:w-28 sm:h-28 md:w-34 md:h-34 lg:w-40 lg:h-40 -rotate-12 animate-float-drift-1 z-30",
        shadowClass: "drop-shadow-[0_12px_24px_rgba(244,63,94,0.22)]",
      },
      {
        src: "/images/Home/rosemilka2.png",
        alt: "Rose Ice Element",
        className:
          "-right-10 sm:-right-18 md:-right-26 lg:-right-34 top-8 sm:top-12 md:top-16 w-18 h-18 sm:w-26 sm:h-26 md:w-32 md:h-32 lg:w-36 lg:h-36 rotate-15 animate-float-drift-2 z-30",
        shadowClass: "drop-shadow-[0_12px_24px_rgba(244,63,94,0.18)]",
      },
      {
        src: "/images/Home/rosemilka4.png",
        alt: "Rose Petal Splash",
        className:
          "-left-12 sm:-left-22 md:-left-34 lg:-left-42 top-[44%] w-20 h-20 sm:w-28 sm:h-28 md:w-38 md:h-38 lg:w-44 lg:h-44 -rotate-20 animate-float-sway z-30",
        shadowClass: "drop-shadow-[0_14px_28px_rgba(244,63,94,0.2)]",
      },
      {
        src: "/images/Home/rosemilk3.png",
        alt: "Rose Bloom",
        className:
          "-right-12 sm:-right-22 md:-right-34 lg:-right-40 top-[40%] w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-42 lg:h-42 rotate-[20deg] animate-float-drift-3 z-30",
        shadowClass: "drop-shadow-[0_14px_28px_rgba(244,63,94,0.18)]",
      },
      {
        src: "/images/Home/boba1.png",
        alt: "Glossy Boba Cluster",
        className:
          "-left-8 sm:-left-16 md:-left-20 lg:-left-26 bottom-12 sm:bottom-16 md:bottom-20 w-18 h-18 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 -rotate-12 animate-float-bob z-50",
        shadowClass: "drop-shadow-[0_14px_28px_rgba(0,0,0,0.32)]",
      },
      {
        src: "/images/Home/boba2.png",
        alt: "Fresh Boba Pearl",
        className:
          "-right-8 sm:-right-14 md:-right-18 lg:-right-24 bottom-14 sm:bottom-20 md:bottom-24 w-16 h-16 sm:w-20 sm:h-20 md:w-26 md:h-26 lg:w-28 lg:h-28 rotate-15 animate-float-fast z-50",
        shadowClass: "drop-shadow-[0_14px_28px_rgba(0,0,0,0.32)]",
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
          "-left-10 sm:-left-20 md:-left-28 lg:-left-36 top-6 sm:top-10 md:top-14 w-20 h-20 sm:w-28 sm:h-28 md:w-34 md:h-34 lg:w-40 lg:h-40 -rotate-12 animate-float-drift-1 z-30",
        shadowClass: "drop-shadow-[0_12px_24px_rgba(34,197,94,0.22)]",
      },
      {
        src: "/images/applemilka2.png",
        alt: "Green Apple",
        className:
          "-right-10 sm:-right-18 md:-right-26 lg:-right-34 top-8 sm:top-12 md:top-16 w-18 h-18 sm:w-26 sm:h-26 md:w-32 md:h-32 lg:w-36 lg:h-36 rotate-15 animate-float-drift-2 z-30",
        shadowClass: "drop-shadow-[0_12px_24px_rgba(34,197,94,0.18)]",
      },
      {
        src: "/images/applemilka3.png",
        alt: "Apple Splash",
        className:
          "-left-12 sm:-left-22 md:-left-34 lg:-left-42 top-[44%] w-20 h-20 sm:w-28 sm:h-28 md:w-38 md:h-38 lg:w-44 lg:h-44 -rotate-20 animate-float-sway z-30",
        shadowClass: "drop-shadow-[0_14px_28px_rgba(34,197,94,0.2)]",
      },
      {
        src: "/images/applemilka1.png",
        alt: "Crisp Apple Piece",
        className:
          "-right-12 sm:-right-22 md:-right-34 lg:-right-40 top-[40%] w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-42 lg:h-42 rotate-[20deg] animate-float-drift-3 z-30",
        shadowClass: "drop-shadow-[0_14px_28px_rgba(34,197,94,0.18)]",
      },
      {
        src: "/images/boba1.png",
        alt: "Glossy Boba Cluster",
        className:
          "-left-8 sm:-left-16 md:-left-20 lg:-left-26 bottom-12 sm:bottom-16 md:bottom-20 w-18 h-18 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 -rotate-12 animate-float-bob z-50",
        shadowClass: "drop-shadow-[0_14px_28px_rgba(0,0,0,0.32)]",
      },
      {
        src: "/images/boba2.png",
        alt: "Fresh Boba Pearl",
        className:
          "-right-8 sm:-right-14 md:-right-18 lg:-right-24 bottom-14 sm:bottom-20 md:bottom-24 w-16 h-16 sm:w-20 sm:h-20 md:w-26 md:h-26 lg:w-28 lg:h-28 rotate-15 animate-float-fast z-50",
        shadowClass: "drop-shadow-[0_14px_28px_rgba(0,0,0,0.32)]",
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
          "-left-10 sm:-left-20 md:-left-28 lg:-left-36 top-6 sm:top-10 md:top-14 w-20 h-20 sm:w-28 sm:h-28 md:w-34 md:h-34 lg:w-40 lg:h-40 -rotate-12 animate-float-drift-1 z-30",
        shadowClass: "drop-shadow-[0_12px_24px_rgba(147,51,234,0.22)]",
      },
      {
        src: "/images/blackcurrentmilka2.png",
        alt: "Blackcurrant Cluster",
        className:
          "-right-10 sm:-right-18 md:-right-26 lg:-right-34 top-8 sm:top-12 md:top-16 w-18 h-18 sm:w-26 sm:h-26 md:w-32 md:h-32 lg:w-36 lg:h-36 rotate-15 animate-float-drift-2 z-30",
        shadowClass: "drop-shadow-[0_12px_24px_rgba(147,51,234,0.18)]",
      },
      {
        src: "/images/blackcurrentmilka7.png",
        alt: "Wild Currant",
        className:
          "-left-12 sm:-left-22 md:-left-34 lg:-left-42 top-[44%] w-20 h-20 sm:w-28 sm:h-28 md:w-38 md:h-38 lg:w-44 lg:h-44 -rotate-20 animate-float-sway z-30",
        shadowClass: "drop-shadow-[0_14px_28px_rgba(147,51,234,0.2)]",
      },
      {
        src: "/images/blackcurrentmilka2.png",
        alt: "Berry Element",
        className:
          "-right-12 sm:-right-22 md:-right-34 lg:-right-40 top-[40%] w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-42 lg:h-42 rotate-[20deg] animate-float-drift-3 z-30",
        shadowClass: "drop-shadow-[0_14px_28px_rgba(147,51,234,0.18)]",
      },
      {
        src: "/images/boba1.png",
        alt: "Glossy Boba Cluster",
        className:
          "-left-8 sm:-left-16 md:-left-20 lg:-left-26 bottom-12 sm:bottom-16 md:bottom-20 w-18 h-18 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 -rotate-12 animate-float-bob z-50",
        shadowClass: "drop-shadow-[0_14px_28px_rgba(0,0,0,0.32)]",
      },
      {
        src: "/images/boba2.png",
        alt: "Fresh Boba Pearl",
        className:
          "-right-8 sm:-right-14 md:-right-18 lg:-right-24 bottom-14 sm:bottom-20 md:bottom-24 w-16 h-16 sm:w-20 sm:h-20 md:w-26 md:h-26 lg:w-28 lg:h-28 rotate-15 animate-float-fast z-50",
        shadowClass: "drop-shadow-[0_14px_28px_rgba(0,0,0,0.32)]",
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
      className="relative w-full h-[280vh] sm:h-[300vh]"
    >
      {/* Dynamic Background Tint */}
      <div
        className="fixed inset-0 pointer-events-none -z-10 transition-colors duration-700 ease-in-out"
        style={{ backgroundColor: currentProduct.bgColor }}
      />

      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 pt-16 sm:pt-20 md:pt-24 pb-6">
        {/* Central Showcase Section */}
        <section className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center z-10">
          {/* Scaled up further to w-[340px] -> w-[780px] */}
          <div className="relative w-[340px] sm:w-[480px] md:w-[600px] lg:w-[700px] xl:w-[780px] flex items-center justify-center">
            {/* Cloud behind the top of the cup (Upper Center) */}
            <div className="absolute -top-12 sm:-top-16 inset-x-0 mx-auto w-[360px] sm:w-[500px] md:w-[600px] h-[170px] sm:h-[220px] pointer-events-none select-none z-0 opacity-75 animate-float-fast [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]">
              <Image
                src="/images/Home/Clouds.png"
                alt="Upper Center Cloud"
                fill
                className="object-contain"
              />
            </div>

            {/* Cloud behind the top of the cup (Top Left) */}
            <div className="absolute -left-28 sm:-left-40 md:-left-48 top-0 sm:top-4 w-[310px] sm:w-[430px] md:w-[500px] h-[210px] sm:h-[280px] md:h-[330px] pointer-events-none select-none z-0 opacity-80 animate-float-slow [mask-image:radial-gradient(circle_at_center,black_45%,transparent_75%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_45%,transparent_75%)]">
              <Image
                src="/images/Home/Clouds.png"
                alt="Top Left Cloud"
                fill
                className="object-contain"
              />
            </div>

            {/* Cloud behind the top of the cup (Top Right) */}
            <div className="absolute -right-28 sm:-right-40 md:-right-48 top-4 sm:top-6 w-[310px] sm:w-[430px] md:w-[500px] h-[210px] sm:h-[280px] md:h-[330px] pointer-events-none select-none z-0 opacity-80 animate-float-reverse [mask-image:radial-gradient(circle_at_center,black_45%,transparent_75%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_45%,transparent_75%)]">
              <Image
                src="/images/Home/Clouds.png"
                alt="Top Right Cloud"
                fill
                className="object-contain"
              />
            </div>

            {/* Cloud behind the cup on the lower left */}
            <div className="absolute -left-20 sm:-left-34 md:-left-44 bottom-8 sm:bottom-12 w-[280px] sm:w-[380px] md:w-[450px] h-[200px] sm:h-[280px] pointer-events-none select-none z-0 opacity-80 animate-float-slow [mask-image:radial-gradient(circle_at_center,black_45%,transparent_75%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_45%,transparent_75%)]">
              <Image
                src="/images/Home/Clouds.png"
                alt="Side Cloud Left"
                fill
                className="object-contain"
              />
            </div>

            {/* Cloud behind the cup on the lower right */}
            <div className="absolute -right-20 sm:-right-34 md:-right-44 bottom-10 sm:bottom-14 w-[280px] sm:w-[380px] md:w-[450px] h-[200px] sm:h-[280px] pointer-events-none select-none z-0 opacity-80 animate-float-reverse [mask-image:radial-gradient(circle_at_center,black_45%,transparent_75%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_45%,transparent_75%)]">
              <Image
                src="/images/Home/Clouds.png"
                alt="Side Cloud Right"
                fill
                className="object-contain"
              />
            </div>

            {/* Background Cloud Base behind the bottom of the cup */}
            <div className="absolute -bottom-6 sm:-bottom-10 inset-x-0 w-full h-[160px] sm:h-[220px] pointer-events-none select-none z-0 opacity-75 [mask-image:radial-gradient(ellipse_at_bottom,black_50%,transparent_80%)] [-webkit-mask-image:radial-gradient(ellipse_at_bottom,black_50%,transparent_80%)]">
              <Image
                src="/images/Home/Clouds.png"
                alt="Background Clouds Base"
                fill
                className="object-cover object-bottom"
              />
            </div>

            {/* ================= CENTERPIECE DRINK CUPS (SCALED UP MORE) ================= */}
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
                      className="w-full max-h-[68vh] sm:max-h-[74vh] md:max-h-[78vh] h-auto object-contain select-none pointer-events-none drop-shadow-[0_28px_54px_rgba(0,0,0,0.22)]"
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

            {/* FOREGROUND CLOUDS (Layered On Top of the Drink Image) */}
            <div className="absolute -bottom-8 sm:-bottom-12 md:-bottom-16 -inset-x-8 sm:-inset-x-16 md:-inset-x-20 h-[200px] sm:h-[270px] md:h-[320px] pointer-events-none select-none z-40 opacity-95 [mask-image:linear-gradient(to_top,black_50%,transparent_90%)] [-webkit-mask-image:linear-gradient(to_top,black_50%,transparent_90%)]">
              <Image
                src="/images/Home/Clouds.png"
                alt="Foreground Cloud Base Overlay"
                fill
                priority
                className="object-cover object-bottom"
              />
            </div>

            <div className="absolute -left-8 sm:-left-16 md:-left-24 -bottom-4 sm:-bottom-6 w-[250px] sm:w-[350px] md:w-[420px] h-[180px] sm:h-[220px] md:h-[260px] pointer-events-none select-none z-40 opacity-90 animate-float-slow [mask-image:radial-gradient(circle_at_center,black_50%,transparent_80%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_50%,transparent_80%)]">
              <Image
                src="/images/Home/Clouds.png"
                alt="Foreground Cloud Left"
                fill
                className="object-contain object-bottom"
              />
            </div>

            <div className="absolute -right-8 sm:-right-16 md:-right-24 -bottom-4 sm:-bottom-6 w-[250px] sm:w-[350px] md:w-[420px] h-[180px] sm:h-[220px] md:h-[260px] pointer-events-none select-none z-40 opacity-90 animate-float-reverse [mask-image:radial-gradient(circle_at_center,black_50%,transparent_80%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_50%,transparent_80%)]">
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
