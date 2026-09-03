"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, Send, Sparkles, CheckCircle2, ChevronDown } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    favoriteFlavor: "rose",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        favoriteFlavor: "rose",
        subject: "",
        message: "",
      });
    }, 4000);
  };

  const faqs = [
    {
      q: "Do you offer dairy-free / vegan milk options?",
      a: "Yes! All our milk tea drinks can be crafted with our house-made organic oat milk or creamy almond milk upon request at no extra charge.",
    },
    {
      q: "Can I customize the sweetness and ice levels?",
      a: "Absolutely. You can choose from 0% (Unsweetened), 30% (Light), 50% (Standard), or 100% (Sweet). Ice levels can also be customized (No Ice, Less Ice, Regular).",
    },
    {
      q: "Are your boba pearls gluten-free?",
      a: "Yes! Our signature brown sugar tapioca pearls and fruit popping boba are 100% gluten-free and cooked fresh throughout the day.",
    },
    {
      q: "Do you cater for birthdays, weddings, or corporate events?",
      a: "We love bringing magic to events! Fill out the contact form below with your event date and estimated guest count, and our team will get back to you within 24 hours.",
    },
  ];

  return (
    <div className="relative w-full min-h-screen pt-32 sm:pt-36 md:pt-40 pb-24 px-4 sm:px-6 lg:px-8 bg-[#ede6f6] overflow-x-hidden">
      {/* Background Floating Clouds */}
      <div className="absolute -left-28 top-20 w-[420px] h-[260px] pointer-events-none opacity-60 animate-float-slow [mask-image:radial-gradient(circle_at_center,black_45%,transparent_75%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_45%,transparent_75%)]">
        <Image src="/images/Home/Clouds.png" alt="Cloud Left" fill className="object-contain" />
      </div>
      <div className="absolute -right-28 top-48 w-[420px] h-[260px] pointer-events-none opacity-60 animate-float-reverse [mask-image:radial-gradient(circle_at_center,black_45%,transparent_75%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_45%,transparent_75%)]">
        <Image src="/images/Home/Clouds.png" alt="Cloud Right" fill className="object-contain" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white/60 shadow-xs mb-4">
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-800 font-[family-name:var(--font-sansita)]">
              Let&apos;s Connect
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-[family-name:var(--font-luckiest-guy)] text-neutral-950 uppercase tracking-tight leading-[0.95]">
            SAY BOO TO US!
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl font-[family-name:var(--font-sansita)] font-bold text-neutral-700 max-w-xl mx-auto">
            Got questions, special flavor requests, catering inquiries, or just want to say hi? We&apos;d love to hear from you!
          </p>
        </div>

        {/* Contact Grid: Form + Info Cards */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10">
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white/80 backdrop-blur-xl rounded-[36px] p-8 sm:p-10 border border-white/80 shadow-[0_15px_40px_rgba(0,0,0,0.06)]">
            <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-luckiest-guy)] text-neutral-950 uppercase mb-2">
              SEND A MESSAGE
            </h2>
            <p className="text-sm sm:text-base font-[family-name:var(--font-sansita)] font-medium text-neutral-600 mb-6">
              Our boba brewmasters usually reply within 24 hours.
            </p>

            {isSubmitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center gap-3">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 animate-bounce" />
                <h3 className="text-2xl font-[family-name:var(--font-luckiest-guy)] text-neutral-950 uppercase">
                  MESSAGE RECEIVED!
                </h3>
                <p className="text-base font-[family-name:var(--font-sansita)] text-neutral-700 max-w-sm">
                  Thank you for reaching out! We&apos;re brewing up a sweet response for you. 💜
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-700 mb-1.5 font-[family-name:var(--font-sansita)]">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mia Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-neutral-200 focus:border-pink-500 focus:bg-white focus:outline-none transition-all text-sm sm:text-base font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-700 mb-1.5 font-[family-name:var(--font-sansita)]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. mia@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-neutral-200 focus:border-pink-500 focus:bg-white focus:outline-none transition-all text-sm sm:text-base font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-700 mb-1.5 font-[family-name:var(--font-sansita)]">
                      Favorite Flavor
                    </label>
                    <select
                      value={formData.favoriteFlavor}
                      onChange={(e) => setFormData({ ...formData, favoriteFlavor: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-neutral-200 focus:border-pink-500 focus:bg-white focus:outline-none transition-all text-sm sm:text-base font-medium cursor-pointer"
                    >
                      <option value="rose">Rose Milkaboo</option>
                      <option value="apple">Apple Milkaboo</option>
                      <option value="blackcurrant">Blackcurrant Milkaboo</option>
                      <option value="other">Other / Custom</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-700 mb-1.5 font-[family-name:var(--font-sansita)]">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Catering Request"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-neutral-200 focus:border-pink-500 focus:bg-white focus:outline-none transition-all text-sm sm:text-base font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-700 mb-1.5 font-[family-name:var(--font-sansita)]">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us what's on your mind..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-neutral-200 focus:border-pink-500 focus:bg-white focus:outline-none transition-all text-sm sm:text-base font-medium resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full py-4 rounded-full bg-neutral-950 text-white font-[family-name:var(--font-sansita)] font-bold text-base sm:text-lg flex items-center justify-center gap-2 hover:bg-pink-600 hover:shadow-lg active:scale-98 transition-all duration-300 cursor-pointer"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Location & Hours Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white/75 backdrop-blur-xl rounded-[32px] p-7 border border-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <h3 className="text-xl sm:text-2xl font-[family-name:var(--font-luckiest-guy)] text-neutral-950 uppercase mb-4">
                VISIT THE BOO LOUNGE
              </h3>

              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900 font-[family-name:var(--font-sansita)]">
                      Flagship Lounge
                    </h4>
                    <p className="text-xs sm:text-sm font-medium text-neutral-600">
                      742 Evergreen Terrace, Milkaboo Lane, CA 90210
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900 font-[family-name:var(--font-sansita)]">
                      Opening Hours
                    </h4>
                    <p className="text-xs sm:text-sm font-medium text-neutral-600">
                      Mon – Sun: 10:00 AM – 10:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900 font-[family-name:var(--font-sansita)]">
                      Phone & Orders
                    </h4>
                    <p className="text-xs sm:text-sm font-medium text-neutral-600">
                      +1 (800) MILKABOO
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900 font-[family-name:var(--font-sansita)]">
                      General Inquiries
                    </h4>
                    <p className="text-xs sm:text-sm font-medium text-neutral-600">
                      magic@milkaboo.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Mascot Banner */}
            <div className="relative rounded-[32px] bg-gradient-to-tr from-purple-800 to-pink-700 text-white p-7 overflow-hidden shadow-lg flex items-center justify-between">
              <div className="relative z-10 max-w-[200px]">
                <h4 className="text-xl font-[family-name:var(--font-luckiest-guy)] uppercase">
                  JOIN OUR BOO CREW!
                </h4>
                <p className="text-xs font-[family-name:var(--font-sansita)] text-pink-100 mt-1">
                  Tag us on Instagram @milkaboo for a chance to be featured!
                </p>
              </div>
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 animate-float-gentle shrink-0">
                <Image src="/images/logo.png" alt="Boo Mascot" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="mt-16 sm:mt-24 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-luckiest-guy)] text-neutral-950 uppercase">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="mt-2 text-base font-[family-name:var(--font-sansita)] font-bold text-neutral-600">
              Got quick questions? We have quick answers!
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white/75 backdrop-blur-md rounded-2xl border border-white/80 overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-4.5 flex items-center justify-between text-left cursor-pointer group"
                  >
                    <span className="text-base sm:text-lg font-[family-name:var(--font-sansita)] font-bold text-neutral-900 group-hover:text-pink-600 transition-colors">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-neutral-500 transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180 text-pink-600" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm sm:text-base font-[family-name:var(--font-sansita)] text-neutral-600 border-t border-neutral-100/60 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
