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
    icon: (
      <>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M20.52 3.449C12.831-3.984.106 1.407.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.44 5.71 1.44h.005c9.5 0 15.442-8.657 12.83-16.339zm-3.99 15.351a10.68 10.68 0 01-5.435 1.494h-.004a10.9 10.9 0 01-5.549-1.513l-.397-.235-3.766.982 1.005-3.671-.259-.379a10.09 10.09 0 01-1.65-5.616c.005-6.126 5.043-11.096 11.245-11.096 3.007 0 5.831 1.174 7.943 3.294 2.11 2.121 3.271 4.94 3.269 7.943-.003 6.126-5.041 11.096-11.402 11.797z" />
      </>
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
