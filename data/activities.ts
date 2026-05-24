// ─────────────────────────────────────────────────────────────────────────────
// ACTIVITIES DATA — Edit this file to add, remove, or update activity cards
// ─────────────────────────────────────────────────────────────────────────────

export type IntensityLevel = "Low" | "Moderate" | "High" | "Group" | "Optional";

export interface Activity {
  id: string;
  title: string;
  description: string;
  intensity: IntensityLevel;
  intensityColor: string;   // Tailwind color for the intensity badge
  icon: string;             // Lucide icon name
  duration?: string;
  distance?: string;
  tags: string[];
  highlights?: string[];
  // TODO: Replace placeholder with actual activity image path
  // Image should be ~800x600, landscape orientation
  image: string;            // e.g. "/images/activities/beehive.jpg"
  day: string;              // Which day this appears on
}

export const activities: Activity[] = [
  {
    id: "beehive",
    title: "Beehive Trail",
    description:
      "A thrilling scramble up iron rungs bolted into exposed granite cliffs. The reward? Panoramic views of Sand Beach, Eagle Lake, and the Maine coast. Short but intense — one of Acadia's most memorable trails.",
    intensity: "High",
    intensityColor: "sunrise",
    icon: "Zap",
    duration: "~2 hours",
    distance: "~1.5 miles",
    tags: ["Hiking", "Saturday", "Views"],
    highlights: ["Iron rung sections", "Panoramic summit views", "Sand Beach overlook"],
    // TODO: Replace with actual Beehive Trail photo
    image: "/images/activities/beehive-placeholder.jpg",
    day: "Saturday",
  },
  {
    id: "jordan-pond",
    title: "Jordan Pond Loop",
    description:
      "A classic Acadia hike along the shoreline of Jordan Pond with reflective mountain views. Accessible for all fitness levels and genuinely stunning. After the hike, Jordan Pond House is famous for its popovers.",
    intensity: "Low",
    intensityColor: "forest",
    icon: "Waves",
    duration: "~2 hours",
    distance: "~3.5 miles",
    tags: ["Hiking", "Saturday", "Scenic"],
    highlights: ["Mountain reflections", "Forested trail", "Optional popovers at Jordan Pond House"],
    // TODO: Replace with actual Jordan Pond photo
    image: "/images/activities/jordan-pond-placeholder.jpg",
    day: "Saturday",
  },
  {
    id: "carriage-roads",
    title: "Carriage Road Biking",
    description:
      "Pedal through 45+ miles of carriage roads built by John D. Rockefeller Jr. — car-free, beautifully maintained, and winding through the heart of Acadia. Multiple loop options for different distances.",
    intensity: "Moderate",
    intensityColor: "ocean",
    icon: "Bike",
    duration: "2–4 hours",
    distance: "Varies by route",
    tags: ["Biking", "Sunday", "Active"],
    highlights: ["Historic stone bridges", "Forest canopy", "Eagle Lake views"],
    // TODO: Replace with actual carriage roads photo
    image: "/images/activities/carriage-roads-placeholder.jpg",
    day: "Sunday",
  },
  {
    id: "ocean-path",
    title: "Ocean Path",
    description:
      "A flat, paved coastal walk from Sand Beach to Otter Cliff — one of the most scenic easy walks in the park. Dramatic sea views, wave-carved rock formations, and Thunder Hole make this a crowd favorite.",
    intensity: "Low",
    intensityColor: "forest",
    icon: "Footprints",
    duration: "~1–2 hours",
    distance: "~4 miles round trip",
    tags: ["Walking", "Sunday", "Coastal"],
    highlights: ["Thunder Hole", "Otter Cliff", "Sand Beach"],
    // TODO: Replace with actual Ocean Path photo
    image: "/images/activities/ocean-path-placeholder.jpg",
    day: "Sunday",
  },
  {
    id: "cadillac-sunrise",
    title: "Cadillac Mountain Sunrise",
    description:
      "From fall through winter, Cadillac Mountain is one of the first places in the continental US to catch the sunrise. Wake up early, drive to the summit, and watch the sky turn gold over the Atlantic.",
    intensity: "Optional",
    intensityColor: "sunrise",
    icon: "Sunrise",
    duration: "~2 hours total",
    distance: "Summit drive + short walk",
    tags: ["Optional", "Monday", "Sunrise", "Iconic"],
    highlights: ["First sunrise in the US", "360° panoramic views", "Unforgettable experience"],
    // TODO: Replace with actual Cadillac Mountain sunrise photo
    image: "/images/activities/cadillac-sunrise-placeholder.jpg",
    day: "Monday",
  },
  {
    id: "cabin-olympics",
    title: "Sloan Cabin Olympics",
    description:
      "Teams compete in a series of challenges — physical, mental, and creative. Think lawn games, trivia, mystery events, and a whole lot of trash talk. Medals awarded. Rivalries born.",
    intensity: "Group",
    intensityColor: "ocean",
    icon: "Trophy",
    duration: "~2–3 hours",
    tags: ["Group Activity", "Sunday", "Competition"],
    highlights: ["Team-based format", "Multiple challenge types", "Bragging rights"],
    // TODO: Replace with actual group activity photo
    image: "/images/activities/cabin-olympics-placeholder.jpg",
    day: "Sunday",
  },
  {
    id: "cabin-downtime",
    title: "Cabin Downtime",
    description:
      "Some of the best moments happen in between. Board games, cards, porch hangs, naps, and unstructured time. The cabin has a game room, pool, and hot tub — no agenda required.",
    intensity: "Low",
    intensityColor: "granite",
    icon: "Armchair",
    tags: ["Chill", "Flexible", "All Days"],
    highlights: ["Game room", "Pool & hot tub", "Porch hangouts"],
    // TODO: Replace with actual cabin interior photo
    image: "/images/activities/cabin-downtime-placeholder.jpg",
    day: "All",
  },
  {
    id: "firepit",
    title: "Firepit Nights",
    description:
      "Post-dinner fire, stories, s'mores, and late-night conversations. The firepit is the unofficial heart of the weekend.",
    intensity: "Low",
    intensityColor: "sunrise",
    icon: "Flame",
    tags: ["Evening", "Social", "Chill"],
    highlights: ["S'mores", "Night sky", "Good conversations"],
    // TODO: Replace with actual firepit photo
    image: "/images/activities/firepit-placeholder.jpg",
    day: "Evenings",
  },
  {
    id: "group-dinners",
    title: "Group Dinners",
    description:
      "Friday at Guerrero Maya, Saturday is a group cook-up at the house, Sunday is small group dinners at nearby restaurants, Monday breakfast cooked by the leaders. Every meal is a group affair.",
    intensity: "Group",
    intensityColor: "forest",
    icon: "UtensilsCrossed",
    tags: ["Food", "Group", "Social"],
    highlights: ["Group cook-up at the house", "Small group dinners out", "Leader-cooked breakfast"],
    // TODO: Replace with actual group dinner photo
    image: "/images/activities/group-dinners-placeholder.jpg",
    day: "All",
  },
  {
    id: "bar-harbor",
    title: "Bar Harbor Exploration",
    description:
      "Bar Harbor is the charming coastal town at the gateway to Acadia — local shops, lobster rolls, ice cream, and waterfront views. Great for a casual stroll or quick afternoon escape.",
    intensity: "Low",
    intensityColor: "ocean",
    icon: "MapPin",
    tags: ["Exploration", "Optional", "Town"],
    highlights: ["Waterfront dining", "Local shops", "Lobster rolls"],
    // TODO: Replace with actual Bar Harbor photo
    image: "/images/activities/bar-harbor-placeholder.jpg",
    day: "Optional",
  },
];
