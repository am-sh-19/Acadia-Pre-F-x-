"use client";

import { motion } from "framer-motion";
import {
  Home, Car, Fuel, ShoppingCart, UtensilsCrossed, Cookie,
  Trees, Trophy, CheckCircle, DollarSign, Info,
} from "lucide-react";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";
import InfoCallout from "./InfoCallout";

// ── COST DATA — Edit amounts and line items here ──────────────────────────────
const PRICE_PER_PERSON = "$850";

const included = [
  { icon: Home, label: "Lodging", detail: "3 nights at the Ellsworth mansion" },
  { icon: Car, label: "Transportation", detail: "Group carpool from campus" },
  { icon: Fuel, label: "Gas", detail: "Fuel costs split across vehicles" },
  { icon: ShoppingCart, label: "Groceries", detail: "All house grocery runs" },
  { icon: UtensilsCrossed, label: "Group Meals", detail: "Covered dinners and group lunches" },
  { icon: Cookie, label: "Shared Snacks & Drinks", detail: "Cabin food and beverages" },
  { icon: Trees, label: "Park Costs", detail: "Acadia entry and related fees" },
  { icon: Trophy, label: "Group Activities", detail: "Cabin Olympics and organized events" },
];

export default function CostSection() {
  return (
    <SectionWrapper id="cost" className="bg-granite-900 text-white" dark>
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
        <div className="relative bg-gradient-to-br from-forest-700 to-forest-900 rounded-3xl px-10 py-8 text-center border border-forest-600/50 shadow-2xl overflow-hidden">
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent" />
          <div className="relative">
            <div className="flex items-center justify-center gap-2 mb-2">
              <DollarSign className="w-6 h-6 text-emerald-300" />
              <span className="text-emerald-300 text-sm font-semibold uppercase tracking-widest">
                Per person
              </span>
            </div>
            <p className="font-display font-bold text-6xl text-white">{PRICE_PER_PERSON}</p>
            <p className="text-granite-300 text-sm mt-2">Closed-wallet structure</p>
          </div>
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
              className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <Icon className="w-3.5 h-3.5 text-granite-400 shrink-0" />
              </div>
              <p className="font-semibold text-white text-sm">{item.label}</p>
              <p className="text-granite-400 text-xs mt-0.5 leading-relaxed">{item.detail}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Notes */}
      <div className="space-y-4">
        <div className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
          <Info className="w-4 h-4 text-granite-400 mt-0.5 shrink-0" />
          <p className="text-sm text-granite-300 leading-relaxed">
            Optional personal purchases, souvenirs, or extra snacks and drinks in town may not be covered.
            A small amount of personal spending money is recommended for Bar Harbor or optional extras.
          </p>
        </div>
        <div className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
          <Info className="w-4 h-4 text-granite-400 mt-0.5 shrink-0" />
          <p className="text-sm text-granite-300 leading-relaxed">
            Any unused portion of the collected funds will be refunded after the trip is settled.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
