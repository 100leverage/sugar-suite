"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Martini, Mic2, Tv2 } from "lucide-react";

const ease = "easeOut" as const;

const features = [
  {
    Icon: Martini,
    title: "Craft Cocktails",
    desc: "From classic pours to creative mixes, our bartenders craft each drink with care. Cold beer and spirits always on hand.",
  },
  {
    Icon: Mic2,
    title: "Karaoke Nights",
    desc: "Grab the mic and own the room. Whether you're a star or just having fun, karaoke night is always a good time.",
  },
  {
    Icon: Tv2,
    title: "Sports on TV",
    desc: "Never miss the game. Multiple screens showing live sports — the perfect spot to watch with friends and a cold drink.",
  },
];

export default function About() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-28 px-6 bg-[#080808]">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-20"
        >
          <p className="eyebrow mb-4">The Experience</p>
          <div className="gold-divider mb-6" />
          <h2 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl text-[#F5F0E8] leading-tight">
            Your Kind of <em className="italic text-[#C9963A]">Night Out</em>
          </h2>
          <p className="mt-6 text-white font-bold text-sm leading-relaxed max-w-xl mx-auto">
            Low-key vibes, great people, and even better drinks. Sugar Suite is Granada Hills&rsquo; hidden gem — the kind of place you come back to.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={reduced ? false : { opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, ease }}
              className="group relative bg-[#111111] border border-[#1e1e1e] hover:border-[#C9963A]/30 p-8 transition-all duration-400 cursor-default overflow-hidden"
            >
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#C9963A]/30 group-hover:border-[#C9963A]/60 transition-colors duration-400" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#C9963A]/30 group-hover:border-[#C9963A]/60 transition-colors duration-400" />

              <div className="mb-6">
                <Icon
                  size={32}
                  className="text-[#C9963A]"
                  style={{ filter: "drop-shadow(0 0 8px rgba(201,150,58,0.5))" }}
                />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-2xl text-[#F5F0E8] mb-3">
                {title}
              </h3>
              <p className="text-white font-bold text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Tagline strip */}
        <motion.div
          initial={reduced ? false : { opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease }}
          className="mt-16 border-t border-b border-[#1e1e1e] py-6 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-center"
        >
          {["Outside Food Welcome", "Sports on Every Screen", "Open Daily 7 AM – 2 AM"].map((tag) => (
            <span key={tag} className="text-white font-bold text-xs tracking-[0.25em] uppercase">
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
