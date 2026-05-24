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
        dark ? "bg-granite-900 text-white" : "bg-white",
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
            "text-sm font-semibold uppercase tracking-widest mb-3",
            light ? "text-cream-300" : "text-forest-600"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight",
          light ? "text-white" : "text-granite-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed max-w-2xl",
            centered && "mx-auto",
            light ? "text-granite-300" : "text-granite-500"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
