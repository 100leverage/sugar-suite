"use client";

import { useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import FloatingOrbs from "./FloatingOrbs";

const ease = "easeOut" as const;
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Base background */}
      <div className="absolute inset-0 bg-[#080808]" />

      {/* Radial glow at center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_60%,rgba(201,150,58,0.07)_0%,transparent_70%)]" />

{/* Floating orbs + particles */}
      <FloatingOrbs />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">

        {/* Eyebrow */}
        <motion.p
          {...(reduced ? {} : fade(0.2))}
          className="eyebrow mb-6"
        >
          Granada Hills, California
        </motion.p>

        {/* Horizontal rule */}
        <motion.div
          initial={reduced ? undefined : { scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease }}
          className="w-16 h-px bg-gradient-to-r from-transparent via-[#C9963A] to-transparent mb-8"
        />

        {/* Main title */}
        <motion.h1
          {...(reduced ? {} : fade(0.4))}
          className="font-[family-name:var(--font-heading)] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold leading-none tracking-wide text-[#F5F0E8] mb-6"
          style={{ textShadow: "0 0 60px rgba(201,150,58,0.2), 0 0 120px rgba(201,150,58,0.1)" }}
        >
          Sugar
          <br />
          <em className="italic text-[#C9963A]" style={{ textShadow: "0 0 40px rgba(201,150,58,0.5), 0 0 80px rgba(201,150,58,0.25)" }}>
            Suite
          </em>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          {...(reduced ? {} : fade(0.6))}
          className="text-white font-bold text-sm tracking-[0.4em] uppercase mb-10"
        >
          Cocktails &nbsp;·&nbsp; Karaoke &nbsp;·&nbsp; Sports
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...(reduced ? {} : fade(0.75))}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={() => document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-[#C9963A] hover:bg-[#E8B84B] text-[#080808] px-8 py-4 text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-300 cursor-pointer"
            style={{ boxShadow: "0 0 30px rgba(201,150,58,0.3)" }}
          >
            View Drinks
          </button>
          <button
            onClick={() => document.querySelector("#location")?.scrollIntoView({ behavior: "smooth" })}
            className="border border-[#2A2520] hover:border-[#C9963A]/60 text-white font-bold hover:text-[#F5F0E8] px-8 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer"
          >
            Find Us
          </button>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#C9963A]/50 cursor-pointer"
        animate={reduced ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll down"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}
