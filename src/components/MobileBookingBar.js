"use client";

import { whatsappLink } from "@/data/site";

export default function MobileBookingBar({ price, message }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-3 border-t border-ink/10 bg-white/95 p-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] shadow-[0_-8px_24px_rgba(0,0,0,0.1)] backdrop-blur-md lg:hidden">
      <div className="min-w-0 flex-1">
        <div className="text-[10px] font-semibold uppercase tracking-wide text-blue">
          {price ? "From" : "Price"}
        </div>
        <div className="mt-0.5 flex items-baseline gap-1.5">
          <span className="font-serif text-xl font-semibold text-ink">
            {price ? `₹${price.toLocaleString("en-IN")}` : "On Request"}
          </span>
          {price && <span className="text-xs text-ink">+5% GST</span>}
        </div>
        {price && <div className="text-xs text-ink">per person</div>}
      </div>

      <a
        href={whatsappLink(message)}
        target="_blank"
        rel="noreferrer"
        className="flex shrink-0 items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-transform active:scale-95"
      >
        Book Now
      </a>
    </div>
  );
}
