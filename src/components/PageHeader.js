import { CONTAINER } from "@/lib/layout";

export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="bg-ink pt-14 pb-14">
      <div className={`${CONTAINER} flex flex-col items-center text-center`}>
        {eyebrow && (
          <span className="text-sm font-semibold uppercase tracking-widest text-blue">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-3 font-serif text-4xl sm:text-5xl text-white">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-xl text-white">{description}</p>
        )}
      </div>
    </section>
  );
}
