import Image from "next/image";
import Link from "next/link";
import { founders } from "@/data/founders";
import { CONTAINER } from "@/lib/layout";

function SectionHeading({ children }) {
  return (
    <div className="text-center">
      <h2 className="font-serif text-3xl sm:text-4xl text-ink">
        {children}
      </h2>
      <span className="mx-auto mt-3 block h-1 w-14 rounded-full bg-blue" />
    </div>
  );
}

export default function FoundersSection() {
  return (
    <section className="bg-white border-t border-ink/5">
      <div className={`${CONTAINER} py-16`}>
        <SectionHeading>Meet the Founders</SectionHeading>

        <div className="mt-10 grid grid-cols-1 gap-12 sm:grid-cols-2">
          {founders.map((person) => (
            <div key={person.name} className="flex flex-col gap-5 sm:flex-row">
              <div className="relative aspect-[4/5] w-full max-w-[220px] shrink-0 overflow-hidden rounded-2xl">
                <Image
                  src={person.photo}
                  alt={person.name}
                  fill
                  className="object-cover"
                  sizes="220px"
                />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-ink">
                  {person.name}
                </h3>
                <div className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-blue">
                  {person.role}
                </div>
                <div className="mt-3 space-y-3">
                  {person.bio.map((paragraph, j) => (
                    <p key={j} className="text-base leading-relaxed text-ink">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
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
