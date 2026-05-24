import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const difficultyConfig = {
  easy: {
    label: "Easy",
    bg: "bg-forest-100",
    text: "text-forest-700",
    border: "border-forest-200",
  },
  moderate: {
    label: "Moderate",
    bg: "bg-ocean-100",
    text: "text-ocean-700",
    border: "border-ocean-200",
  },
  challenging: {
    label: "Challenging",
    bg: "bg-sunrise-100",
    text: "text-sunrise-700",
    border: "border-sunrise-200",
  },
  optional: {
    label: "Optional",
    bg: "bg-granite-100",
    text: "text-granite-600",
    border: "border-granite-200",
  },
  group: {
    label: "Group",
    bg: "bg-cream-100",
    text: "text-cream-600",
    border: "border-cream-200",
  },
} as const;

export const intensityConfig = {
  Low: {
    bg: "bg-forest-100",
    text: "text-forest-700",
    dot: "bg-forest-500",
  },
  Moderate: {
    bg: "bg-ocean-100",
    text: "text-ocean-700",
    dot: "bg-ocean-500",
  },
  High: {
    bg: "bg-sunrise-100",
    text: "text-sunrise-700",
    dot: "bg-sunrise-500",
  },
  Group: {
    bg: "bg-cream-100",
    text: "text-amber-700",
    dot: "bg-amber-500",
  },
  Optional: {
    bg: "bg-granite-100",
    text: "text-granite-600",
    dot: "bg-granite-400",
  },
} as const;
