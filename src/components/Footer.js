"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { footerLinks, site, telLink, whatsappLink } from "@/data/site";
import { CONTAINER } from "@/lib/layout";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  }

  return (
    <footer className="bg-ink text-white/80">
      <div className={`${CONTAINER} py-16 grid gap-12 md:grid-cols-4`}>
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 text-white">
            <span className="flex h-14 shrink-0 items-center justify-center rounded-xl bg-white px-2.5 py-1.5">
              <Image
                src={site.logo}
                alt={site.name}
                width={496}
                height={276}
                className="h-full w-auto object-contain"
              />
            </span>
            <span className="font-serif font-semibold text-xl">{site.name}</span>
          </div>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            {site.description}
          </p>
        </div>

        <div>
          <h3 className="font-serif text-white text-lg mb-4">Explore</h3>
          <ul className="space-y-3 text-base">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-blue transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-white text-lg mb-4">Contact</h3>
          <ul className="space-y-3 text-base">
            <li>
              <a href={telLink()} className="hover:text-blue transition-colors">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue transition-colors"
              >
                WhatsApp 24/7
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-blue transition-colors">
                {site.email}
              </a>
            </li>
            <li className="text-white/60">{site.address}</li>
            <li className="pt-2">
              <div className="text-sm font-semibold text-white">Bangalore Office</div>
              <div className="mt-1 text-white/60">
                Flat No: GF6, Malibu Homes-1, Green Garden Layout, Kundalahalli Gate,
                Bangalore-560037
              </div>
              <div className="mt-2 flex flex-col gap-1">
                <a href="tel:+919643032601" className="hover:text-blue transition-colors">
                  +91 96430 32601
                </a>
                <a href="tel:+918951349974" className="hover:text-blue transition-colors">
                  +91 89513 49974
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-white text-lg mb-4">Newsletter</h3>
          <p className="text-base text-white/60 mb-4">
            Trek tips, fresh departures, occasional inspiration.
          </p>
          {subscribed ? (
            <p className="text-base text-blue">Thanks — you&apos;re on the list!</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="min-w-0 flex-1 rounded-full bg-white/10 px-4 py-2.5 text-base text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-blue"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue text-white hover:bg-blue-dark transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 12h16M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className={`${CONTAINER} py-6 flex flex-wrap items-center justify-between gap-3 text-sm text-white/40`}>
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/terms" className="hover:text-blue transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/cancellation-policy" className="hover:text-blue transition-colors">
              Cancellation &amp; Refund Policy
            </Link>
            <Link href="/privacy-policy" className="hover:text-blue transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
