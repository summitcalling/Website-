import Image from "next/image";
import Link from "next/link";
import { whatsappLink } from "@/data/site";
import { CONTAINER } from "@/lib/layout";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-ink py-24">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Sunset_in_himalaya.jpg/1920px-Sunset_in_himalaya.jpg"
        alt="Sunset over the Himalayan range"
        fill
        className="object-cover opacity-30"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />

      <div className={`relative ${CONTAINER}`}>
        <div className="mx-auto flex max-w-2xl flex-col items-center rounded-3xl border border-white/10 bg-white/5 px-8 py-14 text-center backdrop-blur-sm sm:px-14">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue">
            <span className="h-px w-6 bg-blue" />
            Fixed Departures 2026
            <span className="h-px w-6 bg-blue" />
          </span>
          <h2 className="mt-4 font-serif text-2xl sm:text-3xl font-semibold uppercase tracking-wide text-white">
            Ready for your next adventure?
          </h2>
          <p className="mt-4 text-white/70">
            Start planning your dream trek today. Our team replies within an
            hour, 7 days a week.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/treks"
              className="inline-flex items-center gap-2 rounded-full bg-blue px-6 py-3.5 text-sm font-semibold text-white hover:bg-blue-dark transition-colors"
            >
              Browse Treks
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-sm font-semibold text-white hover:brightness-95 transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M20.52 3.449C12.831-3.984.106 1.407.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.44 5.71 1.44h.005c9.5 0 15.442-8.657 12.83-16.339zm-3.99 15.351a10.68 10.68 0 01-5.435 1.494h-.004a10.9 10.9 0 01-5.549-1.513l-.397-.235-3.766.982 1.005-3.671-.259-.379a10.09 10.09 0 01-1.65-5.616c.005-6.126 5.043-11.096 11.245-11.096 3.007 0 5.831 1.174 7.943 3.294 2.11 2.121 3.271 4.94 3.269 7.943-.003 6.126-5.041 11.096-11.402 11.797z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
