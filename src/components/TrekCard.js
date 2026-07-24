import Image from "next/image";
import Link from "next/link";
import { whatsappLink } from "@/data/site";

const difficultyColor = {
  Easy: "#4ADE80",
  "Easy–Moderate": "#38BDF8",
  Moderate: "#2563EB",
  Challenging: "#E2543D",
};

export default function TrekCard({ trek, index }) {
  return (
    <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-ink">
      <Link href={`/treks/${trek.slug}`} className="absolute inset-0 z-0" tabIndex={-1} aria-hidden="true">
        <Image
          src={trek.image}
          alt={trek.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10 transition-opacity group-hover:from-ink/95" />
      </Link>

      {typeof index === "number" && (
        <span className="pointer-events-none absolute right-4 top-4 z-10 font-serif text-3xl font-semibold text-white/25">
          {String(index + 1).padStart(2, "0")}
        </span>
      )}

      <div className="pointer-events-none absolute left-4 top-4 z-10 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-ink backdrop-blur">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 21s-7-6.1-7-11.5A7 7 0 0112 2a7 7 0 017 7.5C19 14.9 12 21 12 21z" />
          <circle cx="12" cy="9.5" r="2.5" />
        </svg>
        {trek.region}
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 p-5">
        <Link href={`/treks/${trek.slug}`} className="block">
          <h3 className="font-serif text-xl font-semibold text-white transition-colors group-hover:text-blue">
            {trek.name}
          </h3>
        </Link>

        <div className="mt-2 flex items-center gap-3 text-xs text-white/70">
          <span className="inline-flex items-center gap-1.5">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {trek.duration} days
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: difficultyColor[trek.difficulty] ?? "#2563EB" }}
            />
            {trek.difficulty}
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
          <div>
            <div className="text-[10px] uppercase tracking-wide text-white/45">From</div>
            <div className="font-serif text-lg font-semibold text-white">
              ₹{trek.price.toLocaleString("en-IN")}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href={`/treks/${trek.slug}`}
              aria-label={`View details for ${trek.name}`}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <a
              href={whatsappLink(`Hi, I'd like to book the ${trek.name}.`)}
              target="_blank"
              rel="noreferrer"
              aria-label={`Book ${trek.name} via WhatsApp`}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-whatsapp text-white transition-transform hover:scale-105"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
