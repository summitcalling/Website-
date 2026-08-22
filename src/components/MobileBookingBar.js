"use client";

import { whatsappLink } from "@/data/site";

export default function MobileBookingBar({ price, message }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 rounded-t-3xl border border-b-0 border-ink/10 bg-white shadow-[0_-16px_40px_rgba(16,24,40,0.14)] lg:hidden">
      <div className="mx-auto mt-2.5 h-1 w-10 rounded-full bg-ink/10" />

      <div className="flex items-center gap-4 px-5 pb-[calc(env(safe-area-inset-bottom)+1.25rem)] pt-3">
        <div className="min-w-0 flex-1">
          <div className="text-[10px] font-semibold uppercase tracking-widest text-blue">
            {price ? "From" : "Price"}
          </div>
          <div className="mt-1 flex items-center gap-1.5">
            <span className="font-serif text-2xl font-semibold leading-none text-ink">
              {price ? `₹${price.toLocaleString("en-IN")}` : "On Request"}
            </span>
            {price && <span className="text-xs text-ink">+5% GST</span>}
          </div>
          {price && <div className="mt-1 text-xs text-ink">per person</div>}
        </div>

        <span className="h-9 w-px shrink-0 bg-ink/10" />

        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noreferrer"
          className="flex shrink-0 items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-transform active:scale-95"
        >
          Book Now
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  );
}
