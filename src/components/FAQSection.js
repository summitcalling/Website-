import Accordion from "@/components/Accordion";
import { CONTAINER } from "@/lib/layout";

const faqs = [
  {
    title: "Do I need prior trekking experience?",
    content:
      "No — most of our treks are beginner-friendly with the right preparation. For higher-altitude routes we'll be upfront about the fitness level needed, and our guides adjust pace to the group.",
  },
  {
    title: "How do I know which trek is right for me?",
    content:
      "Use the trek finder above, or just WhatsApp us your fitness level, available days, and what you want to see — we'll recommend a route within minutes.",
  },
  {
    title: "What's included in the price?",
    content:
      "Permits, accommodation, guides, and porters are always included. Meals, flights, and gear vary by trek — every trek page has a full breakdown under Inclusions & Exclusions.",
  },
  {
    title: "Is it safe to trek at high altitude?",
    content:
      "Every itinerary builds in acclimatization days, and our guides carry oximeters and first-aid kits. We monitor every trekker daily and can arrange evacuation if needed.",
  },
  {
    title: "Can I customize a fixed departure into a private trip?",
    content:
      "Yes — dates, group size, and route can all be adjusted for private bookings. Message us on WhatsApp with what you have in mind and we'll put together a custom quote.",
  },
  {
    title: "What's your cancellation policy?",
    content:
      "Full policy details are on each trek's page, but in general we offer flexible rescheduling and partial refunds the further out you cancel. Ask us directly for your specific trek.",
  },
];

export default function FAQSection() {
  return (
    <section className="bg-cream border-t border-ink/5">
      <div className={`${CONTAINER} py-20`}>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue">
            <span className="h-px w-6 bg-blue" />
            FAQs
            <span className="h-px w-6 bg-blue" />
          </span>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl font-semibold uppercase tracking-wide text-ink">
            Got Questions?
          </h2>
          <p className="mt-4 text-ink/60">
            The answers we get asked most, before anyone even books.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  );
}
