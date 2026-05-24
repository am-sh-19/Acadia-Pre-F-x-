// ─────────────────────────────────────────────────────────────────────────────
// UPDATES / COMING SOON DATA — Edit this file to add or reveal details
// As information is confirmed, replace "coming soon" cards with actual content
// ─────────────────────────────────────────────────────────────────────────────

export interface UpdateCard {
  id: string;
  title: string;
  description: string;
  icon: string;        // Lucide icon name
  status: "coming-soon" | "available" | "updated";
  // TODO: Add link when information is ready
  link?: string;
  linkLabel?: string;
}

export const updates: UpdateCard[] = [
  {
    id: "car-assignments",
    title: "Car Assignments",
    description:
      "Final car groupings and driver details will be shared before departure.",
    icon: "Car",
    status: "coming-soon",
    // TODO: Add link to car assignment doc or form when ready
  },
  {
    id: "rooming-form",
    title: "Rooming Preference Form",
    description:
      "A short intake form to share your rooming preferences before we finalize assignments.",
    icon: "ClipboardList",
    status: "coming-soon",
    // TODO: Add link to Google Form or Typeform when ready
  },
  {
    id: "grocery-details",
    title: "Grocery & Meal Plan",
    description:
      "Details on what we're cooking, grocery runs, and any dietary accommodations.",
    icon: "ShoppingCart",
    status: "coming-soon",
  },
  {
    id: "emergency-contacts",
    title: "Emergency Contacts",
    description:
      "Trip lead contacts, local emergency info, and the nearest hospital/urgent care.",
    icon: "Phone",
    status: "coming-soon",
    // TODO: Add emergency contact doc link before departure
  },
  {
    id: "departure-logistics",
    title: "Departure Logistics",
    description:
      "Meeting point, exact departure time, and what to do if you need a different arrangement.",
    icon: "MapPin",
    status: "coming-soon",
  },
  {
    id: "bike-rentals",
    title: "Bike Rental Details",
    description:
      "Where to rent bikes in Acadia, cost info, and how it's handled for the group.",
    icon: "Bike",
    status: "coming-soon",
    // TODO: Add bike rental logistics when confirmed
  },
  {
    id: "cadillac-reservation",
    title: "Cadillac Mountain Reservation",
    description:
      "Cadillac requires a timed entry reservation. We'll handle this for the group — details coming soon.",
    icon: "Sunrise",
    status: "coming-soon",
    // TODO: Add reservation confirmation details
  },
  {
    id: "airbnb-link",
    title: "Airbnb Listing — The Jarvis Homestead",
    description:
      "Confirmed: 16 beds, ★ 4.99 guest favorite, Ellsworth ME. Full Airbnb listing with photos and reviews.",
    icon: "Home",
    status: "available",
    link: "https://www.airbnb.com/rooms/653784188850943919?source_impression_id=p3_1779594650_P3LMuFvuVO1VFEN8",
    linkLabel: "View Listing",
  },
  {
    id: "house-rules",
    title: "House Rules & Manual",
    description:
      "Wi-Fi password, parking, house rules, check-in code, and all the practical details.",
    icon: "BookOpen",
    status: "coming-soon",
  },
  {
    id: "weather-updates",
    title: "Weather Updates",
    description:
      "We'll share weather forecasts the week before the trip and flag any schedule adjustments.",
    icon: "CloudSun",
    status: "coming-soon",
  },
];
