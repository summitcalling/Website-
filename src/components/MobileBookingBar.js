"use client";

import { whatsappLink } from "@/data/site";

export default function MobileBookingBar({ price, message, currency = "INR" }) {
  const formattedPrice = price
    ? currency === "USD"
      ? `USD ${price.toLocaleString("en-US")}`
      : `₹ ${price.toLocaleString("en-IN")}`
    : "On Request";

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-4 rounded-t-3xl border-t border-ink/10 bg-gradient-to-r from-slate-50 via-white to-slate-50 px-4 py-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] shadow-xl backdrop-blur-md md:px-6 lg:hidden">
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold text-ink">{formattedPrice}</span>
          {price && currency === "INR" && <span className="text-sm font-semibold text-ink">+5% GST</span>}
        </div>
        {price && <div className="mt-0.5 text-xs font-medium text-ink/60">per person</div>}
      </div>

      <a
        href={whatsappLink(message)}
        target="_blank"
        rel="noreferrer"
        className="shrink-0 rounded-xl bg-ink px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95 md:text-base"
      >
        Book Now
      </a>
    </div>
  );
}
