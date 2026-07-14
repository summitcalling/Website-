import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTrekBySlug, treks } from "@/data/treks";
import { departures } from "@/data/departures";
import { site, whatsappLink } from "@/data/site";
import { CONTAINER } from "@/lib/layout";

export function generateStaticParams() {
  return treks.map((trek) => ({ slug: trek.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const trek = getTrekBySlug(slug);
  if (!trek) return {};
  return {
    title: `${trek.name} — ${site.name}`,
    description: trek.summary,
  };
}

export default async function TrekDetailPage({ params }) {
  const { slug } = await params;
  const trek = getTrekBySlug(slug);
  if (!trek) notFound();

  const trekDepartures = departures.filter((d) => d.trekSlug === trek.slug);

  return (
    <>
      <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-ink">
        <Image
          src={trek.image}
          alt={trek.name}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />
        <div className={`relative w-full pb-14 pt-36 ${CONTAINER}`}>
          <Link href="/treks" className="text-sm text-white/70 hover:text-white">
            ← All Treks
          </Link>
          <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs font-medium text-white/90">
            {trek.region}
          </span>
          <h1 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white max-w-2xl">
            {trek.name}
          </h1>
        </div>
      </section>

      <section className="bg-cream">
        <div className={`${CONTAINER} py-14 grid grid-cols-1 lg:grid-cols-3 gap-12`}>
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Stat label="Duration" value={`${trek.duration} days`} />
              <Stat label="Difficulty" value={trek.difficulty} />
              <Stat label="Max Altitude" value={trek.maxAltitude} />
              <Stat label="Best Season" value={trek.bestSeason} />
            </div>

            <p className="mt-8 text-lg text-ink/70 leading-relaxed">
              {trek.summary}
            </p>

            <h2 className="mt-12 font-serif text-2xl font-semibold text-ink">
              Trek Highlights
            </h2>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {trek.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2.5 text-sm text-ink/70">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange/15 text-orange">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M4 12l5 5L20 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>

            <h2 className="mt-12 font-serif text-2xl font-semibold text-ink">
              Day-by-Day Itinerary
            </h2>
            <ol className="mt-4 space-y-5">
              {trek.itinerary.map((day) => (
                <li key={day.day} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white">
                    {day.day}
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink">{day.title}</h3>
                    <p className="mt-1 text-sm text-ink/60">{day.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5">
              <div className="text-[11px] uppercase tracking-wide text-ink/45">
                From
              </div>
              <div className="font-serif text-3xl font-semibold text-ink">
                ₹{trek.price.toLocaleString("en-IN")}
              </div>
              <div className="text-xs text-ink/45 mt-1">per person</div>

              <a
                href={whatsappLink(`Hi, I'd like to book the ${trek.name}.`)}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp py-3.5 text-sm font-semibold text-white hover:brightness-95 transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2z" />
                </svg>
                Book via WhatsApp
              </a>
              <a
                href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-ink/15 py-3.5 text-sm font-semibold text-ink hover:bg-ink hover:text-white transition-colors"
              >
                Call {site.phoneDisplay}
              </a>

              {trekDepartures.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-sm font-semibold text-ink mb-3">
                    Upcoming Fixed Departures
                  </h3>
                  <ul className="space-y-2">
                    {trekDepartures.map((d) => (
                      <li
                        key={d.date}
                        className="flex items-center justify-between rounded-lg bg-cream px-3 py-2 text-sm"
                      >
                        <span className="text-ink/80">
                          {new Date(d.date).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                        <span
                          className={`text-xs font-medium ${
                            d.status === "Filling Fast" ? "text-orange" : "text-ink/50"
                          }`}
                        >
                          {d.seatsLeft} seats left
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl bg-white p-4 ring-1 ring-ink/5">
      <div className="text-[11px] uppercase tracking-wide text-ink/45">{label}</div>
      <div className="mt-1 text-sm font-semibold text-ink">{value}</div>
    </div>
  );
}
