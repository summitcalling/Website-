import Image from "next/image";
import { CONTAINER } from "@/lib/layout";

const categories = [
  {
    title: "Helicopter Tours",
    description: "Everest views from the sky, no trekking boots required.",
    image:
      "https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=900&q=70",
    icon: <path d="M12 2v6m0 0l-4 2m4-2l4 2M4 20h16M6 20l1-8h10l1 8" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    title: "Cultural Tours",
    description: "Temples, stupas, and Kathmandu's living heritage.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Boudhanath_stupa%2C_Kathmandu_01.jpg/960px-Boudhanath_stupa%2C_Kathmandu_01.jpg",
    icon: <circle cx="12" cy="12" r="9" />,
  },
  {
    title: "Jungle Safari",
    description: "Rhinos, tigers, and dense jungle in Chitwan National Park.",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=70",
    icon: <path d="M12 3c-4 3-7 7-7 11a7 7 0 0014 0c0-4-3-8-7-11z" />,
  },
];

export default function TourCategories() {
  return (
    <section className="bg-cream">
      <div className={`${CONTAINER} py-20`}>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue">
            <span className="h-px w-6 bg-blue" />
            Beyond Trekking
            <span className="h-px w-6 bg-blue" />
          </span>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl font-semibold uppercase tracking-wide text-ink">
            More Ways to Explore Nepal
          </h2>
          <p className="mt-4 text-ink/60">
            Not every trip has to start with a trailhead — here&apos;s what else
            Nepal has to offer.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-ink/10 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/10"
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(min-width: 640px) 33vw, 90vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/30 to-transparent" />

              <span className="absolute left-5 top-5 font-serif text-sm font-semibold text-white/70">
                0{i + 1}
              </span>

              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue text-white mb-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {cat.icon}
                  </svg>
                </span>
                <h3 className="font-serif text-xl font-semibold text-white">
                  {cat.title}
                </h3>
                <p className="mt-1.5 text-sm leading-snug text-white/70">
                  {cat.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-transform duration-300 group-hover:translate-x-1">
                  Explore
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
