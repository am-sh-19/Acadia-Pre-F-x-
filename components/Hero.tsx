"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, ChevronDown, Users } from "lucide-react";
import { trip } from "@/data/trip";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* ── Background Image ──────────────────────────────────────────────────
          TODO: Replace with an actual Acadia scenic photo.
          Recommended: full-bleed landscape, ~1920x1080, compressed JPG or WebP.
          Place at: public/images/hero/acadia-hero.jpg
          Then update the background-image style below.
      ─────────────────────────────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          // TODO: Replace this gradient placeholder with your actual hero image:
          // backgroundImage: "url('/images/hero/acadia-hero.jpg')",
          backgroundImage:
            "linear-gradient(135deg, #0c2e0e 0%, #1e3a8a 40%, #0f172a 80%, #061706 100%)",
        }}
      >
        {/* Cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/40 via-transparent to-ocean-950/40" />
      </div>

      {/* ── Content ───────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-2 mb-6"
        >
          <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full">
            <Users className="w-3.5 h-3.5" />
            {trip.audience}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-6"
        >
          Labor Day Weekend
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-200 to-teal-300">
            in Acadia
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-white/75 leading-relaxed max-w-2xl mb-10"
        >
          {trip.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-3 mb-14"
        >
          <a
            href="#itinerary"
            className="inline-flex items-center px-6 py-3.5 bg-forest-500 hover:bg-forest-600 text-white font-semibold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            View Itinerary
          </a>
          <a
            href="#packing"
            className="inline-flex items-center px-6 py-3.5 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white font-semibold rounded-full border border-white/25 transition-all duration-200 hover:-translate-y-0.5"
          >
            What to Pack
          </a>
        </motion.div>

        {/* Floating info badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-3"
        >
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-4 py-3">
            <Calendar className="w-4 h-4 text-emerald-300" />
            <div>
              <p className="text-white text-sm font-semibold">{trip.dateRange}</p>
              <p className="text-white/60 text-xs">4 days, 3 nights</p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-4 py-3">
            <MapPin className="w-4 h-4 text-emerald-300" />
            <div>
              <p className="text-white text-sm font-semibold">Acadia National Park</p>
              <p className="text-white/60 text-xs">Ellsworth, Maine</p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-4 py-3">
            <Users className="w-4 h-4 text-emerald-300" />
            <div>
              <p className="text-white text-sm font-semibold">Sloan Pre-fx</p>
              <p className="text-white/60 text-xs">Student trip</p>
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
        <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
