"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site, whatsappLink } from "@/data/site";
import MountainMark from "@/components/MountainMark";

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
      <header className="fixed top-5 inset-x-4 sm:inset-x-6 z-50 flex justify-center">
        <div className="flex w-full max-w-3xl items-center justify-between rounded-full border border-white/10 bg-ink/80 py-3.5 pl-5 pr-2 shadow-xl shadow-ink/20 backdrop-blur-md sm:pl-6">
          <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
            <MountainMark className="text-orange shrink-0" />
            <span className="font-serif text-xl font-semibold leading-none tracking-tight text-white">
              {site.name}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-base font-medium transition-colors ${
                    active ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute left-3.5 right-3.5 bottom-0 h-[2px] rounded-full bg-orange" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-orange px-4 py-2 text-base font-semibold text-white transition-colors hover:bg-orange-dark"
            >
              Book a Trek
            </a>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white"
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
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-ink transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col justify-center px-8">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  transitionDelay: menuOpen ? `${i * 40}ms` : "0ms",
                }}
                className={`font-serif text-4xl font-semibold text-white/90 transition-all duration-300 hover:text-orange ${
                  menuOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-orange px-6 py-3.5 text-sm font-semibold text-white"
          >
            Book a Trek on WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
