// ─────────────────────────────────────────────────────────────────────────────
// ITINERARY DATA — Edit this file to update the day-by-day schedule
// Each day has a title, subtitle, and array of activity blocks.
// Activity blocks have: time, title, description, tags, icon, difficulty
// ─────────────────────────────────────────────────────────────────────────────

export type Difficulty = "easy" | "moderate" | "challenging" | "optional" | "group";

export interface ActivityBlock {
  time: string;          // e.g. "3:00 PM" — update with confirmed times
  title: string;
  description: string;
  tags?: string[];
  icon: string;          // Lucide icon name
  difficulty?: Difficulty;
  isOptional?: boolean;
}

export interface ItineraryDay {
  id: string;
  day: string;           // e.g. "Friday"
  date: string;          // e.g. "September 4"
  title: string;
  emoji: string;
  accentColor: string;   // Tailwind color class for accent
  activities: ActivityBlock[];
}

export const itinerary: ItineraryDay[] = [
  // ─── FRIDAY ───────────────────────────────────────────────────────────────
  {
    id: "friday",
    day: "Friday",
    date: "September 4",
    title: "Arrival & First Impressions",
    emoji: "🚗",
    accentColor: "forest",
    activities: [
      {
        time: "Afternoon",           // TODO: Update with confirmed departure time after orientation
        title: "Drive Up from Campus",
        description:
          "Pile into cars and head north after orientation wraps. Groups coordinate departure timing in advance.",
        tags: ["Travel", "Group"],
        icon: "Car",
      },
      {
        time: "En Route",
        title: "Road Trip Vibes",
        description:
          "Car games, playlists, and the first real conversations of the trip. Good snacks encouraged.",
        tags: ["Social", "Fun"],
        icon: "Music",
      },
      {
        time: "Evening",             // TODO: Update with confirmed dinner stop location
        title: "Group Dinner Stop",
        description:
          "Coordinated stop on the way to Maine for a sit-down group dinner. Location TBD.",
        tags: ["Food", "Group"],
        icon: "UtensilsCrossed",
      },
      {
        time: "Night",               // TODO: Update with confirmed arrival time
        title: "Arrive at the Cabin",
        description:
          "Roll into the historic Ellsworth mansion, claim your space, and decompress. Snacks, drinks, house games, and a relaxed first night ahead.",
        tags: ["Arrival", "Social", "Chill"],
        icon: "Home",
      },
    ],
  },

  // ─── SATURDAY ─────────────────────────────────────────────────────────────
  {
    id: "saturday",
    day: "Saturday",
    date: "September 5",
    title: "Big Hike Day",
    emoji: "⛰️",
    accentColor: "forest",
    activities: [
      {
        time: "Morning",             // TODO: Update with confirmed departure time for hike
        title: "Acadia Hike — Choose Your Adventure",
        description:
          "Groups split by pace and intensity. Two main trail options — pick what works for you.",
        tags: ["Hiking", "Outdoors"],
        icon: "Mountain",
        difficulty: "moderate",
      },
      {
        time: "Morning",
        title: "Option A: Jordan Pond Loop",
        description:
          "Scenic shoreline trail with reflective lake views and mountain backdrops. ~3.5 miles, ~2 hours. A beautiful, accessible hike for all fitness levels.",
        tags: ["Easy–Moderate", "Scenic", "Lake Views"],
        icon: "Waves",
        difficulty: "easy",
      },
      {
        time: "Morning",
        title: "Option B: Beehive Trail",
        description:
          "Iron rungs, exposed cliff faces, and panoramic views over Sand Beach. ~1.5 miles but heart-pumping. For those who want an adventure.",
        tags: ["Challenging", "Iron Rungs", "Views"],
        icon: "Zap",
        difficulty: "challenging",
      },
      {
        time: "Midday",
        title: "Lunch at Sand Beach or Trailhead",
        description:
          "Pre-packed sandwiches and snacks. Eat by the water, take in the views, enjoy the post-hike high.",
        tags: ["Food", "Group"],
        icon: "Sandwich",
      },
      {
        time: "Afternoon",
        title: "Return to Cabin — Rest & Recharge",
        description:
          "Showers, naps, hammock time, or porch hang. Unwind however you need.",
        tags: ["Chill", "Recovery"],
        icon: "BedDouble",
        difficulty: "easy",
      },
      {
        time: "Evening",
        title: "Group Cook-Off Dinner",
        description:
          "Team up and cook a meal from scratch at the house. Bragging rights included.",
        tags: ["Food", "Group Activity", "Fun"],
        icon: "ChefHat",
      },
      {
        time: "Night",
        title: "Games, Firepit & Late-Night Hang",
        description:
          "Choose your adventure: firepit vibes, a movie, mystery-style group activity, or just staying up way too late.",
        tags: ["Chill", "Social", "Optional"],
        icon: "Flame",
        isOptional: true,
      },
    ],
  },

  // ─── SUNDAY ───────────────────────────────────────────────────────────────
  {
    id: "sunday",
    day: "Sunday",
    date: "September 6",
    title: "Carriage Roads, Cabin Olympics & Coastline",
    emoji: "🚴",
    accentColor: "ocean",
    activities: [
      {
        time: "Morning",             // TODO: Update with confirmed bike rental logistics
        title: "Option A: Carriage Road Bike Ride",
        description:
          "Rent bikes and cruise Acadia's famous carriage roads — 45+ miles of car-free crushed gravel paths through old-growth forest and over stone bridges.",
        tags: ["Biking", "Optional", "Active"],
        icon: "Bike",
        difficulty: "moderate",
        isOptional: true,
      },
      {
        time: "Morning",
        title: "Option B: Ocean Path Coastal Walk",
        description:
          "Walk the scenic oceanside path from Sand Beach to Otter Cliff. Highlights: Thunder Hole, dramatic sea spray, and Otter Cliff views. Easy, beautiful, and worth it.",
        tags: ["Walking", "Coastal", "Scenic"],
        icon: "Footprints",
        difficulty: "easy",
      },
      {
        time: "Midday",
        title: "Pre-Packed Lunch",
        description:
          "Refuel with a packed lunch at a scenic stop. Exact location TBD based on morning activity.",
        tags: ["Food", "Group"],
        icon: "Sandwich",
      },
      {
        time: "Afternoon",
        title: "Sloan Cabin Olympics",
        description:
          "Team-based competition with a mix of physical challenges, trivia, and creative events. Medals (and bragging rights) awarded.",
        tags: ["Group Activity", "Competition", "Fun"],
        icon: "Trophy",
        difficulty: "group",
      },
      {
        time: "Evening",
        title: "Group Dinner Out",
        description:
          "Head out to a local restaurant for a shared group dinner. Location TBD — likely Bar Harbor or Ellsworth.",
        tags: ["Food", "Group", "Out"],
        icon: "UtensilsCrossed",
      },
      {
        time: "Sunset",              // TODO: Confirm Bass Harbor Lighthouse visit logistics
        title: "Bass Harbor Lighthouse",
        description:
          "Golden hour at one of Maine's most iconic spots. Worth the short drive for photos, fresh air, and a perfect way to end the day.",
        tags: ["Scenic", "Photo Op", "Optional"],
        icon: "Lighthouse",
        isOptional: true,
      },
    ],
  },

  // ─── MONDAY ───────────────────────────────────────────────────────────────
  {
    id: "monday",
    day: "Monday",
    date: "September 7",
    title: "Cadillac Sunrise & Return",
    emoji: "🌅",
    accentColor: "sunrise",
    activities: [
      {
        time: "Early Morning",       // TODO: Confirm Cadillac Mountain reservation/logistics
        title: "Optional: Cadillac Mountain Sunrise",
        description:
          "Rise before dawn and drive to the summit of Cadillac Mountain — the first place in the continental US to see the sunrise. Absolutely worth it.",
        tags: ["Optional", "Sunrise", "Iconic"],
        icon: "Sunrise",
        difficulty: "optional",
        isOptional: true,
      },
      {
        time: "Morning",
        title: "Group Breakfast at the House",
        description:
          "Last meal together as a group. Relax, recap the weekend, say your goodbyes.",
        tags: ["Food", "Group", "Chill"],
        icon: "Coffee",
      },
      {
        time: "Mid-Morning",         // TODO: Airbnb checkout is 10:00 AM — confirm cleanup time
        title: "Pack Up & Clean Up",
        description:
          "Everyone pitches in to leave the house in great shape. Checkout by 10:00 AM.",
        tags: ["Logistics", "Group"],
        icon: "PackageCheck",
      },
      {
        time: "Late Morning",        // TODO: Update with confirmed departure time for return drive
        title: "Drive Back to Campus",
        description:
          "Carpool back south. Expect good conversations, tired smiles, and maybe a final snack stop.",
        tags: ["Travel", "Return"],
        icon: "MapPin",
      },
    ],
  },
];
