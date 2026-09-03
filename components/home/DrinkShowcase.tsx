import React from "react";
import Image from "next/image";

export default function DrinkShowcase() {
  return (
    <section className="relative w-full max-w-5xl mx-auto mt-6 sm:mt-10 md:mt-12 flex flex-col items-center justify-center z-10">
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

        {/* Centerpiece Rosemilk Cup */}
        <Image
          src="/images/Home/rosemilk.png"
          alt="Milkaboo Rosemilk Drink"
          width={1200}
          height={1600}
          priority
          className="relative z-20 w-full h-auto object-contain select-none pointer-events-none drop-shadow-[0_30px_60px_rgba(0,0,0,0.18)]"
        />

        {/* ================= SCATTERED FLOATING INGREDIENTS (CURATED SET) ================= */}

        {/* 1. Top Left Rose Blossom - rosemilka1 */}
        <div className="absolute -left-12 sm:-left-24 md:-left-36 lg:-left-44 top-2 sm:top-6 md:top-8 w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-42 lg:h-42 pointer-events-none select-none z-30 -rotate-12 animate-float-drift-1 drop-shadow-[0_12px_24px_rgba(244,63,94,0.25)]">
          <Image
            src="/images/Home/rosemilka1.png"
            alt="Rose Blossom"
            fill
            className="object-contain"
          />
        </div>

        {/* 2. Top Right Rose Crystal / Ice - rosemilka2 */}
        <div className="absolute -right-10 sm:-right-20 md:-right-32 lg:-right-40 top-4 sm:top-8 md:top-10 w-20 h-20 sm:w-28 sm:h-28 md:w-34 md:h-34 lg:w-40 lg:h-40 pointer-events-none select-none z-30 rotate-15 animate-float-drift-2 drop-shadow-[0_12px_24px_rgba(244,63,94,0.2)]">
          <Image
            src="/images/Home/rosemilka2.png"
            alt="Rose Ice Element"
            fill
            className="object-contain"
          />
        </div>

        {/* 3. Mid Left Rose Splash - rosemilka4 */}
        <div className="absolute -left-14 sm:-left-28 md:-left-44 lg:-left-56 top-[42%] sm:top-[44%] w-22 h-22 sm:w-32 sm:h-32 md:w-42 md:h-42 lg:w-48 lg:h-48 pointer-events-none select-none z-30 -rotate-20 animate-float-sway drop-shadow-[0_16px_32px_rgba(244,63,94,0.22)]">
          <Image
            src="/images/Home/rosemilka4.png"
            alt="Rose Petal Splash"
            fill
            className="object-contain"
          />
        </div>

        {/* 4. Mid Right Rose Bloom - rosemilk3 */}
        <div className="absolute -right-14 sm:-right-28 md:-right-44 lg:-right-52 top-[38%] sm:top-[40%] w-20 h-20 sm:w-28 sm:h-28 md:w-38 md:h-38 lg:w-44 lg:h-44 pointer-events-none select-none z-30 rotate-[20deg] animate-float-drift-3 drop-shadow-[0_16px_32px_rgba(244,63,94,0.2)]">
          <Image
            src="/images/Home/rosemilk3.png"
            alt="Rose Flower"
            fill
            className="object-contain"
          />
        </div>

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

        {/* ================= FOREGROUND SCATTERED BOBA (z-50) ================= */}
        {/* 5. Bottom Left Foreground Boba Cluster - boba1 */}
        <div className="absolute -left-8 sm:-left-16 md:-left-24 lg:-left-30 bottom-10 sm:bottom-16 md:bottom-20 w-18 h-18 sm:w-26 sm:h-26 md:w-32 md:h-32 lg:w-36 lg:h-36 pointer-events-none select-none z-50 -rotate-12 animate-float-bob drop-shadow-[0_16px_32px_rgba(0,0,0,0.35)]">
          <Image
            src="/images/Home/boba1.png"
            alt="Glossy Boba Cluster"
            fill
            className="object-contain"
          />
        </div>

        {/* 6. Bottom Right Foreground Boba - boba2 */}
        <div className="absolute -right-6 sm:-right-14 md:-right-20 lg:-right-26 bottom-14 sm:bottom-20 md:bottom-24 w-16 h-16 sm:w-22 sm:h-22 md:w-28 md:h-28 lg:w-32 lg:h-32 pointer-events-none select-none z-50 rotate-15 animate-float-fast drop-shadow-[0_16px_32px_rgba(0,0,0,0.35)]">
          <Image
            src="/images/Home/boba2.png"
            alt="Fresh Boba Pearl"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}

