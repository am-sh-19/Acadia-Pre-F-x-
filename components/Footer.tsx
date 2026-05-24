"use client";

import { Compass, MapPin, Calendar } from "lucide-react";
import { trip } from "@/data/trip";
import { navLinks } from "./Navbar";

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-cream-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="sm:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <Compass className="w-5 h-5 text-sunrise-300" />
              <span className="font-display text-2xl text-sunrise-300">Acadia &rsquo;26</span>
            </div>
            <p className="text-cream-200 text-sm leading-relaxed mb-4">
              {trip.audience} &mdash; Labor Day weekend in one of America&rsquo;s most beautiful national parks.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-cream-200 text-xs">
                <Calendar className="w-3.5 h-3.5 text-sunrise-300" />
                {trip.dateRange}
              </div>
              <div className="flex items-center gap-2 text-cream-200 text-xs">
                <MapPin className="w-3.5 h-3.5 text-sunrise-300" />
                {trip.location}
              </div>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-sunrise-300 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-cream-200 hover:text-sunrise-300 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay connected */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-sunrise-300 mb-4">
              Stay Connected
            </h4>
            <div className="space-y-3">
              {/* TODO: Add actual group chat link (WhatsApp, GroupMe, etc.) */}
              <div className="bg-forest-800 border border-forest-700 rounded-xl p-4 text-sm text-cream-200">
                <p className="font-semibold text-cream-100 mb-1">Group Chat</p>
                <p className="text-xs">Link will be shared with registered attendees.</p>
              </div>
              {/* TODO: Add actual communication channel link */}
              <div className="bg-forest-800 border border-forest-700 rounded-xl p-4 text-sm text-cream-200">
                <p className="font-semibold text-cream-100 mb-1">Questions?</p>
                <p className="text-xs">Reach out to any of the trip leads directly.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-forest-700 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cream-300 text-xs">
            &copy; {new Date().getFullYear()} Acadia Labor Day Weekend Trip &mdash; {trip.audience}
          </p>
          <p className="text-cream-300 text-xs text-center">
            Itinerary subject to change. Details updated as the trip approaches.
          </p>
        </div>
      </div>
    </footer>
  );
}
