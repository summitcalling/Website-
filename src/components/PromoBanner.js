import Image from "next/image";
import Link from "next/link";
import { CONTAINER } from "@/lib/layout";

export default function PromoBanner() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <Image
        src="https://images.unsplash.com/photo-1571687949921-1306bfb24b72?auto=format&fit=crop&w=1600&q=70"
        alt="Trekking camp under the Himalayan sky"
        fill
        className="object-cover opacity-45"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/30" />

      <div className={`relative ${CONTAINER} flex flex-col items-center gap-8 py-20 text-center md:flex-row md:justify-between md:text-left`}>
        <div>
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-orange">
            <span className="h-px w-8 bg-orange" />
            Early Bird Offer
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
            Book 60 days ahead and save 10% on any 2026 departure.
          </h2>
        </div>
        <Link
          href="/fixed-departures"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-orange px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-orange-dark"
        >
          View Fixed Departures
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
