// ─────────────────────────────────────────────────────────────────────────────
// LODGING DATA — Edit this file to update property details, amenities, and links
// ─────────────────────────────────────────────────────────────────────────────

export const lodging = {
  title: "Home in Ellsworth",
  host: "Cale",
  address: "10 East Main Street, Ellsworth, Maine",
  checkInDate: "Friday, September 4, 2026",
  checkInTime: "4:00 PM",
  checkoutDate: "Monday, September 7, 2026",
  checkoutTime: "10:00 AM",

  // TODO: Replace with actual Airbnb listing URL
  airbnbUrl: "#", // [ADD AIRBNB LINK HERE]

  description:
    "A beautifully restored historic Maine mansion originally built in 1828. Multiple bedrooms and living spaces give everyone room to breathe, while shared spaces — a game room, large dining areas, and an outdoor firepit — bring everyone together. Close to Acadia and walking distance to downtown Ellsworth.",

  highlights: [
    "Historic 1828 Maine mansion, beautifully restored",
    "Multiple bedrooms and private living spaces",
    "Walking distance to downtown Ellsworth",
    "Minutes from Acadia National Park",
    "Large dining areas for group meals",
  ],

  amenities: [
    { label: "Bedrooms", icon: "BedDouble", value: "Multiple" },
    { label: "Game Room", icon: "Gamepad2", value: "Included" },
    { label: "Pool", icon: "Waves", value: "Private" },
    { label: "Hot Tub", icon: "Flame", value: "Included" },
    { label: "Firepit", icon: "Flame", value: "Outdoor" },
    { label: "Gym", icon: "Dumbbell", value: "Private" },
    { label: "Lawn Games", icon: "Trophy", value: "Included" },
    { label: "Dining", icon: "UtensilsCrossed", value: "Large area" },
    { label: "Parking", icon: "Car", value: "On-site" },
    { label: "WiFi", icon: "Wifi", value: "Included" },
  ],

  // TODO: Replace placeholder paths with actual property photos
  // Recommended: 1 hero image (landscape, ~1600x900) + 4-6 gallery images
  images: [
    // [ADD PROPERTY HERO IMAGE HERE] e.g. "/images/lodging/exterior.jpg"
    "/images/lodging/hero-placeholder.jpg",
    // [ADD GALLERY IMAGES BELOW — interior, game room, pool, firepit, etc.]
    "/images/lodging/gallery-1-placeholder.jpg",
    "/images/lodging/gallery-2-placeholder.jpg",
    "/images/lodging/gallery-3-placeholder.jpg",
    "/images/lodging/gallery-4-placeholder.jpg",
  ],

  attendeeNotes: [
    "Some students may share beds or rooms, which is common across many Pre-fx trips. We'll send an intake form beforehand to gather preferences and do our best to match everyone with a setup they're comfortable with.",
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
