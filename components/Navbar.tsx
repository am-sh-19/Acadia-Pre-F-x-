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
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-granite-100"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo / brand */}
            <a
              href="#hero"
              className={cn(
                "flex items-center gap-2 font-display font-bold text-lg transition-colors",
                scrolled ? "text-granite-900" : "text-white"
              )}
            >
              <Compass className="w-5 h-5" />
              <span>Acadia &rsquo;26</span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    scrolled
                      ? "text-granite-600 hover:text-granite-900 hover:bg-granite-50"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-3">
              <a
                href="#itinerary"
                className={cn(
                  "hidden sm:inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold transition-all",
                  scrolled
                    ? "bg-forest-600 text-white hover:bg-forest-700"
                    : "bg-white/15 backdrop-blur-sm text-white border border-white/25 hover:bg-white/25"
                )}
              >
                View Itinerary
              </a>

              <button
                onClick={() => setMobileOpen(true)}
                className={cn(
                  "lg:hidden p-2 rounded-lg transition-colors",
                  scrolled
                    ? "text-granite-700 hover:bg-granite-100"
                    : "text-white hover:bg-white/10"
                )}
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
