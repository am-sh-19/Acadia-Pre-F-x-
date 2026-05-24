"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, ChevronDown, Users } from "lucide-react";
import { trip } from "@/data/trip";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-cream-50"
    >
      {/* ── Decorative line-art mountains (forest green strokes on cream) ── */}
      <svg
        aria-hidden="true"
        viewBox="0 0 800 400"
        className="absolute top-20 right-0 w-[55%] max-w-[640px] opacity-70 text-forest-700 hidden md:block"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Mountains */}
        <path d="M40 320 L160 140 L240 230 L340 90 L460 250 L560 160 L680 280 L760 200 L800 240" />
        {/* Pine trees */}
        <g transform="translate(120 340)">
          <path d="M0 0 L-14 -36 L14 -36 Z" />
          <path d="M0 -28 L-18 -64 L18 -64 Z" />
          <path d="M0 -56 L-12 -84 L12 -84 Z" />
          <line x1="0" y1="0" x2="0" y2="14" />
        </g>
        <g transform="translate(580 350)">
          <path d="M0 0 L-12 -28 L12 -28 Z" />
          <path d="M0 -22 L-16 -52 L16 -52 Z" />
          <line x1="0" y1="0" x2="0" y2="12" />
        </g>
        {/* Sun */}
        <circle cx="660" cy="80" r="28" />
        <line x1="660" y1="36" x2="660" y2="20" />
        <line x1="660" y1="124" x2="660" y2="140" />
        <line x1="616" y1="80" x2="600" y2="80" />
        <line x1="704" y1="80" x2="720" y2="80" />
      </svg>

      {/* ── Decorative winding road on the left ─────────────────────────── */}
      <svg
        aria-hidden="true"
        viewBox="0 0 200 800"
        className="absolute -left-4 top-0 h-full w-32 opacity-60 text-forest-600 hidden lg:block"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="2 12"
      >
        <path d="M40 0 C 80 120, 20 220, 80 320 S 140 540, 60 680 S 100 800, 100 800" />
      </svg>

      {/* ── Content ───────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-2 mb-6"
        >
          <span className="inline-flex items-center gap-1.5 bg-forest-700 text-cream-50 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full">
            <Users className="w-3.5 h-3.5" />
            {trip.audience}
          </span>
        </motion.div>

        {/* Headline — chunky coral display */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-sunrise-400 text-6xl sm:text-7xl lg:text-8xl xl:text-9xl leading-[0.95] mb-2 drop-shadow-sm"
        >
          ACADIA
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="font-display text-forest-700 text-3xl sm:text-4xl lg:text-5xl leading-tight mb-8"
        >
          Labor Day &rsquo;26
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.26 }}
          className="text-lg sm:text-xl text-forest-800 leading-relaxed max-w-2xl mb-10 font-medium"
        >
          {trip.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.34 }}
          className="flex flex-wrap gap-3 mb-14"
        >
          <a
            href="#itinerary"
            className="inline-flex items-center px-6 py-3.5 bg-sunrise-400 hover:bg-sunrise-500 text-forest-900 font-bold rounded-full transition-all duration-200 shadow-card hover:shadow-card-hover hover:-translate-y-0.5"
          >
            View Itinerary
          </a>
          <a
            href="#packing"
            className="inline-flex items-center px-6 py-3.5 bg-cream-50 hover:bg-cream-100 text-forest-800 font-bold rounded-full border-2 border-forest-700 transition-all duration-200 hover:-translate-y-0.5"
          >
            What to Pack
          </a>
        </motion.div>

        {/* Floating info badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42 }}
          className="flex flex-wrap gap-3"
        >
          <div className="flex items-center gap-2 bg-cream-50 border-2 border-forest-700 rounded-2xl px-4 py-3 shadow-card">
            <Calendar className="w-4 h-4 text-sunrise-500" />
            <div>
              <p className="text-forest-900 text-sm font-bold">{trip.dateRange}</p>
              <p className="text-forest-600 text-xs">4 days, 3 nights</p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-cream-50 border-2 border-forest-700 rounded-2xl px-4 py-3 shadow-card">
            <MapPin className="w-4 h-4 text-sunrise-500" />
            <div>
              <p className="text-forest-900 text-sm font-bold">Acadia National Park</p>
              <p className="text-forest-600 text-xs">Ellsworth, Maine</p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-cream-50 border-2 border-forest-700 rounded-2xl px-4 py-3 shadow-card">
            <Users className="w-4 h-4 text-sunrise-500" />
            <div>
              <p className="text-forest-900 text-sm font-bold">{trip.headcount} People</p>
              <p className="text-forest-600 text-xs">{trip.headcountDetail}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-forest-600 text-xs uppercase tracking-widest font-semibold">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-forest-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
