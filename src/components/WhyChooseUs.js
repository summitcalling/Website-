import { CONTAINER } from "@/lib/layout";

const features = [
  {
    title: "Local Trekking Experts",
    description:
      "Every guide is born and raised in the region you're trekking — real knowledge, not a script.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 21s-7-6.1-7-11.5A7 7 0 0112 2a7 7 0 017 7.5C19 14.9 12 21 12 21z" />
      </svg>
    ),
  },
  {
    title: "Fixed Small-Group Departures",
    description:
      "Guaranteed dates, capped group sizes, no waiting for a minimum headcount to form.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M8 21V7a4 4 0 118 0v14M3 21h18M12 3v0" />
      </svg>
    ),
  },
  {
    title: "Safety-First Itineraries",
    description:
      "Acclimatization days built into every route, with trained guides carrying oximeters and first-aid kits.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" />
      </svg>
    ),
  },
  {
    title: "24/7 WhatsApp Support",
    description:
      "Real humans on the other end, before, during, and after your trek — not a chatbot.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 16 16" fill="currentColor">
        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.006-3.492c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.593-6.593 6.593zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.588-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.337-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-cream border-y border-ink/5">
      <div className={`${CONTAINER} py-20`}>
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue">
            <span className="h-px w-6 bg-blue" />
            Why Choose Us
            <span className="h-px w-6 bg-blue" />
          </span>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl font-semibold uppercase tracking-wide text-ink">
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
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue/10 text-blue transition-colors group-hover:bg-blue group-hover:text-white">
                {feature.icon}
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
