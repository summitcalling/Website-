import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { site } from "@/data/site";
import { founders } from "@/data/founders";
import { CONTAINER } from "@/lib/layout";

export const metadata = {
  title: `About Us — ${site.name}`,
  description: `Learn about ${site.name}, a Nepal-based trekking company guiding travellers through the Himalayas since ${site.founded}.`,
};

const values = [
  {
    title: "Local First",
    description:
      "Every guide, porter, and lodge we work with is Nepali — the money you spend stays in the communities you trek through.",
    icon: <path d="M12 21s-7-6.1-7-11.5A7 7 0 0112 2a7 7 0 017 7.5C19 14.9 12 21 12 21z" />,
  },
  {
    title: "Safety Without Compromise",
    description:
      "Every itinerary is built around proper acclimatization, not the fastest possible route to the summit.",
    icon: <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" />,
  },
  {
    title: "Honest Pricing",
    description:
      "The price you see is the price you pay — no hidden permit fees, no surprise surcharges at altitude.",
    icon: <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM12 6v12M9 9h4.5a2 2 0 010 4H9" />,
  },
];

const milestones = [
  { value: site.founded, label: "Founded in Kathmandu" },
  { value: "10+", label: "Years on the trail" },
  { value: "500+", label: "Trekkers guided" },
  { value: "14", label: "Signature routes" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title={`The Story Behind ${site.name}`}
        description="A small team of Nepali guides who believe the mountains are best experienced properly — slowly, safely, and led by people who grew up in their shadow."
      />

      <section className="bg-cream">
        <div className={`${CONTAINER} py-20 grid grid-cols-1 items-center gap-14 lg:grid-cols-2`}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=75"
              alt="Guide leading trekkers through the Himalayas"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 500px, 90vw"
            />
          </div>
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue">
              <span className="h-px w-6 bg-blue" />
              Our Mission
            </span>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl font-semibold uppercase tracking-wide text-ink">
              Trekking done the right way.
            </h2>
            <p className="mt-4 text-ink/70 leading-relaxed">
              {site.name} started with a simple frustration: too many
              trekking companies were run by agents in faraway offices who
              had never carried a pack above 4,000 metres themselves. We
              built a company run by the guides who actually lead the treks —
              people from Khumbu, Annapurna, and Langtang who know these
              trails better than anyone.
            </p>
            <p className="mt-4 text-ink/70 leading-relaxed">
              Every fixed departure is capped at a small group size, every
              itinerary has real acclimatization days built in, and every
              rupee you spend goes back into the communities along the
              route.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-ink/10 pt-8 sm:grid-cols-4">
              {milestones.map((m) => (
                <div key={m.label}>
                  <div className="font-serif text-2xl font-semibold text-ink">
                    {m.value}
                  </div>
                  <div className="mt-1 text-xs text-ink/50">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream border-y border-ink/5">
        <div className={`${CONTAINER} py-20`}>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue">
              <span className="h-px w-6 bg-blue" />
              What We Stand For
              <span className="h-px w-6 bg-blue" />
            </span>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl font-semibold uppercase tracking-wide text-ink">
              Our Values
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex flex-col items-center rounded-2xl border border-ink/10 bg-white p-7 text-center shadow-sm"
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue/10 text-blue">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    {value.icon}
                  </svg>
                </span>
                <h3 className="mt-5 font-serif text-lg font-semibold text-ink">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-ink/60 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="founders" className="bg-white scroll-mt-20">
        <div className={`${CONTAINER} py-20`}>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue">
              <span className="h-px w-6 bg-blue" />
              The People
              <span className="h-px w-6 bg-blue" />
            </span>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl font-semibold uppercase tracking-wide text-ink">
              Meet the Founders
            </h2>
          </div>

          <div className="mt-14 space-y-16">
            {founders.map((person, i) => (
              <div
                key={person.name}
                className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/5] max-w-sm mx-auto lg:mx-0 overflow-hidden rounded-3xl">
                  <Image
                    src={person.photo}
                    alt={person.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 400px, 90vw"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-ink">
                    {person.name}
                  </h3>
                  <div className="mt-1 text-sm font-semibold uppercase tracking-wide text-blue">
                    {person.role}
                  </div>
                  <div className="mt-5 space-y-4">
                    {person.bio.map((paragraph, j) => (
                      <p key={j} className="text-ink/70 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
