"use client";

import { updates } from "@/data/updates";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";
import UpdateCard from "./UpdateCard";
import InfoCallout from "./InfoCallout";

export default function UpdatesSection() {
  return (
    <SectionWrapper id="updates" className="bg-white">
      <SectionHeader
        eyebrow="Details Coming Soon"
        title="Still Being Finalized"
        subtitle="The trip is locked in — these are the logistical details we're still working out. We'll update this page as things get confirmed."
      />

      <InfoCallout variant="info" className="mb-8">
        This page will be updated as trip details are confirmed. Check back closer to September 4.
      </InfoCallout>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {updates.map((update, i) => (
          <UpdateCard key={update.id} update={update} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
