import { CONTAINER } from "@/lib/layout";

export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="bg-ink pt-14 pb-14">
      <div className={`${CONTAINER} flex flex-col items-center text-center`}>
        {eyebrow && (
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue">
            <span className="h-px w-6 bg-blue" />
            {eyebrow}
            <span className="h-px w-6 bg-blue" />
          </span>
        )}
        <h1 className="mt-3 font-serif text-3xl sm:text-4xl font-semibold text-white">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-xl text-white/60">{description}</p>
        )}
      </div>
    </section>
  );
}
