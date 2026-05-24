"use client";

import { itinerary } from "@/data/itinerary";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";
import ItineraryDayCard from "./ItineraryDay";
import InfoCallout from "./InfoCallout";

export default function Itinerary() {
  return (
    <SectionWrapper id="itinerary" className="bg-cream-100">
      <SectionHeader
        eyebrow="Day by Day"
        title="The Weekend Plan"
        subtitle="Four days, all mapped out. Subject to good weather, better company, and the occasional spontaneous detour."
      />

      {/* Disclaimer */}
      <InfoCallout variant="warning" className="mb-10">
        Itinerary subject to change based on weather, logistics, and group preferences. Final schedule will be shared closer to departure.
      </InfoCallout>

      {/* Day cards */}
      <div className="space-y-10">
        {itinerary.map((day, i) => (
          <ItineraryDayCard key={day.id} day={day} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
