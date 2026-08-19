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
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-wide text-blue">
            {metaLines.map((line, j) => (
              <span key={line} className="flex items-center gap-3">
                {j > 0 && <span className="h-1 w-1 rounded-full bg-blue/40" />}
                {line}
              </span>
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
    <div className="divide-y divide-ink/10">
      {days.map((day, i) => {
        const open = openIndex === i;
        const metaLines = [
          day.distance && `Distance: ${day.distance}`,
          day.duration && `Duration: ${day.duration}`,
          day.accommodation && `Accommodation: ${day.accommodation}`,
        ].filter(Boolean);

        return (
          <div key={day.day} className="py-5 first:pt-0 last:pb-0">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              className="group flex w-full items-center gap-4 text-left"
            >
              <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-blue/10 px-3 py-1.5 transition-colors group-hover:bg-blue/15">
                <span className="text-[10px] font-semibold uppercase tracking-wide text-blue/70">Day</span>
                <span className="font-serif text-sm font-semibold leading-none text-blue">
                  {String(day.day).padStart(2, "0")}
                </span>
              </span>
              <span className="flex-1 text-[17px] leading-snug text-ink transition-colors group-hover:text-blue">
                {day.title}
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`shrink-0 text-ink/40 transition-transform group-hover:text-blue ${open ? "rotate-180" : ""}`}
              >
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <ItineraryPanel open={open} metaLines={metaLines} description={day.description} />
          </div>
        );
      })}
    </div>
  );
}
