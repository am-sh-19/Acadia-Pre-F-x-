"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import { TripLead } from "@/data/leads";
import { cn } from "@/lib/utils";

interface LeadCardProps {
  lead: TripLead;
  index: number;
}

const accentGradients = [
  "from-forest-400 to-forest-600",
  "from-ocean-400 to-ocean-600",
  "from-sunrise-400 to-sunrise-600",
  "from-emerald-400 to-teal-600",
  "from-indigo-400 to-ocean-600",
];

export default function LeadCard({ lead, index }: LeadCardProps) {
  const gradient = accentGradients[index % accentGradients.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group bg-white rounded-2xl border border-granite-100 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden hover:-translate-y-1"
    >
      {/* Avatar area */}
      <div className={cn("relative h-36 bg-gradient-to-br", gradient)}>
        {/* ── Image slot ────────────────────────────────────────────────────
            TODO: Replace placeholder with actual headshot.
            Place image at: public/images/leads/{lead.id}.jpg
            Then use:
              import Image from 'next/image';
              <Image src={lead.image} alt={lead.name} fill className="object-cover object-top" />
            Image should be square, ~400x400, high quality
        ─────────────────────────────────────────────────────────────────── */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center">
            <User className="w-8 h-8 text-white" />
          </div>
        </div>
        {/* Name badge */}
        <div className="absolute bottom-3 left-4">
          <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 rounded-lg">
            Trip Lead
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display font-bold text-granite-900 text-xl mb-2">
          {lead.name}
        </h3>
        <p className="text-sm text-granite-500 leading-relaxed mb-3">
          {lead.bio}
        </p>

        {/* Roles */}
        {lead.roles.length > 0 && (
          <div className="space-y-1 pt-3 border-t border-granite-100">
            {lead.roles.map((role) => (
              <p key={role} className="text-xs text-granite-400 flex items-start gap-1.5">
                <span className="mt-1 w-1 h-1 rounded-full bg-forest-400 shrink-0" />
                {role}
              </p>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
