import PageHeader from "@/components/PageHeader";
import TrekCard from "@/components/TrekCard";
import { treks } from "@/data/treks";
import { site } from "@/data/site";
import { CONTAINER } from "@/lib/layout";

export const metadata = {
  title: `Treks — ${site.name}`,
  description: "Browse all guided Himalayan treks and fixed departures.",
};

export default function TreksPage() {
  return (
    <>
      <PageHeader
        eyebrow="All Treks"
        title="Guided Himalayan Treks"
        description="From short ridge walks to the legendary trail to Everest — every route is led by licensed local guides."
      />
      <section className="bg-cream">
        <div className={`${CONTAINER} py-14`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treks.map((trek, i) => (
              <TrekCard key={trek.slug} trek={trek} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
