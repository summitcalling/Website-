import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { experiences } from "@/data/experiences";
import { site } from "@/data/site";
import { CONTAINER } from "@/lib/layout";

export const metadata = {
  title: `Helicopter Tours & Mountain Flights — ${site.name}`,
  description: "Browse Everest and Annapurna helicopter tours and scenic mountain flights over the Himalayas.",
};

export default function ExperiencesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Beyond Trekking"
        title="Helicopter Tours & Mountain Flights"
        description="Experience the Himalayas from above — scenic helicopter tours and mountain flights, no trekking required."
      />
      <section className="bg-cream">
        <div className={`${CONTAINER} py-14`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((exp, i) => (
              <Link
                key={exp.slug}
                href={`/experiences/${exp.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[1/1] shrink-0 overflow-hidden">
                  <Image
                    src={exp.image}
                    alt={exp.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-ink/40 to-transparent" />
                  <span className="absolute left-4 top-4 font-serif text-sm font-semibold text-white">
                    0{i + 1}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-blue">
                    {exp.type}
                  </span>
                  <h3 className="mt-1 truncate font-serif text-base font-semibold text-ink">
                    {exp.name}
                  </h3>
                  <p className="mt-1 text-sm leading-snug text-ink">{exp.duration}</p>

                  <div className="mt-auto flex items-center justify-between gap-3 pt-3">
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
    </>
  );
}
