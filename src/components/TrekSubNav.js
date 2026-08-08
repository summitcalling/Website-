"use client";

import { useEffect, useState } from "react";
import { CONTAINER } from "@/lib/layout";

export default function TrekSubNav({ items }) {
  const [top, setTop] = useState(0);

  useEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;

    const sync = () => setTop(header.getBoundingClientRect().height);
    sync();

    const observer = new ResizeObserver(sync);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  if (!items.length) return null;

  return (
    <nav
      style={{ top }}
      className="sticky z-30 border-b border-ink/8 bg-white/95 backdrop-blur"
    >
      <div className={`${CONTAINER} flex gap-8 overflow-x-auto`}>
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="whitespace-nowrap border-b-2 border-transparent py-4 text-base font-semibold text-ink transition-colors hover:border-blue/40"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
