"use client";

import { motion } from "framer-motion";
import {
  Zap, Waves, Bike, Footprints, Sunrise, Trophy,
  Armchair, Flame, UtensilsCrossed, MapPin, Mountain,
} from "lucide-react";
import { Activity } from "@/data/activities";
import { cn, intensityConfig } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Zap, Waves, Bike, Footprints, Sunrise, Trophy,
  Armchair, Flame, UtensilsCrossed, MapPin, Mountain,
};

interface ActivityCardProps {
  activity: Activity;
  index: number;
}

export default function ActivityCard({ activity, index }: ActivityCardProps) {
  const Icon = iconMap[activity.icon] ?? Mountain;
  const intensity = intensityConfig[activity.intensity];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group relative bg-cream-50 rounded-2xl border-2 border-forest-200 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden hover:-translate-y-1"
    >
      {/* Image placeholder area */}
      <div className="relative h-40 overflow-hidden bg-cream-100 border-b-2 border-forest-200">
        {/* ── Image slot ───────────────────────────────────────────────────
            TODO: Replace the gradient placeholder with an actual activity image.
            Use Next.js Image component for production:
              import Image from 'next/image';
              <Image src={activity.image} alt={activity.title} fill className="object-cover" />
            Image path is defined in data/activities.ts → activity.image
        ─────────────────────────────────────────────────────────────────── */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-cream-200 to-cream-300 group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="w-12 h-12 text-forest-500" />
        </div>

        {/* Intensity badge */}
        <div className="absolute top-3 left-3">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full border",
              intensity.bg,
              intensity.text
            )}
          >
            <span className={cn("w-1.5 h-1.5 rounded-full", intensity.dot)} />
            {activity.intensity}
          </span>
        </div>

        {/* Day badge */}
        <div className="absolute top-3 right-3">
          <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-forest-800/85 backdrop-blur-sm text-cream-50">
            {activity.day}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-display text-sunrise-500 text-2xl mb-1.5 leading-tight">
          {activity.title}
        </h3>
        <p className="text-sm text-forest-800 leading-relaxed mb-3">
          {activity.description}
        </p>

        {/* Meta row */}
        <div className="flex flex-wrap gap-2 text-xs text-forest-600 mb-3 font-semibold">
          {activity.duration && (
            <span className="flex items-center gap-1">⏱ {activity.duration}</span>
          )}
          {activity.distance && (
            <span className="flex items-center gap-1">📍 {activity.distance}</span>
          )}
        </div>

        {/* Highlights */}
        {activity.highlights && (
          <ul className="space-y-1">
            {activity.highlights.slice(0, 3).map((h) => (
              <li key={h} className="flex items-center gap-2 text-xs text-forest-700">
                <span className="w-1 h-1 rounded-full bg-sunrise-500 shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}
