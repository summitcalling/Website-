"use client";

import { useEffect, useState } from "react";
import { site, whatsappLink } from "@/data/site";

export default function BookingCard({ trek, fixedDepartures, packages }) {
  const [top, setTop] = useState(0);
  const [dateIndex, setDateIndex] = useState(0);
  const [pkgIndex, setPkgIndex] = useState(0);
  const [nationality, setNationality] = useState("indian");

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
  const isForeign = nationality === "foreign" && pkgs.length > 0;
  const price = selectedPkg
    ? (isForeign ? selectedPkg.priceUSD : selectedPkg.priceINR)
    : trek.price;

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
        <div className="flex items-center justify-between gap-3">
          <div className="text-lg font-semibold text-ink">Book This Trek</div>
          {pkgs.length > 0 && (
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
            {price
              ? isForeign
                ? `USD ${price.toLocaleString("en-US")}`
                : `₹${price.toLocaleString("en-IN")}`
              : "Price on Request"}
          </span>
        </div>
        {(!price || !isForeign) && (
          <div className="mt-1 text-sm text-ink">
            {price ? "+5% GST" : "Contact us for a custom quote"}
          </div>
        )}
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
                  {isForeign
                    ? `USD ${pkg.priceUSD.toLocaleString("en-US")}`
                    : `₹${pkg.priceINR.toLocaleString("en-IN")}`}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

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
            href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-ink/15 py-3.5 text-sm font-semibold text-ink hover:border-blue/40 hover:text-blue transition-colors"
          >
            Call Us
          </a>
        </div>
      </div>
    </div>
  );
}
