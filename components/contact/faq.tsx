import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How soon will I receive a response?",
    answer: "Most inquiries receive a response within 24–48 hours.",
  },
  {
    question: "Do you work with startups?",
    answer: "Yes. We work with startups, businesses, and organizations of all sizes.",
  },
  {
    question: "Can you handle both software and hardware projects?",
    answer: "Yes. Queryholic specializes in software, embedded systems, AI, IoT, and engineering solutions.",
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes. We provide maintenance, optimization, and long-term technical support.",
  },
];

export default function FAQ() {
  return (
    <section className="w-full py-24 md:py-32 bg-background border-t border-border/50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-xs md:text-sm font-semibold tracking-[0.3em] text-indigo-500 uppercase mb-4">
            Got Questions?
          </p>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground leading-[1.1]">
            Frequently Asked <span className="text-neutral-500 dark:text-neutral-400">Questions</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50 py-4">
              <AccordionTrigger className="text-left text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg pt-4 pb-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
