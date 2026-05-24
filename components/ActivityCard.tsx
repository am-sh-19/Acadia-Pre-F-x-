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
      className="group relative bg-white rounded-2xl border border-granite-100 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden hover:-translate-y-1"
    >
      {/* Image placeholder area */}
      <div className="relative h-40 overflow-hidden">
        {/* ── Image slot ───────────────────────────────────────────────────
            TODO: Replace the gradient placeholder with an actual activity image.
            Use Next.js Image component for production:
              import Image from 'next/image';
              <Image src={activity.image} alt={activity.title} fill className="object-cover" />
            Image path is defined in data/activities.ts → activity.image
        ─────────────────────────────────────────────────────────────────── */}
        <div className="absolute inset-0 bg-gradient-to-br from-granite-200 via-granite-300 to-granite-400 group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="w-12 h-12 text-granite-400" />
        </div>

        {/* Intensity badge */}
        <div className="absolute top-3 left-3">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full",
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
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-black/30 backdrop-blur-sm text-white">
            {activity.day}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-display font-bold text-granite-900 text-base mb-1.5">
          {activity.title}
        </h3>
        <p className="text-sm text-granite-500 leading-relaxed mb-3">
          {activity.description}
        </p>

        {/* Meta row */}
        <div className="flex flex-wrap gap-2 text-xs text-granite-400 mb-3">
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
              <li key={h} className="flex items-center gap-2 text-xs text-granite-500">
                <span className="w-1 h-1 rounded-full bg-forest-400 shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}
