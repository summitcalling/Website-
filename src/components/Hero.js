import Image from "next/image";
import Link from "next/link";
import { site, whatsappLink } from "@/data/site";
import { CONTAINER } from "@/lib/layout";

const stats = [
  { value: "10+", label: "Years Guiding" },
  { value: "500+", label: "Happy Trekkers" },
  { value: "14", label: "Signature Routes" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink">
      <Image
        src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1920&q=75"
        alt="Sunrise over the Himalayas"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />

      <div className={`relative w-full pb-28 pt-32 sm:pb-16 ${CONTAINER}`}>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-medium tracking-wide text-white/90">
            {site.country} · Est. {site.founded} · Fixed Departures 2026
          </span>

          <h1 className="mt-6 font-serif text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] text-white">
            Experience Nepal <em className="text-orange not-italic">like</em>{" "}
            never before.
          </h1>

          <p className="mt-5 max-w-lg text-base sm:text-lg text-white/75">
            Guided trekking adventures, fixed departures, local experts, and
            unforgettable Himalayan experiences.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/treks"
              className="inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3.5 text-sm font-semibold text-white hover:bg-orange-dark transition-colors"
            >
              Explore Treks
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-sm font-semibold text-white hover:brightness-95 transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2z" />
              </svg>
              WhatsApp Us
            </a>
          </div>

          <div className="mt-14 grid w-full max-w-md grid-cols-3 gap-4 border-t border-white/15 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-serif text-2xl font-semibold text-white sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-white/60 sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
