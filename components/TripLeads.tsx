"use client";

import { leads } from "@/data/leads";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";
import LeadCard from "./LeadCard";

export default function TripLeads() {
  return (
    <SectionWrapper id="leads" className="bg-granite-50">
      <SectionHeader
        eyebrow="Meet the Organizers"
        title="Your Trip Leads"
        subtitle="Five people who planned the whole thing and will definitely be holding it together on the ground."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {leads.map((lead, i) => (
          <LeadCard key={lead.id} lead={lead} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
