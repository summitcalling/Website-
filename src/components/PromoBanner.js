import Image from "next/image";
import Link from "next/link";
import { CONTAINER } from "@/lib/layout";

export default function PromoBanner() {
  return (
    <section className="relative overflow-hidden bg-white pb-20">
      <div className="relative h-[420px] sm:h-[560px]">
        <Image
          src="/misty-peak-banner-2.png"
          alt="A mountain peak veiled in mist"
          fill
          className="object-cover object-top grayscale"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/70 to-white" />
      </div>

      <div className={`relative -mt-16 flex flex-col items-center gap-5 text-center sm:-mt-24 ${CONTAINER}`}>
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue">
          Early Bird Offer
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-ink">
          Book 60 Days Ahead and Save 10%
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-ink">
          Lock in your 2026 Himalayan departure two months early and save 10% on any fixed-date trek.
        </p>
        <span className="h-px w-12 bg-blue" />
        <Link
          href="/fixed-departures"
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
