import { testimonials } from "@/data/testimonials";
import { CONTAINER } from "@/lib/layout";

function initials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

function Stars({ count }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < count ? "#0EA5E9" : "none"}
          stroke={i < count ? "#0EA5E9" : "currentColor"}
          strokeWidth="1.5"
          className={i >= count ? "text-ink/15" : ""}
        >
          <path d="M12 3l2.6 5.6 6 .7-4.4 4.2 1.1 6-5.3-3-5.3 3 1.1-6-4.4-4.2 6-.7z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }) {
  return (
    <div className="flex h-[280px] w-[300px] shrink-0 flex-col rounded-2xl bg-cream/60 p-6 ring-1 ring-ink/5 sm:w-[340px]">
      <Stars count={t.rating} />
      <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/70 sm:text-base line-clamp-5">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="mt-5 flex items-center gap-3 border-t border-ink/10 pt-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue to-sky text-sm font-semibold text-white">
          {initials(t.name)}
        </span>
        <div>
          <div className="text-sm font-semibold text-ink">{t.name}</div>
          <div className="text-xs text-ink/45">
            {t.country} · {t.trek}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const row1 = [...testimonials, ...testimonials];
  const row2 = [...testimonials].reverse();
  const row2Loop = [...row2, ...row2];

  return (
    <section className="relative overflow-hidden bg-white border-t border-ink/5">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-sky/10 blur-3xl" />

      <div className={`relative ${CONTAINER} pt-16`}>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue">
            <span className="h-px w-6 bg-blue" />
            Trekker Stories
            <span className="h-px w-6 bg-blue" />
          </span>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl font-semibold uppercase tracking-wide text-ink">
            What Our Trekkers Say
          </h2>
        </div>
      </div>

      <div className="group relative mt-12 space-y-5 pb-16">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-32" />

        <div className="flex w-max gap-5 animate-[marquee-left_45s_linear_infinite] group-hover:[animation-play-state:paused]">
          {row1.map((t, i) => (
            <TestimonialCard key={`r1-${i}`} t={t} />
          ))}
        </div>
        <div className="flex w-max gap-5 animate-[marquee-right_45s_linear_infinite] group-hover:[animation-play-state:paused]">
          {row2Loop.map((t, i) => (
            <TestimonialCard key={`r2-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
