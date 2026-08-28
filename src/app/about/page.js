import Image from "next/image";
import { site } from "@/data/site";
import { founders } from "@/data/founders";
import { CONTAINER } from "@/lib/layout";

export const metadata = {
  title: `About Us — ${site.name}`,
  description: `${site.name} is an adventure-based travel company specialising in Himalayan trekking, mountaineering, helicopter tours, and mountain flights.`,
};

const BODY_TEXT = "text-[17px] leading-relaxed text-ink";

function SectionHeading({ children, dark }) {
  return (
    <div>
      <h2
        className={`font-serif text-3xl sm:text-4xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {children}
      </h2>
      <span className={`mt-3 block h-1 w-14 rounded-full ${dark ? "bg-white/30" : "bg-blue"}`} />
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <div className="relative aspect-[16/9] sm:aspect-[21/9]">
          <Image
            src="/treks/ebc-7.jpg"
            alt="Sunrise over the Everest range"
            fill
            priority
            className="object-cover opacity-60"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
          <div className={`absolute inset-0 flex flex-col justify-end ${CONTAINER} pb-10 sm:pb-16`}>
            <span className="text-sm font-semibold uppercase tracking-widest text-blue sm:text-base">
              About
            </span>
            <h1 className="mt-2 font-serif text-4xl font-semibold leading-none text-white sm:text-6xl md:text-7xl">
              {site.name}
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className={`${CONTAINER} py-16`}>
          <SectionHeading>About Us</SectionHeading>

          <div className="mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-3 lg:gap-12">
            <div className="space-y-4 lg:col-span-2">
              <p className={BODY_TEXT}>
                Summit Calling is an adventure-based travel company specialising in Himalayan trekking, mountaineering, helicopter tours, mountain flights, and unforgettable mountain experiences.
              </p>
              <p className={BODY_TEXT}>
                Launched in 2026, Summit Calling was founded with a deep passion for the Himalayas and a desire to help more people experience the mountains up close. From walking through remote Himalayan trails and taking on high-altitude treks and expeditions to discovering some of the world&apos;s most breathtaking landscapes, we aim to create journeys that bring people closer to the mountains.
              </p>
              <p className={BODY_TEXT}>
                We are dedicated to making these experiences welcoming, well-planned, safe, and memorable for everyone — whether you are taking your first steps into the Himalayas or returning for your next adventure.
              </p>
              <p className={BODY_TEXT}>
                We aim to offer the best and most reasonable packages for our customers, while ensuring an experience that never compromises on safety, quality, or genuine hospitality.
              </p>
              <p className={BODY_TEXT}>
                Whether it is your first Himalayan trek, a high-altitude challenge, or simply your desire to explore the mountains, we want every journey with Summit Calling to be thoughtfully planned and truly memorable.
              </p>
            </div>

            <div className="relative mx-auto hidden h-[400px] w-full max-w-[340px] lg:block">
              <Image
                src="/trekker-duo-illustration.png"
                alt="Illustrated pair of trekkers with backpacks"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream border-y border-ink/5">
        <div className={`${CONTAINER} py-16`}>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading>Our Story</SectionHeading>
              <div className="mt-8 space-y-4">
                <p className={BODY_TEXT}>
                  Shekhar and Gauri first met during the Everest Base Camp trek in 2021. What started as two people sharing the same trail gradually grew into a close friendship built around a shared passion for mountaineering, adventure, exploration, travel, and the outdoors.
                </p>
                <p className={BODY_TEXT}>
                  Over the years, our friendship grew alongside our shared passion for mountaineering, exploration, and adventure. We continued exploring, taking on different treks and adventures, each bringing new experiences, challenges, and memories along the way.
                </p>
                <p className={BODY_TEXT}>
                  At one point, we began discussing the idea of starting a trekking and adventure company of our own — something that could help more people experience the mountains and create memories of their own.
                </p>
                <p className={`${BODY_TEXT} font-semibold`}>
                  And in 2026, we officially launched Summit Calling.
                </p>
              </div>
            </div>

            <div>
              <SectionHeading>Our Vision</SectionHeading>
              <div className="mt-8 space-y-4">
                <p className={BODY_TEXT}>
                  At Summit Calling, our vision is to create experiences that go beyond simply checking a destination off a list. We want our travellers to experience the sunrise from the mountains, the silence of a Himalayan trail, the excitement of stepping into the unknown, the challenge of pushing their limits, and the friendships formed along the way.
                </p>
                <p className={BODY_TEXT}>
                  We want every journey to be safe, thoughtfully planned, fairly priced, and genuinely memorable — because we believe the best adventures aren&apos;t measured only by the distance travelled or the altitude reached. They are measured by the memories you create along the way.
                </p>
              </div>
              <div className="mt-10 border-t border-ink/10 pt-8">
                <div className="font-serif text-xl font-semibold text-ink">{site.name}</div>
                <div className="mt-2 text-sm text-ink">
                  Launched in 2026. Built by mountaineers. Driven by adventure.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="founders" className="bg-white scroll-mt-20">
        <div className={`${CONTAINER} py-16`}>
          <SectionHeading>Meet the Founders</SectionHeading>

          <div className="mt-10 grid grid-cols-1 gap-12 sm:grid-cols-2">
            {founders.map((person) => (
              <div key={person.name} className="flex flex-col gap-5 sm:flex-row">
                <div className="relative aspect-[4/5] w-full max-w-[220px] shrink-0 overflow-hidden rounded-2xl">
                  <Image
                    src={person.photo}
                    alt={person.name}
                    fill
                    className="object-cover"
                    sizes="220px"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-ink">
                    {person.name}
                  </h3>
                  <div className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-blue">
                    {person.role}
                  </div>
                  <div className="mt-3 space-y-3">
                    {person.bio.map((paragraph, j) => (
                      <p key={j} className="text-sm leading-relaxed text-ink">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink">
        <div className={`${CONTAINER} py-16`}>
          <SectionHeading dark>Our Respect for the Mountains</SectionHeading>

          <div className="mt-8 grid grid-cols-1 items-center gap-12 lg:grid-cols-3">
            <div className="space-y-4 lg:col-span-2">
              <p className="text-[17px] leading-relaxed text-white">
                The mountains are not simply destinations to us. They are environments that deserve to be experienced with respect, responsibility, and care. We encourage responsible travel, respect for local communities and cultures, and mindful behaviour towards the environment — leaving no unnecessary trace behind and preserving the beauty of the mountains for the people who will experience them after us.
              </p>
              <p className="font-serif text-xl italic text-white">
                &ldquo;We don&apos;t just want people to experience the mountains. We want them to respect them.&rdquo;
              </p>
            </div>
            <div className="relative aspect-[3/2] overflow-hidden rounded-3xl">
              <Image
                src="/treks/ebc-3.jpg"
                alt="Prayer flags and a stupa on the trail to Tengboche"
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 360px, 90vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
