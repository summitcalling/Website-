import { testimonials } from "@/data/testimonials";
import { CONTAINER } from "@/lib/layout";

function initials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

function QuoteIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor" className="text-orange/25">
      <path d="M9.5 7C6.5 8.2 5 10.4 5 13.2c0 2.1 1.4 3.6 3.2 3.6 1.7 0 2.9-1.2 2.9-2.8 0-1.5-1-2.5-2.4-2.6.3-1.4 1.4-2.6 3-3.3L9.5 7zm9 0c-3 1.2-4.5 3.4-4.5 6.2 0 2.1 1.4 3.6 3.2 3.6 1.7 0 2.9-1.2 2.9-2.8 0-1.5-1-2.5-2.4-2.6.3-1.4 1.4-2.6 3-3.3L18.5 7z" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-cream border-y border-ink/5">
      <div className={`${CONTAINER} py-20`}>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-orange">
            <span className="h-px w-6 bg-orange" />
            Trekker Stories
            <span className="h-px w-6 bg-orange" />
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-semibold text-ink">
            What Our Trekkers Say
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-ink/5"
            >
              <QuoteIcon />
              <p className="mt-4 flex-1 font-serif text-lg leading-snug text-ink">
                “{t.quote}”
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-ink/5 pt-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange/15 text-sm font-semibold text-orange">
                  {initials(t.name)}
                </span>
                <div className="text-left">
                  <div className="text-sm font-semibold text-ink">{t.name}</div>
                  <div className="text-xs text-ink/50">
                    {t.country} · {t.trek}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
