"use client";

import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const ease = "easeOut" as const;

const placeholders = [
  { cls: "gallery-ph-1", label: "The Bar" },
  { cls: "gallery-ph-2", label: "Evening Vibes" },
  { cls: "gallery-ph-3", label: "Craft Cocktails" },
  { cls: "gallery-ph-4", label: "Karaoke Night" },
  { cls: "gallery-ph-5", label: "Sports Night" },
  { cls: "gallery-ph-6", label: "Late Night" },
  { cls: "gallery-ph-7", label: "Weekend Crowd" },
  { cls: "gallery-ph-8", label: "Happy Hour" },
  { cls: "gallery-ph-9", label: "The Lounge" },
];

export default function Gallery() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" ref={ref} className="py-28 px-6 bg-[#080808]">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-16"
        >
          <p className="eyebrow mb-4">Inside Sugar Suite</p>
          <div className="gold-divider mb-6" />
          <h2 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl text-[#F5F0E8]">
            The <em className="italic text-[#C9963A]">Gallery</em>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {placeholders.map((p, i) => (
            <motion.div
              key={i}
              initial={reduced ? false : { opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07, ease }}
              onClick={() => setActive(i)}
              className={`${p.cls} relative aspect-square overflow-hidden cursor-pointer group border border-[#1a1a1a] hover:border-[#C9963A]/30 transition-colors duration-300`}
            >
              {/* Inner glow on hover */}
              <div className="absolute inset-0 bg-[#C9963A]/0 group-hover:bg-[#C9963A]/5 transition-colors duration-400" />

              {/* Label overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn size={24} className="text-[#C9963A] mb-2" style={{ filter: "drop-shadow(0 0 8px rgba(201,150,58,0.8))" }} />
                <span className="text-[#F5F0E8] text-xs tracking-[0.2em] uppercase">{p.label}</span>
              </div>

              {/* Corner accent */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[#C9963A]/0 group-hover:border-[#C9963A]/60 transition-colors duration-300" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[#C9963A]/0 group-hover:border-[#C9963A]/60 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        <p className="text-center text-white font-bold text-xs mt-8 tracking-widest uppercase">
          Photos coming soon — follow us for updates
        </p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] bg-[#080808]/95 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setActive(null)}
          >
            <button
              className="absolute top-6 right-6 text-white font-bold hover:text-[#F5F0E8] cursor-pointer transition-colors duration-200"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease }}
              onClick={(e) => e.stopPropagation()}
              className={`${placeholders[active].cls} w-[90vw] max-w-2xl aspect-square border border-[#C9963A]/20 flex items-center justify-center`}
            >
              <div className="text-center">
                <p className="eyebrow mb-2">{placeholders[active].label}</p>
                <p className="text-white font-bold text-xs tracking-widest">Photo coming soon</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
