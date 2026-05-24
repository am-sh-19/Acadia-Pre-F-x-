// ─────────────────────────────────────────────────────────────────────────────
// Main page — assembles all sections in order.
// Reorder sections here if needed. Each section is self-contained.
// ─────────────────────────────────────────────────────────────────────────────

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TripOverview from "@/components/TripOverview";
import Itinerary from "@/components/Itinerary";
import Activities from "@/components/Activities";
import HouseStay from "@/components/HouseStay";
import CostSection from "@/components/CostSection";
import TripLeads from "@/components/TripLeads";
import PackingList from "@/components/PackingList";
import FAQSection from "@/components/FAQSection";
import UpdatesSection from "@/components/UpdatesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Sticky navigation */}
      <Navbar />

      {/* Hero — full-screen cinematic opener */}
      <Hero />

      {/* Trip overview — what is this trip and why */}
      <TripOverview />

      {/* Day-by-day itinerary */}
      <Itinerary />

      {/* Activity cards — all activities with intensity tags */}
      <Activities />

      {/* Lodging — house details, gallery, amenities */}
      <HouseStay />

      {/* Cost — what's included, price breakdown */}
      <CostSection />

      {/* Trip leads — organizer profiles */}
      <TripLeads />

      {/* Packing list — categorized by type */}
      <PackingList />

      {/* FAQs — accordion */}
      <FAQSection />

      {/* Updates / coming soon — placeholder cards */}
      <UpdatesSection />

      {/* Footer */}
      <Footer />
    </>
  );
}
