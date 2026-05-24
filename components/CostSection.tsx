"use client";

import { motion } from "framer-motion";
import {
  Home, Car, Fuel, ShoppingCart, UtensilsCrossed, Cookie,
  Trees, Trophy, CheckCircle, DollarSign, Info,
} from "lucide-react";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";

// ── COST DATA — Edit amounts and line items here ──────────────────────────────
const PRICE_PER_PERSON = "$850";

const included = [
  { icon: Home, label: "Lodging", detail: "3 nights at The Jarvis Homestead" },
  { icon: Car, label: "Transportation", detail: "Group carpool from campus" },
  { icon: Fuel, label: "Gas", detail: "Fuel costs split across vehicles" },
  { icon: ShoppingCart, label: "Groceries", detail: "All house grocery runs" },
  { icon: UtensilsCrossed, label: "Group Meals", detail: "Covered dinners and group lunches" },
  { icon: Cookie, label: "Shared Snacks & Drinks", detail: "Cabin food and beverages" },
  { icon: Trees, label: "Park Costs", detail: "Acadia entry, bike rentals, Cadillac reservation" },
  { icon: Trophy, label: "Group Activities", detail: "Cabin Olympics supplies and prizes" },
];

export default function CostSection() {
  return (
    <SectionWrapper id="cost" className="bg-forest-900 text-cream-50" dark>
      <SectionHeader
        eyebrow="Cost & Coverage"
        title="What's Included"
        subtitle="One upfront payment covers the full weekend. No wallet required once you're there."
        light
      />

      {/* Price callout */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex items-center justify-center mb-10"
      >
        <div className="relative bg-cream-50 rounded-3xl px-10 py-8 text-center border-4 border-sunrise-400 shadow-2xl">
          <div className="flex items-center justify-center gap-2 mb-2">
            <DollarSign className="w-6 h-6 text-sunrise-500" />
            <span className="text-forest-700 text-sm font-bold uppercase tracking-widest">
              Per person
            </span>
          </div>
          <p className="font-display text-7xl text-sunrise-500">{PRICE_PER_PERSON}</p>
          <p className="text-forest-700 text-sm mt-2 font-semibold">Closed-wallet structure</p>
        </div>
      </motion.div>

      {/* What's included grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {included.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-forest-800 hover:bg-forest-700 border border-forest-700 rounded-xl p-4 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-3.5 h-3.5 text-sunrise-300 shrink-0" />
                <Icon className="w-3.5 h-3.5 text-cream-200 shrink-0" />
              </div>
              <p className="font-bold text-cream-50 text-sm">{item.label}</p>
              <p className="text-cream-200 text-xs mt-0.5 leading-relaxed">{item.detail}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Notes */}
      <div className="space-y-4">
        <div className="flex items-start gap-3 p-4 bg-forest-800 border border-forest-700 rounded-xl">
          <Info className="w-4 h-4 text-sunrise-300 mt-0.5 shrink-0" />
          <p className="text-sm text-cream-200 leading-relaxed">
            Optional personal purchases, souvenirs, or extra snacks and drinks in town may not be covered.
            A small amount of personal spending money is recommended for Bar Harbor or optional extras.
          </p>
        </div>
        <div className="flex items-start gap-3 p-4 bg-forest-800 border border-forest-700 rounded-xl">
          <Info className="w-4 h-4 text-sunrise-300 mt-0.5 shrink-0" />
          <p className="text-sm text-cream-200 leading-relaxed">
            Any unused portion of the collected funds will be refunded after the trip is settled.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
