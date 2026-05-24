"use client";

import { motion } from "framer-motion";
import {
  Car, ClipboardList, ShoppingCart, Phone, MapPin, Bike,
  Sunrise, Home, BookOpen, CloudSun, ExternalLink,
} from "lucide-react";
import { UpdateCard as UpdateCardType } from "@/data/updates";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Car, ClipboardList, ShoppingCart, Phone, MapPin, Bike,
  Sunrise, Home, BookOpen, CloudSun,
};

interface UpdateCardProps {
  update: UpdateCardType;
  index: number;
}

const statusConfig = {
  "coming-soon": {
    badge: "Coming Soon",
    badgeBg: "bg-cream-100 border border-forest-200",
    badgeText: "text-forest-700",
    border: "border-dashed border-forest-300",
    bg: "bg-cream-50/60",
  },
  available: {
    badge: "Available",
    badgeBg: "bg-sunrise-100 border border-sunrise-300",
    badgeText: "text-sunrise-700",
    border: "border-sunrise-300",
    bg: "bg-sunrise-50",
  },
  updated: {
    badge: "Updated",
    badgeBg: "bg-ocean-100 border border-ocean-300",
    badgeText: "text-ocean-700",
    border: "border-ocean-300",
    bg: "bg-ocean-50",
  },
};

export default function UpdateCard({ update, index }: UpdateCardProps) {
  const Icon = iconMap[update.icon] ?? MapPin;
  const style = statusConfig[update.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={cn(
        "rounded-2xl border-2 p-4 transition-all duration-200",
        style.bg,
        style.border
      )}
    >
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-xl bg-cream-50 border-2 border-forest-200 flex items-center justify-center shrink-0">
          <Icon className="w-4 h-4 text-forest-700" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h4 className="font-bold text-forest-900 text-sm">{update.title}</h4>
            <span
              className={cn(
                "shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full",
                style.badgeBg,
                style.badgeText
              )}
            >
              {style.badge}
            </span>
          </div>
          <p className="text-xs text-forest-700 leading-relaxed">{update.description}</p>

          {update.link && update.link !== "#" && update.linkLabel && (
            <a
              href={update.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-2 text-xs font-bold text-sunrise-600 hover:text-sunrise-700 transition-colors"
            >
              <ExternalLink className="w-3 h-3" />
              {update.linkLabel}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
