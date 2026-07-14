import Image from "next/image";
import Link from "next/link";
import { whatsappLink } from "@/data/site";
import { CONTAINER } from "@/lib/layout";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-ink py-24">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Sunset_in_himalaya.jpg/1920px-Sunset_in_himalaya.jpg"
        alt="Sunset over the Himalayan range"
        fill
        className="object-cover opacity-30"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />

      <div className={`relative ${CONTAINER}`}>
        <div className="mx-auto flex max-w-2xl flex-col items-center rounded-3xl border border-white/10 bg-white/5 px-8 py-14 text-center backdrop-blur-sm sm:px-14">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-orange">
            <span className="h-px w-6 bg-orange" />
            Fixed Departures 2026
            <span className="h-px w-6 bg-orange" />
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-semibold text-white">
            Ready for your next adventure?
          </h2>
          <p className="mt-4 text-white/70">
            Start planning your dream trek today. Our team replies within an
            hour, 7 days a week.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/treks"
              className="inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3.5 text-sm font-semibold text-white hover:bg-orange-dark transition-colors"
            >
              Browse Treks
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
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
