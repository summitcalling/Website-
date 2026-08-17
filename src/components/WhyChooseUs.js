import Image from "next/image";
import { CONTAINER } from "@/lib/layout";

const features = [
  {
    title: "Local Trekking Experts",
    description:
      "Every guide is born and raised in the region you're trekking — real knowledge, not a script.",
  },
  {
    title: "Fixed Small-Group Departures",
    description:
      "Guaranteed dates, capped group sizes, no waiting for a minimum headcount to form.",
  },
  {
    title: "Safety-First Itineraries",
    description:
      "Acclimatization days built into every route, with trained guides carrying oximeters and first-aid kits.",
  },
  {
    title: "24/7 WhatsApp Support",
    description:
      "Real humans on the other end, before, during, and after your trek — not a chatbot.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-cream border-y border-ink/5">
      <div className={`${CONTAINER} py-20 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16`}>
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue">
            <span className="h-px w-6 bg-blue" />
            Why Choose Us
          </span>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl font-semibold uppercase tracking-wide text-ink">
            Your Trusted Trekking Partner in Nepal
          </h2>
          <p className="mt-4 text-ink">
            Everything we do is built around your safety, comfort, and a
            deeper connection to the Himalayas.
          </p>

          <div className="mt-10 space-y-0">
            {features.map((feature, i) => (
              <div key={feature.title} className="flex items-baseline gap-5 border-t border-ink/10 py-6 first:border-t-0 first:pt-0">
                <span className="font-serif text-2xl font-semibold text-blue/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-ink">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid w-full grid-cols-2 gap-5">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
            <Image
              src="/treks/annapurna-2.jpg"
              alt="A trekker on the trail in the Annapurna region"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 360px, 45vw"
            />
          </div>
          <div className="relative mt-10 aspect-[3/4] overflow-hidden rounded-2xl">
            <Image
              src="/treks/abc-2.jpg"
              alt="Namaste sign at Annapurna Base Camp"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 360px, 45vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
