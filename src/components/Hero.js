import Image from "next/image";
import { CONTAINER } from "@/lib/layout";
import HeroVideo from "@/components/HeroVideo";
import RotatingWord from "@/components/RotatingWord";

const stats = [
  {
    value: "24/7",
    label: "WhatsApp Support",
    icon: (
      <path d="M5 5.25h14a1.75 1.75 0 0 1 1.75 1.75v8.5A1.75 1.75 0 0 1 19 17.25h-8.94l-4.31 3.68v-3.68H5A1.75 1.75 0 0 1 3.25 15.5V7A1.75 1.75 0 0 1 5 5.25Z" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    value: "Licensed",
    label: "Local Guides",
    icon: (
      <>
        <path d="M9 12.75 11.25 15 15 9.75" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    value: "Best Price",
    label: "Guaranteed",
    icon: (
      <>
        <path d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="9" />
      </>
    ),
  },
  {
    value: "Committed To",
    label: "Sustainability",
    icon: (
      <>
        <path d="M12 21a9 9 0 0 0 8.716-6.747M12 21a9 9 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a9 9 0 0 1 7.843 4.582M12 3a9 9 0 0 0-7.843 4.582m15.686 0A11.95 11.95 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A9 9 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.92 17.92 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9 9 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative flex h-[calc(100vh-77px)] min-h-[600px] flex-col overflow-hidden bg-ink md:h-[calc(100vh-69px)]">
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
          <p className="text-base font-medium text-white sm:text-2xl">
            Summit Calling Awaits
          </p>

          <h1 className="mt-6 font-serif text-6xl sm:text-7xl md:text-8xl font-semibold leading-[1.1] text-white">
            <RotatingWord />
          </h1>
        </div>
      </div>

      <div className={`relative w-full pb-6 sm:pb-10 ${CONTAINER}`}>
        <div className="ml-4 grid max-w-4xl grid-cols-2 gap-x-3 gap-y-5 sm:mx-auto sm:gap-x-6 sm:gap-y-8 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex items-start justify-start gap-2 sm:items-center sm:gap-3 ${i % 2 === 1 ? "ml-2 sm:ml-0" : ""}`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-0.5 h-5 w-5 shrink-0 text-white sm:mt-0 sm:h-[34px] sm:w-[34px]"
              >
                {stat.icon}
              </svg>
              <div className="text-left">
                <div className="text-sm font-semibold leading-tight text-white sm:text-xl">{stat.value}</div>
                <div className="text-xs leading-snug text-white sm:text-base">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
