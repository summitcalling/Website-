import Image from "next/image";
import { gallery } from "@/data/gallery";
import { CONTAINER } from "@/lib/layout";

export default function Gallery() {
  return (
    <section className="bg-cream">
      <div className={`${CONTAINER} py-20`}>
        <div className="max-w-xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-orange">
            <span className="h-px w-6 bg-orange" />
            Photo Gallery
            <span className="h-px w-6 bg-orange" />
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-semibold text-ink">
            Postcards from the Himalayas
          </h2>
          <p className="mt-4 text-ink/60">
            A glimpse into the moments that wait for you on the trail.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {gallery.map((item) => (
            <div
              key={item.region}
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <Image
                src={item.image}
                alt={item.region}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(min-width: 640px) 33vw, 50vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <circle cx="9" cy="10" r="2" />
                    <path d="M21 15l-5-4-4 3-3-2-3 2" />
                  </svg>
                  {item.region}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
