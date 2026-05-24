"use client";

import { useState, useEffect } from "react";
import { Menu, Compass } from "lucide-react";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";

// Navigation links — edit labels and href anchors here
export const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Itinerary", href: "#itinerary" },
  { label: "Activities", href: "#activities" },
  { label: "The House", href: "#house" },
  { label: "Cost", href: "#cost" },
  { label: "Trip Leads", href: "#leads" },
  { label: "Pack", href: "#packing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-30 transition-all duration-300",
          scrolled
            ? "bg-cream-50/95 backdrop-blur-md shadow-card border-b-2 border-forest-200"
            : "bg-cream-50/40 backdrop-blur-sm"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo / brand */}
            <a
              href="#hero"
              className="flex items-center gap-2 font-display text-xl text-sunrise-500 transition-colors"
            >
              <Compass className="w-5 h-5 text-forest-700" />
              <span>Acadia &rsquo;26</span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 rounded-full text-sm font-semibold text-forest-800 hover:text-sunrise-600 hover:bg-cream-100 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-3">
              <a
                href="#itinerary"
                className="hidden sm:inline-flex items-center px-4 py-2 rounded-full text-sm font-bold transition-all bg-sunrise-400 text-forest-900 hover:bg-sunrise-500 shadow-card hover:-translate-y-0.5"
              >
                View Itinerary
              </a>

              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 rounded-lg text-forest-800 hover:bg-cream-100 transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
