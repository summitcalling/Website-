"use client";

import { useState } from "react";
import Image from "next/image";

export default function TrekGallery({ gallery, name }) {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  function prev() {
    setIndex((i) => (i - 1 + gallery.length) % gallery.length);
  }

  function next() {
    setIndex((i) => (i + 1) % gallery.length);
  }

  function openLightbox(i) {
    setLightboxIndex(i);
    setLightboxOpen(true);
  }

  function lightboxPrev() {
    setLightboxIndex((i) => (i - 1 + gallery.length) % gallery.length);
  }

  function lightboxNext() {
    setLightboxIndex((i) => (i + 1) % gallery.length);
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
        <button
          type="button"
          onClick={() => openLightbox(0)}
          className="relative overflow-hidden rounded-2xl"
        >
          <Image
            src={gallery[0]}
            alt={name}
            fill
            priority
            className="object-cover transition-transform duration-300 hover:scale-105"
            sizes="50vw"
          />
        </button>
        <div className="grid grid-cols-2 gap-3">
          {gallery.slice(1, 5).map((src, i) => {
            const isLast = i === 3;
            const remaining = gallery.length - 5;
            return (
              <button
                type="button"
                key={src}
                onClick={() => openLightbox(i + 1)}
                className="relative aspect-[6/5] overflow-hidden rounded-2xl"
              >
                <Image
                  src={src}
                  alt={`${name} photo ${i + 2}`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="25vw"
                />
                {isLast && remaining > 0 && (
                  <span className="absolute inset-0 flex items-center justify-center bg-ink/50 text-sm font-semibold text-white">
                    +{remaining} Photo{remaining > 1 ? "s" : ""}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close gallery"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>

          <div
            className="relative h-full max-h-[80vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={gallery[lightboxIndex]}
              alt={`${name} photo ${lightboxIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          {gallery.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  lightboxPrev();
                }}
                aria-label="Previous photo"
                className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  lightboxNext();
                }}
                aria-label="Next photo"
                className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium text-white">
                {lightboxIndex + 1} / {gallery.length}
              </span>
            </>
          )}
        </div>
      )}
    </>
  );
}
