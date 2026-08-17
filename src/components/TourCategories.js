import Image from "next/image";
import Link from "next/link";
import { CONTAINER } from "@/lib/layout";
import { experiences } from "@/data/experiences";

export default function TourCategories() {
  return (
    <section className="bg-cream">
      <div className={`${CONTAINER} py-20`}>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue">
            <span className="h-px w-6 bg-blue" />
            Beyond Trekking
            <span className="h-px w-6 bg-blue" />
          </span>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl font-semibold uppercase tracking-wide text-ink">
            More Ways to Explore Nepal
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {experiences.map((exp, i) => (
            <Link
              key={exp.slug}
              href={`/experiences/${exp.slug}`}
              className="group flex w-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-sm transition-shadow hover:shadow-lg sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
            >
              <div className="relative aspect-[1/1] shrink-0 overflow-hidden">
                <Image
                  src={exp.image}
                  alt={exp.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 640px) 33vw, 90vw"
                />
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-ink/40 to-transparent" />
                <span className="absolute left-4 top-4 font-serif text-sm font-semibold text-white/80">
                  0{i + 1}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-4">
                <span className="text-[11px] font-semibold uppercase tracking-wide text-blue">
                  {exp.type}
                </span>
                <h3 className="mt-1 font-serif text-base font-semibold text-ink">
                  {exp.name}
                </h3>
                <p className="mt-1 text-sm leading-snug text-ink">
                  {exp.duration}
                </p>

                <div className="mt-auto flex items-center justify-between gap-3 border-t border-ink/10 pt-3">
                  <span className="text-sm font-semibold text-ink">
                    From USD {exp.priceUSD.toLocaleString("en-US")}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue transition-transform duration-300 group-hover:translate-x-1">
                    Explore
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
