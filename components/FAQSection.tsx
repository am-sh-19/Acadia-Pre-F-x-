"use client";

import { faqs } from "@/data/faqs";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";
import FAQAccordion from "./FAQAccordion";

export default function FAQSection() {
  return (
    <SectionWrapper id="faq" className="bg-granite-50">
      <div className="max-w-2xl mx-auto">
        <SectionHeader
          eyebrow="Questions"
          title="FAQs"
          subtitle="Answers to the things people usually ask before a trip like this."
          centered
        />

        <FAQAccordion faqs={faqs} />
      </div>
    </SectionWrapper>
  );
}
