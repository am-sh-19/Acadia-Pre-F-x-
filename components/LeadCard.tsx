"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TripLead } from "@/data/leads";

interface LeadCardProps {
  lead: TripLead;
  index: number;
}

export default function LeadCard({ lead, index }: LeadCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group bg-cream-50 rounded-2xl border-2 border-forest-200 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden hover:-translate-y-1"
    >
      {/* Headshot */}
      <div className="relative aspect-square bg-cream-100 overflow-hidden">
        <Image
          src={lead.image}
          alt={`${lead.name} headshot`}
          fill
          sizes="(min-width: 1280px) 240px, (min-width: 640px) 33vw, 50vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          priority={index < 2}
        />
        {/* Soft top vignette for badge legibility */}
        <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-forest-950/30 to-transparent" />
        {/* Trip Lead badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-sunrise-400 text-forest-900 text-xs font-bold px-2.5 py-1 rounded-full shadow-card">
            Trip Lead
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-sunrise-500 text-3xl mb-2">{lead.name}</h3>
        <p className="text-sm text-forest-800 leading-relaxed mb-3">{lead.bio}</p>

        {/* Roles */}
        {lead.roles.length > 0 && (
          <div className="space-y-1 pt-3 border-t border-forest-200">
            {lead.roles.map((role) => (
              <p key={role} className="text-xs text-forest-700 flex items-start gap-1.5 font-medium">
                <span className="mt-1 w-1 h-1 rounded-full bg-sunrise-500 shrink-0" />
                {role}
              </p>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
