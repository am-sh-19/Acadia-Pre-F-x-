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
        // Acadia National Park inspired palette
        // ─────────────────────────────────────────────
        // Organizers: You can adjust these brand colors here
        forest: {
          50:  "#f0f7f0",
          100: "#d9edd9",
          200: "#b0d9b0",
          300: "#7bbf7b",
          400: "#4da04d",
          500: "#2d7d2d",
          600: "#1e6020",
          700: "#184d1a",
          800: "#123d14",
          900: "#0c2e0e",
          950: "#061706",
        },
        ocean: {
          50:  "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#2563eb",
          600: "#1d4ed8",
          700: "#1e3a8a",
          800: "#1e3370",
          900: "#172554",
          950: "#0f172a",
        },
        granite: {
          50:  "#f8f9fa",
          100: "#e9ecef",
          200: "#dee2e6",
          300: "#ced4da",
          400: "#adb5bd",
          500: "#6c757d",
          600: "#495057",
          700: "#343a40",
          800: "#212529",
          900: "#0d0f10",
        },
        cream: {
          50:  "#fefdf8",
          100: "#fdf8ed",
          200: "#faf0d4",
          300: "#f5e4b0",
          400: "#edd388",
          500: "#e3bc5e",
          600: "#c99e3a",
        },
        sunrise: {
          50:  "#fff8f1",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.85) 100%)",
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
        card: "0 4px 24px rgba(0,0,0,0.08)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.14)",
        glass: "0 4px 30px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
