import Image from "next/image";
import Link from "next/link";
import { CONTAINER } from "@/lib/layout";
import { experiences } from "@/data/experiences";

export default function TourCategories() {
  return (
    <section className="mt-6 bg-cream sm:mt-8">
      <div className={`${CONTAINER} py-20 sm:py-24`}>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14">
          <div className="lg:sticky lg:top-28 lg:w-72 lg:shrink-0">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue">
              Beyond Trekking
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-ink">
              More Ways to Explore the Himalayas
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink">
              From aerial views of Everest to sunrise flights over the Annapurnas — experience the Himalayas beyond the trail.
            </p>
          </div>

          <div className="grid flex-1 gap-5 sm:grid-cols-3">
            {experiences.map((exp, i) => (
              <Link
                key={exp.slug}
                href={`/experiences/${exp.slug}`}
                className="group relative aspect-[3/4] overflow-hidden rounded-3xl"
              >
                <Image
                  src={exp.image}
                  alt={exp.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 33vw, 90vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
                <span className="absolute right-4 top-4 font-serif text-sm font-semibold text-white">
                  0{i + 1}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-white/80">
                    {exp.type}
                  </span>
                  <h3 className="mt-1 font-serif text-base font-semibold text-white">
                    {exp.name}
                  </h3>
                  <p className="mt-1 text-xs text-white/80">
                    {exp.duration}
                  </p>

                  <div className="mt-3 flex items-center justify-between gap-2">
                    <span className="text-sm font-semibold text-white">
                      From USD {exp.priceUSD.toLocaleString("en-US")}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-white transition-transform duration-300 group-hover:translate-x-1">
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
      </div>
    </section>
  );
}
