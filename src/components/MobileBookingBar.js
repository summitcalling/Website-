"use client";

import { whatsappLink } from "@/data/site";

export default function MobileBookingBar({ price, message, currency = "INR" }) {
  const formattedPrice = price
    ? currency === "USD"
      ? `USD ${price.toLocaleString("en-US")}`
      : `₹ ${price.toLocaleString("en-IN")}`
    : "On Request";

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 h-36 bg-gradient-to-t from-black/25 to-transparent lg:hidden" />

      <div className="fixed inset-x-0 bottom-0 z-40 px-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] lg:hidden">
        <div className="flex items-center gap-4 rounded-3xl border border-white/50 bg-white/70 px-5 py-4 shadow-[0_8px_32px_rgba(16,24,40,0.18)] backdrop-blur-xl">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-2xl font-semibold leading-none text-ink">
                {formattedPrice}
              </span>
              {price && currency === "INR" && <span className="text-xs text-ink">+5% GST</span>}
            </div>
            {price && <div className="mt-0.5 text-xs text-ink">per person</div>}
          </div>

          <a
            href={whatsappLink(message)}
            target="_blank"
            rel="noreferrer"
            className="flex shrink-0 items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-transform active:scale-95"
          >
            Book Now
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
