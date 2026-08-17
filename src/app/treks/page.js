import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import TrekCard from "@/components/TrekCard";
import { treks } from "@/data/treks";
import { site } from "@/data/site";
import { CONTAINER } from "@/lib/layout";

export const metadata = {
  title: `Treks — ${site.name}`,
  description: "Browse all guided Himalayan treks and fixed departures.",
};

export default async function TreksPage({ searchParams }) {
  const { q } = await searchParams;
  const query = q?.trim().toLowerCase();

  const results = query
    ? treks.filter((trek) =>
        [trek.name, trek.region, trek.summary].some((field) =>
          field.toLowerCase().includes(query)
        )
      )
    : treks;

  return (
    <>
      <PageHeader
        eyebrow="All Treks"
        title="Guided Himalayan Treks"
        description="From short ridge walks to the legendary trail to Everest — every route is led by licensed local guides."
      />
      <section className="bg-cream">
        <div className={`${CONTAINER} py-14`}>
          {query && (
            <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-ink/60">
              <span>
                {results.length} result{results.length === 1 ? "" : "s"} for &ldquo;{q}&rdquo;
              </span>
              <Link href="/treks" className="text-blue hover:text-blue-dark font-medium">
                Clear search
              </Link>
            </div>
          )}

          {results.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {results.map((trek, i) => (
                <TrekCard key={trek.slug} trek={trek} index={i} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl bg-white p-10 text-center ring-1 ring-ink/5">
              <p className="text-ink/70">
                No treks matched &ldquo;{q}&rdquo;. Try a different region or trek name.
              </p>
              <Link href="/treks" className="mt-3 inline-block text-blue hover:text-blue-dark font-medium">
                View all treks
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
