"use client";

import { useState } from "react";
import { testimonials } from "@/data/testimonials";
import { CONTAINER } from "@/lib/layout";

function initials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

function Stars({ count }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < count ? "#0EA5E9" : "none"}
          stroke={i < count ? "#0EA5E9" : "currentColor"}
          strokeWidth="1.5"
          className={i >= count ? "text-white/20" : ""}
        >
          <path d="M12 3l2.6 5.6 6 .7-4.4 4.2 1.1 6-5.3-3-5.3 3 1.1-6-4.4-4.2 6-.7z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="bg-cream border-y border-ink/5">
      <div className={`${CONTAINER} py-20`}>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue">
            <span className="h-px w-6 bg-blue" />
            Trekker Stories
            <span className="h-px w-6 bg-blue" />
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-semibold text-ink">
            What Our Trekkers Say
          </h2>
        </div>

        <div className="relative mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl bg-ink px-8 py-12 text-center shadow-xl sm:px-16 sm:py-16">
          <svg
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full text-white/[0.04]"
            viewBox="0 0 1200 200"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <path d="M0 200 L150 60 L280 140 L420 20 L560 130 L700 50 L860 150 L1000 40 L1200 120 L1200 200 Z" />
          </svg>

          <svg
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="relative mx-auto text-blue/30"
          >
            <path d="M9.5 7C6.5 8.2 5 10.4 5 13.2c0 2.1 1.4 3.6 3.2 3.6 1.7 0 2.9-1.2 2.9-2.8 0-1.5-1-2.5-2.4-2.6.3-1.4 1.4-2.6 3-3.3L9.5 7zm9 0c-3 1.2-4.5 3.4-4.5 6.2 0 2.1 1.4 3.6 3.2 3.6 1.7 0 2.9-1.2 2.9-2.8 0-1.5-1-2.5-2.4-2.6.3-1.4 1.4-2.6 3-3.3L18.5 7z" />
          </svg>

          <p className="relative mt-4 font-serif text-xl leading-snug text-white sm:text-2xl">
            {t.quote}
          </p>

          <div className="relative mt-6 flex justify-center">
            <Stars count={t.rating} />
          </div>

          <div className="relative mt-6 flex flex-col items-center gap-1">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue to-sky text-base font-semibold text-white">
              {initials(t.name)}
            </span>
            <div className="mt-2 text-base font-semibold text-white">{t.name}</div>
            <div className="text-sm text-white/50">
              {t.country} · {t.trek}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          {testimonials.map((item, i) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show testimonial from ${item.name}`}
              className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold transition-all ${
                i === active
                  ? "bg-blue text-white scale-110"
                  : "bg-ink/5 text-ink/50 hover:bg-ink/10"
              }`}
            >
              {initials(item.name)}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
