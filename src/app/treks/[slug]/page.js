import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTrekBySlug, treks } from "@/data/treks";
import { departures } from "@/data/departures";
import { site, whatsappLink } from "@/data/site";
import { CONTAINER } from "@/lib/layout";
import Accordion from "@/components/Accordion";

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
  const d = trek.details;

  return (
    <>
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-ink">
        <Image
          src={trek.image}
          alt={trek.name}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />
        <div className={`relative w-full pb-14 pt-28 ${CONTAINER}`}>
          <Link href="/treks" className="text-sm text-white/70 hover:text-white">
            ← All Treks
          </Link>
          <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs font-medium text-white/90">
            {trek.region}
          </span>
          <h1 className="mt-4 font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-white max-w-2xl">
            {trek.name}
          </h1>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
            <span>{trek.duration} Days</span>
            <span className="text-white/30">·</span>
            <span>{trek.difficulty}</span>
            <span className="text-white/30">·</span>
            <span>Max {trek.maxAltitude}</span>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className={`${CONTAINER} py-14 grid grid-cols-1 lg:grid-cols-3 gap-12`}>
          <div className="lg:col-span-2">
            <SectionHeading>Overview</SectionHeading>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Stat label="Duration" value={`${trek.duration} days`} />
              <Stat label="Difficulty" value={trek.difficulty} />
              <Stat label="Max Altitude" value={trek.maxAltitude} />
              <Stat label="Best Season" value={trek.bestSeason} />
            </div>

            <div className="mt-8 space-y-4">
              {(trek.overview ?? [trek.summary]).map((paragraph, i) => (
                <p key={i} className="text-base text-ink/70 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12">
              <SectionHeading>Trek Highlights</SectionHeading>
            </div>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {trek.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2.5 text-base text-ink/70">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue/15 text-blue">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M4 12l5 5L20 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <SectionHeading>Itinerary</SectionHeading>
            </div>
            <p className="mt-2 text-sm text-ink/50">Tap a day to see the full details.</p>
            <div className="mt-6">
              <Accordion
                items={trek.itinerary.map((day) => {
                  const metaLines = [
                    day.distance && `Distance: ${day.distance}`,
                    day.duration && `Duration: ${day.duration}`,
                    day.accommodation && `Accommodation: ${day.accommodation}`,
                  ].filter(Boolean);
                  return {
                    title: `Day ${day.day}: ${day.title}`,
                    content: [metaLines.join("\n"), day.description].filter(Boolean).join("\n\n"),
                  };
                })}
              />
            </div>
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
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M20.52 3.449C12.831-3.984.106 1.407.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.44 5.71 1.44h.005c9.5 0 15.442-8.657 12.83-16.339zm-3.99 15.351a10.68 10.68 0 01-5.435 1.494h-.004a10.9 10.9 0 01-5.549-1.513l-.397-.235-3.766.982 1.005-3.671-.259-.379a10.09 10.09 0 01-1.65-5.616c.005-6.126 5.043-11.096 11.245-11.096 3.007 0 5.831 1.174 7.943 3.294 2.11 2.121 3.271 4.94 3.269 7.943-.003 6.126-5.041 11.096-11.402 11.797z" />
                </svg>
                Book via WhatsApp
              </a>
              <a
                href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-sky/30 py-3.5 text-sm font-semibold text-sky hover:bg-sky hover:text-white transition-colors"
              >
                Call {site.phoneDisplay}
              </a>

              {trekDepartures.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-sm font-semibold text-ink mb-3">
                    Upcoming Fixed Departures
                  </h3>
                  <ul className="space-y-2">
                    {trekDepartures.map((dep) => (
                      <li
                        key={dep.date}
                        className="flex items-center justify-between rounded-lg bg-cream px-3 py-2 text-sm"
                      >
                        <span className="text-ink/80">
                          {new Date(dep.date).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                        <span
                          className={`text-xs font-medium ${
                            dep.status === "Filling Fast" ? "text-blue" : "text-ink/50"
                          }`}
                        >
                          {dep.status}
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

      {d?.facts && (
        <section className="bg-white border-t border-ink/5">
          <div className={`${CONTAINER} py-16`}>
            <SectionHeading>Trek Facts</SectionHeading>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-0 rounded-2xl ring-1 ring-ink/5 overflow-hidden">
              {d.facts.map((fact, i) => (
                <div
                  key={fact.label}
                  className={`flex items-center justify-between gap-4 px-5 py-4 text-base ${
                    i % 2 === 0 ? "bg-cream/60" : "bg-white"
                  }`}
                >
                  <span className="font-medium text-ink/60">{fact.label}</span>
                  <span className="text-right font-semibold text-ink">{fact.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {d?.packages && (
        <section className="bg-cream border-t border-ink/5">
          <div className={`${CONTAINER} py-16`}>
            <SectionHeading>Package Options</SectionHeading>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {d.packages.map((pkg) => (
                <div key={pkg.name} className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-ink/5">
                  <h3 className="font-serif text-xl font-semibold text-ink">{pkg.name}</h3>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="font-serif text-2xl font-semibold text-blue">
                      ₹{pkg.priceINR.toLocaleString("en-IN")}
                    </span>
                    <span className="text-base text-ink/45">/ USD {pkg.priceUSD.toLocaleString("en-US")}</span>
                  </div>
                  <p className="mt-1 text-sm text-ink/45">{pkg.note}</p>
                  <ul className="mt-5 space-y-2.5">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-base text-ink/70">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue/15 text-blue">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M4 12l5 5L20 6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappLink(`Hi, I'd like to book the ${trek.name} — ${pkg.name} package.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue py-3 text-sm font-semibold text-white hover:bg-blue-dark transition-colors"
                  >
                    Choose {pkg.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {(d?.difficulty || d?.altitude) && (
        <section className="bg-white border-t border-ink/5">
          <div className={`${CONTAINER} py-16 grid grid-cols-1 lg:grid-cols-2 gap-10`}>
            {d?.difficulty && (
              <div>
                <SectionHeading>Trek Difficulty</SectionHeading>
                <span className="mt-2 inline-block rounded-full bg-blue/10 px-3 py-1 text-xs font-semibold text-blue">
                  {d.difficulty.level}
                </span>
                <p className="mt-4 text-base text-ink/65 leading-relaxed">{d.difficulty.description}</p>
              </div>
            )}
            {d?.altitude && (
              <div>
                <SectionHeading>Altitude &amp; Acclimatization</SectionHeading>
                <span className="mt-2 inline-block rounded-full bg-sky/10 px-3 py-1 text-xs font-semibold text-sky">
                  {d.altitude.highestPoint}
                </span>
                <p className="mt-4 text-base text-ink/65 leading-relaxed">{d.altitude.description}</p>
                {d.altitude.tips && (
                  <ul className="mt-4 space-y-2">
                    {d.altitude.tips.map((tip) => (
                      <li key={tip} className="flex items-start gap-2.5 text-base text-ink/70">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sky" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {d?.bestTime && (
        <section className="bg-cream border-t border-ink/5">
          <div className={`${CONTAINER} py-16`}>
            <SectionHeading>Best Time to Trek</SectionHeading>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {d.bestTime.map((season) => (
                <div key={season.season} className="rounded-2xl bg-white p-5 ring-1 ring-ink/5">
                  <h3 className="text-base font-semibold text-ink">{season.season}</h3>
                  <ul className="mt-3 space-y-2">
                    {season.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-base text-ink/60">
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-blue" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {(d?.inclusions || d?.exclusions) && (
        <section className="bg-white border-t border-ink/5">
          <div className={`${CONTAINER} py-16 grid grid-cols-1 lg:grid-cols-2 gap-10`}>
            {d?.inclusions && (
              <div>
                <SectionHeading>Inclusions</SectionHeading>
                <ul className="mt-5 space-y-4">
                  {d.inclusions.map((item) => (
                    <li key={item.title} className="flex gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue/15 text-blue">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M4 12l5 5L20 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <div>
                        <div className="text-base font-semibold text-ink">{item.title}</div>
                        <p className="mt-0.5 text-base text-ink/60">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {d?.exclusions && (
              <div>
                <SectionHeading>Exclusions</SectionHeading>
                <ul className="mt-5 space-y-4">
                  {d.exclusions.map((item) => (
                    <li key={item.title} className="flex gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink/10 text-ink/50">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                        </svg>
                      </span>
                      <div>
                        <div className="text-base font-semibold text-ink">{item.title}</div>
                        <p className="mt-0.5 text-base text-ink/60">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {d?.addOns && (
        <section className="bg-cream border-t border-ink/5">
          <div className={`${CONTAINER} py-16`}>
            <SectionHeading>Optional Add-ons</SectionHeading>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {d.addOns.map((addon) => (
                <div key={addon.title} className="rounded-2xl bg-white p-5 ring-1 ring-ink/5">
                  <div className="text-base font-semibold text-ink">{addon.title}</div>
                  <p className="mt-1.5 text-base text-ink/60">{addon.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {d?.whyChooseUs && (
        <section className="bg-ink border-t border-ink/5">
          <div className={`${CONTAINER} py-16`}>
            <SectionHeading dark>Why Choose {site.name}?</SectionHeading>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {d.whyChooseUs.map((item) => (
                <div key={item.title} className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                  <div className="text-base font-semibold text-white">{item.title}</div>
                  <p className="mt-1.5 text-base text-white/60">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {d?.fixedDepartures && (
        <section className="bg-white border-t border-ink/5">
          <div className={`${CONTAINER} py-16`}>
            <SectionHeading>Fixed Departure Dates</SectionHeading>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {d.fixedDepartures.map((dep) => (
                <div key={dep.departure} className="overflow-hidden rounded-xl ring-1 ring-ink/5">
                  <div className="grid grid-cols-2 bg-ink/5">
                    <div className="px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-ink/50">
                      Departure
                    </div>
                    <div className="px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-ink/50">
                      Return
                    </div>
                  </div>
                  <div className="grid grid-cols-2 bg-cream/60">
                    <div className="px-4 py-3 text-sm font-semibold text-ink">{dep.departure}</div>
                    <div className="px-4 py-3 text-sm font-semibold text-ink/70">{dep.return}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {d?.faqs && (
        <section className="bg-cream border-t border-ink/5">
          <div className={`${CONTAINER} py-16`}>
            <SectionHeading>Frequently Asked Questions</SectionHeading>
            <div className="mt-6">
              <Accordion items={d.faqs.map((f) => ({ title: f.q, content: f.a }))} />
            </div>
          </div>
        </section>
      )}

      {d?.policies && (
        <section className="bg-white border-t border-ink/5">
          <div className={`${CONTAINER} py-16`}>
            <SectionHeading>Booking &amp; Cancellation Policy</SectionHeading>
            <div className="mt-6">
              <Accordion items={d.policies} />
            </div>
          </div>
        </section>
      )}
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

function SectionHeading({ children, dark }) {
  return (
    <div>
      <h2
        className={`font-serif text-2xl sm:text-3xl font-semibold uppercase tracking-wide ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {children}
      </h2>
      <span className={`mt-3 block h-1 w-14 rounded-full ${dark ? "bg-white/30" : "bg-blue"}`} />
    </div>
  );
}
