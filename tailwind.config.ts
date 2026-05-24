import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ─────────────────────────────────────────────────────────────────
        // Retro summer-camp palette: cream paper, coral pink, sage forest
        // Token names kept stable across components; values re-themed.
        // ─────────────────────────────────────────────────────────────────

        // Sage / forest green — body text, dark sections, line art
        forest: {
          50:  "#eef2e8",
          100: "#dde4d1",
          200: "#bcc9a4",
          300: "#9bae78",
          400: "#7a934c",
          500: "#5e7838",
          600: "#4a5e2c",
          700: "#3a4a23",
          800: "#2b371a",
          900: "#1f2814",
          950: "#131a0c",
        },

        // Coral / dusty pink — headings, CTAs, decorative accents
        sunrise: {
          50:  "#fef1ec",
          100: "#fde0d6",
          200: "#facab9",
          300: "#f6b1a0",
          400: "#f29b8a",
          500: "#e8806e",
          600: "#d0644f",
          700: "#a84a38",
          800: "#7a3528",
        },

        // Cream / butter — page background, surfaces
        cream: {
          50:  "#fffbe9",
          100: "#fbf3d4",
          200: "#f7ebbe",
          300: "#f0dd99",
          400: "#e6c870",
          500: "#d6ad48",
          600: "#a8842f",
        },

        // Warm beige neutrals — muted text, borders, dividers
        granite: {
          50:  "#f6efd9",
          100: "#ecdfb6",
          200: "#d8c386",
          300: "#b69a5d",
          400: "#8a7341",
          500: "#665430",
          600: "#4a3d22",
          700: "#352c18",
          800: "#241d10",
          900: "#15110a",
        },

        // Muted teal-sage — secondary accent (used sparingly)
        ocean: {
          50:  "#ecf1ee",
          100: "#d2ded6",
          200: "#a8c0b1",
          300: "#7ea08b",
          400: "#5a826b",
          500: "#446753",
          600: "#345240",
          700: "#274032",
          800: "#1d3025",
          900: "#13201a",
          950: "#0a120f",
        },
      },
      fontFamily: {
        // Body — friendly geometric sans, looks great in regular and uppercase
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        // Display — chunky retro for big headlines
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "bounce-slow": "bounce 3s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        card: "0 4px 24px rgba(74, 94, 44, 0.10)",
        "card-hover": "0 8px 40px rgba(74, 94, 44, 0.16)",
        glass: "0 4px 30px rgba(74, 94, 44, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
