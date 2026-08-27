import Image from "next/image";
import Link from "next/link";
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
      <section className="relative overflow-hidden bg-ink">
        <div className="relative aspect-[16/9] sm:aspect-[21/9]">
          <Image
            src="/fixed-departures-hero.jpg"
            alt="Trekkers crossing a suspension bridge with Ama Dablam in the background"
            fill
            priority
            className="object-cover opacity-60"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
          <div className={`absolute inset-0 flex flex-col justify-end ${CONTAINER} pb-10 sm:pb-16`}>
            <span className="text-xs font-semibold uppercase tracking-widest text-blue sm:text-base">
              2026 Calendar
            </span>
            <h1 className="mt-2 font-serif text-4xl font-semibold leading-none text-white sm:text-6xl md:text-7xl">
              Fixed Departures
            </h1>
          </div>
        </div>
      </section>
      <section className="bg-cream">
        <div className={`${CONTAINER} py-14`}>
          <div className="overflow-x-auto rounded-2xl bg-white ring-1 ring-ink/5">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="border-b border-ink/10 text-xs uppercase tracking-wide text-ink">
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
                          className="font-medium text-ink hover:text-blue transition-colors"
                        >
                          {trek.name}
                        </Link>
                        <div className="text-xs text-ink">{trek.region}</div>
                      </td>
                      <td className="px-5 py-4 text-ink">
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
                              ? "bg-blue/10 text-blue"
                              : "bg-whatsapp/10 text-whatsapp"
                          }`}
                        >
                          {d.status}
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
