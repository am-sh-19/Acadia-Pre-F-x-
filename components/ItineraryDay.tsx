"use client";

import { motion } from "framer-motion";
import {
  Car, Music, UtensilsCrossed, Home, Mountain, Waves, Zap,
  Sandwich, BedDouble, ChefHat, Flame, Bike, Footprints,
  Trophy, Anchor, Sunrise, Coffee, PackageCheck, MapPin,
} from "lucide-react";
import { ItineraryDay, ActivityBlock } from "@/data/itinerary";
import { cn, difficultyConfig } from "@/lib/utils";

// Lighthouse isn't in this lucide-react version; mapping it to Anchor
const iconMap: Record<string, React.ElementType> = {
  Car, Music, UtensilsCrossed, Home, Mountain, Waves, Zap,
  Sandwich, BedDouble, ChefHat, Flame, Bike, Footprints,
  Trophy, Anchor, Lighthouse: Anchor, Sunrise, Coffee, PackageCheck, MapPin,
};

const accentColors: Record<string, { bg: string; text: string; border: string; badge: string }> = {
  forest: {
    bg: "bg-forest-50",
    text: "text-forest-700",
    border: "border-forest-200",
    badge: "bg-forest-600",
  },
  ocean: {
    bg: "bg-ocean-50",
    text: "text-ocean-700",
    border: "border-ocean-200",
    badge: "bg-ocean-600",
  },
  sunrise: {
    bg: "bg-sunrise-50",
    text: "text-sunrise-700",
    border: "border-sunrise-200",
    badge: "bg-sunrise-500",
  },
};

function ActivityCard({ activity }: { activity: ActivityBlock }) {
  const Icon = iconMap[activity.icon] ?? Home;
  const diff = activity.difficulty ? difficultyConfig[activity.difficulty] : null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={cn(
        "relative bg-white rounded-xl border border-granite-100 p-4 shadow-sm hover:shadow-card transition-shadow",
        activity.isOptional && "border-dashed border-granite-200 bg-granite-50/50"
      )}
    >
      <div className="flex gap-3">
        {/* Icon */}
        <div className="shrink-0 w-9 h-9 rounded-lg bg-granite-100 flex items-center justify-center mt-0.5">
          <Icon className="w-4 h-4 text-granite-600" />
        </div>

        <div className="flex-1 min-w-0">
          {/* Time + title row */}
          <div className="flex items-start justify-between gap-2 mb-1">
            <div>
              <span className="text-xs font-semibold text-granite-400 uppercase tracking-wide">
                {activity.time}
              </span>
              <h4 className="font-semibold text-granite-900 text-sm leading-snug">
                {activity.title}
              </h4>
            </div>
            {activity.isOptional && (
              <span className="shrink-0 text-xs font-medium px-2 py-0.5 rounded-full bg-granite-100 text-granite-500">
                Optional
              </span>
            )}
          </div>

          <p className="text-xs text-granite-500 leading-relaxed mb-2">
            {activity.description}
          </p>

          {/* Tags + difficulty */}
          <div className="flex flex-wrap gap-1.5">
            {diff && (
              <span
                className={cn(
                  "text-xs font-medium px-2 py-0.5 rounded-full border",
                  diff.bg,
                  diff.text,
                  diff.border
                )}
              >
                {diff.label}
              </span>
            )}
            {activity.tags?.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full bg-granite-100 text-granite-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

interface ItineraryDayProps {
  day: ItineraryDay;
  index: number;
}

export default function ItineraryDayCard({ day, index }: ItineraryDayProps) {
  const colors = accentColors[day.accentColor] ?? accentColors.forest;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Day header */}
      <div
        className={cn(
          "flex items-center gap-4 p-5 rounded-2xl mb-4 border",
          colors.bg,
          colors.border
        )}
      >
        <div
          className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0",
            colors.badge
          )}
        >
          {day.emoji}
        </div>
        <div>
          <p className={cn("text-xs font-semibold uppercase tracking-widest", colors.text)}>
            {day.day} — {day.date}
          </p>
          <h3 className="font-display font-bold text-granite-900 text-xl leading-tight">
            {day.title}
          </h3>
        </div>
      </div>

      {/* Activity cards */}
      <div className="grid sm:grid-cols-2 gap-3 pl-2">
        {day.activities.map((activity) => (
          <ActivityCard key={`${day.id}-${activity.title}`} activity={activity} />
        ))}
      </div>
    </motion.div>
  );
}
