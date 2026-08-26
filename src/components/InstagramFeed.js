import Image from "next/image";
import { site } from "@/data/site";
import { CONTAINER } from "@/lib/layout";

const posts = [
  { src: "/treks/ebc-7.jpg", alt: "Alpenglow on Mount Everest" },
  { src: "/treks/annapurna-7.jpg", alt: "Tilicho Lake surrounded by peaks" },
  { src: "/treks/mardi-8.jpg", alt: "Cairns beneath Machhapuchhre" },
  { src: "/treks/abc-10.jpg", alt: "Sunrise over the Annapurna range" },
  { src: "/treks/manaslu-7.jpg", alt: "Larkya La Pass prayer flags" },
  { src: "/treks/langtang-9.jpg", alt: "Langtang village at dusk" },
];

function InstagramGlyph({ className }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" className={className}>
      <defs>
        <radialGradient id="ig-gradient-feed" cx="30%" cy="107%" r="150%">
          <stop offset="0" stopColor="#fdf497" />
          <stop offset="0.05" stopColor="#fdf497" />
          <stop offset="0.45" stopColor="#fd5949" />
          <stop offset="0.6" stopColor="#d6249f" />
          <stop offset="0.9" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect x="1" y="1" width="22" height="22" rx="6" fill="url(#ig-gradient-feed)" />
      <rect x="6" y="6" width="12" height="12" rx="4" fill="none" stroke="#fff" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.2" fill="none" stroke="#fff" strokeWidth="1.6" />
      <circle cx="17" cy="7" r="1" fill="#fff" />
    </svg>
  );
}

export default function InstagramFeed() {
  return (
    <section className="bg-white">
      <div className={`${CONTAINER} py-20 sm:py-24`}>
        <div className="flex flex-col items-center gap-3 text-center">
          <InstagramGlyph className="shrink-0" />
          <span className="text-xs font-semibold uppercase tracking-widest text-blue">
            Follow Along
          </span>
          <h2 className="font-serif text-3xl text-ink sm:text-4xl">
            Follow Us on Instagram
          </h2>
          <p className="max-w-lg text-base leading-relaxed text-ink">
            Behind-the-scenes moments from the trail — join{" "}
            <span className="font-semibold text-ink">@thesummitcalling</span> for real trekking stories, not stock photos.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4 md:grid-cols-6">
          {posts.map((post) => (
            <a
              key={post.src}
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(min-width: 768px) 16vw, 30vw"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-300 group-hover:bg-ink/50">
                <InstagramGlyph className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-ink px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ink-light"
          >
            Follow @thesummitcalling
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
