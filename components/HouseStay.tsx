"use client";

import { motion } from "framer-motion";
import {
  MapPin, Calendar, Clock, BedDouble, Waves, Flame, Dumbbell,
  Trophy, UtensilsCrossed, Car, Wifi, Gamepad2, ExternalLink,
  BookOpen, KeyRound, Star,
} from "lucide-react";
import { lodging } from "@/data/lodging";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";
import InfoCallout from "./InfoCallout";

const amenityIconMap: Record<string, React.ElementType> = {
  BedDouble, Waves, Flame, Dumbbell, Trophy, UtensilsCrossed, Car, Wifi, Gamepad2,
};

const comingSoonIconMap: Record<string, React.ElementType> = {
  BedDouble, BookOpen, KeyRound,
};

export default function HouseStay() {
  return (
    <SectionWrapper id="house" className="bg-cream-100">
      <SectionHeader
        eyebrow="Where We're Staying"
        title="The House"
        subtitle="A historic Maine mansion beautifully restored — your home base for the weekend."
      />

      {/* Property info grid */}
      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        {/* Left: main info */}
        <div className="lg:col-span-2 space-y-5">
          {/* Title + rating */}
          <div className="bg-cream-50 rounded-2xl border-2 border-forest-200 shadow-card p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="font-display text-sunrise-500 text-4xl leading-tight">
                  {lodging.title}
                </h3>
                <p className="text-forest-700 text-sm mt-1 font-semibold">{lodging.subtitle}</p>
                <p className="text-sunrise-600 text-xs mt-1 inline-flex items-center gap-1 font-semibold">
                  <Star className="w-3.5 h-3.5 fill-sunrise-400 text-sunrise-400" />
                  {lodging.rating}
                </p>
              </div>
              <a
                href={lodging.airbnbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-sunrise-400 hover:bg-sunrise-500 text-forest-900 text-sm font-bold transition-colors shrink-0 shadow-card"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                View on Airbnb
              </a>
            </div>

            <p className="text-forest-800 leading-relaxed mb-4">{lodging.description}</p>

            {/* Highlights */}
            <ul className="space-y-2">
              {lodging.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-forest-800">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sunrise-500 shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Stay info row */}
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="bg-cream-50 rounded-xl border-2 border-forest-200 p-4">
              <MapPin className="w-4 h-4 text-sunrise-500 mb-2" />
              <p className="text-xs text-forest-600 uppercase tracking-wide mb-0.5 font-bold">Location</p>
              <p className="text-sm font-semibold text-forest-900">{lodging.address}</p>
            </div>
            <div className="bg-cream-50 rounded-xl border-2 border-forest-200 p-4">
              <Calendar className="w-4 h-4 text-sunrise-500 mb-2" />
              <p className="text-xs text-forest-600 uppercase tracking-wide mb-0.5 font-bold">Check-in</p>
              <p className="text-sm font-semibold text-forest-900">
                {lodging.checkInDate}
              </p>
              <p className="text-xs text-forest-600">from {lodging.checkInTime}</p>
            </div>
            <div className="bg-cream-50 rounded-xl border-2 border-forest-200 p-4">
              <Clock className="w-4 h-4 text-sunrise-500 mb-2" />
              <p className="text-xs text-forest-600 uppercase tracking-wide mb-0.5 font-bold">Checkout</p>
              <p className="text-sm font-semibold text-forest-900">
                {lodging.checkoutDate}
              </p>
              <p className="text-xs text-forest-600">by {lodging.checkoutTime}</p>
            </div>
          </div>

          {/* Rooming note */}
          <InfoCallout variant="info">
            {lodging.attendeeNotes[0]}
          </InfoCallout>
        </div>

        {/* Right: amenities */}
        <div className="bg-cream-50 rounded-2xl border-2 border-forest-200 shadow-card p-6">
          <h4 className="font-bold text-forest-900 mb-4 text-sm uppercase tracking-wide">
            What&rsquo;s at the House
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {lodging.amenities.map((amenity) => {
              const Icon = amenityIconMap[amenity.icon] ?? BedDouble;
              return (
                <div key={amenity.label} className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-cream-100 border border-forest-200 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-forest-700" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-forest-900">{amenity.label}</p>
                    <p className="text-xs text-forest-600">{amenity.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Coming soon cards */}
      <div className="grid sm:grid-cols-3 gap-4">
        {lodging.comingSoon.map((item, i) => {
          const Icon = comingSoonIconMap[item.icon] ?? BedDouble;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-2 border-dashed border-forest-300 rounded-2xl p-5 bg-cream-50/60"
            >
              <div className="w-9 h-9 rounded-xl bg-cream-100 border border-forest-200 flex items-center justify-center mb-3">
                <Icon className="w-4 h-4 text-forest-600" />
              </div>
              <h4 className="font-bold text-forest-800 text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-forest-700 leading-relaxed">{item.description}</p>
              <span className="inline-block mt-2 text-xs text-forest-700 bg-cream-100 border border-forest-200 px-2 py-0.5 rounded-full font-semibold">
                Coming soon
              </span>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
