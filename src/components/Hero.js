import Image from "next/image";
import { CONTAINER } from "@/lib/layout";
import HeroVideo from "@/components/HeroVideo";
import RotatingWord from "@/components/RotatingWord";

const stats = [
  {
    value: "24/7",
    label: "WhatsApp Support",
    icon: (
      <>
        <path d="M4 5h16v10H9l-5 4V5z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 9h8M8 12h5" strokeLinecap="round" />
      </>
    ),
  },
  {
    value: "Licensed",
    label: "Local Guides",
    icon: (
      <>
        <path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    value: "Best Price",
    label: "Guaranteed",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M9.5 9.5c0-1.4 1.1-2 2.5-2s2.5.7 2.5 2-1 1.7-2.5 2-2.5.7-2.5 2 1.1 2 2.5 2 2.5-.6 2.5-2" />
      </>
    ),
  },
  {
    value: "Committed To",
    label: "Sustainability",
    icon: (
      <>
        <path d="M5 20c8 0 13-5 13-13 0-1 0-2-.2-3-6 0-11 3-12.6 8C4.4 14 4 17 5 20z" />
        <path d="M5 20c2-4 5-7 9-9" />
      </>
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative flex h-[93vh] min-h-[600px] flex-col overflow-hidden bg-ink">
      <Image
        src="/kala-patthar-hero.jpg"
        alt="Sunrise view of Mount Everest from Kala Patthar"
        fill
        priority
        className="absolute inset-0 object-cover sm:hidden"
        sizes="100vw"
      />
      <HeroVideo
        poster="https://assets.mixkit.co/videos/45414/45414-thumb-720-1.jpg"
        src="https://assets.mixkit.co/videos/45414/45414-720.mp4"
        className="absolute inset-0 hidden h-full w-full object-cover sm:block"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />

      <div className={`relative flex flex-1 items-center w-full ${CONTAINER}`}>
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          <p className="text-3xl sm:text-4xl font-medium text-white/90">
            Your Journey Starts Here
          </p>

          <h1 className="mt-6 font-serif text-6xl sm:text-7xl md:text-8xl font-semibold leading-[1.1] text-white">
            <RotatingWord />
          </h1>

          <form action="/treks" className="mt-8 flex w-full max-w-2xl items-center gap-2 rounded-full bg-white p-1.5 shadow-lg">
            <input
              type="text"
              name="q"
              placeholder="Search treks — e.g. Everest, Annapurna"
              className="min-w-0 flex-1 rounded-full bg-transparent px-5 py-2.5 text-base text-ink placeholder:text-ink/40 outline-none"
            />
            <button
              type="submit"
              aria-label="Search treks"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue text-white transition-colors hover:bg-blue-dark"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      <div className={`relative w-full pb-10 ${CONTAINER}`}>
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex items-center justify-center gap-3 sm:justify-start"
            >
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-white">
                {stat.icon}
              </svg>
              <div className="text-left whitespace-nowrap">
                <div className="text-xl font-semibold leading-tight text-white">{stat.value}</div>
                <div className="text-base text-white/60">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
