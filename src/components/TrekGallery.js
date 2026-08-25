"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function TrekGallery({ gallery, name }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (gallery.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % gallery.length);
    }, 4500);
    return () => clearInterval(id);
  }, [gallery.length]);

  function prev() {
    setIndex((i) => (i - 1 + gallery.length) % gallery.length);
  }

  function next() {
    setIndex((i) => (i + 1) % gallery.length);
  }

  return (
    <div className="relative -mx-5 h-[65vh] overflow-hidden bg-ink sm:mx-0 sm:h-[75vh] sm:rounded-2xl">
      {gallery.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`${name} photo ${i + 1}`}
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}

      {gallery.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/40 text-ink shadow-sm backdrop-blur sm:left-5 sm:h-11 sm:w-11"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/40 text-ink shadow-sm backdrop-blur sm:right-5 sm:h-11 sm:w-11"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <span className="absolute bottom-3 right-3 rounded-full bg-ink/60 px-2.5 py-1 text-xs font-medium text-white sm:bottom-5 sm:right-5 sm:text-sm">
            {index + 1} / {gallery.length}
          </span>
        </>
      )}
    </div>
  );
}
