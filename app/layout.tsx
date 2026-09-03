import type { Metadata } from "next";
import { Geist, Geist_Mono, Luckiest_Guy, Sansita } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import SplashScreen from "@/components/SplashScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const luckiestGuy = Luckiest_Guy({
  weight: "400",
  variable: "--font-luckiest-guy",
  subsets: ["latin"],
});

const sansita = Sansita({
  weight: ["400", "700", "800", "900"],
  variable: "--font-sansita",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MILKABOO",
  description: "Welcome to MILKABOO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${luckiestGuy.variable} ${sansita.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#ede6f6] text-neutral-900">
        <SplashScreen />
        <SmoothScroll />
        <Navbar logoSrc="/images/logoTypo.png" />
        <main className="flex-1 flex flex-col bg-[#ede6f6]">{children}</main>
      </body>
    </html>
  );
}
