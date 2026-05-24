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
        time: "All day",
        title: "Drive Up from Campus",
        description:
          "Pile into the four rental cars at 350 Mass Ave and head north. Drivers: Shanthini, Tristan, Amar, and Marvin.",
        tags: ["Travel", "Group"],
        icon: "Car",
      },
      {
        time: "En route",
        title: "Road Trip Vibes",
        description:
          "Car games (Steph's running cow count, alphabet game), playlists, and the first real conversations of the trip.",
        tags: ["Social", "Fun"],
        icon: "Music",
      },
      {
        time: "~7:00 PM",
        title: "Group Dinner at Guerrero Maya",
        description:
          "All four cars meet up for dinner. Confirmed stop at Guerrero Maya — Shanthini's pick.",
        tags: ["Food", "Group", "Confirmed"],
        icon: "UtensilsCrossed",
      },
      {
        time: "Night",
        title: "Arrive at The Jarvis Homestead",
        description:
          "Roll into the historic Ellsworth mansion, claim your space, and decompress.",
        tags: ["Arrival", "Chill"],
        icon: "Home",
      },
      {
        time: "~9:00 PM",
        title: "Light Games & Cozy Movie",
        description:
          "Steph leads: Wavelength, Poetry for Neanderthals, and maybe a cozy movie to wind down. Low-key first-night energy.",
        tags: ["Social", "Chill", "Optional"],
        icon: "Gamepad2",
        isOptional: true,
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
        time: "~8:00 AM",
        title: "Acadia Hike — Choose Your Adventure",
        description:
          "Tristan leads. Groups mixed across core teams, then split by pace. Two main trail options.",
        tags: ["Hiking", "Outdoors"],
        icon: "Mountain",
        difficulty: "moderate",
      },
      {
        time: "~8:00 AM",
        title: "Option A: Jordan Pond Loop (Easy)",
        description:
          "Scenic shoreline trail with reflective lake views and mountain backdrops. ~3.5 miles, ~2 hours. Accessible for all fitness levels.",
        tags: ["Easy", "Scenic", "Lake Views"],
        icon: "Waves",
        difficulty: "easy",
      },
      {
        time: "~8:00 AM",
        title: "Option B: Beehive Trail (Moderate)",
        description:
          "Iron rungs bolted into exposed cliff faces with panoramic views over Sand Beach. ~1.5 miles but heart-pumping.",
        tags: ["Challenging", "Iron Rungs", "Views"],
        icon: "Zap",
        difficulty: "challenging",
      },
      {
        time: "~12:30 PM",
        title: "Lunch at Sand Beach or Trailhead",
        description:
          "Amar's pre-packed sandwiches. Eat by the water, take in the views, enjoy the post-hike high.",
        tags: ["Food", "Group"],
        icon: "Sandwich",
      },
      {
        time: "~2:00–5:00 PM",
        title: "Return to Cabin — Rest & Recharge",
        description:
          "Showers, naps, pool, or porch hang. Unwind however you need.",
        tags: ["Chill", "Recovery"],
        icon: "BedDouble",
        difficulty: "easy",
      },
      {
        time: "~6:00 PM",
        title: "Group Cook-Up Dinner",
        description:
          "Amar leads cooking dinner as a group at the house. Family-style meal, everyone pitches in.",
        tags: ["Food", "Group Activity"],
        icon: "ChefHat",
      },
      {
        time: "~8:00 PM",
        title: "Murder Mystery / Group Activity",
        description:
          "Steph's evening pick — likely a murder mystery night, with the exact group activity to be determined. Late-night hang to follow.",
        tags: ["Social", "Group", "TBD"],
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
    title: "Carriage Roads, Olympics & Coastline",
    emoji: "🚴",
    accentColor: "ocean",
    activities: [
      {
        time: "~9:00 AM",
        title: "Option A: Carriage Road Bike Ride",
        description:
          "Tristan leads. Rent bikes and cruise Acadia's famous carriage roads — 45 miles of car-free crushed gravel through forest, past lakes, and over Rockefeller's stone bridges.",
        tags: ["Biking", "Active"],
        icon: "Bike",
        difficulty: "moderate",
      },
      {
        time: "~9:00 AM",
        title: "Option B: Ocean Path Coastal Walk",
        description:
          "Non-bikers: the 2.2 mi oceanside path from Sand Beach toward Otter Cliff. Highlights: Thunder Hole, Otter Cliff, dramatic sea spray.",
        tags: ["Walking", "Coastal", "Scenic"],
        icon: "Footprints",
        difficulty: "easy",
      },
      {
        time: "~12:30 PM",
        title: "Pre-Packed Lunch",
        description:
          "Amar's packed lunch at a scenic stop. Refuel before the afternoon block.",
        tags: ["Food", "Group"],
        icon: "Sandwich",
      },
      {
        time: "~2:00 PM",
        title: "Sloan Cabin Olympics",
        description:
          "Core-team competition: cup stacking relay, blind drawing, MIT trivia, and lip sync. Medals (and bragging rights) awarded.",
        tags: ["Group Activity", "Competition"],
        icon: "Trophy",
        difficulty: "group",
      },
      {
        time: "~6:00 PM",
        title: "Small Group Dinners",
        description:
          "Split into smaller groups and head out to nearby restaurants. Easier to seat, more chances for real conversations.",
        tags: ["Food", "Out"],
        icon: "UtensilsCrossed",
      },
      {
        time: "6:00 PM",
        title: "Sunset at Bass Harbor Lighthouse",
        description:
          "Golden hour at one of Maine's most iconic spots. Worth the short drive for photos and fresh ocean air.",
        tags: ["Scenic", "Photo Op"],
        icon: "Sun",
      },
      {
        time: "~9:00 PM",
        title: "Evening Activities",
        description:
          "Steph's call. Firepit, games, or a quiet cabin night to recharge for sunrise.",
        tags: ["Social", "Chill", "Optional"],
        icon: "Flame",
        isOptional: true,
      },
    ],
  },

  // ─── MONDAY ───────────────────────────────────────────────────────────────
  {
    id: "monday",
    day: "Monday",
    date: "September 7",
    title: "Sunrise Send-Off",
    emoji: "🌅",
    accentColor: "sunrise",
    activities: [
      {
        time: "4:45 AM",
        title: "Cadillac Mountain Sunrise",
        description:
          "Wake up early and drive to the summit — one of the first places in the US to see the sunrise. Vehicle reservation required (handled in advance).",
        tags: ["Optional", "Sunrise", "Iconic"],
        icon: "Sunrise",
        difficulty: "optional",
        isOptional: true,
      },
      {
        time: "7:30 AM",
        title: "Group Breakfast at the House",
        description:
          "Leaders cook for the group: eggs, bacon, pancakes. Last meal together — recap the weekend, say your goodbyes.",
        tags: ["Food", "Group"],
        icon: "Coffee",
      },
      {
        time: "~10:00 AM",
        title: "Pack Up & Drive Home",
        description:
          "Cars head back south. Expect tired smiles, good conversations, and maybe a final snack stop.",
        tags: ["Logistics", "Travel", "Return"],
        icon: "MapPin",
      },
    ],
  },
];
