import Image from "next/image";
import Link from "next/link";
import { whatsappLink } from "@/data/site";

const difficultyColor = {
  Easy: "#4ADE80",
  "Easy–Moderate": "#38BDF8",
  Moderate: "#0EA5E9",
  Challenging: "#E2543D",
};

export default function TrekCard({ trek, index }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-sm transition-shadow hover:shadow-lg">
      <Link href={`/treks/${trek.slug}`} className="relative block aspect-[1/1] shrink-0 overflow-hidden">
        <Image
          src={trek.image}
          alt={trek.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw"
        />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-ink/40 to-transparent" />

        {typeof index === "number" && (
          <span className="pointer-events-none absolute right-4 top-4 font-serif text-3xl font-semibold text-white/80">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}

        <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-ink backdrop-blur">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 21s-7-6.1-7-11.5A7 7 0 0112 2a7 7 0 017 7.5C19 14.9 12 21 12 21z" />
            <circle cx="12" cy="9.5" r="2.5" />
          </svg>
          {trek.region}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <Link href={`/treks/${trek.slug}`} className="block">
          <h3 className="font-serif text-base font-semibold leading-snug text-ink transition-colors group-hover:text-blue">
            {trek.name}
          </h3>
        </Link>

        <div className="mt-1.5 flex items-center gap-3 text-xs text-ink">
          <span className="inline-flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {trek.duration} days
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: difficultyColor[trek.difficulty] ?? "#0EA5E9" }}
            />
            {trek.difficulty}
          </span>
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-ink/10 pt-3">
          <div>
            <div className="text-[10px] uppercase tracking-wide text-ink/50">
              {trek.price ? "From" : "Price"}
            </div>
            <div className="font-serif text-base font-semibold text-ink">
              {trek.price ? `₹${trek.price.toLocaleString("en-IN")}` : "On Request"}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href={`/treks/${trek.slug}`}
              aria-label={`View details for ${trek.name}`}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/5 text-ink transition-colors hover:bg-ink/10"
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
              className="flex h-9 w-9 items-center justify-center rounded-full bg-whatsapp text-white transition-transform hover:scale-105"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.006-3.492c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.593-6.593 6.593zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.588-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.337-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
