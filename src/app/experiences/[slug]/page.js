import Image from "next/image";
import { notFound } from "next/navigation";
import { getExperienceBySlug, experiences } from "@/data/experiences";
import { site, whatsappLink, telLink } from "@/data/site";
import { CONTAINER } from "@/lib/layout";
import Accordion from "@/components/Accordion";
import Itinerary from "@/components/Itinerary";
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
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="relative aspect-[16/11] overflow-hidden rounded-2xl sm:aspect-auto">
              <Image
                src={gallery[0]}
                alt={exp.name}
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
                    alt={`${exp.name} photo ${i + 2}`}
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
              ))}
            </div>
          </div>

          <span className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue">
            {exp.type}
          </span>
          <h1 className="mt-2 text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-[42px]">
            {exp.name}
          </h1>
          <div className="mt-4 flex flex-wrap gap-x-10 gap-y-2">
            <div className="text-base text-ink">
              Duration: <span className="text-ink">{exp.duration}</span>
            </div>
            <div className="text-base text-ink">
              Region: <span className="text-ink">{exp.region}</span>
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
                <ul className="mt-6 space-y-2">
                  {d.importantInfo.map((point) => (
                    <li key={point} className={`flex items-start gap-2.5 ${BODY_TEXT}`}>
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-blue" />
                      {point}
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

          <div className="lg:col-span-1">
            <div className="sticky top-[170px] overflow-hidden rounded-2xl border border-ink/15 bg-white shadow-xl shadow-ink/10">
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
                <a
                  href={whatsappLink(message)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink py-3.5 text-sm font-semibold text-white hover:bg-ink-light transition-colors"
                >
                  Book Now
                </a>

                <div className="mt-3 flex gap-3">
                  <a
                    href={telLink()}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-ink/15 py-3 text-sm font-semibold text-ink hover:border-blue/40 hover:text-blue transition-colors"
                  >
                    Call Us
                  </a>
                  <a
                    href={whatsappLink(message)}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Chat on WhatsApp"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-whatsapp text-white hover:brightness-95 transition-all"
                  >
                    <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.006-3.492c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.593-6.593 6.593zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.588-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.337-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
