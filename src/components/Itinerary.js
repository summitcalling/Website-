"use client";

import { useEffect, useRef, useState } from "react";

function ItineraryPanel({ open, metaLines, description }) {
  const innerRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    if (!innerRef.current) return;
    const el = innerRef.current;

    if (open) {
      setMaxHeight(el.scrollHeight);
      const observer = new ResizeObserver(() => setMaxHeight(el.scrollHeight));
      observer.observe(el);
      return () => observer.disconnect();
    }
    setMaxHeight(0);
  }, [open]);

  return (
    <div
      style={{ maxHeight }}
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        open ? "mt-4 opacity-100" : "opacity-0"
      }`}
    >
      <div ref={innerRef}>
        {metaLines.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-x-4 gap-y-1 text-xs font-semibold uppercase tracking-wide text-blue">
            {metaLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
        )}
        <div className="space-y-3">
          {description.split("\n\n").map((paragraph, j) => (
            <p key={j} className="text-[17px] leading-relaxed text-ink">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Itinerary({ days }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div>
      {days.map((day, i) => {
        const open = openIndex === i;
        const isLast = i === days.length - 1;
        const metaLines = [
          day.distance && `Distance: ${day.distance}`,
          day.duration && `Duration: ${day.duration}`,
          day.accommodation && `Accommodation: ${day.accommodation}`,
        ].filter(Boolean);

        return (
          <div key={day.day} className="relative flex gap-5">
            <div className="flex flex-col items-center">
              <span className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl bg-ink text-white">
                <span className="text-[9px] font-semibold uppercase tracking-wide text-white/60">Day</span>
                <span className="font-serif text-base font-semibold leading-none">
                  {String(day.day).padStart(2, "0")}
                </span>
              </span>
              {!isLast && <span className="mt-2 w-px flex-1 bg-ink/10" />}
            </div>

            <div className={`flex-1 ${isLast ? "pb-0" : "pb-8"}`}>
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : i)}
                className="flex w-full items-start justify-between gap-4 pt-2 text-left"
              >
                <span className="text-[17px] leading-snug text-ink">{day.title}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`mt-0.5 shrink-0 text-ink transition-transform ${open ? "rotate-180" : ""}`}
                >
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <ItineraryPanel open={open} metaLines={metaLines} description={day.description} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
