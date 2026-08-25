"use client";

import { useState } from "react";
import { telLink, whatsappLink } from "@/data/site";

export default function ExperienceBookingCard({ exp, message }) {
  const [nationality, setNationality] = useState("indian");
  const hasIndianPrice = !!exp.priceINR;
  const isForeign = nationality === "foreign" || !hasIndianPrice;
  const price = isForeign ? exp.priceUSD : exp.priceINR;

  return (
    <div className="lg:sticky lg:top-[170px] overflow-hidden rounded-2xl border border-ink/15 bg-white shadow-xl shadow-ink/10">
      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <div className="text-lg font-semibold text-ink">Book This Tour</div>
          {hasIndianPrice && (
            <div className="flex shrink-0 rounded-full bg-ink/5 p-0.5 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setNationality("indian")}
                className={`rounded-full px-3 py-1.5 transition-colors ${
                  !isForeign ? "bg-white text-ink shadow-sm" : "text-ink/50"
                }`}
              >
                Indian
              </button>
              <button
                type="button"
                onClick={() => setNationality("foreign")}
                className={`rounded-full px-3 py-1.5 transition-colors ${
                  isForeign ? "bg-white text-ink shadow-sm" : "text-ink/50"
                }`}
              >
                Foreign
              </button>
            </div>
          )}
        </div>
        <div className="mt-2 flex items-baseline gap-1">
          <span className="font-serif text-3xl font-semibold text-ink">
            {isForeign
              ? `USD ${price.toLocaleString("en-US")}`
              : `₹${price.toLocaleString("en-IN")}`}
          </span>
        </div>
        {!isForeign && <div className="mt-1 text-sm text-ink">+5% GST</div>}
      </div>

      <div className="border-t border-ink/10" />

      <div className="p-6">
        <div className="flex gap-3">
          <a
            href={whatsappLink(message)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-ink py-3.5 text-sm font-semibold text-white hover:bg-ink-light transition-colors"
          >
            Book Now
          </a>
          <a
            href={telLink()}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-ink/15 py-3.5 text-sm font-semibold text-ink hover:border-blue/40 hover:text-blue transition-colors"
          >
            Call Us
          </a>
        </div>
      </div>
    </div>
  );
}
