import Image from "next/image";
import Link from "next/link";
import { whatsappLink } from "@/data/site";

const difficultyColor = {
  Easy: "#4ADE80",
  "Easy–Moderate": "#38BDF8",
  Moderate: "#0EA5E9",
  Challenging: "#E2543D",
};

export default function TrekCard({ trek, index }) {
  return (
    <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-ink">
      <Link href={`/treks/${trek.slug}`} className="absolute inset-0 z-0" tabIndex={-1} aria-hidden="true">
        <Image
          src={trek.image}
          alt={trek.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10 transition-opacity group-hover:from-ink/95" />
      </Link>

      {typeof index === "number" && (
        <span className="pointer-events-none absolute right-4 top-4 z-10 font-serif text-3xl font-semibold text-white/25">
          {String(index + 1).padStart(2, "0")}
        </span>
      )}

      <div className="pointer-events-none absolute left-4 top-4 z-10 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-ink backdrop-blur">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 21s-7-6.1-7-11.5A7 7 0 0112 2a7 7 0 017 7.5C19 14.9 12 21 12 21z" />
          <circle cx="12" cy="9.5" r="2.5" />
        </svg>
        {trek.region}
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 p-5">
        <Link href={`/treks/${trek.slug}`} className="block">
          <h3 className="font-serif text-xl font-semibold text-white transition-colors group-hover:text-blue">
            {trek.name}
          </h3>
        </Link>

        <div className="mt-2 flex items-center gap-3 text-xs text-white/70">
          <span className="inline-flex items-center gap-1.5">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {trek.duration} days
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: difficultyColor[trek.difficulty] ?? "#0EA5E9" }}
            />
            {trek.difficulty}
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
          <div>
            <div className="text-[10px] uppercase tracking-wide text-white/45">From</div>
            <div className="font-serif text-lg font-semibold text-white">
              ₹{trek.price.toLocaleString("en-IN")}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href={`/treks/${trek.slug}`}
              aria-label={`View details for ${trek.name}`}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <a
              href={whatsappLink(`Hi, I'd like to book the ${trek.name}.`)}
              target="_blank"
              rel="noreferrer"
              aria-label={`Book ${trek.name} via WhatsApp`}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-whatsapp text-white transition-transform hover:scale-105"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M20.52 3.449C12.831-3.984.106 1.407.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.44 5.71 1.44h.005c9.5 0 15.442-8.657 12.83-16.339zm-3.99 15.351a10.68 10.68 0 01-5.435 1.494h-.004a10.9 10.9 0 01-5.549-1.513l-.397-.235-3.766.982 1.005-3.671-.259-.379a10.09 10.09 0 01-1.65-5.616c.005-6.126 5.043-11.096 11.245-11.096 3.007 0 5.831 1.174 7.943 3.294 2.11 2.121 3.271 4.94 3.269 7.943-.003 6.126-5.041 11.096-11.402 11.797z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
