import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { departures } from "@/data/departures";
import { getTrekBySlug } from "@/data/treks";
import { site, whatsappLink } from "@/data/site";
import { CONTAINER } from "@/lib/layout";

export const metadata = {
  title: `Fixed Departures — ${site.name}`,
  description: "Guaranteed group departure dates for every trek in 2026.",
};

export default function FixedDeparturesPage() {
  const sorted = [...departures].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <>
      <PageHeader
        eyebrow="2026 Calendar"
        title="Fixed Departures"
        description="Guaranteed group dates across every trek — no minimum headcount, no waiting."
      />
      <section className="bg-cream">
        <div className={`${CONTAINER} py-14`}>
          <div className="overflow-x-auto rounded-2xl bg-white ring-1 ring-ink/5">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="border-b border-ink/10 text-xs uppercase tracking-wide text-ink/45">
                  <th className="px-5 py-4 font-medium">Trek</th>
                  <th className="px-5 py-4 font-medium">Departure Date</th>
                  <th className="px-5 py-4 font-medium">Status</th>
                  <th className="px-5 py-4 font-medium text-right">Book</th>
                </tr>
              </thead>
              <tbody>
                {sorted.map((d) => {
                  const trek = getTrekBySlug(d.trekSlug);
                  if (!trek) return null;
                  return (
                    <tr key={`${d.trekSlug}-${d.date}`} className="border-b border-ink/5 last:border-0">
                      <td className="px-5 py-4">
                        <Link
                          href={`/treks/${trek.slug}`}
                          className="font-medium text-ink hover:text-orange transition-colors"
                        >
                          {trek.name}
                        </Link>
                        <div className="text-xs text-ink/45">{trek.region}</div>
                      </td>
                      <td className="px-5 py-4 text-ink/80">
                        {new Date(d.date).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </td>
                      <td className="px-5 py-4">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
                            d.status === "Filling Fast"
                              ? "bg-orange/10 text-orange"
                              : "bg-whatsapp/10 text-whatsapp"
                          }`}
                        >
                          {d.status} · {d.seatsLeft} seats
                        </span>
                      </td>
                      <td className="px-5 py-4 text-right">
                        <a
                          href={whatsappLink(
                            `Hi, I'd like to book the ${trek.name} departing ${d.date}.`
                          )}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-whatsapp hover:text-whatsapp/80"
                        >
                          WhatsApp
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
