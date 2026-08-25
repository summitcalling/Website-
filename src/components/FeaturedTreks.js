"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { treks } from "@/data/treks";

function TrekCard({ trek, i, className, sizes }) {
  return (
    <Link
      href={`/treks/${trek.slug}`}
      className={`group relative overflow-hidden rounded-3xl ${className}`}
    >
      <Image
        src={trek.image}
        alt={trek.name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes={sizes}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
      <span className="absolute right-5 top-5 font-serif text-sm font-semibold text-white">
        {String(i + 1).padStart(2, "0")}
      </span>
      <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-ink backdrop-blur">
        {trek.duration} Days · {trek.difficulty}
      </span>
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="truncate font-serif text-lg font-semibold text-white sm:text-xl">
          {trek.name}
        </h3>
        <div className="mt-2 flex flex-col">
          <span className="text-xs font-medium uppercase tracking-wide text-white/70">
            {trek.price ? "Starting from" : "Price"}
          </span>
          <span className="font-serif text-base font-semibold text-white">
            {trek.price ? `₹${trek.price.toLocaleString("en-IN")}` : "On Request"}
          </span>
        </div>
      </div>
    </Link>
  );
}

const FEATURED_ORDER = [
  "everest-base-camp-trek",
  "everest-base-camp-via-gokyo-ri",
  "annapurna-base-camp-trek",
  "annapurna-circuit-tilicho-lake",
  "manaslu-circuit-trek",
  "mardi-himal-trek",
  "langtang-valley-trek",
];

export default function FeaturedTreks() {
  const orderedTreks = FEATURED_ORDER.map((slug) => treks.find((t) => t.slug === slug)).filter(Boolean);
  const featured = orderedTreks.slice(0, 7);
  const mobileFeatured = orderedTreks.slice(0, 4);
  const scrollRef = useRef(null);

  function scroll(direction) {
    scrollRef.current?.scrollBy({ left: direction * 400, behavior: "smooth" });
  }

  return (
    <section className="overflow-hidden bg-cream">
      <div className="py-24 pl-5 pr-5 sm:pl-8 sm:pr-0 sm:py-28 lg:pl-24">
        <span className="text-xs font-semibold uppercase tracking-widest text-blue">
          Featured Treks
        </span>
        <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-ink">
          Popular Himalayan Adventures
        </h2>

        <div className="mt-10 flex flex-col gap-5 sm:hidden">
          {mobileFeatured.map((trek, i) => (
            <TrekCard key={trek.slug} trek={trek} i={i} className="aspect-[3/4] w-full" sizes="100vw" />
          ))}
        </div>

        <div
          ref={scrollRef}
          className="mt-10 hidden snap-x gap-5 overflow-x-auto scroll-smooth pb-2 pr-5 sm:flex sm:pr-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {featured.map((trek, i) => (
            <TrekCard
              key={trek.slug}
              trek={trek}
              i={i}
              className="aspect-[3/4] w-[320px] shrink-0 snap-start sm:w-[380px]"
              sizes="380px"
            />
          ))}
        </div>

        <div className="mt-6">
          <div className="hidden items-center justify-between sm:flex sm:pr-8">
            <div className="flex items-center gap-3">
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

            <Link
              href="/treks"
              className="inline-flex items-center gap-2 border border-blue bg-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-dark"
            >
              View All Treks
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <Link
            href="/treks"
            className="mx-auto flex w-fit items-center justify-center gap-2 border border-blue bg-blue px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-dark sm:hidden"
          >
            View All Treks
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
