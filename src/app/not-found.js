import Image from "next/image";
import Link from "next/link";
import { CONTAINER } from "@/lib/layout";

export default function NotFound() {
  return (
    <section className="bg-cream">
      <div className={`${CONTAINER} flex flex-col items-center justify-center gap-8 py-20 text-center sm:py-28 lg:flex-row lg:gap-16 lg:py-32`}>
        <div className="relative h-[280px] w-[220px] shrink-0 sm:h-[360px] sm:w-[280px]">
          <Image
            src="/lost-trekker.png"
            alt="A lost trekker scratching his head"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="flex flex-col items-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue">
            404 Error
          </span>
          <h1 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">
            Looks Like You&apos;ve Wandered Off the Trail
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink">
            The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you back on route.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-dark"
            >
              Back to Home
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/treks"
              className="inline-flex items-center gap-2 border border-blue px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-blue hover:text-white"
            >
              Browse Treks
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
