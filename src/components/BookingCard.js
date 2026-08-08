"use client";

import { useEffect, useState } from "react";
import { site, whatsappLink } from "@/data/site";

export default function BookingCard({ trek, fixedDepartures, packages }) {
  const [top, setTop] = useState(0);
  const [dateIndex, setDateIndex] = useState(0);
  const [pkgIndex, setPkgIndex] = useState(0);

  useEffect(() => {
    const header = document.querySelector("header");
    const subnav = document.querySelector("nav.sticky");
    if (!header) return;

    const sync = () => {
      const headerH = header.getBoundingClientRect().height;
      const subnavH = subnav ? subnav.getBoundingClientRect().height : 0;
      setTop(headerH + subnavH + 16);
    };
    sync();

    const observer = new ResizeObserver(sync);
    observer.observe(header);
    if (subnav) observer.observe(subnav);
    return () => observer.disconnect();
  }, []);

  const dates = fixedDepartures ?? [];
  const pkgs = packages ?? [];
  const selectedPkg = pkgs[pkgIndex];
  const selectedDate = dates[dateIndex];
  const price = selectedPkg ? selectedPkg.priceINR : trek.price;

  const message = [
    `Hi, I'd like to book the ${trek.name}`,
    selectedPkg ? `— ${selectedPkg.name} package` : "",
    selectedDate ? `for ${selectedDate.departure} – ${selectedDate.return}` : "",
  ]
    .filter(Boolean)
    .join(" ") + ".";

  return (
    <div
      style={{ top }}
      className="sticky overflow-hidden rounded-2xl border border-ink/15 bg-white shadow-xl shadow-ink/10"
    >
      <div className="p-6">
        <div className="text-lg font-semibold text-ink">Book This Trek</div>
        <div className="mt-2 flex items-baseline gap-1">
          <span className="font-serif text-3xl font-semibold text-ink">
            ₹{price.toLocaleString("en-IN")}
          </span>
        </div>
        <div className="mt-1 text-sm text-ink">
          {selectedPkg?.note ?? "+ tax as applicable"}
        </div>
      </div>

      <div className="border-t border-ink/10" />

      {dates.length > 0 && (
        <div className="px-6 pt-5">
          <label className="text-sm font-semibold text-ink">Select Date</label>
          <div className="relative mt-2">
            <select
              value={dateIndex}
              onChange={(e) => setDateIndex(Number(e.target.value))}
              className="w-full appearance-none rounded-xl border border-ink/20 bg-white px-4 py-3 pr-9 text-sm font-medium text-ink outline-none transition-colors hover:border-ink/40 focus:border-blue/50"
            >
              {dates.map((dep, i) => (
                <option key={dep.departure} value={i}>
                  {dep.departure} – {dep.return}
                </option>
              ))}
            </select>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink"
            >
              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      )}

      {pkgs.length > 0 && (
        <div className="px-6 pt-5">
          <div className="text-sm font-semibold text-ink">Tour Option</div>
          <div className="mt-2 space-y-2">
            {pkgs.map((pkg, i) => (
              <button
                key={pkg.name}
                type="button"
                onClick={() => setPkgIndex(i)}
                className={`flex w-full items-center justify-between rounded-xl border-2 px-4 py-3 text-left text-sm transition-colors ${
                  i === pkgIndex
                    ? "border-blue bg-blue/5"
                    : "border-ink/15 hover:border-ink/30"
                }`}
              >
                <span className="font-medium text-ink">{pkg.name}</span>
                <span className="font-semibold text-ink">
                  ₹{pkg.priceINR.toLocaleString("en-IN")}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="p-6">
        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink py-3.5 text-sm font-semibold text-white hover:bg-ink-light transition-colors"
        >
          Book Now
        </a>

        <div className="mt-3 flex gap-3">
          <a
            href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-ink/15 py-3 text-sm font-semibold text-ink hover:border-blue/40 hover:text-blue transition-colors"
          >
            Call Us
          </a>
          <a
            href={whatsappLink(message)}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-whatsapp text-white hover:brightness-95 transition-all"
          >
            <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.006-3.492c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.593-6.593 6.593zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.588-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.337-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
