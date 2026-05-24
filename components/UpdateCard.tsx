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
    badgeBg: "bg-granite-100",
    badgeText: "text-granite-500",
    border: "border-dashed border-granite-200",
    bg: "bg-granite-50/60",
  },
  available: {
    badge: "Available",
    badgeBg: "bg-forest-100",
    badgeText: "text-forest-700",
    border: "border-forest-200",
    bg: "bg-forest-50",
  },
  updated: {
    badge: "Updated",
    badgeBg: "bg-ocean-100",
    badgeText: "text-ocean-700",
    border: "border-ocean-200",
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
        "rounded-2xl border p-4 transition-all duration-200",
        style.bg,
        style.border
      )}
    >
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-xl bg-white border border-granite-100 shadow-sm flex items-center justify-center shrink-0">
          <Icon className="w-4 h-4 text-granite-500" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h4 className="font-semibold text-granite-800 text-sm">{update.title}</h4>
            <span
              className={cn(
                "shrink-0 text-xs font-medium px-2 py-0.5 rounded-full",
                style.badgeBg,
                style.badgeText
              )}
            >
              {style.badge}
            </span>
          </div>
          <p className="text-xs text-granite-500 leading-relaxed">{update.description}</p>

          {update.link && update.link !== "#" && update.linkLabel && (
            <a
              href={update.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-forest-600 hover:text-forest-800 transition-colors"
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
