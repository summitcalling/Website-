"use client";

import { useMemo, useState } from "react";

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

  const [selected, setSelected] = useState(months[0]?.key);

  const filtered = dates.filter((d) => parseMonth(d.departure).key === selected);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {months.map((m) => (
          <button
            key={m.key}
            type="button"
            onClick={() => setSelected(m.key)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              selected === m.key
                ? "bg-ink text-white"
                : "bg-ink/5 text-ink hover:bg-ink/10"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filtered.map((dep) => (
          <div key={dep.departure} className="overflow-hidden rounded-xl ring-1 ring-black/5 shadow-sm">
            <div className="grid grid-cols-2 bg-ink/[0.03]">
              <div className="px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-ink">
                Departure
              </div>
              <div className="px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-ink">
                Return
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-3 text-sm font-semibold text-ink">{dep.departure}</div>
              <div className="px-4 py-3 text-sm font-semibold text-ink">{dep.return}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
