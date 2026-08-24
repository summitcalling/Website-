"use client";

import { useRef } from "react";
import Image from "next/image";

const features = [
  {
    title: "Local Trekking Experts",
    description:
      "Every guide is born and raised in the region you're trekking — real knowledge, not a script.",
    image: "/treks/annapurna-2.jpg",
  },
  {
    title: "Fixed Small-Group Departures",
    description:
      "Guaranteed dates, capped group sizes, no waiting for a minimum headcount to form.",
    image: "https://images.unsplash.com/photo-1550486686-a496af34a2d5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Safety-First Itineraries",
    description:
      "Acclimatization days built into every route, with trained guides carrying oximeters and first-aid kits.",
    image: "https://images.unsplash.com/photo-1564144573017-8dc932e0039e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "24/7 WhatsApp Support",
    description:
      "Real humans on the other end, before, during, and after your trek — not a chatbot.",
    image: "https://images.unsplash.com/photo-1626188638214-ce190e394833?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Responsible Tourism",
    description:
      "We work closely with local communities and support local businesses along every route we run.",
    image: "/treks/langtang-2.jpg",
  },
];

export default function WhyChooseUs() {
  const scrollRef = useRef(null);

  function scroll(direction) {
    scrollRef.current?.scrollBy({ left: direction * 400, behavior: "smooth" });
  }

  return (
    <section className="mt-2 overflow-hidden bg-white sm:mt-4">
      <div className="py-24 pl-5 sm:pl-8 sm:py-28 lg:pl-24">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue">
          Why Choose Us
        </span>
        <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-ink">
          Your Trusted Trekking Partner
        </h2>

        <div
          ref={scrollRef}
          className="mt-10 flex snap-x gap-5 overflow-x-auto scroll-smooth pb-2 pr-5 sm:pr-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="relative aspect-[3/4] w-[320px] shrink-0 snap-start overflow-hidden rounded-3xl sm:w-[380px]"
            >
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover"
                sizes="320px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
              <span className="absolute right-5 top-5 font-serif text-sm font-semibold text-white">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-serif text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Scroll left"
            className="flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-ink/15 text-ink transition-colors hover:bg-ink/5"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Scroll right"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-blue text-white transition-colors hover:bg-blue-dark"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
