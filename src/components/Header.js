"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site, telLink, whatsappLink } from "@/data/site";
import { CONTAINER } from "@/lib/layout";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 inset-x-0 z-50 w-full border-b border-ink/10 bg-white/95 backdrop-blur-sm">
        <div className={`${CONTAINER} flex items-center justify-between py-2.5`}>
          <Link href="/" className="flex shrink-0 items-center" onClick={() => setMenuOpen(false)}>
            <Image
              src={site.logo}
              alt={site.name}
              width={220}
              height={220}
              priority
              className="h-16 w-16 object-contain sm:h-20 sm:w-20"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative pb-1 text-base font-medium transition-colors ${
                    active ? "text-blue" : "text-ink/70 hover:text-blue"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute left-0 right-0 bottom-0 h-[2px] rounded-full bg-blue" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/contact"
              className="text-base font-medium text-ink/70 transition-colors hover:text-blue"
            >
              Contact
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp/10 px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-whatsapp/20"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366">
                <path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2z" />
              </svg>
              {site.phoneDisplay}
            </a>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-ink/5 text-ink md:hidden"
          >
            {menuOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-white transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col justify-center px-8">
          <nav className="flex flex-col gap-2">
            {[...navLinks, { href: "/contact", label: "Contact" }].map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  transitionDelay: menuOpen ? `${i * 40}ms` : "0ms",
                }}
                className={`font-serif text-4xl font-semibold text-ink transition-all duration-300 hover:text-blue ${
                  menuOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-10 flex flex-col gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-sm font-semibold text-white"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2z" />
              </svg>
              {site.phoneDisplay}
            </a>
            <a href={telLink()} className="text-sm font-medium text-ink/60">
              Or call us directly
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
