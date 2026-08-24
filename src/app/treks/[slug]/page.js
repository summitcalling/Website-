import { notFound } from "next/navigation";
import { getTrekBySlug, treks } from "@/data/treks";
import { site, whatsappLink } from "@/data/site";
import { CONTAINER } from "@/lib/layout";
import Accordion from "@/components/Accordion";
import BookingCard from "@/components/BookingCard";
import FixedDepartures from "@/components/FixedDepartures";
import Itinerary from "@/components/Itinerary";
import MobileBookingBar from "@/components/MobileBookingBar";
import TrekGallery from "@/components/TrekGallery";
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
  const lowestPackagePrice = d?.packages?.length
    ? Math.min(...d.packages.map((pkg) => pkg.priceINR))
    : null;
  const mobileBarPrice = lowestPackagePrice ?? trek.price;
  const orderedPackages = d?.packages
    ? [...d.packages].sort((a, b) => {
        const aWithout = a.name.toLowerCase().includes("without") ? 0 : 1;
        const bWithout = b.name.toLowerCase().includes("without") ? 0 : 1;
        return aWithout - bWithout;
      })
    : [];
  const popularPackageIndex = orderedPackages.findIndex((pkg) =>
    pkg.name.toLowerCase().includes("without")
  );

  const navItems = [
    { id: "overview", label: "Overview" },
    { id: "itinerary", label: "Itinerary" },
    d?.packages && { id: "packages", label: "Packages" },
    d?.fixedDepartures && { id: "dates", label: "Dates" },
    d?.faqs && { id: "faqs", label: "FAQs" },
  ].filter(Boolean);

  const statItems = [
    {
      label: "Location",
      value: trek.region,
      icon: (
        <>
          <path d="M12 21s-7-6.1-7-11.5A7 7 0 0112 2a7 7 0 017 7.5C19 14.9 12 21 12 21z" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="9.5" r="2.5" />
        </>
      ),
    },
    {
      label: "Duration",
      value: `${trek.duration} days`,
      icon: (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
        </>
      ),
    },
    {
      label: "Max Altitude",
      value: trek.maxAltitude,
      icon: <path d="M3 19h18L14.5 8l-3 4.5-2-2.5L3 19z" strokeLinejoin="round" />,
    },
    {
      label: "Grade",
      value: trek.difficulty,
      icon: (
        <>
          <rect x="3" y="15" width="3.5" height="6" rx="1" />
          <rect x="9.25" y="11" width="3.5" height="10" rx="1" />
          <rect x="15.5" y="7" width="3.5" height="14" rx="1" />
        </>
      ),
    },
  ];

  return (
    <>
      <section className="bg-white pt-8">
        <div className={`${CONTAINER} pb-6 sm:pb-12`}>
          <TrekGallery gallery={gallery} name={trek.name} />

          <h1 className="mt-8 text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-[42px]">
            {trek.name}
          </h1>

          <div className="-mx-5 mt-10 grid grid-cols-4 gap-x-0 sm:hidden">
            {statItems.map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      <div className="hidden sm:block">
        <TrekSubNav items={navItems} />
      </div>

      <section className="bg-white">
        <div className={`${CONTAINER} pt-6 sm:pt-16 pb-28 lg:pb-16 grid grid-cols-1 lg:grid-cols-3 gap-12`}>
          <div className="flex flex-col lg:col-span-2">
            <div className="order-[3] mt-14 sm:order-none sm:mt-0">
              <div id="overview" className="scroll-mt-[170px]">
                <SectionHeading>Overview</SectionHeading>
              </div>
              <div className="hidden -mx-5 mt-6 grid-cols-4 gap-x-0 sm:mx-0 sm:grid sm:divide-x sm:divide-ink/10 sm:rounded-2xl sm:ring-1 sm:ring-black/5 sm:shadow-sm">
                {statItems.map((s) => (
                  <Stat key={s.label} {...s} />
                ))}
              </div>

              <div className="mt-8 space-y-4">
                {(trek.overview ?? [trek.summary]).map((paragraph, i) => (
                  <p key={i} className={BODY_TEXT}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="order-[4] sm:order-none">
              <div className="mt-14">
                <SectionHeading>Trek Highlights</SectionHeading>
              </div>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {trek.highlights.map((highlight) => (
                  <CheckItem key={highlight}>{highlight}</CheckItem>
                ))}
              </ul>
            </div>

            <div className="order-[5] sm:order-none">
              <div id="itinerary" className="mt-14 scroll-mt-[170px]">
                <SectionHeading>Itinerary</SectionHeading>
              </div>
              <p className="mt-2 text-sm text-ink">Tap a day to see the full details.</p>
              <div className="mt-8">
                <Itinerary days={trek.itinerary} />
              </div>
            </div>

            {d?.packages && (
              <div className="order-[1] sm:order-none">
                <div id="packages" className="mt-0 sm:mt-14 scroll-mt-[170px]">
                  <SectionHeading>Package Options</SectionHeading>
                </div>
                <div className="mt-8 space-y-4 sm:hidden">
                  {orderedPackages.map((pkg, i) => (
                    <div
                      key={pkg.name}
                      className={`overflow-hidden rounded-2xl p-5 ring-1 ring-black/5 ${i === popularPackageIndex ? "bg-blue/[0.03]" : "bg-white"}`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-serif text-lg font-semibold text-ink">{pkg.name}</span>
                        {i === popularPackageIndex && (
                          <span className="rounded-full bg-blue/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-blue">
                            Popular
                          </span>
                        )}
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-[10px] font-semibold uppercase tracking-wide text-ink">
                            For Indians
                          </div>
                          <div className="mt-1 font-serif text-lg font-semibold text-ink">
                            ₹{pkg.priceINR.toLocaleString("en-IN")}
                          </div>
                          <div className="text-xs text-ink">+5% GST</div>
                        </div>
                        <div>
                          <div className="text-[10px] font-semibold uppercase tracking-wide text-ink">
                            Foreign Nationals
                          </div>
                          <div className="mt-1 font-serif text-lg font-semibold text-ink">
                            USD {pkg.priceUSD.toLocaleString("en-US")}
                          </div>
                        </div>
                      </div>
                      <a
                        href={whatsappLink(`Hi, I'd like to book the ${trek.name} — ${pkg.name} package.`)}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue"
                      >
                        Choose
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </div>
                  ))}
                </div>

                <div className="mt-8 hidden overflow-x-auto rounded-2xl ring-1 ring-black/5 sm:block">
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
                          Foreign Nationals
                        </th>
                        <th className="px-5 py-4" />
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-ink/10">
                      {orderedPackages.map((pkg, i) => (
                        <tr key={pkg.name} className={i === popularPackageIndex ? "bg-blue/[0.03]" : undefined}>
                          <td className="px-5 py-5 align-middle">
                            <div className="flex items-center gap-2">
                              <span className="font-serif text-lg font-semibold text-ink">{pkg.name}</span>
                              {i === popularPackageIndex && (
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
              </div>
            )}

            {d?.difficulty && (
              <div className="order-[6] sm:order-none">
                <div className="mt-14">
                  <SectionHeading>Trek Difficulty</SectionHeading>
                </div>
                <span className="mt-4 inline-block rounded-full bg-blue/10 px-3 py-1 text-xs font-semibold text-blue">
                  {d.difficulty.level}
                </span>
                <p className={`mt-5 ${BODY_TEXT}`}>{d.difficulty.description}</p>
              </div>
            )}

            {d?.inclusions && (
              <div className="order-[7] sm:order-none">
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
              </div>
            )}

            {d?.exclusions && (
              <div className="order-[8] sm:order-none">
                <div className="mt-14">
                  <SectionHeading>Exclusions</SectionHeading>
                </div>
                <ul className="mt-6 space-y-4">
                  {d.exclusions.map((item) => (
                    <li key={item.title} className="flex gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-500">
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
              </div>
            )}

            {d?.addOns && (
              <div className="order-[9] sm:order-none">
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
              </div>
            )}

            {d?.altitude && (
              <div className="order-[10] sm:order-none">
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
              </div>
            )}

            {d?.bestTime && (
              <div className="order-[11] sm:order-none">
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
              </div>
            )}

            {d?.whyChooseUs && (
              <div className="order-[12] sm:order-none">
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
              </div>
            )}

            {d?.fixedDepartures && (
              <div className="order-[2] sm:order-none">
                <div id="dates" className="mt-14 scroll-mt-[170px]">
                  <SectionHeading>Fixed Departure Dates</SectionHeading>
                </div>
                <div className="mt-8">
                  <FixedDepartures dates={d.fixedDepartures} />
                </div>
              </div>
            )}

            {d?.faqs && (
              <div className="order-[13] sm:order-none">
                <div id="faqs" className="mt-14 scroll-mt-[170px]">
                  <SectionHeading>Frequently Asked Questions</SectionHeading>
                </div>
                <div className="mt-8">
                  <Accordion items={d.faqs.map((f) => ({ title: f.q, content: f.a }))} />
                </div>
              </div>
            )}

            {d?.policies && (
              <div className="order-[14] sm:order-none">
                <div className="mt-14">
                  <SectionHeading>Booking &amp; Cancellation Policy</SectionHeading>
                </div>
                <div className="mt-8">
                  <Accordion items={d.policies} />
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <BookingCard trek={trek} fixedDepartures={d?.fixedDepartures} packages={d?.packages} />
          </div>
        </div>
      </section>

      <MobileBookingBar
        price={mobileBarPrice}
        message={`Hi, I'd like to book the ${trek.name}.`}
      />
    </>
  );
}

function Stat({ icon, label, value }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:items-start sm:gap-3 sm:px-5 sm:py-4 sm:text-left">
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="shrink-0 text-blue sm:h-[26px] sm:w-[26px]"
      >
        {icon}
      </svg>
      <div>
        <div className="text-xs font-semibold text-ink sm:text-[11px] sm:font-normal sm:uppercase sm:tracking-wide">
          {label}
        </div>
        <div className="mt-1 text-xs text-ink sm:text-sm sm:font-semibold">{value}</div>
      </div>
    </div>
  );
}

function SectionHeading({ children, dark }) {
  return (
    <div>
      <h2
        className={`font-serif text-3xl sm:text-4xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {children}
      </h2>
      <span className={`mt-3 block h-1 w-14 rounded-full ${dark ? "bg-white/30" : "bg-blue"}`} />
    </div>
  );
}
