"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const MONTH_NAMES = {
  Jan: "January",
  Feb: "February",
  Mar: "March",
  Apr: "April",
  May: "May",
  Jun: "June",
  Jul: "July",
  Aug: "August",
  Sep: "September",
  Sept: "September",
  Oct: "October",
  Nov: "November",
  Dec: "December",
};

function parseMonth(dateStr) {
  const [, mon, year] = dateStr.split(" ");
  const full = MONTH_NAMES[mon] || mon;
  return { key: `${full} ${year}`, label: `${full} ${year}` };
}

function MonthPanel({ open, monthDates }) {
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
      className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "opacity-100" : "opacity-0"}`}
    >
      <div ref={innerRef} className="px-5 pb-5">
        <div className="overflow-hidden rounded-xl ring-1 ring-black/5">
          <div className="grid grid-cols-2 bg-ink/[0.03]">
            <div className="px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-ink">
              Departure
            </div>
            <div className="px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-ink">
              Return
            </div>
          </div>
          <div className="divide-y divide-ink/10">
            {monthDates.map((dep) => (
              <div key={dep.departure} className="grid grid-cols-2">
                <div className="px-4 py-3 text-sm font-semibold text-ink">{dep.departure}</div>
                <div className="px-4 py-3 text-sm font-semibold text-ink">{dep.return}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FixedDepartures({ dates }) {
  const months = useMemo(() => {
    const seen = new Set();
    const list = [];
    dates.forEach((d) => {
      const { key, label } = parseMonth(d.departure);
      if (!seen.has(key)) {
        seen.add(key);
        list.push({ key, label });
      }
    });
    return list;
  }, [dates]);

  const [openMonth, setOpenMonth] = useState(months[0]?.key ?? null);

  return (
    <div className="space-y-3">
      {months.map((m) => {
        const open = openMonth === m.key;
        const monthDates = dates.filter((d) => parseMonth(d.departure).key === m.key);

        return (
          <div key={m.key} className="overflow-hidden rounded-xl ring-1 ring-black/5 shadow-sm">
            <button
              type="button"
              onClick={() => setOpenMonth(open ? null : m.key)}
              className="flex w-full items-center gap-3 px-5 py-4 text-left"
            >
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors ${
                  open ? "bg-blue text-white" : "bg-blue/10 text-blue"
                }`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14" strokeLinecap="round" />
                  {!open && <path d="M12 5v14" strokeLinecap="round" />}
                </svg>
              </span>
              <span className="font-serif text-base font-semibold text-ink">{m.label}</span>
            </button>

            <MonthPanel open={open} monthDates={monthDates} />
          </div>
        );
      })}
    </div>
  );
}
