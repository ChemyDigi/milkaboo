"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";

// Crisp SVG Icons for Facebook & Instagram
function FacebookIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}


// 3D Glossy Purple Heart Icon
function GlossyPurpleHeart({ className = "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center select-none ${className} mx-2 sm:mx-3.5`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient
            id="purpleHeartGrad"
            cx="35%"
            cy="30%"
            r="65%"
            fx="30%"
            fy="25%"
          >
            <stop offset="0%" stopColor="#8d73b8" />
            <stop offset="45%" stopColor="#5d428e" />
            <stop offset="90%" stopColor="#432c6e" />
            <stop offset="100%" stopColor="#321e54" />
          </radialGradient>
        </defs>
        <path
          d="M50 88 C45 83 10 55 10 32 C10 18 21 8 35 8 C43 8 48 13 50 17 C52 13 57 8 65 8 C79 8 90 18 90 32 C90 55 55 83 50 88 Z"
          fill="url(#purpleHeartGrad)"
        />
        {/* Soft highlight reflection */}
        <ellipse
          cx="33"
          cy="22"
          rx="12"
          ry="6"
          transform="rotate(-25 33 22)"
          fill="#ffffff"
          opacity="0.25"
        />
      </svg>
    </span>
  );
}

// Interactive Hamburger Icon that morphs into wavy lines on hover
function CustomHamburgerIcon({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-11 h-9 flex items-center justify-center ${className}`}>
      {/* Normal State: 3 Straight Parallel Lines */}
      <svg
        width="44"
        height="36"
        viewBox="0 0 44 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 transition-all duration-300 group-hover:opacity-0 group-hover:scale-90"
      >
        <line
          x1="5"
          y1="7"
          x2="39"
          y2="7"
          stroke="#000000"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <line
          x1="5"
          y1="16"
          x2="39"
          y2="16"
          stroke="#000000"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <line
          x1="5"
          y1="25"
          x2="39"
          y2="25"
          stroke="#000000"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
      </svg>

      {/* Hover State: 3 Wavy Ripple Lines */}
      <svg
        width="44"
        height="36"
        viewBox="0 0 44 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-100 scale-95"
      >
        <path
          d="M 5 7 Q 9.25 3.5, 13.5 7 T 22 7 T 30.5 7 T 39 7"
          stroke="#000000"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M 5 15.5 Q 9.25 12, 13.5 15.5 T 22 15.5 T 30.5 15.5 T 39 15.5"
          stroke="#000000"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M 5 24 Q 9.25 20.5, 13.5 24 T 22 24 T 30.5 24 T 39 24"
          stroke="#000000"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

interface NavbarProps {
  logoSrc?: string;
  logoText?: string;
  facebookUrl?: string;
  instagramUrl?: string;
}

export default function Navbar({
  logoSrc = "/images/logoTypo.png",
  logoText = "MILKABOO",
  facebookUrl = "https://facebook.com",
  instagramUrl = "https://instagram.com",
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <>
      {/* Persistent Top Navbar Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isOpen ? "bg-transparent" : "bg-transparent"
        }`}
      >
        <div className="w-full px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 h-28 flex items-center justify-between">
          {/* Left: Brand Logo Image */}
          <div className="flex-1 flex items-center justify-start">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="group inline-flex items-center transition-transform active:scale-95 z-50"
            >
              {logoSrc ? (
                <Image
                  src={logoSrc}
                  alt="Milkaboo Logo"
                  width={200}
                  height={60}
                  className="h-8 sm:h-9 md:h-10 lg:h-11 w-auto object-contain select-none"
                  priority
                />
              ) : (
                <span className="text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-luckiest-guy)] uppercase tracking-wider text-neutral-950 hover:text-black transition-colors select-none">
                  {logoText}
                </span>
              )}
            </Link>
          </div>

          {/* Middle: Toggle Button (Identical Shape for Hamburger & Close State) */}
          <div className="flex items-center justify-center z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              className="w-14 h-13 sm:w-15 sm:h-14 rounded-2xl sm:rounded-[22px] bg-white/80 hover:bg-white shadow-[0_4px_14px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer group focus:outline-none"
            >
              {isOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-950 stroke-[2.8] group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <CustomHamburgerIcon className="transition-transform duration-200 group-hover:scale-105" />
              )}
            </button>
          </div>

          {/* Right: Social Media Icons (Facebook & Instagram) */}
          <div className="flex-1 flex items-center justify-end gap-1.5 sm:gap-2 z-50">
            {/* Facebook Link */}
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-2 sm:p-2.5 rounded-full text-neutral-800 hover:text-black hover:bg-white/40 border border-transparent hover:border-neutral-200/50 shadow-xs transition-all duration-200 active:scale-95 group"
            >
              <FacebookIcon className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110" />
            </a>

            {/* Instagram Link */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 sm:p-2.5 rounded-full text-neutral-800 hover:text-black hover:bg-white/40 border border-transparent hover:border-neutral-200/50 shadow-xs transition-all duration-200 active:scale-95 group"
            >
              <InstagramIcon className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110" />
            </a>
          </div>
        </div>
      </header>

      {/* Full Page Navigation Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#ab9bc8] flex flex-col justify-between transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 visible scale-100"
            : "opacity-0 invisible scale-95 pointer-events-none"
        }`}
      >
        {/* Decorative Background Organic Cloud Patterns */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1920 1080"
            fill="none"
          >
            {/* Soft lighter circular organic shapes matching reference */}
            <circle cx="200" cy="300" r="280" fill="#baabdc" />
            <circle cx="550" cy="200" r="320" fill="#b4a4d6" />
            <circle cx="950" cy="180" r="260" fill="#baabdc" />
            <circle cx="1400" cy="250" r="340" fill="#b4a4d6" />
            <circle cx="1750" cy="380" r="290" fill="#baabdc" />

            <circle cx="350" cy="650" r="300" fill="#b4a4d6" />
            <circle cx="800" cy="700" r="320" fill="#baabdc" />
            <circle cx="1250" cy="650" r="310" fill="#b4a4d6" />
            <circle cx="1650" cy="750" r="330" fill="#baabdc" />

            <circle cx="150" cy="950" r="260" fill="#baabdc" />
            <circle cx="600" cy="980" r="280" fill="#b4a4d6" />
            <circle cx="1050" cy="950" r="300" fill="#baabdc" />
            <circle cx="1500" cy="980" r="290" fill="#b4a4d6" />
          </svg>
        </div>

        {/* Spacer for Top Header */}
        <div className="h-28" />

        {/* Center: Hero Navigation Links */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-8">
          <div className="flex flex-col items-center justify-center gap-6 sm:gap-10 md:gap-12 text-center">
            {/* Row 1: HOME 💜 PRODUCTS */}
            <div
              className={`flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                hoveredLink === "ABOUT" || hoveredLink === "CONTACT"
                  ? "-translate-y-4 sm:-translate-y-6 opacity-75 scale-[0.96]"
                  : "translate-y-0 opacity-100 scale-100"
              }`}
            >
              {/* HOME Link */}
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                onMouseEnter={() => setHoveredLink("HOME")}
                onMouseLeave={() => setHoveredLink(null)}
                className={`inline-block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-[family-name:var(--font-luckiest-guy)] drop-shadow-sm uppercase select-none cursor-pointer transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  hoveredLink === "HOME"
                    ? "scale-[1.18] text-neutral-950 -translate-x-3 sm:-translate-x-5 z-20"
                    : hoveredLink === "PRODUCTS"
                    ? "-translate-x-10 sm:-translate-x-16 opacity-75 scale-[0.95] text-white"
                    : "scale-100 text-white translate-x-0 opacity-100"
                }`}
              >
                HOME
              </Link>

              {/* Row 1 Purple Heart */}
              <div
                className={`transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  hoveredLink === "HOME"
                    ? "translate-x-6 sm:translate-x-10 scale-95 opacity-80"
                    : hoveredLink === "PRODUCTS"
                    ? "-translate-x-6 sm:-translate-x-10 scale-95 opacity-80"
                    : "translate-x-0 scale-100 opacity-100"
                }`}
              >
                <GlossyPurpleHeart />
              </div>

              {/* PRODUCTS Link */}
              <Link
                href="/products"
                onClick={() => setIsOpen(false)}
                onMouseEnter={() => setHoveredLink("PRODUCTS")}
                onMouseLeave={() => setHoveredLink(null)}
                className={`inline-block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-[family-name:var(--font-luckiest-guy)] drop-shadow-sm uppercase select-none cursor-pointer transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  hoveredLink === "PRODUCTS"
                    ? "scale-[1.18] text-neutral-950 translate-x-3 sm:translate-x-5 z-20"
                    : hoveredLink === "HOME"
                    ? "translate-x-10 sm:translate-x-16 opacity-75 scale-[0.95] text-white"
                    : "scale-100 text-white translate-x-0 opacity-100"
                }`}
              >
                PRODUCTS
              </Link>
            </div>

            {/* Row 2: ABOUT 💜 CONTACT */}
            <div
              className={`flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                hoveredLink === "HOME" || hoveredLink === "PRODUCTS"
                  ? "translate-y-4 sm:translate-y-6 opacity-75 scale-[0.96]"
                  : "translate-y-0 opacity-100 scale-100"
              }`}
            >
              {/* ABOUT Link */}
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                onMouseEnter={() => setHoveredLink("ABOUT")}
                onMouseLeave={() => setHoveredLink(null)}
                className={`inline-block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-[family-name:var(--font-luckiest-guy)] drop-shadow-sm uppercase select-none cursor-pointer transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  hoveredLink === "ABOUT"
                    ? "scale-[1.18] text-neutral-950 -translate-x-3 sm:-translate-x-5 z-20"
                    : hoveredLink === "CONTACT"
                    ? "-translate-x-10 sm:-translate-x-16 opacity-75 scale-[0.95] text-white"
                    : "scale-100 text-white translate-x-0 opacity-100"
                }`}
              >
                ABOUT
              </Link>

              {/* Row 2 Purple Heart */}
              <div
                className={`transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  hoveredLink === "ABOUT"
                    ? "translate-x-6 sm:translate-x-10 scale-95 opacity-80"
                    : hoveredLink === "CONTACT"
                    ? "-translate-x-6 sm:-translate-x-10 scale-95 opacity-80"
                    : "translate-x-0 scale-100 opacity-100"
                }`}
              >
                <GlossyPurpleHeart />
              </div>

              {/* CONTACT Link */}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                onMouseEnter={() => setHoveredLink("CONTACT")}
                onMouseLeave={() => setHoveredLink(null)}
                className={`inline-block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-[family-name:var(--font-luckiest-guy)] drop-shadow-sm uppercase select-none cursor-pointer transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  hoveredLink === "CONTACT"
                    ? "scale-[1.18] text-neutral-950 translate-x-3 sm:translate-x-5 z-20"
                    : hoveredLink === "ABOUT"
                    ? "translate-x-10 sm:translate-x-16 opacity-75 scale-[0.95] text-white"
                    : "scale-100 text-white translate-x-0 opacity-100"
                }`}
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="relative z-10 w-full px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 pb-8 flex flex-col items-center justify-center gap-2.5">
          <Image
            src="/images/logo.png"
            alt="Milkaboo Logo"
            width={140}
            height={50}
            className="h-9 sm:h-11 w-auto object-contain select-none opacity-90 drop-shadow-sm"
          />
          <div className="text-[11px] sm:text-xs font-semibold text-neutral-800/90 tracking-wide select-none">
            ©2026 Milkaboo. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
}
