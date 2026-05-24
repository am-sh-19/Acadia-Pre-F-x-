"use client";

import { Compass, MapPin, Calendar } from "lucide-react";
import { trip } from "@/data/trip";
import { navLinks } from "./Navbar";

export default function Footer() {
  return (
    <footer className="bg-granite-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="sm:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <Compass className="w-5 h-5 text-emerald-400" />
              <span className="font-display font-bold text-lg">Acadia &rsquo;26</span>
            </div>
            <p className="text-granite-400 text-sm leading-relaxed mb-4">
              {trip.audience} &mdash; Labor Day weekend in one of America&rsquo;s most beautiful national parks.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-granite-400 text-xs">
                <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                {trip.dateRange}
              </div>
              <div className="flex items-center gap-2 text-granite-400 text-xs">
                <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                {trip.location}
              </div>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-granite-500 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-granite-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay connected placeholder */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-granite-500 mb-4">
              Stay Connected
            </h4>
            <div className="space-y-3">
              {/* TODO: Add actual group chat link (WhatsApp, GroupMe, etc.) */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-granite-400">
                <p className="font-medium text-granite-300 mb-1">Group Chat</p>
                <p className="text-xs">Link will be shared with registered attendees.</p>
              </div>
              {/* TODO: Add actual communication channel link */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-granite-400">
                <p className="font-medium text-granite-300 mb-1">Questions?</p>
                <p className="text-xs">Reach out to any of the trip leads directly.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-granite-500 text-xs">
            &copy; {new Date().getFullYear()} Acadia Labor Day Weekend Trip &mdash; {trip.audience}
          </p>
          <p className="text-granite-600 text-xs text-center">
            Itinerary subject to change. Details updated as the trip approaches.
          </p>
        </div>
      </div>
    </footer>
  );
}
