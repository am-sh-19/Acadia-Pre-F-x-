// ─────────────────────────────────────────────────────────────────────────────
// LODGING DATA — Edit this file to update property details, amenities, and links
// ─────────────────────────────────────────────────────────────────────────────

export const lodging = {
  title: "The Jarvis Homestead",
  subtitle: "Historic Maine Mansion · Ellsworth",
  address: "Ellsworth, Maine",
  checkInDate: "Friday, September 4, 2026",
  checkInTime: "4:00 PM",
  checkoutDate: "Monday, September 7, 2026",
  checkoutTime: "10:00 AM",
  rating: "★ 4.99 · Guest favorite",
  reservation: "HMM9MFJKXA",

  airbnbUrl: "https://www.airbnb.com/rooms/653784188850943919?source_impression_id=p3_1779594650_P3LMuFvuVO1VFEN8",

  description:
    "A beautifully restored historic Maine mansion just minutes from Acadia. 16 beds (max 22 guests), a private pool, and a guest-favorite Airbnb rating mean everyone has space to spread out — and shared spaces large enough for the whole group to gather.",

  highlights: [
    "16 beds across multiple rooms — max 22 guests",
    "Historic mansion, beautifully restored",
    "Private pool on the property",
    "Ellsworth, Maine — minutes from Acadia National Park",
    "★ 4.99 Airbnb guest favorite",
    "Large dining and living areas for the full group",
  ],

  amenities: [
    { label: "Bedrooms", icon: "BedDouble", value: "16 beds" },
    { label: "Pool", icon: "Waves", value: "Private" },
    { label: "Game Room", icon: "Gamepad2", value: "Included" },
    { label: "Firepit", icon: "Flame", value: "Outdoor" },
    { label: "Lawn Games", icon: "Trophy", value: "Included" },
    { label: "Dining", icon: "UtensilsCrossed", value: "Large area" },
    { label: "Parking", icon: "Car", value: "On-site" },
    { label: "WiFi", icon: "Wifi", value: "Included" },
  ],

  attendeeNotes: [
    "Some students may share beds or rooms, which is common across Pre-fx trips. We'll send an intake form beforehand to gather preferences and do our best to match everyone with a setup they're comfortable with.",
  ],

  // Placeholder cards — update when details are finalized
  comingSoon: [
    {
      id: "rooming",
      title: "Final Rooming Details",
      description: "Room assignments and bedding info will be shared closer to the trip.",
      icon: "BedDouble",
    },
    {
      id: "house-manual",
      title: "House Manual & Rules",
      description: "Rules, Wi-Fi info, parking, and house procedures will be linked here.",
      icon: "BookOpen",
    },
    {
      id: "check-in",
      title: "Check-In Instructions",
      description: "Keypad code, arrival instructions, and parking details coming soon.",
      icon: "KeyRound",
    },
  ],
};
