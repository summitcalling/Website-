import { CONTAINER } from "@/lib/layout";

const features = [
  {
    title: "Local Trekking Experts",
    description:
      "Every guide is born and raised in the region you're trekking — real knowledge, not a script.",
    icon: (
      <path d="M12 21s-7-6.1-7-11.5A7 7 0 0112 2a7 7 0 017 7.5C19 14.9 12 21 12 21z" />
    ),
  },
  {
    title: "Fixed Small-Group Departures",
    description:
      "Guaranteed dates, capped group sizes, no waiting for a minimum headcount to form.",
    icon: <path d="M8 21V7a4 4 0 118 0v14M3 21h18M12 3v0" />,
  },
  {
    title: "Safety-First Itineraries",
    description:
      "Acclimatization days built into every route, with trained guides carrying oximeters and first-aid kits.",
    icon: <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" />,
  },
  {
    title: "24/7 WhatsApp Support",
    description:
      "Real humans on the other end, before, during, and after your trek — not a chatbot.",
    icon: <path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2z" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-cream border-y border-ink/5">
      <div className={`${CONTAINER} py-20`}>
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-orange">
            <span className="h-px w-6 bg-orange" />
            Why Choose Us
            <span className="h-px w-6 bg-orange" />
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-semibold text-ink">
            Your Trusted Trekking Partner in Nepal
          </h2>
          <p className="mt-4 text-ink/60">
            Everything we do is built around your safety, comfort, and a
            deeper connection to the Himalayas.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group flex flex-col items-center rounded-2xl border border-ink/10 bg-white p-7 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5"
            >
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-orange/10 text-orange transition-colors group-hover:bg-orange group-hover:text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  {feature.icon}
                </svg>
              </span>
              <h3 className="mt-5 font-serif text-lg font-semibold text-ink">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-ink/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
