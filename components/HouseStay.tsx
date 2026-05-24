"use client";

import { motion } from "framer-motion";
import {
  MapPin, Calendar, Clock, BedDouble, Waves, Flame, Dumbbell,
  Trophy, UtensilsCrossed, Car, Wifi, Gamepad2, ExternalLink,
  BookOpen, KeyRound,
} from "lucide-react";
import { lodging } from "@/data/lodging";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";
import ImageGallery from "./ImageGallery";
import InfoCallout from "./InfoCallout";

const amenityIconMap: Record<string, React.ElementType> = {
  BedDouble, Waves, Flame, Dumbbell, Trophy, UtensilsCrossed, Car, Wifi, Gamepad2,
};

const comingSoonIconMap: Record<string, React.ElementType> = {
  BedDouble, BookOpen, KeyRound,
};

export default function HouseStay() {
  return (
    <SectionWrapper id="house" className="bg-cream-50">
      <SectionHeader
        eyebrow="Where We're Staying"
        title="The House"
        subtitle="A historic Maine mansion beautifully restored — your home base for the weekend."
      />

      {/* Image gallery */}
      <div className="mb-10">
        <ImageGallery images={lodging.images} alt="Ellsworth mansion" />
      </div>

      {/* Property info grid */}
      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        {/* Left: main info */}
        <div className="lg:col-span-2 space-y-5">
          {/* Title + host */}
          <div className="bg-white rounded-2xl border border-granite-100 shadow-card p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="font-display font-bold text-granite-900 text-2xl">
                  {lodging.title}
                </h3>
                <p className="text-granite-500 text-sm mt-1">Hosted by {lodging.host}</p>
              </div>
              {/* TODO: Replace "#" with actual Airbnb URL from data/lodging.ts */}
              <a
                href={lodging.airbnbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FF5A5F] hover:bg-[#e04e53] text-white text-sm font-semibold transition-colors shrink-0"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                View on Airbnb
              </a>
            </div>

            <p className="text-granite-600 leading-relaxed mb-4">{lodging.description}</p>

            {/* Highlights */}
            <ul className="space-y-2">
              {lodging.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-granite-600">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-forest-500 shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Stay info row */}
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="bg-white rounded-xl border border-granite-100 p-4 shadow-sm">
              <MapPin className="w-4 h-4 text-forest-600 mb-2" />
              <p className="text-xs text-granite-400 uppercase tracking-wide mb-0.5">Address</p>
              <p className="text-sm font-medium text-granite-800">{lodging.address}</p>
            </div>
            <div className="bg-white rounded-xl border border-granite-100 p-4 shadow-sm">
              <Calendar className="w-4 h-4 text-forest-600 mb-2" />
              <p className="text-xs text-granite-400 uppercase tracking-wide mb-0.5">Check-in</p>
              <p className="text-sm font-medium text-granite-800">
                {lodging.checkInDate}
              </p>
              <p className="text-xs text-granite-500">from {lodging.checkInTime}</p>
            </div>
            <div className="bg-white rounded-xl border border-granite-100 p-4 shadow-sm">
              <Clock className="w-4 h-4 text-forest-600 mb-2" />
              <p className="text-xs text-granite-400 uppercase tracking-wide mb-0.5">Checkout</p>
              <p className="text-sm font-medium text-granite-800">
                {lodging.checkoutDate}
              </p>
              <p className="text-xs text-granite-500">by {lodging.checkoutTime}</p>
            </div>
          </div>

          {/* Rooming note */}
          <InfoCallout variant="info">
            {lodging.attendeeNotes[0]}
          </InfoCallout>
        </div>

        {/* Right: amenities */}
        <div className="bg-white rounded-2xl border border-granite-100 shadow-card p-6">
          <h4 className="font-semibold text-granite-900 mb-4 text-sm uppercase tracking-wide">
            What&rsquo;s at the House
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {lodging.amenities.map((amenity) => {
              const Icon = amenityIconMap[amenity.icon] ?? BedDouble;
              return (
                <div key={amenity.label} className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-forest-50 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-forest-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-granite-800">{amenity.label}</p>
                    <p className="text-xs text-granite-400">{amenity.value}</p>
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
              className="border-2 border-dashed border-granite-200 rounded-2xl p-5 bg-granite-50/50"
            >
              <div className="w-9 h-9 rounded-xl bg-granite-100 flex items-center justify-center mb-3">
                <Icon className="w-4 h-4 text-granite-400" />
              </div>
              <h4 className="font-semibold text-granite-700 text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-granite-400 leading-relaxed">{item.description}</p>
              <span className="inline-block mt-2 text-xs text-granite-400 bg-granite-100 px-2 py-0.5 rounded-full">
                Coming soon
              </span>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
