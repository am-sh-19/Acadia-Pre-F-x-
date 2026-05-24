"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
  alt?: string;
}

export default function ImageGallery({ images, alt = "Property" }: ImageGalleryProps) {
  const [hero, ...rest] = images;

  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-2 h-72 sm:h-96 rounded-2xl overflow-hidden">
      {/* Hero image — takes left 2 columns, full height */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
        className="col-span-2 row-span-2 relative bg-gradient-to-br from-granite-200 to-granite-300 cursor-pointer group overflow-hidden"
      >
        {/* ── TODO: Replace gradient with actual property hero image ────────
            <Image src={hero} alt={`${alt} exterior`} fill className="object-cover" />
        ─────────────────────────────────────────────────────────────────── */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Camera className="w-10 h-10 text-granite-400" />
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
        <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-lg">
          Main photo
        </div>
      </motion.div>

      {/* Gallery thumbnails — 4 cells on the right */}
      {rest.slice(0, 4).map((img, i) => (
        <motion.div
          key={img}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="relative bg-gradient-to-br from-granite-100 to-granite-200 cursor-pointer group overflow-hidden"
        >
          {/* ── TODO: Replace with actual gallery image ────────────────────
              <Image src={img} alt={`${alt} ${i + 2}`} fill className="object-cover" />
          ─────────────────────────────────────────────────────────────────── */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Camera className="w-6 h-6 text-granite-300" />
          </div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          {i === 3 && rest.length > 4 && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white font-semibold text-sm">+{rest.length - 4} more</span>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
