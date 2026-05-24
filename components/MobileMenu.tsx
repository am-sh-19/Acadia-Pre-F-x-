"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { navLinks } from "./Navbar";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-forest-950/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-72 bg-cream-50 z-50 shadow-2xl flex flex-col border-l-2 border-forest-200"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b-2 border-forest-200">
              <span className="font-display text-sunrise-500 text-xl">Trip Guide</span>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-cream-100 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-forest-700" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={onClose}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-forest-800 hover:bg-cream-100 hover:text-sunrise-600 transition-colors font-semibold"
                >
                  <span className="text-sm">{link.label}</span>
                </motion.a>
              ))}
            </nav>

            {/* Footer badge */}
            <div className="px-6 py-5 border-t-2 border-forest-200">
              <div className="bg-cream-100 rounded-xl px-4 py-3 text-center border border-forest-200">
                <p className="text-xs text-forest-800 font-bold">
                  Sloan Pre-fx · Acadia 2026
                </p>
                <p className="text-xs text-forest-600 mt-0.5">Sept 4–7, 2026</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
