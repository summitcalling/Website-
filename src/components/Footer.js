"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, site, telLink, whatsappLink } from "@/data/site";
import MountainMark from "@/components/MountainMark";
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
          <div className="flex items-center gap-2.5 text-white">
            <MountainMark />
            <span className="font-serif font-semibold text-xl">{site.name}</span>
          </div>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            {site.description}
          </p>
        </div>

        <div>
          <h3 className="font-serif text-white text-lg mb-4">Explore</h3>
          <ul className="space-y-3 text-base">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-orange transition-colors">
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
              <a href={telLink()} className="hover:text-orange transition-colors">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="hover:text-orange transition-colors"
              >
                WhatsApp 24/7
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-orange transition-colors">
                {site.email}
              </a>
            </li>
            <li className="text-white/60">{site.address}</li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-white text-lg mb-4">Newsletter</h3>
          <p className="text-base text-white/60 mb-4">
            Trek tips, fresh departures, occasional inspiration.
          </p>
          {subscribed ? (
            <p className="text-base text-orange">Thanks — you&apos;re on the list!</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="min-w-0 flex-1 rounded-full bg-white/10 px-4 py-2.5 text-base text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-orange"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange text-white hover:bg-orange-dark transition-colors"
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
        <div className={`${CONTAINER} py-6 text-sm text-white/40`}>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
