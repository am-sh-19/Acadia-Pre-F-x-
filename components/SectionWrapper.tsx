"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function SectionWrapper({
  id,
  className,
  children,
  dark = false,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeInUp}
      className={cn(
        "py-20 px-4 sm:px-6 lg:px-8",
        dark ? "bg-forest-900 text-cream-50" : "bg-cream-50 text-forest-900",
        className
      )}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </motion.section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", centered && "text-center")}>
      {eyebrow && (
        <p
          className={cn(
            "text-sm font-bold uppercase tracking-widest mb-3",
            light ? "text-sunrise-300" : "text-forest-700"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95]",
          light ? "text-sunrise-300" : "text-sunrise-400"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed max-w-2xl font-medium",
            centered && "mx-auto",
            light ? "text-cream-200" : "text-forest-700"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
