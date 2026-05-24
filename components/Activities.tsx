"use client";

import { activities } from "@/data/activities";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";
import ActivityCard from "./ActivityCard";

export default function Activities() {
  return (
    <SectionWrapper id="activities" className="bg-cream-50">
      <SectionHeader
        eyebrow="What We're Doing"
        title="Activities & Adventures"
        subtitle="From iron-rung scrambles to firepit nights — there's a version of this weekend for every energy level."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {activities.map((activity, i) => (
          <ActivityCard key={activity.id} activity={activity} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
