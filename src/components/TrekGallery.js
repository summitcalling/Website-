"use client";

import { useState } from "react";
import Image from "next/image";

export default function TrekGallery({ gallery, name }) {
  const [index, setIndex] = useState(0);

  function prev() {
    setIndex((i) => (i - 1 + gallery.length) % gallery.length);
  }

  function next() {
    setIndex((i) => (i + 1) % gallery.length);
  }

  return (
    <>
      <div className="relative -mx-5 h-[65vh] overflow-hidden sm:hidden">
        <Image
          src={gallery[index]}
          alt={`${name} photo ${index + 1}`}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {gallery.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/40 text-ink shadow-sm backdrop-blur"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/40 text-ink shadow-sm backdrop-blur"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <span className="absolute bottom-3 right-3 rounded-full bg-ink/60 px-2.5 py-1 text-xs font-medium text-white">
              {index + 1} / {gallery.length}
            </span>
          </>
        )}
      </div>

      <div className="hidden gap-3 sm:grid sm:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src={gallery[0]}
            alt={name}
            fill
            priority
            className="object-cover"
            sizes="50vw"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          {gallery.slice(1, 5).map((src, i) => (
            <div key={src} className="relative aspect-[6/5] overflow-hidden rounded-2xl">
              <Image
                src={src}
                alt={`${name} photo ${i + 2}`}
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
