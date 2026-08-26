"use client";

import { useState } from "react";
import { CONTAINER } from "@/lib/layout";
import { whatsappLink } from "@/data/site";

const faqs = [
  {
    title: "Do I need prior trekking experience?",
    content:
      "No — most of our treks are beginner-friendly with the right preparation. For higher-altitude routes we'll be upfront about the fitness level needed, and our guides adjust pace to the group.",
  },
  {
    title: "How do I know which trek is right for me?",
    content:
      "Just WhatsApp us your fitness level, available days, and what you want to see — we'll recommend a route within minutes.",
  },
  {
    title: "What's included in the price?",
    content:
      "Permits, accommodation, guides, and porters are always included. Meals, flights, and gear vary by trek — every trek page has a full breakdown under Inclusions & Exclusions.",
  },
  {
    title: "Is it safe to trek at high altitude?",
    content:
      "Every itinerary builds in acclimatization days, and our guides carry oximeters and first-aid kits. We monitor every trekker daily and can arrange evacuation if needed.",
  },
  {
    title: "Can I customize a fixed departure into a private trip?",
    content:
      "Yes — dates, group size, and route can all be adjusted for private bookings. Message us on WhatsApp with what you have in mind and we'll put together a custom quote.",
  },
  {
    title: "What's your cancellation policy?",
    content:
      "Full policy details are on each trek's page, but in general we offer flexible rescheduling and partial refunds the further out you cancel. Ask us directly for your specific trek.",
  },
];

function FAQItem({ item, open, onToggle }) {
  return (
    <div className="border-b border-ink/10">
      <button
        type="button"
        onClick={onToggle}
        className="group flex w-full items-center justify-between gap-4 py-6 text-left"
      >
        <span className="text-base text-ink transition-colors group-hover:text-blue sm:text-lg">
          {item.title}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ring-1 transition-colors ${
            open ? "bg-blue text-white ring-blue" : "text-ink ring-ink/15 group-hover:ring-blue/40"
          }`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={`transition-transform duration-300 ${open ? "rotate-45" : ""}`}
          >
            <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      {open && (
        <p className="pb-6 pr-12 text-[15px] leading-relaxed text-ink sm:text-base">
          {item.content}
        </p>
      )}
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-cream border-t border-ink/5">
      <div className={`${CONTAINER} py-20 sm:py-24`}>
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          <div className="lg:w-80 lg:shrink-0">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue">
              FAQs
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-ink">
              Got Questions?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink">
              Can&apos;t find the answer you&apos;re looking for? Our team replies within the hour, every day of the week.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 border border-blue px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-blue hover:text-white"
            >
              Chat with us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className="flex-1">
            {faqs.map((item, i) => (
              <FAQItem
                key={item.title}
                item={item}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
