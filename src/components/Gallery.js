"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { gallery } from "@/data/gallery";
import { CONTAINER } from "@/lib/layout";

export default function Gallery() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % gallery.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  function showPrev() {
    setIndex((i) => (i - 1 + gallery.length) % gallery.length);
  }

  function showNext() {
    setIndex((i) => (i + 1) % gallery.length);
  }

  return (
    <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden bg-ink sm:h-[85vh]">
      {gallery.map((item, i) => (
        <div
          key={item.region}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={item.image}
            alt={item.region}
            fill
            className="object-cover"
            sizes="100vw"
            priority={i === 0}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-ink/50" />

      <div className={`absolute inset-x-0 top-0 ${CONTAINER} pt-10 text-center sm:pt-14`}>
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white">
          <span className="h-px w-6 bg-white/60" />
          Photo Gallery
          <span className="h-px w-6 bg-white/60" />
        </span>
        <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">
          Postcards from the Himalayas
        </h2>
      </div>

      <button
        type="button"
        onClick={showPrev}
        aria-label="Previous photo"
        className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 sm:left-6"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        onClick={showNext}
        aria-label="Next photo"
        className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 sm:right-6"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className={`absolute inset-x-0 bottom-0 ${CONTAINER} pb-8 sm:pb-10`}>
        <div className="flex items-end justify-between gap-4">
          <span className="font-serif text-lg font-medium text-white sm:text-2xl">
            {gallery[index].region}
          </span>
          <span className="text-sm text-white/70">
            {index + 1} / {gallery.length}
          </span>
        </div>

        <div className="mt-5 flex justify-center gap-2 sm:justify-start">
          {gallery.map((item, i) => (
            <button
              key={item.region}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to ${item.region}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-8 bg-white" : "w-1.5 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
