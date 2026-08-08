import Image from "next/image";
import Link from "next/link";
import { founders } from "@/data/founders";
import { CONTAINER } from "@/lib/layout";

export default function FoundersSection() {
  return (
    <section className="bg-white border-t border-ink/5">
      <div className={`${CONTAINER} py-20`}>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue">
            <span className="h-px w-6 bg-blue" />
            Who&apos;s Behind This
            <span className="h-px w-6 bg-blue" />
          </span>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl font-semibold uppercase tracking-wide text-ink">
            Meet the Founders
          </h2>
          <p className="mt-4 text-ink/60">
            Two Nepali guides who got tired of watching agencies oversell
            treks people weren&apos;t ready for.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 max-w-3xl mx-auto">
          {founders.map((person) => (
            <div
              key={person.name}
              className="flex flex-col items-center rounded-2xl border border-ink/10 bg-cream/60 p-7 text-center"
            >
              <div className="relative h-28 w-28 overflow-hidden rounded-full ring-2 ring-white shadow-sm">
                <Image
                  src={person.photo}
                  alt={person.name}
                  fill
                  className="object-cover"
                  sizes="112px"
                />
              </div>
              <h3 className="mt-5 font-serif text-lg font-semibold text-ink">
                {person.name}
              </h3>
              <div className="text-xs font-semibold uppercase tracking-wide text-blue">
                {person.role}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">
                {person.shortBio}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/about#founders"
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-blue/40 hover:text-blue"
          >
            View Our Story
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
