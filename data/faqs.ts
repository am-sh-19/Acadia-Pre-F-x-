// ─────────────────────────────────────────────────────────────────────────────
// FAQ DATA — Edit this file to add, remove, or update FAQ items
// ─────────────────────────────────────────────────────────────────────────────

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "itinerary-final",
    question: "Is the itinerary final?",
    answer:
      "Not yet — the schedule shown here is our working plan and may shift based on weather, logistics, group size, and preferences. We'll share a finalized itinerary closer to departure. Expect the spirit of each day to hold, but flexibility is part of the fun.",
  },
  {
    id: "hiking-experience",
    question: "Do I need hiking experience?",
    answer:
      "Nope. Every hiking day has options for different fitness levels and comfort zones. The Jordan Pond Loop is accessible and beautiful for beginners. The Beehive Trail and Cadillac sunrise are there for those who want more. You'll never feel pressured to do anything beyond your comfort level.",
  },
  {
    id: "paying-during-trip",
    question: "Will I need to pay for anything during the trip?",
    answer:
      "The trip runs on a closed-wallet structure — lodging, transportation, gas, groceries, group meals, snacks, park costs, and shared activities are all covered by your upfront payment. You may want personal spending money for souvenirs, extra snacks, or individual purchases in town, but you won't need to pay for core trip experiences.",
  },
  {
    id: "rooming",
    question: "How will rooming work?",
    answer:
      "We'll send an intake form before the trip to gather rooming preferences. Some students may share beds or rooms — this is standard for Pre-fx trips and we'll do our best to match everyone comfortably. Final room assignments will be shared in advance.",
  },
  {
    id: "getting-there",
    question: "How are we getting there?",
    answer:
      "Everyone will carpool up from campus in groups. Cars will be coordinated in advance and departure times will align with when orientation ends on Friday. More logistics (who's driving, car assignments, etc.) will be communicated closer to the trip.",
  },
  {
    id: "weather-changes",
    question: "What happens if weather changes plans?",
    answer:
      "Maine weather in September can be unpredictable. We'll have backup plans for rainy or cold days — cabin activities, board games, indoor alternatives, and flexible scheduling. The cabin itself is a great place to be regardless of weather. We'll keep everyone informed via the group chat.",
  },
];
