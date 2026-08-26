"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { footerLinks, site } from "@/data/site";
import { treks } from "@/data/treks";
import { experiences } from "@/data/experiences";
import { CONTAINER } from "@/lib/layout";

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" className="shrink-0">
      <defs>
        <radialGradient id="ig-gradient" cx="30%" cy="107%" r="150%">
          <stop offset="0" stopColor="#fdf497" />
          <stop offset="0.05" stopColor="#fdf497" />
          <stop offset="0.45" stopColor="#fd5949" />
          <stop offset="0.6" stopColor="#d6249f" />
          <stop offset="0.9" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect x="1" y="1" width="22" height="22" rx="6" fill="url(#ig-gradient)" />
      <rect x="6" y="6" width="12" height="12" rx="4" fill="none" stroke="#fff" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.2" fill="none" stroke="#fff" strokeWidth="1.6" />
      <circle cx="17" cy="7" r="1" fill="#fff" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <path d="M12 21s-7-6.1-7-11.5A7 7 0 0112 2a7 7 0 017 7.5C19 14.9 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

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
    <footer className="bg-ink text-white">
      <div>
        <div className={`${CONTAINER} py-16 flex flex-col gap-12 sm:grid sm:grid-cols-2 lg:grid-cols-5 lg:items-start`}>
          <div className="order-1">
            <div className="flex items-center text-white">
              <span className="flex h-14 shrink-0 items-center justify-center rounded-xl bg-white px-2.5 py-1.5">
                <Image
                  src={site.logo}
                  alt={site.name}
                  width={496}
                  height={276}
                  className="h-full w-auto object-contain"
                />
              </span>
            </div>
            <p className="mt-4 text-base leading-relaxed text-white">
              {site.description}
            </p>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-base font-medium text-white transition-colors hover:text-blue"
            >
              <InstagramIcon />
              Follow us on Instagram
            </a>
          </div>

          <div className="order-2">
            <h3 className="font-serif font-semibold text-white text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-base">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-blue transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/terms" className="hover:text-blue transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/cancellation-policy" className="hover:text-blue transition-colors">
                  Cancellation &amp; Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-blue transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="order-3">
            <h3 className="font-serif font-semibold text-white text-lg mb-4">Popular Treks</h3>
            <ul className="space-y-3 text-base">
              {treks.map((trek) => (
                <li key={trek.slug}>
                  <Link href={`/treks/${trek.slug}`} className="hover:text-blue transition-colors">
                    {trek.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-4">
            <h3 className="font-serif font-semibold text-white text-lg mb-4">Adventure Tours</h3>
            <ul className="space-y-3 text-base">
              {experiences.map((exp) => (
                <li key={exp.slug}>
                  <Link href={`/experiences/${exp.slug}`} className="hover:text-blue transition-colors">
                    {exp.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-6 sm:order-5">
            <h3 className="font-serif font-semibold text-white text-lg mb-4">Newsletter</h3>
            <p className="text-base text-white mb-4">
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
                  className="min-w-0 flex-1 rounded-full bg-white/10 px-4 py-2.5 text-base text-white placeholder:text-white outline-none focus:ring-2 focus:ring-blue"
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
          <div className="order-5 grid gap-12 sm:order-6 sm:col-span-2 sm:grid-cols-2 sm:pt-4 lg:col-span-5 lg:max-w-2xl">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-base font-semibold text-white">
              <LocationIcon />
              Bangalore Office
            </div>
            <div className="mt-2 text-white">
              Flat No. GF6, Malibu Homes-1,
              <br />
              Green Garden Layout, Kundalahalli Gate,
              <br />
              Bangalore – 560037, Karnataka, India
            </div>
            <div className="mt-3 flex flex-col gap-1">
              <a href="tel:+919643032601" className="flex items-center gap-2 hover:text-blue transition-colors">
                <PhoneIcon />
                +91 96430 32601
              </a>
              <a href="tel:+918951349974" className="flex items-center gap-2 hover:text-blue transition-colors">
                <PhoneIcon />
                +91 89513 49974
              </a>
              <a href="mailto:hello@summitcalling.com" className="flex items-center gap-2 hover:text-blue transition-colors">
                <MailIcon />
                hello@summitcalling.com
              </a>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-base font-semibold text-white">
              <LocationIcon />
              Kanpur Office
            </div>
            <div className="mt-2 text-white">
              242 HIG, Ratanlal Nagar,
              <br />
              Kanpur – 208022, Uttar Pradesh, India
            </div>
            <div className="mt-3 flex flex-col gap-1">
              <a href="tel:+917459929391" className="flex items-center gap-2 hover:text-blue transition-colors">
                <PhoneIcon />
                +91 74599 29391
              </a>
              <a href="tel:+919559329391" className="flex items-center gap-2 hover:text-blue transition-colors">
                <PhoneIcon />
                +91 95593 29391
              </a>
              <a href="mailto:hello@summitcalling.com" className="flex items-center gap-2 hover:text-blue transition-colors">
                <MailIcon />
                hello@summitcalling.com
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className={`${CONTAINER} py-6 text-center text-sm text-white`}>
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
