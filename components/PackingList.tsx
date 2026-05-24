"use client";

import { motion } from "framer-motion";
import {
  Mountain, Shirt, CheckCircle, Star,
  Footprints, Backpack, Droplets, Sun, Bug,
  Layers, CloudRain, Waves, Tag,
  Sparkles, Pill, BatteryCharging, Zap, CreditCard, Wallet,
  Camera, Gamepad2, Cookie, Headphones, EyeOff, Flame,
} from "lucide-react";
import { packingCategories } from "@/data/packing";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";
import InfoCallout from "./InfoCallout";
import { cn } from "@/lib/utils";

const categoryIconMap: Record<string, React.ElementType> = {
  Mountain, Shirt, CheckCircle, Star,
};

const itemIconMap: Record<string, React.ElementType> = {
  Footprints, Backpack, Droplets, Sun, Bug,
  Layers, CloudRain, Waves, Tag, Shirt,
  Sparkles, Pill, BatteryCharging, Zap, CreditCard, Wallet,
  Camera, Gamepad2, Cookie, Headphones, EyeOff, Flame,
};

const categoryColors: Record<string, { bg: string; accent: string; badge: string }> = {
  forest: { bg: "bg-forest-100", accent: "text-forest-800", badge: "bg-forest-700" },
  ocean: { bg: "bg-ocean-100", accent: "text-ocean-800", badge: "bg-ocean-600" },
  granite: { bg: "bg-cream-200", accent: "text-forest-800", badge: "bg-forest-600" },
  sunrise: { bg: "bg-sunrise-100", accent: "text-sunrise-700", badge: "bg-sunrise-500" },
};

export default function PackingList() {
  return (
    <SectionWrapper id="packing" className="bg-cream-50">
      <SectionHeader
        eyebrow="What to Bring"
        title="Packing List"
        subtitle="Pack light, dress in layers. Maine in September can surprise you."
      />

      <InfoCallout variant="info" className="mb-8">
        Final packing guidance will be updated closer to departure. This list covers the essentials.
      </InfoCallout>

      <div className="grid sm:grid-cols-2 gap-5">
        {packingCategories.map((category, catIndex) => {
          const CatIcon = categoryIconMap[category.icon] ?? CheckCircle;
          const colors = categoryColors[category.color] ?? categoryColors.granite;

          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className={cn("rounded-2xl border-2 border-forest-200 overflow-hidden shadow-card")}
            >
              {/* Category header */}
              <div className={cn("flex items-center gap-3 p-4 border-b-2 border-forest-200", colors.bg)}>
                <div
                  className={cn(
                    "w-9 h-9 rounded-xl flex items-center justify-center",
                    colors.badge
                  )}
                >
                  <CatIcon className="w-4 h-4 text-cream-50" />
                </div>
                <h3 className={cn("font-display text-2xl", colors.accent)}>
                  {category.title}
                </h3>
              </div>

              {/* Items list */}
              <ul className="bg-cream-50 divide-y divide-forest-100">
                {category.items.map((item) => {
                  const ItemIcon = itemIconMap[item.icon] ?? CheckCircle;
                  return (
                    <li
                      key={item.id}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-cream-100 transition-colors"
                    >
                      <ItemIcon className="w-4 h-4 text-forest-600 shrink-0" />
                      <span className="text-sm text-forest-800 flex-1 font-medium">{item.label}</span>
                      {item.essential && (
                        <span className="text-xs font-bold text-sunrise-700 bg-sunrise-100 border border-sunrise-300 px-2 py-0.5 rounded-full shrink-0">
                          Essential
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
