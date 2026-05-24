// ─────────────────────────────────────────────────────────────────────────────
// TRIP LEADS DATA — Edit this file to update organizer/lead profiles
// ─────────────────────────────────────────────────────────────────────────────

export interface TripLead {
  id: string;
  name: string;
  bio: string;
  roles: string[];   // Sloan activities, clubs, roles
  // TODO: Replace placeholder with actual headshot
  // Recommended: square crop, ~400x400, JPG or WebP
  image: string;     // e.g. "/images/leads/amar.jpg"
  // Optional: contact info if you want to surface it
  // email?: string;
}

export const leads: TripLead[] = [
  {
    id: "amar",
    name: "Amar",
    bio: "Former startup engineer and croissant-from-scratch kind of person. Loves tennis, takes elite Fujifilm photos, and brings thoughtful energy to everything he does.",
    roles: [
      "Co-President, Sloan and Steady Run Club",
      "SVP, Entrepreneurship Club",
    ],
    // TODO: Replace with Amar's actual headshot
    image: "/images/leads/amar-placeholder.jpg",
  },
  {
    id: "marvin",
    name: "Marvin",
    bio: "Mechanical engineering and consulting background from the Maryland/DC area. Loves movies, dancing, and bringing good energy to any group.",
    roles: [
      "BBSA",
      "Sloan Christian Fellowship",
      "Core Mentors",
      "Entrepreneurship & Robotics Communities",
    ],
    // TODO: Replace with Marvin's actual headshot
    image: "/images/leads/marvin-placeholder.jpg",
  },
  {
    id: "shanthini",
    name: "Shanthini",
    bio: "Grew up in Singapore, was a consultant in St. Louis before Sloan. Avid runner, always down for a sweet treat, and never without her digicam.",
    roles: [
      "Co-President, Sloan Women in Management",
      "SVP, MIT $100K Entrepreneurship Competition",
    ],
    // TODO: Replace with Shanthini's actual headshot
    image: "/images/leads/shanthini-placeholder.jpg",
  },
  {
    id: "steph",
    name: "Steph",
    bio: "Reformed investment banker and fintech strategist from Jakarta, Indonesia. Believes the best conversations happen on walk-and-talks. Loves food, word games, movies, and good company.",
    roles: [],
    // TODO: Replace with Steph's actual headshot
    image: "/images/leads/steph-placeholder.jpg",
  },
  {
    id: "tristan",
    name: "Tristan",
    bio: "Former naval officer and San Diego native, most recently based in Washington, D.C. Enjoys hiking and trekking globally, board games, and Nintendo Switch during Boston winters.",
    roles: [
      "Co-President, Pride",
      "Career Peer",
      "VP, MCC",
    ],
    // TODO: Replace with Tristan's actual headshot
    image: "/images/leads/tristan-placeholder.jpg",
  },
];
