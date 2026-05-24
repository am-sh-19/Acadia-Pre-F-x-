"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQ } from "@/data/faqs";
import { cn } from "@/lib/utils";

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openId === faq.id;

        return (
          <motion.div
            key={faq.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className={cn(
              "rounded-2xl border-2 transition-colors duration-200",
              isOpen
                ? "border-sunrise-400 bg-cream-50"
                : "border-forest-200 bg-cream-50 hover:border-forest-300"
            )}
          >
            <button
              onClick={() => setOpenId(isOpen ? null : faq.id)}
              className="w-full flex items-center justify-between gap-4 p-5 text-left"
              aria-expanded={isOpen}
            >
              <span
                className={cn(
                  "font-bold text-base leading-snug",
                  isOpen ? "text-sunrise-600" : "text-forest-900"
                )}
              >
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className="shrink-0"
              >
                <ChevronDown
                  className={cn(
                    "w-5 h-5 transition-colors",
                    isOpen ? "text-sunrise-500" : "text-forest-600"
                  )}
                />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm text-forest-800 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
