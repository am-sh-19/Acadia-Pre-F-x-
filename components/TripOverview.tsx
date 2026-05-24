"use client";

import { motion } from "framer-motion";
import {
  Mountain, Bike, Home, Sunrise, UtensilsCrossed, Trophy,
} from "lucide-react";
import { overviewHighlights } from "@/data/trip";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";
import InfoCallout from "./InfoCallout";

const iconMap: Record<string, React.ElementType> = {
  Mountain,
  Bike,
  Home,
  Sunrise,
  UtensilsCrossed,
  Trophy,
};

const cardColors = [
  "from-forest-500 to-forest-700",
  "from-ocean-500 to-ocean-700",
  "from-forest-600 to-emerald-700",
  "from-sunrise-500 to-orange-600",
  "from-amber-500 to-amber-700",
  "from-ocean-600 to-indigo-700",
];

export default function TripOverview() {
  return (
    <SectionWrapper id="overview" className="bg-cream-50">
      <SectionHeader
        eyebrow="The Trip"
        title="Four Days Well Spent"
        subtitle="A Labor Day weekend in one of America's most beautiful national parks — with the people you're about to spend the next two years alongside."
      />

      {/* Main description */}
      <div className="grid lg:grid-cols-2 gap-8 mb-14">
        <div className="space-y-4 text-granite-600 leading-relaxed">
          <p className="text-lg">
            Acadia National Park sits on the rugged Maine coast — granite peaks dropping into
            the Atlantic, carriage roads winding through old-growth forest, and some of the
            most dramatic coastal scenery in New England.
          </p>
          <p>
            This trip is designed with something for everyone: adventurous hikes and
            scenic strolls, group cook-offs and dinners out, cabin games and quiet
            mornings, optional sunrise and mandatory good company.
          </p>
          <p>
            The goal is simple — get to know your classmates outside of a classroom,
            build some early memories, and arrive at Core semester feeling like you
            already belong.
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-6 shadow-card border border-granite-100">
            <h3 className="font-display font-bold text-granite-900 text-xl mb-3">
              What to Expect
            </h3>
            <ul className="space-y-2 text-granite-600">
              {[
                "Adventurous options and lower-key alternatives — every day",
                "Strong community atmosphere from arrival to departure",
                "Balance between structured activities and free time",
                "Group meals for every dinner",
                "A historic Maine mansion that'll become your home base",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-forest-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <InfoCallout variant="success">
            We&apos;ll make sure you&apos;re fed, entertained, and back in one piece in time for Core semester.
          </InfoCallout>
        </div>
      </div>

      {/* Highlight cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {overviewHighlights.map((item, i) => {
          const Icon = iconMap[item.icon] ?? Mountain;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-card border border-granite-100 p-5 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5"
            >
              <div
                className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${cardColors[i % cardColors.length]} mb-3`}
              >
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-granite-900 text-sm mb-1">{item.label}</h3>
              <p className="text-xs text-granite-500 leading-relaxed">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
