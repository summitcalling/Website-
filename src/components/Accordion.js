"use client";

import { useState } from "react";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="divide-y divide-ink/10 rounded-2xl bg-white ring-1 ring-black/5 shadow-sm">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.title}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
            >
              <span className="text-[17px] leading-relaxed text-ink">{item.title}</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`shrink-0 text-ink transition-transform ${open ? "rotate-180" : ""}`}
              >
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {open && (
              <div className="px-5 pb-5 sm:px-6">
                {Array.isArray(item.content) ? (
                  <ul className="space-y-1.5 text-[17px] leading-relaxed text-ink">
                    {item.content.map((point, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue" />
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="space-y-3">
                    {item.content.split("\n\n").map((paragraph, j) => (
                      <p key={j} className="whitespace-pre-line text-[17px] leading-relaxed text-ink">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
