"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "About",   href: "#about" },
  { label: "Drinks",  href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Hours",   href: "#hours" },
];

const PHONE = "(818) 366-9600";
const PHONE_HREF = "tel:+18183669600";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#080808]/90 backdrop-blur-xl border-b border-[#1e1e1e]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between py-4">
        {/* Logo */}
        <button
          onClick={() => handleNav("#hero")}
          className="cursor-pointer flex flex-col leading-none"
          aria-label="Sugar Suite home"
        >
          <span
            className="font-[family-name:var(--font-heading)] text-2xl font-semibold tracking-wide text-[#F5F0E8]"
            style={{ textShadow: "0 0 30px rgba(201,150,58,0.35)" }}
          >
            Sugar Suite
          </span>
          <span className="text-[0.55rem] tracking-[0.3em] uppercase text-[#C9963A] mt-0.5">
            Granada Hills, CA
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="text-white font-bold hover:text-[#F5F0E8] text-xs tracking-[0.2em] uppercase transition-colors duration-200 cursor-pointer"
            >
              {l.label}
            </button>
          ))}
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 border border-[#C9963A] text-[#C9963A] hover:bg-[#C9963A] hover:text-[#080808] text-xs px-4 py-2 tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer"
          >
            <Phone size={12} />
            {PHONE}
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#F5F0E8] cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-[#080808]/98 backdrop-blur-xl border-t border-[#1e1e1e] px-6 py-8 flex flex-col gap-6">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="text-white font-bold hover:text-[#F5F0E8] text-sm tracking-[0.25em] uppercase transition-colors duration-200 cursor-pointer text-left"
            >
              {l.label}
            </button>
          ))}
          <a
            href={PHONE_HREF}
            className="flex items-center justify-center gap-2 border border-[#C9963A] text-[#C9963A] text-sm px-5 py-3 tracking-[0.15em] uppercase cursor-pointer hover:bg-[#C9963A]/10 transition-colors duration-200"
            onClick={() => setOpen(false)}
          >
            <Phone size={14} />
            {PHONE}
          </a>
        </div>
      )}
    </header>
  );
}
