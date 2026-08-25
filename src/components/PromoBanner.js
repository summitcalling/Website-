import Image from "next/image";
import Link from "next/link";
import { CONTAINER } from "@/lib/layout";

export default function PromoBanner() {
  return (
    <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden bg-ink sm:h-[85vh]">
      <Image
        src="/misty-peak-banner-3.jpg"
        alt="Sunrise glow over snow-capped Himalayan peaks"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-ink/40" />

      <div className={`relative flex h-full flex-col items-center justify-center gap-5 text-center ${CONTAINER}`}>
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue">
          Early Bird Offer
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-white">
          Book 60 Days Ahead and Save 10%
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-white">
          Lock in your 2026 Himalayan departure two months early and save 10% on any fixed-date trek.
        </p>
        <span className="h-px w-12 bg-blue" />
        <Link
          href="/treks"
          className="mt-2 inline-flex items-center gap-2 bg-blue px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-blue-dark"
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
