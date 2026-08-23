"use client";

import { testimonials } from "@/data/testimonials";
import { CONTAINER } from "@/lib/layout";

function QuoteIcon() {
  return (
    <svg width="36" height="27" viewBox="0 0 32 24" fill="none" className="text-[#F77F3C]">
      <path
        d="M0 24V14.4C0 6.4 4.8 1.2 12.8 0L14 3.2C9.6 4.8 7.2 7.6 7.2 11.2H12.8V24H0ZM17.2 24V14.4C17.2 6.4 22 1.2 30 0L31.2 3.2C26.8 4.8 24.4 7.6 24.4 11.2H30V24H17.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function TestimonialCard({ t }) {
  return (
    <div className="flex h-[420px] w-[320px] shrink-0 flex-col rounded-2xl bg-[#F5F5F5] p-8 sm:h-[460px] sm:w-[380px] sm:p-10">
      <QuoteIcon />
      <p className="mt-6 text-[15px] leading-relaxed text-[#5A5A5A] sm:text-base">
        {t.quote}
      </p>
      <div className="mt-auto pt-8">
        <div className="text-lg font-medium text-[#5A5A5A] sm:text-xl">{t.name}</div>
        <div className="mt-1 text-sm text-[#5A5A5A]">
          {t.country} · {t.trek}
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const loop = [...testimonials, ...testimonials];

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className={CONTAINER}>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue">
            Trekker Stories
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-ink">
            What Our Trekkers Say
          </h2>
        </div>
      </div>

      <div className="group relative mt-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-32" />

        <div className="flex w-max items-stretch gap-6 animate-[marquee-left_70s_linear_infinite] group-hover:[animation-play-state:paused]">
          {loop.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
