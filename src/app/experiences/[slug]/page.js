import { notFound } from "next/navigation";
import { getExperienceBySlug, experiences } from "@/data/experiences";
import { site, whatsappLink, telLink } from "@/data/site";
import { CONTAINER } from "@/lib/layout";
import Accordion from "@/components/Accordion";
import Itinerary from "@/components/Itinerary";
import MobileBookingBar from "@/components/MobileBookingBar";
import TrekGallery from "@/components/TrekGallery";
import TrekSubNav from "@/components/TrekSubNav";

const BODY_TEXT = "text-[17px] leading-relaxed text-ink";

export function generateStaticParams() {
  return experiences.map((exp) => ({ slug: exp.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const exp = getExperienceBySlug(slug);
  if (!exp) return {};
  return {
    title: `${exp.name} — ${site.name}`,
    description: exp.summary,
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

function SectionHeading({ children }) {
  return (
    <div>
      <h2 className="font-serif text-3xl sm:text-4xl text-ink">
        {children}
      </h2>
      <span className="mt-3 block h-1 w-14 rounded-full bg-blue" />
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="px-5 py-4">
      <div className="text-[11px] uppercase tracking-wide text-ink">{label}</div>
      <div className="mt-1 text-sm font-semibold text-ink">{value}</div>
    </div>
  );
}

export default async function ExperienceDetailPage({ params }) {
  const { slug } = await params;
  const exp = getExperienceBySlug(slug);
  if (!exp) notFound();

  const d = exp.details;
  const gallery = exp.gallery ?? [exp.image];

  const navItems = [
    { id: "overview", label: "Overview" },
    { id: "itinerary", label: "Itinerary" },
    d?.faqs && { id: "faqs", label: "FAQs" },
  ].filter(Boolean);

  const message = `Hi, I'd like to book the ${exp.name}.`;

  return (
    <>
      <section className="bg-white pt-8">
        <div className={`${CONTAINER} pb-12`}>
          <TrekGallery gallery={gallery} name={exp.name} />

          <span className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue">
            {exp.type}
          </span>
          <h1 className="mt-2 text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-[42px]">
            {exp.name}
          </h1>
        </div>
      </section>

      <div className="hidden sm:block">
        <TrekSubNav items={navItems} />
      </div>

      <section className="bg-white">
        <div className={`${CONTAINER} py-16 grid grid-cols-1 lg:grid-cols-3 gap-12`}>
          <div className="order-2 lg:order-none lg:col-span-2">
            <div id="overview" className="scroll-mt-[170px]">
              <SectionHeading>Overview</SectionHeading>
            </div>
            <div className="mt-6 grid grid-cols-2 divide-x divide-y sm:divide-y-0 divide-ink/10 rounded-2xl ring-1 ring-black/5 shadow-sm sm:grid-cols-4">
              {exp.facts.slice(0, 4).map((fact) => (
                <Stat key={fact.label} label={fact.label} value={fact.value} />
              ))}
            </div>

            <div className="mt-8 space-y-4">
              {(exp.overview ?? [exp.summary]).map((paragraph, i) => (
                <p key={i} className={BODY_TEXT}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-14">
              <SectionHeading>Tour Highlights</SectionHeading>
            </div>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {exp.highlights.map((highlight) => (
                <CheckItem key={highlight}>{highlight}</CheckItem>
              ))}
            </ul>

            <div className="mt-14">
              <SectionHeading>Trip Facts</SectionHeading>
            </div>
            <div className="mt-6 divide-y divide-ink/10 rounded-2xl ring-1 ring-black/5 shadow-sm">
              {exp.facts.map((fact) => (
                <div key={fact.label} className="flex items-center justify-between gap-4 px-5 py-3.5">
                  <span className="text-sm font-medium text-ink">{fact.label}</span>
                  <span className="text-right text-sm font-semibold text-ink">{fact.value}</span>
                </div>
              ))}
            </div>

            <div id="itinerary" className="mt-14 scroll-mt-[170px]">
              <SectionHeading>Detailed Itinerary</SectionHeading>
            </div>
            <div className="mt-8">
              <Itinerary days={exp.itinerary} />
            </div>

            {d?.inclusions && (
              <>
                <div className="mt-14">
                  <SectionHeading>Package Inclusions</SectionHeading>
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
                  <SectionHeading>Package Exclusions</SectionHeading>
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
              </>
            )}

            {d?.addOns && (
              <>
                <div className="mt-14">
                  <SectionHeading>Add-on Services</SectionHeading>
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

            {d?.importantInfo && (
              <>
                <div className="mt-14">
                  <SectionHeading>Important Information</SectionHeading>
                </div>
                <ul className="mt-6 space-y-3">
                  {d.importantInfo.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue/15 text-blue">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M4 12l5 5L20 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className={BODY_TEXT}>{point}</span>
                    </li>
                  ))}
                </ul>
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

          <div className="order-1 lg:order-none lg:col-span-1">
            <div className="lg:sticky lg:top-[170px] overflow-hidden rounded-2xl border border-ink/15 bg-white shadow-xl shadow-ink/10">
              <div className="p-6">
                <div className="text-lg font-semibold text-ink">Book This Tour</div>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="font-serif text-3xl font-semibold text-ink">
                    USD {exp.priceUSD.toLocaleString("en-US")}
                  </span>
                </div>
                {exp.priceINR && (
                  <div className="mt-1 text-sm font-semibold text-ink">
                    or ₹{exp.priceINR.toLocaleString("en-IN")} for Indian nationals
                  </div>
                )}
                <div className="mt-1 text-sm text-ink">{exp.priceNote}</div>
              </div>

              <div className="border-t border-ink/10" />

              <div className="p-6">
                <div className="flex gap-3">
                  <a
                    href={whatsappLink(message)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-ink py-3.5 text-sm font-semibold text-white hover:bg-ink-light transition-colors"
                  >
                    Book Now
                  </a>
                  <a
                    href={telLink()}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-ink/15 py-3.5 text-sm font-semibold text-ink hover:border-blue/40 hover:text-blue transition-colors"
                  >
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MobileBookingBar
        price={exp.priceUSD}
        message={message}
        currency="USD"
      />
    </>
  );
}
