import Image from "next/image";
import { notFound } from "next/navigation";
import { getTrekBySlug, treks } from "@/data/treks";
import { site, whatsappLink } from "@/data/site";
import { CONTAINER } from "@/lib/layout";
import Accordion from "@/components/Accordion";
import BookingCard from "@/components/BookingCard";
import FixedDepartures from "@/components/FixedDepartures";
import Itinerary from "@/components/Itinerary";
import TrekSubNav from "@/components/TrekSubNav";

const BODY_TEXT = "text-[17px] leading-relaxed text-ink";

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

function CheckItem({ children }) {
  return (
    <li className={`flex items-start gap-2.5 ${BODY_TEXT}`}>
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue/15 text-blue">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M4 12l5 5L20 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      {children}
    </li>
  );
}

export default async function TrekDetailPage({ params }) {
  const { slug } = await params;
  const trek = getTrekBySlug(slug);
  if (!trek) notFound();

  const d = trek.details;
  const gallery = trek.gallery ?? [trek.image];

  const navItems = [
    { id: "overview", label: "Overview" },
    { id: "itinerary", label: "Itinerary" },
    d?.packages && { id: "packages", label: "Packages" },
    d?.fixedDepartures && { id: "dates", label: "Dates" },
    d?.faqs && { id: "faqs", label: "FAQs" },
  ].filter(Boolean);

  return (
    <>
      <section className="bg-white pt-8">
        <div className={`${CONTAINER} pb-12`}>
          <h1 className="text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-[42px]">
            {trek.name}
          </h1>
          <div className="mt-4 text-base text-ink/50">
            Duration: <span className="text-ink">{trek.duration} Days</span>
          </div>
          <div className="mt-3 flex flex-wrap gap-x-10 gap-y-2">
            <div className="text-base text-ink/50">
              Region: <span className="text-ink">{trek.region}</span>
            </div>
            <div className="text-base text-ink/50">
              Difficulty: <span className="text-ink">{trek.difficulty}</span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="relative aspect-[16/11] overflow-hidden rounded-2xl sm:aspect-auto">
              <Image
                src={gallery[0]}
                alt={trek.name}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 640px) 50vw, 100vw"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {gallery.slice(1, 5).map((src, i) => (
                <div key={src} className="relative aspect-[6/5] overflow-hidden rounded-2xl">
                  <Image
                    src={src}
                    alt={`${trek.name} photo ${i + 2}`}
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TrekSubNav items={navItems} />

      <section className="bg-white">
        <div className={`${CONTAINER} py-16 grid grid-cols-1 lg:grid-cols-3 gap-12`}>
          <div className="lg:col-span-2">
            <div id="overview" className="scroll-mt-[170px]">
              <SectionHeading>Overview</SectionHeading>
            </div>
            <div className="mt-6 grid grid-cols-2 divide-x divide-y sm:divide-y-0 divide-ink/10 rounded-2xl ring-1 ring-black/5 shadow-sm sm:grid-cols-4">
              <Stat
                label="Duration"
                value={`${trek.duration} days`}
                icon={
                  <>
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
                  </>
                }
              />
              <Stat
                label="Difficulty"
                value={trek.difficulty}
                icon={<path d="M4 19h3V9H4v10zm6.5 0h3V5h-3v14zM17 19h3v-7h-3v7z" strokeLinejoin="round" />}
              />
              <Stat
                label="Max Altitude"
                value={trek.maxAltitude}
                icon={<path d="M3 19h18L14.5 8l-3 4.5-2-2.5L3 19z" strokeLinejoin="round" />}
              />
              <Stat
                label="Best Season"
                value={trek.bestSeason}
                icon={
                  <>
                    <rect x="4" y="5" width="16" height="15" rx="2" />
                    <path d="M4 10h16M8 3v4M16 3v4" strokeLinecap="round" />
                  </>
                }
              />
            </div>

            <div className="mt-8 space-y-4">
              {(trek.overview ?? [trek.summary]).map((paragraph, i) => (
                <p key={i} className={BODY_TEXT}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-14">
              <SectionHeading>Trek Highlights</SectionHeading>
            </div>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {trek.highlights.map((highlight) => (
                <CheckItem key={highlight}>{highlight}</CheckItem>
              ))}
            </ul>

            <div id="itinerary" className="mt-14 scroll-mt-[170px]">
              <SectionHeading>Itinerary</SectionHeading>
            </div>
            <p className="mt-2 text-sm text-ink">Tap a day to see the full details.</p>
            <div className="mt-8">
              <Itinerary days={trek.itinerary} />
            </div>

            {d?.packages && (
              <>
                <div id="packages" className="mt-14 scroll-mt-[170px]">
                  <SectionHeading>Package Options</SectionHeading>
                </div>
                <div className="mt-8 overflow-x-auto rounded-2xl ring-1 ring-black/5">
                  <table className="w-full min-w-[480px] text-left">
                    <thead>
                      <tr className="bg-cream/60">
                        <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-ink">
                          Package
                        </th>
                        <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-ink">
                          For Indians
                        </th>
                        <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-ink">
                          For Foreigners
                        </th>
                        <th className="px-5 py-4" />
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-ink/10">
                      {d.packages.map((pkg, i) => (
                        <tr key={pkg.name} className={i === 0 ? "bg-blue/[0.03]" : undefined}>
                          <td className="px-5 py-5 align-middle">
                            <div className="flex items-center gap-2">
                              <span className="font-serif text-lg font-semibold text-ink">{pkg.name}</span>
                              {i === 0 && (
                                <span className="rounded-full bg-blue/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-blue">
                                  Popular
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="px-5 py-5 align-middle">
                            <div className="font-serif text-xl font-semibold text-ink">
                              ₹{pkg.priceINR.toLocaleString("en-IN")}
                            </div>
                            <div className="mt-1 text-xs text-ink">+5% GST</div>
                          </td>
                          <td className="px-5 py-5 align-middle">
                            <div className="font-serif text-xl font-semibold text-ink">
                              USD {pkg.priceUSD.toLocaleString("en-US")}
                            </div>
                            <div className="mt-1 text-xs text-ink">+ applicable taxes</div>
                          </td>
                          <td className="px-5 py-5 align-middle">
                            <a
                              href={whatsappLink(`Hi, I'd like to book the ${trek.name} — ${pkg.name} package.`)}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 whitespace-nowrap text-sm font-semibold text-blue hover:text-blue-dark"
                            >
                              Choose
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}

            {d?.difficulty && (
              <>
                <div className="mt-14">
                  <SectionHeading>Trek Difficulty</SectionHeading>
                </div>
                <span className="mt-4 inline-block rounded-full bg-blue/10 px-3 py-1 text-xs font-semibold text-blue">
                  {d.difficulty.level}
                </span>
                <p className={`mt-5 ${BODY_TEXT}`}>{d.difficulty.description}</p>
              </>
            )}

            {d?.inclusions && (
              <>
                <div className="mt-14">
                  <SectionHeading>Inclusions</SectionHeading>
                </div>
                <ul className="mt-6 space-y-4">
                  {d.inclusions.map((item) => (
                    <li key={item.title} className="flex gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue/15 text-blue">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M4 12l5 5L20 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <div>
                        <div className="text-base font-semibold text-ink">{item.title}</div>
                        <p className="mt-0.5 text-sm text-ink">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {d?.exclusions && (
              <>
                <div className="mt-14">
                  <SectionHeading>Exclusions</SectionHeading>
                </div>
                <ul className="mt-6 space-y-4">
                  {d.exclusions.map((item) => (
                    <li key={item.title} className="flex gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink/10 text-ink">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                        </svg>
                      </span>
                      <div>
                        <div className="text-base font-semibold text-ink">{item.title}</div>
                        <p className="mt-0.5 text-sm text-ink">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {d?.addOns && (
              <>
                <div className="mt-14">
                  <SectionHeading>Optional Add-ons</SectionHeading>
                </div>
                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                  {d.addOns.map((addon) => (
                    <li key={addon.title} className="flex gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue/15 text-blue">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M4 12l5 5L20 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <div>
                        <div className="font-semibold text-ink">{addon.title}</div>
                        {addon.description && (
                          <p className="mt-0.5 text-sm text-ink">{addon.description}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {d?.altitude && (
              <>
                <div className="mt-14">
                  <SectionHeading>Altitude &amp; Acclimatization</SectionHeading>
                </div>
                <span className="mt-4 inline-block rounded-full bg-sky/10 px-3 py-1 text-xs font-semibold text-sky">
                  {d.altitude.highestPoint}
                </span>
                <p className={`mt-5 ${BODY_TEXT}`}>{d.altitude.description}</p>
                {d.altitude.tips && (
                  <ul className="mt-4 space-y-2">
                    {d.altitude.tips.map((tip) => (
                      <li key={tip} className={`flex items-start gap-2.5 ${BODY_TEXT}`}>
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-sky" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}

            {d?.bestTime && (
              <>
                <div className="mt-14">
                  <SectionHeading>Best Time to Trek</SectionHeading>
                </div>
                <div className="mt-6 space-y-6">
                  {d.bestTime.map((season) => (
                    <div key={season.season}>
                      <h3 className="text-base font-semibold text-ink">{season.season}</h3>
                      <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                        {season.points.map((point) => (
                          <CheckItem key={point}>{point}</CheckItem>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </>
            )}

            {d?.whyChooseUs && (
              <>
                <div className="mt-14">
                  <SectionHeading>Why Choose {site.name}?</SectionHeading>
                </div>
                <ul className="mt-6 space-y-5">
                  {d.whyChooseUs.map((item) => (
                    <li key={item.title} className="flex gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue/15 text-blue">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M4 12l5 5L20 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <div>
                        <div className="text-base font-semibold text-ink">{item.title}</div>
                        <p className="mt-0.5 text-sm text-ink">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {d?.fixedDepartures && (
              <>
                <div id="dates" className="mt-14 scroll-mt-[170px]">
                  <SectionHeading>Fixed Departure Dates</SectionHeading>
                </div>
                <div className="mt-8">
                  <FixedDepartures dates={d.fixedDepartures} />
                </div>
              </>
            )}

            {d?.faqs && (
              <>
                <div id="faqs" className="mt-14 scroll-mt-[170px]">
                  <SectionHeading>Frequently Asked Questions</SectionHeading>
                </div>
                <div className="mt-8">
                  <Accordion items={d.faqs.map((f) => ({ title: f.q, content: f.a }))} />
                </div>
              </>
            )}

            {d?.policies && (
              <>
                <div className="mt-14">
                  <SectionHeading>Booking &amp; Cancellation Policy</SectionHeading>
                </div>
                <div className="mt-8">
                  <Accordion items={d.policies} />
                </div>
              </>
            )}
          </div>

          <div className="lg:col-span-1">
            <BookingCard trek={trek} fixedDepartures={d?.fixedDepartures} packages={d?.packages} />
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3 px-5 py-4">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue/10 text-blue">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {icon}
        </svg>
      </span>
      <div>
        <div className="text-[11px] uppercase tracking-wide text-ink">{label}</div>
        <div className="mt-1 text-sm font-semibold text-ink">{value}</div>
      </div>
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
