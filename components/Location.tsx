"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";

const ease = "easeOut" as const;

export default function Location() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="location" ref={ref} className="py-28 px-6 bg-[#080808]">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-16"
        >
          <p className="eyebrow mb-4">Find Us</p>
          <div className="gold-divider mb-6" />
          <h2 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl text-[#F5F0E8]">
            Come <em className="italic text-[#C9963A]">Visit</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Map */}
          <motion.div
            initial={reduced ? false : { opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="overflow-hidden border border-[#1e1e1e] aspect-[4/3] lg:aspect-auto lg:min-h-[380px]"
          >
            <iframe
              title="Sugar Suite Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3298.6!2d-118.4985!3d34.2709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c29a0a0a0a0a0b%3A0x0!2s11858+Balboa+Blvd%2C+Granada+Hills%2C+CA+91344!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.4) brightness(0.7)", minHeight: "380px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Info cards */}
          <motion.div
            initial={reduced ? false : { opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="flex flex-col gap-5"
          >
            {/* Address */}
            <div className="bg-[#111111] border border-[#1e1e1e] hover:border-[#C9963A]/25 transition-colors duration-300 p-6 flex gap-4">
              <div className="w-10 h-10 flex items-center justify-center border border-[#C9963A]/30 shrink-0">
                <MapPin size={18} className="text-[#C9963A]" />
              </div>
              <div>
                <p className="text-white font-bold text-[0.6rem] tracking-[0.25em] uppercase mb-2">Address</p>
                <p className="text-[#F5F0E8] text-sm font-medium">11858 Balboa Blvd</p>
                <p className="text-white font-bold text-sm">Granada Hills, CA 91344</p>
                <p className="text-white font-bold text-xs mt-1">Located in Knollwood Plaza</p>
                <a
                  href="https://maps.google.com/?q=11858+Balboa+Blvd+Granada+Hills+CA+91344"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-[#C9963A] text-xs tracking-widest hover:text-[#E8B84B] transition-colors duration-200 cursor-pointer"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-[#111111] border border-[#1e1e1e] hover:border-[#C9963A]/25 transition-colors duration-300 p-6 flex gap-4">
              <div className="w-10 h-10 flex items-center justify-center border border-[#C9963A]/30 shrink-0">
                <Phone size={18} className="text-[#C9963A]" />
              </div>
              <div>
                <p className="text-white font-bold text-[0.6rem] tracking-[0.25em] uppercase mb-2">Phone</p>
                <a
                  href="tel:+18183669600"
                  className="text-[#F5F0E8] text-lg font-medium hover:text-[#C9963A] transition-colors duration-200 cursor-pointer"
                >
                  (818) 366-9600
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
