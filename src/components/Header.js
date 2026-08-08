"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site, telLink, whatsappLink } from "@/data/site";

const HEADER_CONTAINER = "w-full px-5 sm:px-8 lg:px-12";

const navLinkClass = (active) =>
  `group relative py-1 text-base font-semibold uppercase tracking-wide text-black transition-colors ${
    active ? "" : "hover:text-blue"
  }`;

function NavUnderline({ active }) {
  return (
    <span
      className={`absolute left-0 -bottom-0.5 h-[2px] rounded-full bg-blue transition-all duration-300 ${
        active ? "w-full" : "w-0 group-hover:w-full"
      }`}
    />
  );
}

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
      <header className="sticky top-0 z-50 w-full border-b border-ink/10 bg-white shadow-sm">
        <div className={`${HEADER_CONTAINER} py-2 md:py-2`}>
          <div className="flex items-center justify-between md:hidden">
            <Link href="/" className="flex shrink-0 items-center" onClick={() => setMenuOpen(false)}>
              <Image
                src={site.logo}
                alt={site.name}
                width={496}
                height={276}
                priority
                className="h-20 w-auto object-contain"
              />
            </Link>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-ink/5 text-ink transition-colors"
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

          <div className="hidden md:flex md:items-center md:justify-between">
            <Link href="/" className="flex shrink-0 items-center" onClick={() => setMenuOpen(false)}>
              <Image
                src={site.logo}
                alt={site.name}
                width={496}
                height={276}
                priority
                className="h-16 w-auto object-contain"
              />
            </Link>

            <div className="flex items-center gap-6">
              <nav className="flex items-center gap-6">
                {navLinks.map((link, i) => (
                  <span key={link.href} className="flex items-center gap-6">
                    {i > 0 && <span className="text-ink/25">·</span>}
                    <Link href={link.href} className={navLinkClass(pathname === link.href)}>
                      {link.label}
                      <NavUnderline active={pathname === link.href} />
                    </Link>
                  </span>
                ))}
              </nav>
              <span className="h-6 w-px bg-ink/15" />
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-0.5 rounded-2xl border border-ink/15 bg-white/50 px-4 py-1.5 transition-colors hover:border-blue/40"
              >
                <span className="text-[11px] font-semibold uppercase tracking-wide text-ink/55">
                  Contact us
                </span>
                <span className="flex items-center gap-2 text-base font-semibold text-black">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-whatsapp">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.006-3.492c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.593-6.593 6.593zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.588-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.337-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                  </svg>
                  {site.phoneDisplay}
                </span>
              </a>
            </div>
          </div>
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
          <div className="mt-10 flex flex-col gap-2">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-base font-semibold text-ink transition-colors hover:text-blue"
            >
              <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" className="text-whatsapp">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.006-3.492c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.593-6.593 6.593zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.588-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.337-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
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
