// ─────────────────────────────────────────────────────────────────────────────
// PACKING LIST DATA — Edit this file to update packing recommendations
// ─────────────────────────────────────────────────────────────────────────────

export interface PackingItem {
  id: string;
  label: string;
  icon: string;      // Lucide icon name
  essential?: boolean;
}

export interface PackingCategory {
  id: string;
  title: string;
  icon: string;
  color: string;     // Tailwind color class for category accent
  items: PackingItem[];
}

export const packingCategories: PackingCategory[] = [
  {
    id: "hiking-gear",
    title: "Hiking Gear",
    icon: "Mountain",
    color: "forest",
    items: [
      { id: "shoes", label: "Hiking shoes or sturdy sneakers", icon: "Footprints", essential: true },
      { id: "daypack", label: "Daypack / small backpack", icon: "Backpack", essential: true },
      { id: "water-bottle", label: "Reusable water bottle", icon: "Droplets", essential: true },
      { id: "sunscreen", label: "Sunscreen", icon: "Sun", essential: true },
      { id: "bug-spray", label: "Bug spray / insect repellent", icon: "Bug" },
    ],
  },
  {
    id: "clothing",
    title: "Clothing",
    icon: "Shirt",
    color: "ocean",
    items: [
      { id: "activewear", label: "Comfortable activewear", icon: "Shirt", essential: true },
      { id: "layers", label: "Layers (mornings and evenings can be cool)", icon: "Layers", essential: true },
      { id: "rain-jacket", label: "Rain jacket", icon: "CloudRain", essential: true },
      { id: "swimsuit", label: "Swimsuit (pool + hot tub at the house)", icon: "Waves" },
      { id: "casual-clothes", label: "Casual clothes / jeans — totally fine", icon: "Tag" },
    ],
  },
  {
    id: "essentials",
    title: "Essentials",
    icon: "CheckCircle",
    color: "granite",
    items: [
      { id: "toiletries", label: "Toiletries and personal hygiene", icon: "Sparkles", essential: true },
      { id: "medications", label: "Any medications you need", icon: "Pill", essential: true },
      { id: "charger", label: "Phone charger and cables", icon: "BatteryCharging", essential: true },
      { id: "battery", label: "Portable battery / power bank", icon: "Zap" },
      { id: "id", label: "ID / license", icon: "CreditCard", essential: true },
      { id: "cash", label: "Small amount of cash (optional)", icon: "Wallet" },
    ],
  },
  {
    id: "optional",
    title: "Nice to Have",
    icon: "Star",
    color: "sunrise",
    items: [
      { id: "camera", label: "Camera (digicam or DSLR welcome)", icon: "Camera" },
      { id: "games", label: "Travel games / cards / books", icon: "Gamepad2" },
      { id: "snacks", label: "Road trip snacks for the drive", icon: "Cookie" },
      { id: "earbuds", label: "Earbuds / headphones", icon: "Headphones" },
      { id: "eye-mask", label: "Eye mask / earplugs (for early risers nearby)", icon: "EyeOff" },
      { id: "hoodie", label: "Favorite cozy hoodie for firepit nights", icon: "Flame" },
    ],
  },
];
