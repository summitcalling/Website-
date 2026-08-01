import Link from "next/link";
import { treks } from "@/data/treks";
import TrekCard from "@/components/TrekCard";
import { CONTAINER } from "@/lib/layout";

export default function FeaturedTreks() {
  const featured = treks.slice(0, 4);

  return (
    <section className="bg-cream">
      <div className={`${CONTAINER} py-20`}>
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue">
            <span className="h-px w-6 bg-blue" />
            Featured Treks
            <span className="h-px w-6 bg-blue" />
          </span>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl font-semibold uppercase tracking-wide text-ink">
            Popular Himalayan Adventures
          </h2>
          <p className="mt-4 text-ink/60">
            Hand-picked routes our travellers love, from quick ridge walks to
            the legendary trail to Everest.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((trek, i) => (
            <TrekCard key={trek.slug} trek={trek} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/treks"
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
          >
            View All Treks
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
